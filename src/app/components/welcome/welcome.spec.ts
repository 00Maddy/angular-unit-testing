import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome } from './welcome';
import { Greeting } from '../../services/greeting';

describe('Welcome', () => {
  let component: Welcome;
  let fixture: ComponentFixture<Welcome>;
  let greetingService: jasmine.SpyObj<Greeting>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('Greeting', ['getGreeting']);
    await TestBed.configureTestingModule({
  imports: [Welcome],
  providers: [{ provide: Greeting, useValue: spy }]
}).compileComponents();


    fixture = TestBed.createComponent(Welcome);
    component = fixture.componentInstance;
    greetingService = TestBed.inject(Greeting) as jasmine.SpyObj<Greeting>;
    fixture.detectChanges();
  });

  it('should display greeting message from service', () => {
    greetingService.getGreeting.and.returnValue('Hello, Angular!');
    fixture.detectChanges(); // triggers ngOnInit
    expect(component.message).toBe('Hello, Angular!');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
