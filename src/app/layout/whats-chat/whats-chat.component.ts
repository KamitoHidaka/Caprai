import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whats-chat',
  template: `
    <div id="chat" class="chat-container">
      <form action="">
        <input type="text">
        <app-button></app-button>
      </form>
    </div>
  `,
  styleUrls: ['./whats-chat.component.scss']
})
export class WhatsChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
