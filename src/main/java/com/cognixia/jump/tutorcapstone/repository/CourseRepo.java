package com.cognixia.jump.tutorcapstone.repository;

import com.cognixia.jump.tutorcapstone.model.Course;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepo extends JpaRepository <Course,Integer> {
	@Query("SELECT c FROM course c WHERE c.subject = 1?")
	public List<Course> findBySubject(String subject);
	@Query("SELECT c FROM course c WHERE c.user_id = 1?")
	public List<Course> findByUserId(Integer user_id);
}
