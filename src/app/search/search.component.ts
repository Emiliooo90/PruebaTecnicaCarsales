import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RickandmortyService } from '../core/services/rickandmorty.service';
import {EpisodeslistComponent } from '../episodeslist/episodeslist.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, EpisodeslistComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  searchResults: any;

  constructor(
    private formBuilder: FormBuilder,
    private rickandmortyService: RickandmortyService
  ) {
    this.form = this.formBuilder.group({
      searchTerm: ''
    });
  }

  ngOnInit() {
  }

  search(): void {
    if (this.form.value.searchTerm) {
      this.rickandmortyService.searchEpisode(this.form.value['searchTerm']).subscribe(results => {
        this.searchResults = results;
      }, error => {
        console.error(error);
      })
    }
  }
}
