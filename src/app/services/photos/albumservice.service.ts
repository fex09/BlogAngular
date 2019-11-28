import { Album } from './../../models/album';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumserviceService {

  private endpoint = 'https://jsonplaceholder.typicode.com';
  constructor(
    private http: HttpClient
  ) { }

  public getList(): Observable<any> {
    return this.http.get(this.endpoint + '/albums');
  }

  public add(album: Album): Observable<Album> {
    return this.http.post(this.endpoint + '/albums', album) as Observable<Album>;
  }

  public update(album: Album): Observable<Album> {
    return this.http.put(this.endpoint + '/albums/' + album.id, album) as Observable<Album>;
  }

  public delete(id: number): Observable<Album> {
    return this.http.delete(this.endpoint + '/albums/' + id) as Observable<Album>;
  }


}
