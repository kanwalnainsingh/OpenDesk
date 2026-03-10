# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OpenDesk is an open-source office desk booking and utilisation system. It consists of a React frontend and five Java/Spring Boot microservices, all containerised and deployed to Kubernetes.

## Commands

### Frontend (React)
```bash
cd code_base/web-ui
npm install
npm start          # Dev server at http://localhost:3000
npm run build      # Production build
npm test           # Run tests
```

### Backend Microservices (Java/Maven)
```bash
cd code_base/micro-services/<service-name>
mvn clean install                          # Build
mvn clean verify                           # Build + run tests
mvn -B clean package -DskipTests           # Package without tests
java -jar target/<service-name>-0.0.1-SNAPSHOT.jar  # Run
```

### Swagger UI (after starting a service locally)
- Organisation: `http://localhost:8084/api/organisation-service/swagger-ui.html`
- Desk: `http://localhost:8082/api/desk-service/swagger-ui.html`
- Employee: `http://localhost:8083/api/employee-service/swagger-ui.html`
- Booking: `http://localhost:8081/api/booking-service/swagger-ui.html`
- Authentication: `http://localhost:8085/swagger-ui.html`

## Architecture

### Services & Ports
| Service | Port | Responsibility |
|---|---|---|
| `booking-service` | 8081 | Desk reservations |
| `desk-service` | 8082 | Desk inventory per floor/site |
| `employee-service` | 8083 | Employee profiles & preferences |
| `organisation-service` | 8084 | Org/site/capacity management |
| `authentication-service` | 8085 | Auth/SSO (POC) |

### Backend Layer Pattern
Each microservice uses a consistent layered structure:
```
RestController → Service → Converter (DTO↔DAO) → Repository → DAO → Redis
```
Plus: `APIClient` (inter-service HTTP), `Job/Cron` (batch), `Config` (Kafka/Ribbon/RabbitMQ)

### Data & Messaging
- **Redis** — primary datastore for all services
- **Kafka** — async file processing: organisation-service enqueues desk import files; desk-service cron job consumes them
- **RabbitMQ** — alternative message broker (organisation-service)
- **Ribbon** — client-side load balancing for inter-service calls within Kubernetes
- **Spring Cloud Kubernetes** — service discovery

### Onboarding Data Flow
1. UI POSTs to organisation-service → saves to Redis, writes desk file to shared PVC (`desk-organisation-pvc`)
2. Kafka message triggers desk-service cron to process the file and populate desk data

### Frontend Structure
```
src/
├── app/
│   ├── components/    # Reusable UI pieces
│   ├── container/     # Feature containers (Sites, AddSite, Account, EmployeeList)
│   ├── pages/         # Route-level page components
│   ├── service/       # Axios API clients (OrganisationService, SiteService)
│   ├── HOC/           # Higher-order components
│   └── utils/
├── Asset/
└── router/
```

Key layout routing: `SetupBuilder` (first-time onboarding) vs `OrganisationBuilder` (existing org view).

### Technology Stack
- **Frontend:** React 16, React Router 5, Material-UI 4, Axios, Styled Components
- **Backend:** Spring Boot 2.x, Java 11 (auth-service uses Java 8), Lombok, Springdoc OpenAPI
- **Infrastructure:** Docker (multi-stage), Kubernetes, Okteto (cloud dev env), Nginx (frontend serving)

## Development Notes
- Lombok is used extensively in backend — IDE requires the Lombok plugin
- Services use `application.properties` for local config; Kubernetes ConfigMaps override in-cluster
- The shared PVC (`desk-organisation-pvc`) must exist for organisation-service desk file processing to work in K8s
- GitHub Actions CI runs on pushes to `main` — runs `mvn -B clean verify` per service
