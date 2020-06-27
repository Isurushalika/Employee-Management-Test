import { Component, OnInit } from '@angular/core';
import { FamillyMember } from '../famillyMember';
import { FamillyMemberService } from '../familly-member.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-familly-members',
  templateUrl: './add-familly-members.component.html',
  styleUrls: ['./add-familly-members.component.css']
})
export class AddFamillyMembersComponent implements OnInit {

  famillyMember: FamillyMember = new FamillyMember();
  submitted = false;

  constructor(private famillyMemberService: FamillyMemberService,
    private router: Router) { }

  ngOnInit() {
  }

  newFamillyMember(): void {
    this.submitted = false;
    this.famillyMember = new FamillyMember();
  }

  save() {
    this.famillyMemberService.createFamillyMember(this.famillyMember)
      .subscribe(data => console.log(data), error => console.log(error));
    this.famillyMember = new FamillyMember();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/famillymembers']);
  }

}
