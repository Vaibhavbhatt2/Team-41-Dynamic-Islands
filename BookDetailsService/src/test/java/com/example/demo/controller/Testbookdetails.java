package com.example.demo.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.example.demo.model.details;
import com.example.demo.service.BookDetailsService;


public class Testbookdetails {
	private details detail;
	List<details>list;
    @BeforeEach
    public void setUp() {
    	detail=new details();
    	detail.setTitle("Batman.");
    	detail.setUsername("sarada");
    	detail.setPublish_date("2021");
    	detail.setPublish_year("2021");
    	detail.setLanguage("ita");
    	detail.setId(41);
    	detail.setPublisher("Independently Published");
        list=new ArrayList<>();
        list.add(detail);
    }
    
    @AfterEach
    public void tearDown() {
    	detail=null;
    }	
    @Test
    public void testgetfavoritenames() throws Exception {
		BookDetailsService service = mock(BookDetailsService.class);
		List<details> list=service.findByNames("sarada");
		assertNotNull(list);
		assertEquals(list.size(), 0);
    }
}
