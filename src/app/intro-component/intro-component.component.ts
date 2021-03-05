import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-intro-component',
  templateUrl: './intro-component.component.html',
  styleUrls: ['./intro-component.component.css']
})
export class IntroComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitButton() {
    this.router.navigate(['game'])
  }

}
