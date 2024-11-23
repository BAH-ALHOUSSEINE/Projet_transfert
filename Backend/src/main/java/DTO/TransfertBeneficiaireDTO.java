package DTO;

public class TransfertBeneficiaireDTO {
    private String codeTransfert;
    private int sommeTransfert;
    private boolean etatTransfert;
    private String nomBeneficiaire;
    private String prenomBeneficiaire;

    // Constructeurs, getters et setters

    public TransfertBeneficiaireDTO( String codeTransfert, int sommeTransfert, boolean etatTransfert, String nomBeneficiaire, String prenomBeneficiaire) {
      
        this.codeTransfert = codeTransfert;
        this.sommeTransfert = sommeTransfert;
        this.etatTransfert = etatTransfert;
        this.nomBeneficiaire = nomBeneficiaire;
        this.prenomBeneficiaire = prenomBeneficiaire;
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
    
    

    // Getters et Setters
}

