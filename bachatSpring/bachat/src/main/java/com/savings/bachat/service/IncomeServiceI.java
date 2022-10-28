package com.savings.bachat.service;

import java.util.List;

import com.savings.bachat.entity.DateRangeSearchCriteria;
import com.savings.bachat.entity.Income;

public interface IncomeServiceI {
    Income income(Income data);

	List<Income> getIncomeBetweenDateRange(DateRangeSearchCriteria dateRange);
}
