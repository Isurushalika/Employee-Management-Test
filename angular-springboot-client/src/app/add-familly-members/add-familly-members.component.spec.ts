import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFamillyMembersComponent } from './add-familly-members.component';

describe('AddFamillyMembersComponent', () => {
  let component: AddFamillyMembersComponent;
  let fixture: ComponentFixture<AddFamillyMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFamillyMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFamillyMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
