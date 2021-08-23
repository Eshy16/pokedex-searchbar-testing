import { Component, OnInit } from '@angular/core';
import { PokedataService } from '../pokedata.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonId } from '../pokemonID';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  
  public pokemons: any;
  public pokemon: any = [];
  public sub: any;
  public query: string;
  public offset: number = 0;
  public limit: number = 20;

  constructor(
    private readonly poke_dataService: PokedataService,
    private router: Router,
   
  ) {}

 
  ngOnInit() {

    this.getPokemons();
    /*this.poke_dataService.getPokemons()
      .subscribe((response:any)=>{
        response.results.forEach(result => {
          this.poke_dataService.getMoreData(result.name)
          .subscribe((uniqResponse:any)=>{
            this.pokemon.push(uniqResponse);
            console.log(this.pokemon);
          
          });
        });
      });*/
    
}
getPokemons() {
  this.poke_dataService
    .getPokemon(this.offset, this.limit)
    .subscribe((data: Pokemon[]) => {
      this.pokemons = data;
      Object.keys(this.pokemons.results).map(key => {
        this.showPokemon(this.pokemons.results[key].name);
      });
    });
}

//types
getPrincipalType(list: any[]) {
  return list.filter(x => x.slot === 1)[0]?.type.name;
}

getType(pokemon: any): string {
  return this.poke_dataService.getType(pokemon);
}  
//get poke ids
 showPokemon(id: any) {
    this.poke_dataService
      .getPokemonId(id)
      .subscribe((data: PokemonId) => {
        const newPokemon = {
          id: data.id,
          name: data.name,
         imageFront: data.sprites['front_default'],
        };
        this.pokemon.push(newPokemon);
        this.pokemon.sort((array, order) => array.id - order.id);
      });
  }

 

}
