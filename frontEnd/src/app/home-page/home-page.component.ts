import {Component, OnInit} from '@angular/core';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { ClubListComponent } from '../club-list/club-list.component';
import { AuthService, User, Club } from '../auth.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  //variables to be used to construct a search bar
  searchTerm: string;
  searchResults: any[];
  welcomeMessage: string;
  currUser: string;

  clubs: Map<string, Club>;



  constructor(private authService: AuthService, private router: Router, private sharedService: SharedService) {
    this.searchTerm = "";
    this.searchResults = [];
    this.welcomeMessage = "Find the club that's right for you!";
    this.currUser = "";
  }

  ngOnInit(): void {
    this.getUsername();
    this.sharedService.sharedMap$.subscribe(map => {
      this.clubs = map;
    });
  }


  performSearch() {
    //1. retrieve list of clubs stored in backend to be put into an array
    //2. search that array for the name if it is present
    //3. if found go from there
    //if not create a popup saying 'Club not yet in database'
    this.searchTerm=this.searchTerm.toLowerCase();
    for(let [key,value] of this.clubs){
      if(this.searchTerm === key.toLowerCase()){
        console.log('Found key: ',key);
      }
    }
  }

  Logout() {
    alert("Thank you for using our website. \nHave a great day!");
    this.router.navigate(['']);
  }

  logout() {
    alert("You have successfully logged out");
    this.router.navigate(['']);
  }

  getUsername() {
    this.authService.getUsername().subscribe(
      (response: any) => {
        this.currUser = response.slice(0, response.length - 8);
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
