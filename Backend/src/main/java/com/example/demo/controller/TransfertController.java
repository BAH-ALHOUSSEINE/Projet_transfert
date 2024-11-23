package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.TransfertService;
import com.example.demo.transfert.Transfert;

import DTO.TransfertBeneficiaireDTO;
import jakarta.transaction.Transactional;

@RestController
@CrossOrigin
@RequestMapping("/transfert")
public class TransfertController {
	@Autowired
	TransfertService transfertservice;
	
	 @PostMapping("/addtransfert")
	 public   Transfert  Add_transfert (@RequestBody Transfert transfert) {
		 System.out.println("dddddddddddddd"+transfert.getBeneficiaire());
		 return   transfertservice.saveTransfert(transfert);
	 }
	 
	 @PostMapping("/codecheck")
	 public   Transfert  codecheck (@RequestBody String code) {
		 return   transfertservice.codecheck(code);
	 }
	 
	 @Transactional
	 @PutMapping("/retirer")
	 public int retirer(@RequestBody String id) {
	
	     return transfertservice.retirer(id);
	 }

	 
 
}
     