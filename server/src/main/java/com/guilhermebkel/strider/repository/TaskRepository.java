package com.guilhermebkel.strider.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guilhermebkel.strider.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long>{
	
	Optional<Task> findByNameAndDescription(String name, String description);

}
