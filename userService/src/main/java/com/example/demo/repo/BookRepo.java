package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Book;

public interface BookRepo extends JpaRepository<Book, Integer>{

	public Book findByNameAndPassword(String name, String password);
    //public Book findByEmailAndPassword(String email, String password);

	public Book findByPhone(String phone);
	public Book findByEmail(String email);
	public Book findByPassword(String password);

	public Book findByName(String name);

}
