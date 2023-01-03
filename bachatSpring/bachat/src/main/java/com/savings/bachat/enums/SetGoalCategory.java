package com.savings.bachat.enums;

public enum SetGoalCategory {
	JANUARY("jan"), FEBRUARY("feb"), MARCH("mar"), APRIL("apr"), MAY("may"), JUNE("jun"), JULY("jul"), AUGUST("aug"),
	SEPTEMBER("sep"), OCTOBER("oct"), NOVEMBOR("nov"), DECEMBER("dec");

	private String goal;

	private SetGoalCategory(String goal) {
		this.goal = goal;
	}

	public String getGoal() {
		return this.goal;
	}
}
