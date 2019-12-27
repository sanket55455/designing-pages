import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProspectDetailsComponent } from './create-prospect-details.component';

describe('CreateProspectDetailsComponent', () => {
  let component: CreateProspectDetailsComponent;
  let fixture: ComponentFixture<CreateProspectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProspectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProspectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
