//pitchLIst.service.ts
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PitchListService {
  pitchesSubject = new Subject<any[]>();

  private pitches: any;
  // [
  //   {
  //     id: 1,
  //     title: "Pitch title 1",
  //     category: "Category A",
  //     score: 1,
  //     content: "Contenue 1",
  //   },
  //   {
  //     id: 2,
  //     title: "Pitch title 2",
  //     category: "Category B",
  //     score: 2,
  //     content: "Contenue 2",
  //   },
  //   {
  //     id: 3,
  //     title: "Pitch title 3",
  //     category: "Category C",
  //     score: 3,
  //     content: "Contenue 3",
  //   },
  // ];

  constructor(private httpClient: HttpClient) {}

  scoreReset() {
    for (let pitch of this.pitches) {
      pitch.score = 0;
    }
    this.emitPitchesSubject();
  }

  voteUp(i: number) {
    this.pitches[i].score++;
    this.emitPitchesSubject();
  }

  voteDown(i: number) {
    this.pitches[i].score--;
    this.emitPitchesSubject();
  }

  scoreResetOne(i: number) {
    this.pitches[i].score = 0;
    this.emitPitchesSubject();
  }

  getPitchById(id: number) {
    const pitch = this.pitches.find((s) => {
      return s.id === id;
    });
    return pitch;
  }

  emitPitchesSubject() {
    this.pitchesSubject.next(this.pitches.slice());
  }

  getPitchesFromServer() {
    this.httpClient
      .get<any[]>("https://api.npoint.io/a64f5167758424a48ace")
      .subscribe(
        (response) => {
          this.pitches = response;
          console.log("It's coming !" + response);
          this.emitPitchesSubject();
        },
        (error) => {
          console.log("Error :" + error);
        }
      );
  }
}
