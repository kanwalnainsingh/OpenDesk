package github.opendesk.organisationservice.config;

import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.context.annotation.Bean;

public class RabbitMQSender {

    @Autowired
    private RabbitTemplate template;

    @Autowired
    private FanoutExchange fanout;

    @Bean
    public RabbitMQSender sender() {
        return new RabbitMQSender();
    }

    @Scheduled(fixedDelay = 1000, initialDelay = 500)
    public void send(String message) {
        this.template.convertAndSend(fanout.getName(), message);
        System.out.println(" Sent '" + message + "'");
    }
}
