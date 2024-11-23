package com.example.demo.transfert;

import com.example.demo.beneficiaire.Beneficiaire;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Transfert {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idTransfert;
	private String codeTransfert;
	private int sommeTransfert;
	private boolean etatTransfert;
	
	@ManyToOne
    @JoinColumn(name = "beneficiaire_id", referencedColumnName = "idBeneficiaire")
    private Beneficiaire benefTransfert;


	public Transfert(String codeTransfert, int sommeTransfert, boolean etatTransfert, Beneficiaire beneficiaire) {
		super();
		this.codeTransfert = codeTransfert;
		this.sommeTransfert = sommeTransfert;
		this.etatTransfert = etatTransfert;
		this. benefTransfert = beneficiaire;
	}

	public Transfert() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getIdTransfert() {
		return idTransfert;
	}

	public void setIdTransfert(Long idTransfert) {
		this.idTransfert = idTransfert;
	}

	public String getCodeTransfert() {
		return codeTransfert;
	}

	public void setCodeTransfert(String codeTransfert) {
		this.codeTransfert = codeTransfert;
	}

	public int getSommeTransfert() {
		return sommeTransfert;
	}

	public void setSommeTransfert(int sommeTransfert) {
		this.sommeTransfert = sommeTransfert;
	}

	public boolean isEtatTransfert() {
		return etatTransfert;
	}

	public void setEtatTransfert(boolean etatTransfert) {
		this.etatTransfert = etatTransfert;
	}

	public Beneficiaire getBeneficiaire() {
		return  benefTransfert;
	}

	public void setBeneficiaire(Beneficiaire beneficiaire) {
		this. benefTransfert = beneficiaire;
	}
	
	
	
	
	
	
	
	
	}
