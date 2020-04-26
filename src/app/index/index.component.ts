import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

authStatus : boolean;


  constructor( private authService : AuthService , private router: Router) { }

ngOnInit() {
 this.authStatus = this.authService.isAuth;
}

onSignIn(){
  this.authService.signIn().then(
    () => {
      console.log('Sign in successful!');
      this.authStatus = this.authService.isAuth;
      this.router.navigate(['pitches']);
    }
  );
}
onSignOut(){
this.authService.signOut();
console.log('Aurevoir Shoshana !')
 this.authStatus = this.authService.isAuth

}

}
