import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeitemComponent } from './episodeitem.component';

describe('EpisodeitemComponent', () => {
  let component: EpisodeitemComponent;
  let fixture: ComponentFixture<EpisodeitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodeitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
