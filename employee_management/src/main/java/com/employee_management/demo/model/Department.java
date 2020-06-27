package com.employee_management.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "departments")
public class Department {

    private long id;
    private String DeptName;



    public Department() {

    }

    public Department(String DeptName) {
        this.DeptName = DeptName;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "dept_name", nullable = false)
    public String getName() {
        return DeptName;
    }
    public void setName(String DeptName) {
        this.DeptName = DeptName;
    }

    @Override
    public String toString() {
        return "Department [id=" + id + ", DeptName=" + DeptName
                + "]";
    }

}
