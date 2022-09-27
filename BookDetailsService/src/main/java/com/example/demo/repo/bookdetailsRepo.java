package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.details;

public interface bookdetailsRepo extends JpaRepository<details, Integer>{

	 public List<details> findAllByusername(String username);

	public details findById(Long id);

}
