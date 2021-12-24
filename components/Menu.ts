// @ts-nocheck
import File from './File'
import Editor from './Editor'
import {saveAs} from "file-saver";

interface File {
  isActive: boolean,
  editor: Editor,
}

export default class Menu {
  private modalOverlay: HTMLElement;
  private createModal: HTMLElement;
  private modalForm: HTMLElement;
  private fileName: string;
  private fileNameElement: HTMLElement;
  private fileType: string;
  private fileTypeElement: HTMLElement;
  private files: File[] = [];
  private readonly fileContextMenu: HTMLElement;

  constructor() {
    this.fileContextMenu = document.getElementById("File");
    this.fileContextMenu.value = null;
    this.modalForm = document.getElementById("modalForm");
    this.fileContextMenu.addEventListener("change", () => this.selectFileContextMenu());
    this.createModal = document.querySelector(".modal");
    this.modalOverlay = document.querySelector(".form__exit");
    this.modalOverlay.addEventListener("click", ()=>{
      this.closeCreateModal()
    })
    this.modalForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(modalForm);
      this.fileType = formData.get('fileType');
      this.fileName = formData.get('fileName');
      if (this.fileName.length > 0) {
        const newFile = new File(this.fileName, this.fileType)
        newFile.tab.tabElement.addEventListener('click', () => {
          newFile.editor.selectEditor()
          newFile.tab.selectTab()
        })
        this.files.map((file) => {
          file.isActive = false;
        })
        this.files.push({isActive: true, file: newFile});
        this.files.map((fileElement) => {
          if (fileElement.isActive) {
            this.selectFile(fileElement);
          }
        })
        this.closeCreateModal();
      } else {
        document.getElementById('error').classList.add('error--visible')
      }
    });
  }

  private selectFile(fileElement): void {
    fileElement.file.editor.selectEditor();
    fileElement.file.tab.selectTab();
  }

  private saveFileAs(): void {
    this.files.map((fileElement) => {
      console.log(fileElement)
      if (fileElement.isActive) {
        var blob = new Blob([fileElement.file.editor.getCode()], {type: "text/plain;charset=utf-8"});
        saveAs(blob, `${this.fileName}.${this.fileType}`);
      }
    })
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
