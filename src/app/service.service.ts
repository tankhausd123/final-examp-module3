import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AwesomeInterface} from './awesome-interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url = 'http://localhost:3000/awesomes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<AwesomeInterface> {
    return this.http.get<AwesomeInterface>(this.url);
  }

  findById(id: number): Observable<AwesomeInterface> {
    return this.http.get<AwesomeInterface>(this.url + '/' + id);
  }

  update(id: number, book: AwesomeInterface): Observable<any> {
    return this.http.put(this.url + '/' + id, book);
  }

  delete(id: number): Observable<AwesomeInterface> {
    return this.http.delete<AwesomeInterface>(this.url + '/' + id);
  }

  createAwe(book: AwesomeInterface): Observable<any> {
    return this.http.post(this.url + '/create', book);
  }
}
