import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSituationComponent } from './search-situation.component';

describe('SearchSituationComponent', () => {
  let component: SearchSituationComponent;
  let fixture: ComponentFixture<SearchSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSituationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
