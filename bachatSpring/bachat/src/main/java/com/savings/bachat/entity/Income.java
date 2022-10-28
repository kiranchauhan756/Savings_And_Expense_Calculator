package com.savings.bachat.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table (name ="INCOME_DETAILS")
public class Income {
	
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO)
	private Long id;
	
	@Column(name="INCOME",nullable=false,precision=8,scale=2)
	private BigDecimal income;
	
	@Column(name = "INCOME_DATE", nullable = false)
	@Temporal(TemporalType.DATE)
	private Date incomeDate;
	
	@Column(name="SOURCE",nullable=false)
	private String sourceIncome;
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public BigDecimal getIncome() {
		return income;
	}

	public void setIncome(BigDecimal income) {
		this.income = income;
	}
	public String getSourceIncome() {
		return sourceIncome;
	}
	public Date getIncomeDate() {
		return incomeDate;
	}

	public void setIncomeDate(Date incomeDate) {
		this.incomeDate = incomeDate;
	}

	public void setSourceIncome(String sourceIncome) {
		this.sourceIncome = sourceIncome;
	}

	
	
	
}
