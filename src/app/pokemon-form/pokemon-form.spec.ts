import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonForm } from './pokemon-form';

describe('PokemonForm', () => {
  let component: PokemonForm;
  let fixture: ComponentFixture<PokemonForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
