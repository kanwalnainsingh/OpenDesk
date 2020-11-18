package github.opendesk.employeeservice.service;

import github.opendesk.employeeservice.model.Booking;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

/**
 *
 */
@Service
public class EmployeeServiceImpl implements EmployeeService {

    private WebClient webClient;
    private final Logger logger = LoggerFactory.getLogger(EmployeeServiceImpl.class);

    public EmployeeServiceImpl(@Value("${booking.service.url}") String baseUrl) {
        this.webClient = WebClient.builder().baseUrl(baseUrl)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }

    /**
     *
     * @param employeeId
     * @return
     */
    @Override
    public Flux<Booking> getEmployeeBookingDetails(String employeeId) {
        return this.webClient.get()
                .uri("/bookings/")
                .retrieve()
                .bodyToFlux(Booking.class)
                .doOnError(err -> logger.info("Error in fetching booking details for employee", employeeId));
    }
}
