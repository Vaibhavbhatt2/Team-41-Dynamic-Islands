package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.details;
import com.example.demo.repo.bookdetailsRepo;
import com.example.demo.service.BookDetailsService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class BookDetailsController {

	@Autowired
	public BookDetailsService service;
	@Autowired
	public bookdetailsRepo bookrepo;
	@PostMapping("/home/bookdetails")
	public details createBook(@RequestBody details bookDetails) throws Exception {
		
		details ob=service.saveBook(bookDetails);
		return ob;
	}
	
	@GetMapping("/home/favorites/{username}")
	public List<details> getfavoritenames(@PathVariable String username){
		return service.findByNames(username);
	}
	
	// delete employee rest api
		@DeleteMapping("home/delete/{id}")
		public ResponseEntity<Map<String, Boolean>> deletebook(@PathVariable Long id){
			details details = bookrepo.findById(id);
					
			
			bookrepo.delete(details);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
