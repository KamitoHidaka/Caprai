import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsChatComponent } from './whats-chat.component';

describe('WhatsChatComponent', () => {
  let component: WhatsChatComponent;
  let fixture: ComponentFixture<WhatsChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
