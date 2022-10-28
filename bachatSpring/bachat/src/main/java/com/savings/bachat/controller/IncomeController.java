package com.savings.bachat.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.savings.bachat.entity.DateRangeSearchCriteria;
import com.savings.bachat.entity.Expenses;
import com.savings.bachat.entity.Income;
import com.savings.bachat.service.IncomeServiceI;

@RestController
@RequestMapping("/income")
public class IncomeController {
	private IncomeServiceI incomeService;
	
	public IncomeController(IncomeServiceI incomeService) {
		this.incomeService=incomeService;
	}
	
	@PostMapping("/") 
    public ResponseEntity<Income> income (@RequestBody Income data){
		Income income1=incomeService.income(data);
		return ResponseEntity.status(HttpStatus.CREATED).body(income1);
	}
	
	@PostMapping("/listIncome")
	public ResponseEntity<List<Income>> income(@RequestBody DateRangeSearchCriteria dateRange){
		List<Income> listOfIncome =incomeService.getIncomeBetweenDateRange(dateRange);
	    return ResponseEntity.status(HttpStatus.OK).body(listOfIncome);
	}

}
