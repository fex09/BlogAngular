import { Photo } from '../../models/photo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private endpoint = 'https://jsonplaceholder.typicode.com';
  constructor(
    private http: HttpClient
  ) { }

  public getList(): Observable<any> {
    return this.http.get(this.endpoint + '/photos');
  }

  public add(photo: Photo): Observable<Photo> {
    return this.http.post(this.endpoint + '/photos', photo) as Observable<Photo>;
  }

  public update(photo: Photo): Observable<Photo> {
    return this.http.put(this.endpoint + '/photos', photo) as Observable<Photo>;
  }

  public delete(photo: Photo): Observable<Photo> {
    return this.http.delete(this.endpoint + '/photos') as Observable<Photo>;
  }
}
