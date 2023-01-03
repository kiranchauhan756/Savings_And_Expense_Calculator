package com.savings.bachat.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.savings.bachat.entity.Expenses;
import com.savings.bachat.entity.SetGoal;
import com.savings.bachat.request.DateRangeSearchCriteria;
import com.savings.bachat.service.SetGoalServiceI;
import com.savings.bachat.service.SetGoalsService;

@RestController
@RequestMapping("/setGoals")
public class SetGoalController {
	private SetGoalServiceI setGoalServiceI;

	public SetGoalController(SetGoalServiceI setGoalServiceI) {
		this.setGoalServiceI = setGoalServiceI;
	}

	@PostMapping("/")
	public ResponseEntity<SetGoal> setGoal(@RequestBody SetGoal data) {
		SetGoal setGoal1 = setGoalServiceI.setGoal(data);
		return ResponseEntity.status(HttpStatus.CREATED).body(setGoal1);
	}

}
