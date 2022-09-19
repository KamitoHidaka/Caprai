import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-whats-chat',
  template: `
    <div id="chat" class="contact-container">
      <div class="chat-container">
        <a class="chat-button" href="https://wa.link/8mh2in" target="_blank">
          <fa-icon [icon]="faWhatsapp"></fa-icon>
          <p>Haz Clcik para Chatear</p>
        </a>
      </div>
      <div class="or-container">
        <p>O</p>
        <p>Escane Nuestro Codigo</p>
      </div>
      <div class="qr-container">
        <img class="qr" src="assets/qr_campos.png" />
      </div>

    </div>
  `,
  styleUrls: ['./whats-chat.component.scss'],
})
export class WhatsChatComponent {
  faWhatsapp = faWhatsapp;
}
