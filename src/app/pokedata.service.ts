import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from './pokemon';
import { PokemonId } from './pokemonID';

@Injectable({
  providedIn: 'root'
})
export class PokedataService {
  public pokeApi: any;

  constructor(
    private http: HttpClient
  ) {
    this.pokeApi = environment.pokemonUrl;
  }

  
  getPokemons(){
    return this.http.get(` https://pokeapi.co/api/v2/pokemon?limit=100`)
  }

  //Get more Pokemons data

  getMoreData(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  }

  getPokemon(id: number, limit: number): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.pokeApi}?offset=${id}&limit=${limit}`);
  }

  getPokemonId(id): Observable<PokemonId> {
    return this.http.get<PokemonId>(`${this.pokeApi}/${id}`);
  }

  getType(pokemon: any): string {
    return pokemon && pokemon.types.length > 0 ? pokemon.types[0].type.name : '';
  }
 
  
}