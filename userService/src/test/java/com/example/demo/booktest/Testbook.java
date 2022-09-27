package com.example.demo.booktest;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.example.demo.model.Book;
import com.example.demo.service.BookService;

public class Testbook {
	private Book book;
	private BookService service;
	
	@BeforeEach
    public void setUp() {
		book=new Book();
		book.setName("sarada");
	}
	@AfterEach
    public void tearDown() {
    	book=null;
    }
	
	
	@Test
    public void testfetchbyName() throws Exception {
    	BookService service = mock(BookService.class);
        when(service.fetchUserByName("sarada")).thenReturn(book);
        Book dummy = service.fetchUserByName("sarada");
        assertNotNull(dummy);
    }
	
	
	@Test
    public void testfetchbynameandpassword() throws Exception {
    	BookService service = mock(BookService.class);
        when(service.fetchUserByNameAndPassword("satya", "11")).thenReturn(book);
        Book dummy = service.fetchUserByNameAndPassword("satya", "11");
        assertNotNull(dummy);
    }
}
