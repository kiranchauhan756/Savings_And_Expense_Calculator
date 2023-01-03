package com.savings.bachat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.savings.bachat.entity.SetGoal;

@Repository
public interface SetGoalRepository extends JpaRepository<SetGoal, String> {

}
