import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosAddComponent } from './photos-add.component';

describe('PhotosAddComponent', () => {
  let component: PhotosAddComponent;
  let fixture: ComponentFixture<PhotosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
