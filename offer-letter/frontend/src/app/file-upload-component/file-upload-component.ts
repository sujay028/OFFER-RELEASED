import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload-component.html',
  styleUrl: './file-upload-component.css'
})
export class FileUploadComponent {

  @Input() label: string = 'Upload File';
  @Input() isRequired: boolean = false;
  @Input() id: string = '';
  @Input() accept: string = ''; 
  @Input() isDisabled: boolean = false;

  @Output() fileChange = new EventEmitter<any>();

  selectedFile: File | null = null;
  selectedFileName: string = '';

  isFocused: boolean = false;

  onFileChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.selectedFile = file;
      this.selectedFileName = file.name;

      this.fileChange.emit({
        label: this.label,
        file: file,
        type: 'file'
      });
    }
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }
}