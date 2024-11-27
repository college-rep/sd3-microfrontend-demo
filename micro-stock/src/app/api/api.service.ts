import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'localhost:8090'; // Example API base URL
  constructor(private http: HttpClient) {}
  // Example: Get a list of items
  // getItems(): Observable<any> {
  getItems(): any {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  // Example: Post a new item
  // createItem(data: any): Observable<any> {
  post(url:string,payload:any): Observable<any> {
    return this.http.post(url, payload);
  }
  // get(url:string):Observable<any>{
  get(url:string):Observable<any>{
    return this.http.get(this.apiUrl);
  }
  async get2(url:string): Promise<any> {
    try {
      const data = await this.http.get(`${url}`).toPromise();
      return data; // Returns the response data
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

}
