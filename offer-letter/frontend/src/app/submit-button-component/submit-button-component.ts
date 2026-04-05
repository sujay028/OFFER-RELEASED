import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submit-button-component.html',
  styleUrl: './submit-button-component.css'
})
export class SubmitButtonComponent {
  @Input() label: string = 'Submit';
  @Input() disabled: boolean = false;
  @Input() isLoading: boolean = false;
  
  @Output() btnClick = new EventEmitter<void>();

  onClick() {
    if (!this.disabled && !this.isLoading) {
      this.btnClick.emit();
    }
  }
}