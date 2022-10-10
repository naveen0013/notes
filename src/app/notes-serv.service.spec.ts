import { TestBed } from '@angular/core/testing';

import { NotesServService } from './notes-serv.service';

describe('NotesServService', () => {
  let service: NotesServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
