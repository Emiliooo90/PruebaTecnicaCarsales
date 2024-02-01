import { Routes } from '@angular/router';
import { EpisodeslistComponent } from './episodeslist/episodeslist.component';
import { EpisodedetailsComponent } from './episodedetails/episodedetails.component';

export const routes: Routes = [{path: '', component: EpisodeslistComponent},
                                {path: 'episodedetails/:id', component: EpisodedetailsComponent}];
