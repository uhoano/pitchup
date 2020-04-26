import { Component, OnInit , Input } from '@angular/core';
import { PitchListService} from '../services/pitchList.service'
@Component({
  selector: 'app-pitch-single',
  templateUrl: './pitch-single.component.html',
  styleUrls: ['./pitch-single.component.css']
})

// Variables
export class PitchSingleComponent implements OnInit {
@Input() isAuth : boolean;
@Input() pitchTitle:string;
@Input() pitchCategory : string;
@Input() pitchContent : string;
@Input() pitchScore : number;
@Input() lastUpdate : Date;
@Input() index : number;
@Input() pitchId:number;

// pitchTitle : string = "Pitch title from .ts";
// pitchContent : string = "Pitch description from .ts lorem ipsium jziodaznofansfsqjlfnlqsfjafdqsfqosfnioqsfnqojsfnoqjsnfoqj";
// pitchScore :  number = 0;
//Constructeur
  constructor(private pitchListService : PitchListService) {

  }
// Méthode
getBgColor(){
  if(this.pitchCategory === "Category A"){
    return "red";
  }else if ( this.pitchCategory === "Category B"){
    return "yellow";
  }else {
    return "blue";
  }
}


getPitchTitle(){
  return this.pitchTitle
}

onVoteUp(){
  this.pitchListService.voteUp(this.index)
}

onVoteDown(){
  this.pitchListService.voteDown(this.index)
}

onResetOne(){
  this.pitchListService.scoreResetOne(this.index)
}
  ngOnInit() {
  }

}
