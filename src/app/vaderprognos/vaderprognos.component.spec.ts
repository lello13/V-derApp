import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaderprognosComponent } from './vaderprognos.component';

describe('VaderprognosComponent', () => {
  let component: VaderprognosComponent;
  let fixture: ComponentFixture<VaderprognosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaderprognosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaderprognosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
