package com.example.demo.beneficiaire;

import java.util.List;

import com.example.demo.client.Client;
import com.example.demo.transfert.Transfert;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Beneficiaire {
	
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idBeneficiaire;

	private String nomBeneficiaire;
	
	private String prenomBeneficiaire;
	
	private int telBeneficiaire;
	 
	
	private String  adresseBeneficiaire;
	
	@ManyToOne
    @JoinColumn(name = "client")
    private Client client;

	
	 @JsonIgnore
	@OneToMany(mappedBy = "benefTransfert")
    private List<Transfert> transfert;
	
	
	public Beneficiaire(Long idBeneficiaire, String nomBeneficiaire, String prenomBeneficiaire, int telBeneficiaire,
			String adresseBeneficiaire, Client clientid) {
		super();
		this.idBeneficiaire = idBeneficiaire;
		this.nomBeneficiaire = nomBeneficiaire;
		this.prenomBeneficiaire = prenomBeneficiaire;
		this.telBeneficiaire = telBeneficiaire;
		this.adresseBeneficiaire = adresseBeneficiaire;
		this.client = clientid;
	}

	
	public String getAdresseBeneficiaire() {
		return adresseBeneficiaire;
	}

	public void setAdresseBeneficiaire(String adresseBeneficiaire) {
		this.adresseBeneficiaire = adresseBeneficiaire;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public List<Transfert> getTransfert() {
		return transfert;
	}

	public void setTransfert(List<Transfert> transfert) {
		this.transfert = transfert;
	}
	public Beneficiaire() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getIdBeneficiaire() {
		return idBeneficiaire;
	}

	public void setIdBeneficiaire(Long idBeneficiaire) {
		this.idBeneficiaire = idBeneficiaire;
	}

	public String getNomBeneficiaire() {
		return nomBeneficiaire;
	}

	public void setNomBeneficiaire(String nomBeneficiaire) {
		this.nomBeneficiaire = nomBeneficiaire;
	}

	public String getPrenomBeneficiaire() {
		return prenomBeneficiaire;
	}

	public void setPrenomBeneficiaire(String prenomBeneficiaire) {
		this.prenomBeneficiaire = prenomBeneficiaire;
	}

	public int getTelBeneficiaire() {
		return telBeneficiaire;
	}

	public void setTelBeneficiaire(int telBeneficiaire) {
		this.telBeneficiaire = telBeneficiaire;
	}

	public String getAdresseBneficiaire() {
		return adresseBeneficiaire;
	}

	public void setAdresseBneficiaire(String adresseBneficiaire) {
		this.adresseBeneficiaire = adresseBneficiaire;
	}

	public Client getClientid() {
		return client;
	}

	public void setClientid(Client clientid) {
		this.client = clientid;
	}
	
	

}
