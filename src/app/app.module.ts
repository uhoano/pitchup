// Import Angular
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { Routes, RouterModule } from "@angular/router";
// Import Service
import { PitchListService } from "./services/pitchList.service";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth-guard.service";

// Import Component
import { AppComponent } from "./app.component";
import { PitchSingleComponent } from "./pitch-single/pitch-single.component";
import { IndexComponent } from "./index/index.component";
import { PitchListComponent } from "./pitch-list/pitch-list.component";
import { PitchDetailComponent } from "./pitch-detail/pitch-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: "pitches", canActivate: [AuthGuard], component: PitchListComponent },
  { path: "", component: IndexComponent },
  {
    path: "pitches/:id",
    canActivate: [AuthGuard],
    component: PitchDetailComponent,
  },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found" },
];

@NgModule({
  declarations: [
    AppComponent,
    PitchSingleComponent,
    IndexComponent,
    PitchListComponent,
    PitchDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [PitchListService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
