import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http: HttpClient) { }

  public getApiPeople() {
    return this.http.get('https://swapi.co/api/people/').pipe(
      map( (dados: {results: []}) => dados.results)
    )
  }
}
