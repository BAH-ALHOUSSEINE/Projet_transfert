package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.Serviceclient;
import com.example.demo.client.Client;

@RestController
@CrossOrigin
@RequestMapping("/client") // Optionnel: Pour organiser les routes sous un préfixe commun
public class ClientController {
    
    @Autowired
    private Serviceclient serviceclient;
    
    @PostMapping("/register")
    public Client register(@RequestBody Client client) {
        return serviceclient.register(client);
    }
    
    @PostMapping("/login")
    public Client login(@RequestBody Client client) {
    	System.out.println("Received client: " + client.getPasswordClient());
          return serviceclient.Login(client.getEmailClient(), client.getPasswordClient());
    }
    
    @PostMapping("/getclient")
    public  Client getclient(@RequestBody  long id) {
    	return serviceclient.findClientbyid(id);
    }
    
    
    
    
}

