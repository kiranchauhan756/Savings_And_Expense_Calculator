package com.savings.bachat.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.savings.bachat.entity.Expenses;
import com.savings.bachat.repository.ExpenseRepository;
import com.savings.bachat.request.DateRangeSearchCriteria;

@Service
public class ExpenseService implements ExpenseServiceI {

	private ExpenseRepository expenseRepository;

	public ExpenseService(ExpenseRepository expenseRepository) {
		this.expenseRepository = expenseRepository;
	}

	@Override
	public Expenses saveExpense(Expenses data) {
		return expenseRepository.save(data);
	}

	@Override
	public List<Expenses> getExpensesBetweenDateRange(DateRangeSearchCriteria dateRange) {
		return expenseRepository.findAllByExpenseDateGreaterThanEqualAndExpenseDateLessThanEqual(dateRange.getFromDate(), dateRange.getToDate());
	}

}
