import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assign-employees',
  templateUrl: './assign-employees.component.html',
  styleUrls: ['./assign-employees.component.css']
})
export class AssignEmployeesComponent implements OnInit {

  id: number;
  department: Department;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: DepartmentService) { }

  ngOnInit() {
    this.department = new Department();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getDepartment(this.id)
      .subscribe(data => {
        console.log(data)
        this.department = data;
      }, error => console.log(error));
  }

  updateDepartment() {
    this.employeeService.updateDepartment(this.id, this.department)
      .subscribe(data => console.log(data), error => console.log(error));
    this.department = new Department();
    this.gotoList();
  }

  onSubmit() {
    this.updateDepartment();    
  }

  gotoList() {
    this.router.navigate(['/departments']);
  }
}
