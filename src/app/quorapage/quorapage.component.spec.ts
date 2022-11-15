import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuorapageComponent } from './quorapage.component';

describe('QuorapageComponent', () => {
  let component: QuorapageComponent;
  let fixture: ComponentFixture<QuorapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuorapageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuorapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
