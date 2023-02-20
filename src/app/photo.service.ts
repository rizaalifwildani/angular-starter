import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhotoModel } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {}

  getPhoto(): Promise<PhotoModel[]> {
    return new Promise((resolve, reject) => {
      this.http.get<PhotoModel[]>("https://jsonplaceholder.typicode.com/photos").subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }
}
