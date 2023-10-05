
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

import { Blog } from '../blog';
import { Team } from '../team';
import { Icon } from '../icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public blog?: Blog[];
  public team?: Team[];
  public icon?: Icon[];

  constructor(private apiService: ApiService) {
    this.apiService.readBlog().subscribe((blog: Blog[]) => {
      this.blog = blog;
    })
    this.apiService.readTeam().subscribe((team: Team[]) => {
      this.team = team;
    })
    this.apiService.readIcon().subscribe((icon: Icon[]) => {
      this.icon = icon;
    })
}
}
