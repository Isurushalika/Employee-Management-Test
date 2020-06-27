import { TestBed } from '@angular/core/testing';

import { FamillyMemberService } from './familly-member.service';

describe('FamillyMemberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FamillyMemberService = TestBed.get(FamillyMemberService);
    expect(service).toBeTruthy();
  });
});
