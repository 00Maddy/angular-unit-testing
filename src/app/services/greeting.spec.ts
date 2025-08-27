import { TestBed } from '@angular/core/testing';

import { Greeting } from './greeting';

describe('Greeting', () => {
  let service: Greeting;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Greeting);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return greeting message', () => {
    expect(service.getGreeting('John')).toBe('Hello, John!');
  });
});

