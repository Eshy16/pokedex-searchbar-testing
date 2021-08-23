import { Component, OnInit , Input } from '@angular/core';
import { PokedataService } from '../pokedata.service';
import { PokemonId } from '../pokemonID';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {


 
 public pokemons: Pokemon[];
  public pokemon: PokemonId;
  public sub: any;

  constructor(private readonly poke_dataService:PokedataService,
              private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.getPokemonId();
   
  }
  getPokemonId() {
    this.sub = this.route.params.subscribe(params => {
      this.poke_dataService
        .getPokemonId(params.id)
        .subscribe((data: PokemonId) => {
          this.pokemon = data;
        });
    });
  }

  showPokemon(id) {
    this.poke_dataService
      .getPokemonId(id)
      .subscribe((data: PokemonId) => {
        this.pokemon = data;
      });
  }

  getPrincipalType(list: any[]) {
    return list.filter(x => x.slot === 1)[0]?.type.name;
  }
 

}
