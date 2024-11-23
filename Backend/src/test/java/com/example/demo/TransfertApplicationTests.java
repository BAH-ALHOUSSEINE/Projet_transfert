package com.example.demo;

import java.util.Date;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.client.Client;
import com.example.demo.repository.ClientRepository;



@SpringBootTest
class TransfertApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@Autowired
	ClientRepository clientrepo;
	@Test
	 public void testCreateProduit() {
	//	Client client = new Client("moyero","alhouseine",0751057765,"housseineba1197@gmail.com",new Date(),"123","123");
		//clientrepo.save(client);
	}
	
}
