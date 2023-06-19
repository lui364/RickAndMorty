import { Component } from '@angular/core';
import { Character } from 'src/app/Interfaces/character.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listCharacter:Character[]=[];

  constructor(private characterServise:CharacterService){}

  ngOnInit():void{
    this.characterServise.getCharacter().subscribe((res:any) =>{
        const {results} = res;
        this.listCharacter = results;
    })
  }
}
