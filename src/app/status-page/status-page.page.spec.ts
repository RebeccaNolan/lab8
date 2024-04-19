import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusPagePage } from './status-page.page';

describe('StatusPagePage', () => {
  let component: StatusPagePage;
  let fixture: ComponentFixture<StatusPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
