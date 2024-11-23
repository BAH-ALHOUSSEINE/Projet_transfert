package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.demo.client.Client;


	

	@Repository
	public interface ClientRepository extends  JpaRepository<Client,Long> {
		
          public  Client findByEmailClient(String email);
          
          public  Client findById(long id);
          
          
	}

