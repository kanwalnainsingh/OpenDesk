package github.opendesk.deskservice.client;

import github.opendesk.deskservice.model.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class BookingClient {

    @Autowired
    RestTemplate restTemplate;
    @Value("${client.api.booking-service}")
    String bookingServiceUrl;

    public ResponseEntity getBookings(){
        String resourceUrl = bookingServiceUrl + "/bookings";
        ResponseEntity<List<Booking>> response = restTemplate.getForEntity(resourceUrl,(Class) List.class);
        return response;
    }
}
