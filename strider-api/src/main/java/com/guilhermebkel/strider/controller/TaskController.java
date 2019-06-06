package com.guilhermebkel.strider.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.guilhermebkel.strider.model.Task;
import com.guilhermebkel.strider.repository.TaskRepository;

@RestController
@RequestMapping("/tasks")
public class TaskController {

		@Autowired
		private TaskRepository tasks;
	
		//GET ALL DATA METHOD
		@GetMapping
		public List<Task> getAllTasks() {
			return tasks.findAll();
		}
		
		//GET BY ID METHOD
		@GetMapping("/{id}")
		public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
			Optional<Task> task =  tasks.findById(id);
			
			if(task.isEmpty()){
				return ResponseEntity.notFound().build();
			}
			
			return ResponseEntity.ok(task.get());
		}
		
		// POST METHOD
		@PostMapping
		@ResponseStatus(HttpStatus.CREATED)
		public Task addNewTask(@Valid @RequestBody Task task){
			
			Optional<Task> existentTask = tasks.
					findByNameAndDescription(task.getName(), task.getDescription());
			
			if(existentTask.isPresent()){
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, 
						"This task already exists!");
			}
			
			return tasks.save(task);
		}
		
		// DELETE METHOD
		@DeleteMapping("/{id}")
		public List<Task> deleteTaskById(@PathVariable Long id){
			
			Optional<Task> existentId = tasks.findById(id);
			
			if(existentId.isPresent()){
				tasks.deleteById(id);
				return tasks.findAll();
			}
			
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, 
					"There's no element with this ID!");

		}
		/*
		// UPDATE METHOD
		@PutMapping("/{id}")
		public Task updateTaskById(@RequestBody Task newTask, @PathVariable Long id){
			
			
		}*/
		
		
}
