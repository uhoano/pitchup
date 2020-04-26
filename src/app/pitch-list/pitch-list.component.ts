import { Component, OnInit, OnDestroy } from "@angular/core";
import { PitchListService } from "../services/pitchList.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-pitch-list",
  templateUrl: "./pitch-list.component.html",
  styleUrls: ["./pitch-list.component.css"],
})
export class PitchListComponent implements OnInit, OnDestroy {
  pitches: any = [];
  pitchSubscription: Subscription;

  constructor(private pitchListService: PitchListService) {}

  onResetAll() {
    this.pitchListService.scoreReset();
  }

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      // Resolve
      () => {
        resolve(date);
      },
      3000
    );
  });

  ngOnInit() {
    // this.pitches = this.pitchListService.pitches;
    this.pitchListService.getPitchesFromServer();
    this.pitchSubscription = this.pitchListService.pitchesSubject.subscribe(
      (pitches: any[]) => {
        this.pitches = pitches;
      }
    );
  }
  ngOnDestroy() {
    this.pitchSubscription.unsubscribe();
  }
}
