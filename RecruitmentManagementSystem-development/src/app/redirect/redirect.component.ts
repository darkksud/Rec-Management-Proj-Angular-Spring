import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
    document.querySelectorAll<HTMLElement>('.example-container').forEach((ele) => {
      if (this.sideBarOpen) {
        ele.classList.add("maxed");
      } else {
        ele.classList.remove("maxed");
      }
      });
  }

}
