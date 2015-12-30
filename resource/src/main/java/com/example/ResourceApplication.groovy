package com.example

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

import java.security.Principal

@SpringBootApplication
@RestController
@EnableRedisHttpSession
class ResourceApplication extends WebSecurityConfigurerAdapter {

    String message = 'Hello, World'
    def changes = []

    @RequestMapping(value = '/', method = RequestMethod.GET)
    def home() {
        [id: UUID.randomUUID().toString(), content: message]
    }

    @RequestMapping(value = '/', method = RequestMethod.POST)
    def update(@RequestBody Map<String, String> map, Principal principal) {
        if (map.content) {
            message = map.content
            changes << [timestamp: new Date(), user: principal.name, content: message]
            if (changes.size() > 10) {
                changes = changes[0..9]
            }
        }
        [id: UUID.randomUUID().toString(), content: message]
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic().disable()
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/**").hasRole("WRITER").anyRequest().authenticated()
    }

    static void main(String[] args) {
        SpringApplication.run ResourceApplication, args
    }
}
