import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Character } from 'src/app/Interfaces/character.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
listCharacter:Character[]=[];
name = "";

constructor(private characterService:CharacterService,private route:ActivatedRoute,private router:Router){}

ngOnInit():void{
  this.getCharacterName();
}

getCharacterName(){
  this.route.queryParams.subscribe((res:ParamMap) =>{
    this.name = res['u'];
    this.getCharacter();
  })
}


getCharacter(){
  this.characterService.getCharacter(this.name).subscribe((res:any) =>{
    const {results} = res;
    this.listCharacter = results;
  })
}

detalles(id:number){
    this.router.navigate(['/detalles'],
    {
      queryParams:{id:id}
    })
 }
}
