import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

@Component({
  selector: 'app-desktop61',
  templateUrl: 'desktop61.component.html',
  styleUrls: ['desktop61.component.css'],
})
export class Desktop61 {
  rawul70: string = ' '
  rawqmbi: string = ' '
  rawjv7e: string = ' '
  raws6vw: string = ' '
  userObj = [
    {id:1, name:"Shambhavi Tiwari",project:"ReIntern",mentor:"Sunil S Yadav",duration:"2 Months" ,status:"active"},
    {id:2, name:"Shambhavi Tiwari",project:"ReIntern",mentor:"Sunil S Yadav",duration:"2 Months" ,status:"active"},
    {id:3, name:"Shambhavi Tiwari",project:"ReIntern",mentor:"Sunil S Yadav",duration:"2 Months" ,status:"active"}
  ]
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
