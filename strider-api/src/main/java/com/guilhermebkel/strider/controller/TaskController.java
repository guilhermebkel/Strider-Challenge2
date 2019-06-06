package com.guilhermebkel.strider.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guilhermebkel.strider.model.Task;

@RestController
@RequestMapping("/tasks")
public class TaskController {

		@GetMapping
		public List<Task> get() {
			Task task = new Task();
			task.setId(1L);
			task.setDescription("Hello World");
			task.setName("Strider Challenge");
			
			return Arrays.asList(task);
		}
}
