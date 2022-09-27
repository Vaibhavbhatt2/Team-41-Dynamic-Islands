package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Book;
import com.example.demo.repo.BookRepo;

@Service
public class BookService {

	@Autowired
	private BookRepo repo;
	public Book saveUser(Book user)
	{
		return repo.save(user);
	}
	
	public Book fetchUserByNameAndPassword(String name,String password)
	{
		return repo.findByNameAndPassword(name, password);
	}

	public Book fetchUserByPhone(String phone) {
		
		return repo.findByPhone(phone);
	}

	public Book fetchUserByEmail(String tempEmail) {
		return repo.findByEmail(tempEmail);
	}
	
	public Book fetchUserByPassword(String tempPassword) {
		return repo.findByPassword(tempPassword);
	}
   public Book fetchUserByName(String name) {
		
		return repo.findByName(name);
	}
}
