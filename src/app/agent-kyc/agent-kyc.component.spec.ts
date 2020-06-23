import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentKycComponent } from './agent-kyc.component';

describe('AgentKycComponent', () => {
  let component: AgentKycComponent;
  let fixture: ComponentFixture<AgentKycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentKycComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
