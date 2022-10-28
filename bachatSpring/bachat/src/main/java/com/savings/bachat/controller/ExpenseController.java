package com.savings.bachat.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.savings.bachat.entity.DateRangeSearchCriteria;
import com.savings.bachat.entity.Expenses;
import com.savings.bachat.service.ExpenseServiceI;

@RestController
@RequestMapping("/expense")
public class ExpenseController {
	
	private ExpenseServiceI expenseService;
    
	public ExpenseController(ExpenseServiceI expenseService) {
		this.expenseService=expenseService;
	}
	
	@PostMapping("/")
	public ResponseEntity<Expenses> expense(@RequestBody Expenses data){
		Expenses expense1 =expenseService.saveExpense(data);
			return ResponseEntity.status(HttpStatus.CREATED).body(expense1);
	}
	
	
	@PostMapping("/list")
	public ResponseEntity<List<Expenses>> expense(@RequestBody DateRangeSearchCriteria dateRange){
		List<Expenses> listOfExpenses =expenseService.getExpensesBetweenDateRange(dateRange);
	    return ResponseEntity.status(HttpStatus.OK).body(listOfExpenses);
	}
	
}
