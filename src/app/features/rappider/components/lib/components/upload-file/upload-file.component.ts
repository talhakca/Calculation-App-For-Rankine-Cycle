import { Component, OnInit, EventEmitter, Output, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'rappider-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class RappiderUploadFileComponent implements OnInit {

  @Input() dragDropFileText = 'Drag and drop files here';
  @Input() browseFileText = 'Browse File';

  @Output() fileUpload: EventEmitter<any> = new EventEmitter();

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    if (window['File'] && window['FileList'] && window['FileReader']) {
      this.setEvents();
    }
  }

  setEvents() {
    const dragDropFileElement = this.getDragDropFileElement();
    const browseFileElement: HTMLInputElement = this.getBrowseFileElement();
    browseFileElement.addEventListener('change', this.onFileUpload.bind(this));
    dragDropFileElement.addEventListener('dragover', this.onDragDropFileElementHover.bind(this));
    dragDropFileElement.addEventListener('dragleave', this.onDragDropFileElementHover.bind(this));
    dragDropFileElement.addEventListener('drop', this.onFileUpload.bind(this));
  }

  onDragDropFileElementHover(event) {
    event.preventDefault();
    event.stopPropagation();
    const dragDropFileElement = this.getDragDropFileElement();
    if (event.type === 'dragover') {
      dragDropFileElement.classList.add('hover');
    } else {
      dragDropFileElement.classList.remove('hover');
    }
  }

  onFileUpload(event) {
    event.preventDefault();
    /* cancel event and hover styling */
    this.onDragDropFileElementHover(event);
    /* fetch fileContentList object */
    const fileList: FileList = event.target.files || event.dataTransfer.files;
    /* process all file objects */
    this.emitFileUpload(fileList);
  }

  emitFileUpload(fileList: FileList) {
    /* emit selected files */
    this.fileUpload.emit(Array.from(fileList));
    /* clear selected files for input */
    this.clearSelectedFiles();
  }

  onFileBrowseOpen() {
    const browseFileElement = this.getBrowseFileElement();
    browseFileElement.click();
  }

  getBrowseFileElement(): HTMLInputElement {
    return this.elementRef.nativeElement.querySelector('#browse-file');
  }

  getDragDropFileElement(): HTMLInputElement {
    return this.elementRef.nativeElement.querySelector('#drag-drop-file');
  }

  clearSelectedFiles() {
    /* clear selected files */
    const browseFileElement: HTMLInputElement = this.getBrowseFileElement();
    browseFileElement.value = null;
  }

}
