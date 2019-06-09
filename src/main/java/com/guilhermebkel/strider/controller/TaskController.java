package com.guilhermebkel.strider.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.guilhermebkel.strider.model.Task;
import com.guilhermebkel.strider.repository.TaskRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping
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
		public Task addTask(@RequestBody Task task){
			
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
		
		// UPDATE METHOD
		@PutMapping
		public Task updateTask(@RequestBody Task newTask){
			
			return tasks.save(newTask);
			
		}
		
		
}
