package com.employee_management.demo.controller;

import com.employee_management.demo.exception.ResourceNotFoundException;
import com.employee_management.demo.model.Department;
import com.employee_management.demo.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class DepartmentController {
    @Autowired
    private DepartmentRepository departmentRepository;

    @GetMapping("/departments")
    public List<Department> getAllDepartment() { return departmentRepository.findAll(); }

    @GetMapping("/departments/{id}")
    public ResponseEntity<Department> getDepartmentById(@PathVariable(value = "id") Long departmentId)
            throws ResourceNotFoundException {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Department not found for this id :: " + departmentId));
        return ResponseEntity.ok().body(department);
    }

    @PostMapping("/departments")
    public Department createEmployee(@Valid @RequestBody Department department) {
        return departmentRepository.save(department);
    }

    @PutMapping("/departments/{id}")
    public ResponseEntity<Department> updateDepartment(@PathVariable(value = "id") Long departmentId,
                                                   @Valid @RequestBody Department departmentDetails) throws ResourceNotFoundException {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Department not found for this id :: " + departmentId));

        department.setName(departmentDetails.getName());
        //employee.setLastName(employeeDetails.getLastName());
        //employee.setFirstName(employeeDetails.getFirstName());
        final Department updatedDepartment = departmentRepository.save(department);
        return ResponseEntity.ok(updatedDepartment);
    }

    /*@DeleteMapping("/departments/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long employeeId)
            throws ResourceNotFoundException {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    } */
}
