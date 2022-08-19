import {Component, OnInit} from '@angular/core';
import {Dictionary} from '../model/dictionary';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: Dictionary;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const dictionary = this.activatedRoute.snapshot.params.eng;
    this.dictionary = this.dictionaryService.findById(dictionary);
  }

}
