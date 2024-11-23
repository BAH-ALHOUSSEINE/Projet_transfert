package com.example.demo.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.ServiceBeneficiaire;

import com.example.demo.beneficiaire.Beneficiaire;
import com.example.demo.client.Client;


@RestController
@CrossOrigin
@RequestMapping("/beneficiaire")
public class BeneficiaireController {
    
    @Autowired
   private ServiceBeneficiaire servicebenef;
    
    @PostMapping("/register")
    public Beneficiaire register(@RequestBody Beneficiaire benef) {
    	System.out.print("ssssssssss"+benef.getClient());
        return servicebenef.registerBeneficiaire(benef);
    }
    
    @PostMapping ("/benefbyclient")
    public  List <Beneficiaire> findbeneficiairebyclient(@RequestBody  Client id){
    	return  servicebenef.findByclientbeneficiaire(id);
    	
    	 
    }
    
    @PostMapping("/benefByid")
    public  Beneficiaire findByIdBeneficiaire(@RequestBody  long id) {
    	
    	return servicebenef.findByIdBeneficiaire(id);
    }
    
   
}