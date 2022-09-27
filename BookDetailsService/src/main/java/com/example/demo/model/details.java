package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bookdetails")
public class details {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "username")
	private String username;

	@Column(name = "title")
	private String title;
	
	@Column(name = "authorName")
	private String authorName;
	
	@Column(name = "publish_date")
	private String publish_date;
	
	@Column(name = "publish_year")
	private String publish_year;
	
	@Column(name = "publisher")
	private String publisher;
	
	@Column(name = "language")
	private String language;

	public details() {
		super();
	}

	public details(String username, String title, String authorName, String publish_date, String publish_year,
			String publisher, String language) {
		super();
		this.username = username;
		this.title = title;
		this.authorName = authorName;
		this.publish_date = publish_date;
		this.publish_year = publish_year;
		this.publisher = publisher;
		this.language = language;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public String getPublish_date() {
		return publish_date;
	}

	public void setPublish_date(String publish_date) {
		this.publish_date = publish_date;
	}

	public String getPublish_year() {
		return publish_year;
	}

	public void setPublish_year(String publish_year) {
		this.publish_year = publish_year;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}
}
