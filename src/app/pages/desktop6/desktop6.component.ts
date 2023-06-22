import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

@Component({
  selector: 'app-desktop6',
  templateUrl: 'desktop6.component.html',
  styleUrls: ['desktop6.component.css'],
})
export class Desktop6 implements OnInit {
  raw5kvq: string = ' '
  rawe5zq: string = ' '
  rawy28b: string = ' '
  raw748o: string = ' '
  constructor(private title: Title,private route: Router) {
    this.title.setTitle('exported project')
  }
  status = ""
  ngOnInit() {
    status = localStorage.getItem("status") 
    if (status != "loggedIn") {
      this.route.navigate(['/d'])
    }
  }
}
