import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaderDataComponent } from './vader-data.component';

describe('VaderDataComponent', () => {
  let component: VaderDataComponent;
  let fixture: ComponentFixture<VaderDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaderDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
