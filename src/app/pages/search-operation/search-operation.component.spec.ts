import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOperationComponent } from './search-operation.component';

describe('SearchOperationComponent', () => {
  let component: SearchOperationComponent;
  let fixture: ComponentFixture<SearchOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
