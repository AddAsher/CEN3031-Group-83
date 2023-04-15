import { AuthService } from '../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent {
  clubs: { [key: string]: any } = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getClubs().subscribe(
      (response) => {
        this.clubs = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}