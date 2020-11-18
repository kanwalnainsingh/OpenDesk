package github.opendesk.employeeservice.rest;

import github.opendesk.employeeservice.model.Booking;
import github.opendesk.employeeservice.service.EmployeeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

/**
 *
 */
@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;
    private final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    /**
     * @param empId
     * @return
     */
    @GetMapping("/{empId}/bookings")
    public Flux<Booking> getEmployeeBookingDetails(@PathVariable(value = "empId") String empId) {
        return employeeService.getEmployeeBookingDetails(empId);
    }
}
