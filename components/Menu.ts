// @ts-nocheck
import File from './File'
import Editor from './Editor'
import {saveAs} from "file-saver";

export default class Menu {
  private modalOverlay: HTMLElement;
  private createModal: HTMLElement;
  private modalForm: HTMLElement;
  private fileName: string;
  private fileNameElement: HTMLElement;
  private fileType: string;
  private fileTypeElement: HTMLElement;
  private editor: Editor;
  private readonly fileContextMenu: HTMLElement;

  constructor(editor: Editor) {
    this.fileContextMenu = document.getElementById("File");
    this.fileContextMenu.value = null;
    this.modalForm = document.getElementById("modalForm");
    this.fileContextMenu.addEventListener("change", () => this.selectFileContextMenu());
    this.createModal = document.querySelector(".modal");
    this.modalOverlay = document.querySelector(".form__exit");
    this.editor = editor
    this.modalForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(modalForm);
      this.fileType = formData.get('fileType');
      this.fileName = formData.get('fileName');
      if (this.fileName.length > 0) {
        new File(this.fileName, this.fileType);
        this.closeCreateModal();
      } else {
        document.getElementById('error').classList.add('error--visible')
      }
    });
  }

  private saveFileAs(): void {
    var blob = new Blob([this.editor.getCode()], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "script.js");
  }

  private createFile(): void {
    this.openCreateModal();
  }

  private openCreateModal(): void {
    document.querySelector(".modal").classList.add("show");

  }

  private closeCreateModal(): void {
    this.createModal.classList.remove("show");
  }

  private selectFileContextMenu(): void {
    switch (this.fileContextMenu.value) {
      case "save": {
        this.saveFileAs();
        this.fileContextMenu.value = null;
      }
        break
      case "new": {
        this.createFile();
        this.fileContextMenu.value = null;
      }
    }
  }


}
