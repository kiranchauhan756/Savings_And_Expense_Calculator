package com.savings.bachat.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.savings.bachat.enums.SetGoalCategory;

@Entity
@Table(name = "SET_GOALS")
public class SetGoal {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Enumerated(EnumType.STRING)
	@Column(name = "goal", nullable = false)
	private SetGoalCategory setGoalCategory;

	@Column(name = "target", nullable = false, precision = 8, scale = 2)
	private BigDecimal target;

	public SetGoalCategory getSetGoalCategory() {
		return setGoalCategory;
	}

	public void setSetGoalCategory(SetGoalCategory setGoalCategory) {
		this.setGoalCategory = setGoalCategory;
	}

	public BigDecimal getTarget() {
		return target;
	}

	public void setTarget(BigDecimal target) {
		this.target = target;
	}
}
