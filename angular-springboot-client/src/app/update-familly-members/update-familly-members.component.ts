import { Component, OnInit } from '@angular/core';
import { FamillyMember } from '../famillyMember';
import { FamillyMemberService } from '../familly-member.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-familly-members',
  templateUrl: './update-familly-members.component.html',
  styleUrls: ['./update-familly-members.component.css']
})
export class UpdateFamillyMembersComponent implements OnInit {

  id: number;
  famillyMember: FamillyMember;

  constructor(private route: ActivatedRoute,private router: Router,
    private famillyMemberService: FamillyMemberService) { }

  ngOnInit() {
    this.famillyMember = new FamillyMember();

    this.id = this.route.snapshot.params['id'];
    
    this.famillyMemberService.getFamillyMembers(this.id)
      .subscribe(data => {
        console.log(data)
        this.famillyMember = data;
      }, error => console.log(error));
  }

  updateFamillyMember() {
    this.famillyMemberService.updateFamillyMember(this.id, this.famillyMember)
      .subscribe(data => console.log(data), error => console.log(error));
    this.famillyMember = new FamillyMember();
    this.gotoList();
  }

  onSubmit() {
    this.updateFamillyMember();    
  }

  gotoList() {
    this.router.navigate(['/famillymembers']);
  }

}
