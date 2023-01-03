package com.savings.bachat.service;

import org.springframework.stereotype.Service;

import com.savings.bachat.entity.Expenses;
import com.savings.bachat.entity.SetGoal;
import com.savings.bachat.repository.SetGoalRepository;

@Service
public class SetGoalsService implements SetGoalServiceI {
	private SetGoalRepository setGoalRepository;

	@Override
	public SetGoal setGoal(SetGoal setGoal) {
		// TODO Auto-generated method stub
		return setGoalRepository.save(setGoal);
	}


	public SetGoalsService(SetGoalRepository setGoalRepository) {
		this.setGoalRepository = setGoalRepository;
	}

}
