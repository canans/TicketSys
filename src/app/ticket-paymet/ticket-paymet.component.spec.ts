import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPaymetComponent } from './ticket-paymet.component';

describe('TicketPaymetComponent', () => {
  let component: TicketPaymetComponent;
  let fixture: ComponentFixture<TicketPaymetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketPaymetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPaymetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
