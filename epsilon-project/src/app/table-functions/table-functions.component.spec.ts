import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFunctionsComponent } from './table-functions.component';

describe('TableFunctionsComponent', () => {
  let component: TableFunctionsComponent;
  let fixture: ComponentFixture<TableFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
