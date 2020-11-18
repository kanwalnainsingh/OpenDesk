package github.opendesk.employeeservice.service;

import github.opendesk.employeeservice.model.Booking;
import reactor.core.publisher.Flux;

import java.io.Serializable;

/**
 *
 */
public interface EmployeeService extends Serializable {
    /**
     *
     * @param employeeId
     * @return
     */
    Flux<Booking> getEmployeeBookingDetails( String employeeId );
}
