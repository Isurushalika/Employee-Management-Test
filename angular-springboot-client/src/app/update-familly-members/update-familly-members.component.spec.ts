import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFamillyMembersComponent } from './update-familly-members.component';

describe('UpdateFamillyMembersComponent', () => {
  let component: UpdateFamillyMembersComponent;
  let fixture: ComponentFixture<UpdateFamillyMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFamillyMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFamillyMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
