package github.opendesk.employeeservice.rest;

import github.opendesk.employeeservice.model.Booking;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

/**
 *
 */
@RestController
@RequestMapping("v1/employee")
public class EmployeeController {

    private WebClient webClient;
    private final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    public EmployeeController(@Value("${booking.service.url}") String baseUrl) {
        this.webClient = WebClient.builder().baseUrl(baseUrl)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }

    /**
     * @param empId
     * @return
     */
    @GetMapping("/{empId}/booking")
    public Flux<Booking> getEmployeeBookingDetails(@PathVariable(value = "empId") String empId) {
        return this.webClient.get()
                .uri("/bookings/")
                .retrieve()
                .bodyToFlux(Booking.class)
                .doOnError(err -> logger.info("Error in fetching booking details for employee", empId));
    }
}
