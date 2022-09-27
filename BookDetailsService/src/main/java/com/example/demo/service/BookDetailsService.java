package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.details;
import com.example.demo.repo.bookdetailsRepo;

@Service
public class BookDetailsService {

	@Autowired
	private bookdetailsRepo bookrepo;
	
	public details saveBook(details bookDetails)
	{
		return bookrepo.save(bookDetails);
	}
	public List<details> findByNames(String username)
	{
		return bookrepo.findAllByusername(username);
		
	}
}
