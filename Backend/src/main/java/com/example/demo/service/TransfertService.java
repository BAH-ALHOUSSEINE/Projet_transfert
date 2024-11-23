package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.TransfertRepository;
import com.example.demo.transfert.Transfert;

import DTO.TransfertBeneficiaireDTO;

@Service
public class TransfertService {
	
	@Autowired
	TransfertRepository transfertrepository;
	
	public  Transfert saveTransfert(Transfert transfert) {
		return transfertrepository.save(transfert);	
		
	}
	
	public  Transfert   codecheck(String code) {
		
		return transfertrepository.findTransfertWithBeneficiaire(code);
	}
	
	public  int retirer(String id) {
		
		return transfertrepository.retirer(id);
	}
	
	

}
