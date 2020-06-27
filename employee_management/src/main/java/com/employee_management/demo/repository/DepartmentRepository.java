package com.employee_management.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee_management.demo.model.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
