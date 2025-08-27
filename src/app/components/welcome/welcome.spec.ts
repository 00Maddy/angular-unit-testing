import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Welcome } from './welcome';
import { Greeting } from '../../services/greeting';

describe('Welcome', () => {
  let component: Welcome;
  let fixture: ComponentFixture<Welcome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Welcome],          // Standalone component imported
      providers: [Greeting],       // ✅ Provide the service
    }).compileComponents();

    fixture = TestBed.createComponent(Welcome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display greeting message from service', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent)
      .toBe('Hello, Angular!');
  });
});
