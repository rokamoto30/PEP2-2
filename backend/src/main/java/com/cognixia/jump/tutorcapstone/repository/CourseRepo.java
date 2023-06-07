package com.cognixia.jump.tutorcapstone.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognixia.jump.tutorcapstone.model.Course;

@Repository
public interface CourseRepo extends JpaRepository <Course,Integer> {
	@Query(value = "SELECT c.id, c.availability, c.hourly, c.subject_id, c.user_id FROM course c LEFT JOIN subject s ON c.subject_id = s.id WHERE s.name = ?1", nativeQuery = true)
	public List<Course> findBySubject(String subject);
	@Query(value = "SELECT * FROM course c WHERE c.user_id =  ?1", nativeQuery = true)
	public List<Course> findByUserId(Integer user_id);

	@Query(value = "SELECT * FROM course c", nativeQuery = true)
	public List<Course> findAll();
	
	@Modifying
    @Transactional
    @Query(value = "TRUNCATE TABLE course", nativeQuery = true)
    void truncateTable();
	
	@Modifying
    @Transactional
    @Query(value="SET FOREIGN_KEY_CHECKS = ?1", nativeQuery=true)
	public void toggleFK(boolean toggle);
}
