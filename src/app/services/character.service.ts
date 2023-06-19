import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Character } from '../Interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private myAppUrL = environment.myApiUrl;
  constructor(private http:HttpClient) { }

  getCharacter(name = ""):Observable<Character>{
    return this.http.get<Character>(`${this.myAppUrL}/?name=${name}`);
  }

  getCharacterId(id:number):Observable<Character>{
    return this.http.get<Character>(`${this.myAppUrL}/${id}`);
  }
}
