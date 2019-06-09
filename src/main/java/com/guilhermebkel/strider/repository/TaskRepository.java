package com.guilhermebkel.strider.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guilhermebkel.strider.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long>{

}
