package github.opendesk.organisationservice.config;

import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.context.annotation.Bean;

public class RabbitMQSender {

    @Autowired
    private RabbitTemplate template;

    @Autowired
    private FanoutExchange fanout;

    public void send(String message) {
        template.convertAndSend(fanout.getName(), "", message);
        System.out.println(" Sent '" + message + "'");
    }
}
