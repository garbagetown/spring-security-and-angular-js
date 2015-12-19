package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.LinkedHashMap;
import java.util.Map;

@SpringBootApplication
@EnableRedisHttpSession
@EnableZuulProxy
@RestController
public class GatewayApplication extends WebSecurityConfigurerAdapter {

    @RequestMapping("/user")
    public Map<String, Object> user(Principal user) {
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("name", "user");
        return map;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .httpBasic()
        .and()
            .authorizeRequests().antMatchers("/index.html", "/login", "/").permitAll()
            .anyRequest().authenticated();
    }

    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }
}
