import { TestBed } from '@angular/core/testing';

import { UpdateFamillyMemberService } from './update-familly-member.service';

describe('UpdateFamillyMemberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateFamillyMemberService = TestBed.get(UpdateFamillyMemberService);
    expect(service).toBeTruthy();
  });
});
