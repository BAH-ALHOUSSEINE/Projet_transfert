package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.beneficiaire.Beneficiaire;
import com.example.demo.client.Client;
import com.example.demo.transfert.Transfert;

import DTO.TransfertBeneficiaireDTO;
import jakarta.persistence.Tuple;

public interface TransfertRepository extends JpaRepository<Transfert,Long> {

	@Query("SELECT t FROM Transfert t WHERE t.codeTransfert = :codeTransfert")
	public   Transfert findTransfertWithBeneficiaire(@Param("codeTransfert") String codeTransfert);
	
	@Modifying
	@Query("UPDATE Transfert t SET t.etatTransfert = true WHERE t.codeTransfert = :codeTransfert")
	int retirer(@Param("codeTransfert") String  codeTransfert);



	
	
}
