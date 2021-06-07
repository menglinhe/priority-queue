import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueVisualizationComponent } from './queue-visualization.component';

describe('QueueVisualizationComponent', () => {
  let component: QueueVisualizationComponent;
  let fixture: ComponentFixture<QueueVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueVisualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
