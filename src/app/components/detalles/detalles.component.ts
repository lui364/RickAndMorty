import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/Interfaces/character.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  listCharacter:Observable<Character>;
  id:number;

  constructor(private route:ActivatedRoute,private characterService:CharacterService){}


  ngOnInit():void{
      this.getCharacterId();
  }
  getCharacterId(){
    this.route.queryParams.subscribe((res:ParamMap) =>{
      this.id = res['id']
      this.listCharacter = this.characterService.getCharacterId(this.id);
      console.log(this.listCharacter);
    })
  }
 
}
