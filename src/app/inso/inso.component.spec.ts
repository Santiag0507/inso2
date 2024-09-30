import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsoComponent } from './inso.component';

describe('InsoComponent', () => {
  let component: InsoComponent;
  let fixture: ComponentFixture<InsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
