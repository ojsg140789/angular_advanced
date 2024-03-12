import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css'
})
export class PromisesComponent implements OnInit {

  ngOnInit() {
    this.getUsuarios()
      .then( users => {
        console.log(users);
      }) ;
  }

  getUsuarios() {

    const promise = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
        .then( res => res.json() )
        .then( body => resolve( body.data ) )
        .catch();
    });

    return promise;
  }

}
