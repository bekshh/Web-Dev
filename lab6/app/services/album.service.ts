import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private api = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/albums`);
  }
  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/albums/${id}`);
  }
  updateAlbum(album: any): Observable<any> {
    return this.http.put<any>(`${this.api}/albums/${album.id}`, album);
  }
  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/albums/${id}`);
  }
  getAlbumPhotos(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/albums/${id}/photos`);
  }
}