package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoServiceApplication {

    private RedisTemplate<String, String> redisTemplate;

    DemoServiceApplication(RedisTemplate<String, String> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }


    @GetMapping("/hello")
    public String hello() {
        String reqCount = redisTemplate.opsForValue().get("req:count");
        if (reqCount == null) {
            reqCount = "1";
        } else {
            reqCount = String.valueOf(Integer.parseInt(reqCount) + 1);
        }
        redisTemplate.opsForValue().set("req:count", reqCount);
        return "Hello World! Request Count: " + reqCount;
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoServiceApplication.class, args);
    }

}
