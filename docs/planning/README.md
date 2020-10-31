# OpenDesk Design Documents

## Road Map 2020 

![N|Solid](images/roadmap_2020.jpg)

November: 
- The minimum requirement to kick start.
- Initial Architecture diagram.
- Finalise the technical stack.
- Code standards and follow best practices guide. https://bestpractices.coreinfrastructure.org/
- Hello Open Desk project structure and running code base.

December: 
- CD CI setup.
- Go live public url to access the application.

## Wireframe:
### Organization On boarding
![N|Solid](images/organization_onboarding_wireframe_v1.jpg)

### User Journey
![N|Solid](images/user_journey_wireframe_v1.jpg)

## High Architecture Diagram

![Solid](images/architecture_v1.jpg)

- Organisation Service: Microservice to provide api for all organisation related operations like registration, setting up sites.
- Desk Service: Microservice to provide api for desk management operation like adding desk to a site per floor, available and reserved capacity.
- Employee Service: Microservice for operation related to employee preference and bookings.
- Booking Service: Microservice will allow the employee to book or reserve desk.
- Authentication Service: Authentication and authorisation using SSO(Single Sign On).   
- UI: Front end layer that will communicate with microservices to fetch data and perform all operations from UI.

## Microservice Architecture 
![Solid](images/microservice_design_v1.jpg)
- RestController will expose api endpoint and talk to other service layers to perform operations and send response back to client.
- ValidationService purpose will be validate request and send response back to caller and return response back. 
- LogicService will have all the business and processing logic e.g. filtering.
- PresentationService is the transformation layer that will convert into desired presentation state or response. 
- RepositoryService will perform database operations i.e. CRUD
- APIClient will talk to other microservices/endpoints or send messages to queues for the decoupling.


## Frontend Architecture
![Solid](images/Organization_Architechture.jpg)
- Import Layout.js in App.js. Under Layout SetupBuilder.js & OrganizationBuilder.js present.
- Based on login (First time on-boarding / future login), Setup Builder / Organization Builder will come up as a landing page.
- On submit form POST call will happen in SetupBuilder.js, which will insert data for the organization in DB. 
- Import Organization.js in OrganizationBuilder.js, on update state after GET call Organization will upload with previously saved data. Site details will be displayed in Organization cards.
- Import Floor.js in Organization.js. On click on Organization card, Floor.js will upload. Floor.js will contain data of floor details for particular site.
- HOC / Auxiliary.js will wrap all the components.
- CSS files will be along with .js file. As per requirement .css file name can change to .module.css so that css will apply particularly on .js file.

## Code of Conduct 
- Please refer code of conduct at [Code of coduct](code-of-conduct.md)

## How to submit a pull request.
- Look at the existing issue or raise a new issue. Get clarity on the requirement.
- Refer [How to submit pull request ](https://jarv.is/notes/how-to-pull-request-fork-github/) to get details on how to raise a pull request.

## Note:
- We are about to kick start this project. We welcome pull requests. Feel free to comment or reach out to us. 
- We welcome suggestions from everyone tech or non tech.
- If you are new to open source this is the perfect place to start.
- Open files with extension .drawio can be opened in https://app.diagrams.net. When you raise a pull request don't forget to include JPG for file diagram  as well. 


## Acronym/glossary: 
Site: Each organisation has multiple office. Each office location refereed as a site. e.g. Headquarter is one site.
Need a kick start on how to start connect with me on linkedin. https://www.linkedin.com/in/kanwalnainsingh/ 
 
## Join slack below for discussions

[Slack](https://join.slack.com/t/opendeskworkspace/shared_invite/zt-igi3hzmb-gIHpAlM0JgbGXbydMwUfoA) 