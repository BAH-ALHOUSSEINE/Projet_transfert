package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.beneficiaire.Beneficiaire;
import com.example.demo.client.Client;
import com.example.demo.repository.ClientRepository;



@Service
public class Serviceclient {
	
	
	@Autowired
	ClientRepository clientrepo;
	
	public Client register(Client client) {
		return clientrepo.save(client);
	}
	
	public Client Login(String email, String password) {
        // Rechercher le client par email
		System.out.println("password  "+password);
    	System.out.println("email  "+email);
        Client client = clientrepo.findByEmailClient(email);

        // Vérifier si le client existe et si le mot de passe est correct
        if (client != null && client.getPasswordClient().equals(password)) {
            return client; // Authentification réussie
        } else {
             return null;
        }
    }
	
	public Client  findClientbyid(long id ) {
		 return clientrepo.findById(id);
	}

	
}
