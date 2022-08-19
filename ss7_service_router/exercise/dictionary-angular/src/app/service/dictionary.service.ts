import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() {
  }

  // @ts-ignore
  findById(eng: string): Dictionary {
    const dictionaryList: Dictionary [] = [
      {eng: 'hello', vns: 'xin chao'},
      {eng: 'cat', vns: 'con meo'},
      {eng: 'dog', vns: 'con cho'}
    ];
    return dictionaryList.find(dictionarys => dictionarys.eng === eng);
  }

  // @ts-ignore
  findAll(): Dictionary[] {
    return [{eng: 'hello', vns: 'xin chao'},
      {eng: 'cat', vns: 'con meo'},
      {eng: 'dog', vns: 'con cho'}];
  }
}
