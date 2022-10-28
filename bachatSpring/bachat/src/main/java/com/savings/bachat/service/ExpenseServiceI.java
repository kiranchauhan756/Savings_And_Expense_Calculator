package com.savings.bachat.service;

import java.util.List;

import com.savings.bachat.entity.DateRangeSearchCriteria;
import com.savings.bachat.entity.Expenses;

public interface ExpenseServiceI {
	
	Expenses saveExpense(Expenses data);

	List<Expenses> getExpensesBetweenDateRange(DateRangeSearchCriteria dateRange);
}