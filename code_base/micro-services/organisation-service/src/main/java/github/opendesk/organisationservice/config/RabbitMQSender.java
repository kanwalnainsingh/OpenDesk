package github.opendesk.organisationservice.config;

import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;

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
