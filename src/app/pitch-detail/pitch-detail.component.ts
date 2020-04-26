import { Component, OnInit , Input} from '@angular/core';
import { PitchListService} from '../services/pitchList.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pitch-detail',
  templateUrl: './pitch-detail.component.html',
  styleUrls: ['./pitch-detail.component.css']
})
export class PitchDetailComponent implements OnInit {

  pitchTitle : string ;
  pitchCategory : string;


  constructor(private pitchListService : PitchListService,
  private route : ActivatedRoute ) {

  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.pitchTitle = this.pitchListService.getPitchById(+id).title;
    this.pitchCategory = this.pitchListService.getPitchById(+id).category;
  }

}
