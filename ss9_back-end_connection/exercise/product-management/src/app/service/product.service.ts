import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL_PRODUCT = 'http://localhost:3000/products';
  products: Product[] = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL_PRODUCT);
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(this.URL_PRODUCT, product);
  }
  findById(id: number): Observable<any> {
    return this.http.get<any>(this.URL_PRODUCT + '/' + id);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(this.URL_PRODUCT + '/' + id, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.URL_PRODUCT + '/' + id);
  }
}
