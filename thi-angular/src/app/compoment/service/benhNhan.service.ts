import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BenhNhan} from "../model/benhNhan";

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {
  constructor(private httpClient: HttpClient) {
  }

  getListBenhNhan(): Observable<BenhNhan[]> {
    return this.httpClient.get<BenhNhan[]>('http://localhost:8080/api/benhNhan');
  }
}
