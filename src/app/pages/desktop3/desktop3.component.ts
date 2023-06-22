import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

@Component({
  selector: 'app-desktop3',
  templateUrl: 'desktop3.component.html',
  styleUrls: ['desktop3.component.css'],
})
export class Desktop3 {
  userName = ""
  password = ""
  constructor(private title: Title, private route: Router) {
    this.title.setTitle('exported project')
  }

  onSubmit() {
    if (this.userName === "" || this.password === "") {
      alert("enter username or password")
    }
    else if ( this.userName === "Shambhavi" && this.password === "Tiwari") {
      localStorage.setItem("status","loggedIn")
      this.route.navigate (['/desktop61'])
      // alert ("logged in")
    }
    else {
      alert ("invalid username or password")
    }
    console.log("here")
  }
}
