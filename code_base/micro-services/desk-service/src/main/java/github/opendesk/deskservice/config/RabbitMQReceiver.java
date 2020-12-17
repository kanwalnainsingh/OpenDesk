package github.opendesk.deskservice.config;
import org.springframework.amqp.core.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.util.StopWatch;

@Configuration
public class RabbitMQReceiver {

    @RabbitListener(queues = "#{autoDeleteQueue1.name}")
    public void receive1(String in) throws InterruptedException {
        receive(in, 1);
    }

    @RabbitListener(queues = "#{autoDeleteQueue2.name}")
    public void receive2(String in) throws InterruptedException {
        receive(in, 2);
    }

    public void receive(String in, int receiver) throws InterruptedException {
        StopWatch watch = new StopWatch();
        watch.start();
        System.out.println("instance " + receiver + " [x] Received '" + in + "'");
        watch.stop();
        System.out.println("instance " + receiver + " [x] Done in " + watch.getTotalTimeSeconds() + "s");
    }

}
