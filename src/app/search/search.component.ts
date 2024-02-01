import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RickandmortyService } from '../core/services/rickandmorty.service';

@Component({
  selector: 'app-search',
  //standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: any;
  searchResults: any;

  constructor(
    private formBuilder: FormBuilder,
    private rickandmortyService: RickandmortyService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      searchTerm: ''
    });
  }

  search(): void {
    if (this.form.value.searchTerm) {
      this.rickandmortyService.searchEpisode(this.form.value.searchTerm).subscribe(results => {
        this.searchResults = results;
      })
    }
  }
}
