package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Book;
import com.example.demo.repo.BookRepo;
import com.example.demo.service.BookService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class usercontroller {

	@Autowired
	private BookService service;
	@Autowired
	private BookRepo repo;
	
	@PostMapping("/home")
	public Book createUser(@RequestBody Book user) throws Exception {
		String tempEmail = user.getEmail();
		String tempPassword = user.getPassword();
		String tempName=user.getName();
				if(tempEmail!=null && tempPassword!=null && tempName!=null)
				{
					Book userObj1=service.fetchUserByEmail(tempEmail);
					Book userObj2=service.fetchUserByPassword(tempPassword);
					Book userObj3=service.fetchUserByName(tempName);
					if(userObj1!=null || userObj2!=null || userObj3!=null)
					{
						throw new Exception("Email id, username and password already exist!!");
					}
				}
		Book userobj=null;
		userobj=service.saveUser(user);
		return userobj;	
    }
	
	@PostMapping("/home/login")
	public Book Userlogin(@RequestBody Book user) throws Exception {
		String tempName=user.getName();
		String tempPassword= user.getPassword();
		Book userObj=null;
		if(tempName!=null && tempPassword!=null)
		{
			userObj=service.fetchUserByNameAndPassword(tempName, tempPassword);	
		}
		if(userObj != null)
		{
		}
		else
		{
			throw new Exception("Bad credentials");
		}
		return userObj;
		
	}
	@PutMapping("/home/forgetPassword")
	public Book forgetPassword(@RequestBody Book user) throws Exception {
		String tempEmail=user.getEmail();
		String tempPassword= user.getPassword();
		Book userObj=null;
		
		if(tempEmail!=null && tempPassword!=null)
		{
			userObj=service.fetchUserByEmail(tempEmail);
		}
		
		if(userObj != null)
		{
			
			userObj.setPassword(tempPassword);
			//userObj.setEmail(user.getEmail());
			//userObj.setName(user.getName());
			//userObj.setPhone(user.getPhone());
			Book userobj=null;
			userobj=service.saveUser(userObj);
		}
		else
		{
			throw new Exception("Bad credentials for forget password");
		}
		return userObj;
	}
}
