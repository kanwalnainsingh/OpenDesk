package github.opendesk.organisationservice.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class BookingClient {

    @Autowired
    RestTemplate restTemplate;
    @Value("${client.api.booking-service}")
    String bookingServiceUrl;

    public String bookingServiceHealth(){
        String resourceUrl = bookingServiceUrl+"/actuator/health";
        ResponseEntity<String> response = restTemplate.getForEntity(resourceUrl, String.class);
        return  response.getBody();
    }
}
