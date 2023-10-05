import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Team } from '../team';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public team?: Team[];



  constructor(private apiService: ApiService) {
    this.apiService.readTeam().subscribe((team: Team[]) => {
      this.team = team;
    })
}
}
