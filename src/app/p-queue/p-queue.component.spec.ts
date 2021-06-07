import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PQueueComponent } from './p-queue.component';

describe('PQueueComponent', () => {
  let component: PQueueComponent;
  let fixture: ComponentFixture<PQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
