import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BenhAn} from "../model/benhAn";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {BenhNhanService} from "./benhNhan.service";

const API_URLBenhAn = `${environment.apiUrlBenhAn}`;

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private  httpClient: HttpClient) {
  }

  getListBenhAn(page:number): Observable<BenhAn[]> {
    return this.httpClient.get<BenhAn[]>(API_URLBenhAn +'?page='+ page);
  }
  CreateBenhAn(benhAn): Observable<BenhAn> {
    return this.httpClient.post<BenhAn>(API_URLBenhAn + "/create", benhAn);
  }


  deleteBenhAn(id: number): Observable<BenhAn> {
    return this.httpClient.delete<BenhAn>(API_URLBenhAn + '/delete/' + id);
  }

  findById(id: number): Observable<any> {
    return this.httpClient.get<any>(API_URLBenhAn + '/' + id);
  }

  updateBenhAn(id: number, benhAn: BenhAn): Observable<BenhAn> {
    return this.httpClient.put<BenhAn>(API_URLBenhAn + '/update/' + id, benhAn);
  }
  searchBenhAn(value: string):Observable<any>{
    console.log(value);
    return this.httpClient.get<any>(API_URLBenhAn +'/search'+'?liDo='+ value);
  }
// `${API_URLBenhAn}/search?name_like=${value}`

}
