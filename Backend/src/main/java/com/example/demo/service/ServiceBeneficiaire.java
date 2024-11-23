package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.beneficiaire.Beneficiaire;
import com.example.demo.client.Client;
import com.example.demo.repository.BeneficiaireRepository;
@Service
public class ServiceBeneficiaire {
	
	@Autowired
	BeneficiaireRepository beneferepo;
	
	
	public Beneficiaire registerBeneficiaire(Beneficiaire benefe) {
		
		return beneferepo.save(benefe);
	}
	
	
	
	public List <Beneficiaire>  findByclientbeneficiaire(Client client){
		return  beneferepo.findByClient(client);
	}
	
	public  Beneficiaire  findByIdBeneficiaire(long id) {
	   return 	beneferepo.finddById(id);
	}

}
