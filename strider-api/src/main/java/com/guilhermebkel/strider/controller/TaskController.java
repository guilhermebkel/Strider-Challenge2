package com.guilhermebkel.strider.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guilhermebkel.strider.model.Task;
import com.guilhermebkel.strider.repository.TaskRepository;

@RestController
@RequestMapping("/tasks")
public class TaskController {

		@Autowired
		private TaskRepository tasks;
	
		@GetMapping
		public List<Task> get() {
			return tasks.findAll();
		}
}
