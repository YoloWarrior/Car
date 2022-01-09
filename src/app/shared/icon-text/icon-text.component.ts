import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.scss'],
})
export class IconTextComponent {
  @Input() icon: string;
  @Input() text: string;
  @Input() size: number = 20;
}
