package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.beneficiaire.Beneficiaire;
import com.example.demo.client.Client;


public interface BeneficiaireRepository extends JpaRepository<Beneficiaire,Long> {
	
	
	@Query("select b from Beneficiaire  b  where b.client = :client")
	public List <Beneficiaire> findByClient(@Param("client") Client client);
	
	
	@Query("select b from Beneficiaire  b  where b.idBeneficiaire= :id")
	 public  Beneficiaire finddById(@Param("id") Long id);
}
