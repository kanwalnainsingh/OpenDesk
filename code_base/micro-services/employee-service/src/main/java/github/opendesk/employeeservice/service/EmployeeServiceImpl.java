package github.opendesk.employeeservice.service;

import github.opendesk.employeeservice.model.Booking;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

/**
 *
 */
@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    @Qualifier("getBookingServiceClient")
    private WebClient bookingServiceClient;
    private final Logger logger = LoggerFactory.getLogger(EmployeeServiceImpl.class);

    /**
     * @param employeeId
     * @return
     */
    @Override
    public Flux<Booking> getEmployeeBookingDetails(String employeeId) {
        //ToDo: Change the booking service API to fetch bookingdetails assiciated to employeeId
        return this.bookingServiceClient.get()
                .uri("/bookings/employee/{empId}/", employeeId)
                .retrieve()
                .bodyToFlux(Booking.class)
                .doOnError(err -> logger.info("Error in fetching booking details for employee", employeeId));
    }
}
