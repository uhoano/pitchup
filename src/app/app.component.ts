import { Component , OnInit, OnDestroy } from '@angular/core';
import { PitchListService} from './services/pitchList.service';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy{

//Promise for date



  // title = 'Ma super app pitchup';
// pitches : any = [
//   {
//     id : 1,
//     title : "Pitch title 1",
//     category : "Category A",
//     score : 0 ,
//     content : "Contenue 1"
//   },
//   {
//     id : 2,
//     title : "Pitch title 2",
//     category : "Category B",
//     score : 0 ,
//     content : "Contenue 2"
//   },
//   {
//     id : 3,
//     title : "Pitch title 3",
//     category : "Category C",
//     score : 0 ,
//     content : "Contenue 3"
//   },
//
// ];
// pitchTitle1 : string="pitch title 1";
// pitchTitle2 : string="pitch title 2";
// pitchTitle3 : string="pitch title 3";
// pitchCategory1 : string ="Pitch Catégories A"
// pitchCategory2 : string = "Pitch Catégories B"
// constructor() {
//   setTimeout(
//     () => {this.isAuth=true;},1000
//   );
// }

// authStatus : boolean;

seconds : number ;
counterSubscription: Subscription;

constructor(private pitchListService:PitchListService , private authService : AuthService){

}


ngOnInit() {
const counter = Observable.interval(1000);
  this.counterSubscription = counter.subscribe(
     (value) => {
       this.seconds = value;
     },
     (error) => {
       console.log('Uh-oh, an error occurred! : ' + error);
     },
     () => {
       console.log('Observable complete!');
     }
   );
}

// getAuthStatus(){
//   this.authStatus = this.authService.isAuth;
//   return this.authStatus;
// }
getAuthStatus(){
  return this.authService.isAuth;
}


  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
