import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokedataService } from './pokedata.service';
import { ActivatedRoute } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    SearchPipe,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
    
    ],
    
  providers: [PokedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
