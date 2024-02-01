import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Episode } from '../interfaces/episode';

@Component({
  selector: 'app-episodeitem',
  standalone: true,
  imports: [],
  templateUrl: './episodeitem.component.html',
  styleUrl: './episodeitem.component.css'
})
export class EpisodeitemComponent {
  @Input() episodeInfo!: Episode;
  constructor(private router: Router) { }

  goToDetails(id: number) {
    this.router.navigate(['/episodedetails', id]);
  }
}
