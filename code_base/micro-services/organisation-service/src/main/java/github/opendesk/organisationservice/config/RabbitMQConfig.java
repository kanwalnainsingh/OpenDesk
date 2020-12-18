package github.opendesk.organisationservice.config;

import org.springframework.amqp.core.FanoutExchange;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
public class RabbitMQConfig {
    /**
     * Rabbitmq
     */
    @Bean
    public FanoutExchange fanout() {
        return new FanoutExchange("fanout");
    }

    @Bean
    public RabbitMQSender rabbitMQSender() {
        return new RabbitMQSender();
    }
}
