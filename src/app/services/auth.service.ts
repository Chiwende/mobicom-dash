import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth,
    private readonly router: Router
    ) {
    this.user = firebaseAuth.authState;
    
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigateByUrl('navbar');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .signOut();
  }


}
