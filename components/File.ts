import Editor from './Editor'
import Tab from './Tabs'

// @ts-nocheck


export default class File {
  private fileName;
  private fileType: "js" | "html" | "css";
  tab: Tab;
  editor: Editor;

  constructor(fileName: string, fileType: "js" | "html" | "css") {
    this.fileType = fileType;
    this.fileName = fileName;
    this.createEditor();
    this.createTab();
  }

  private createEditor(): void {
    this.insertEditor();
    this.editor = new Editor(document.querySelector(`[data-oncode${this.fileType}-${this.fileName}]`), this.fileType);
    // this.tabs.push({isActive: true, tab: new Tab(this.fileName), editor: editor});
    // document.querySelector(`[data-tab-${this.fileName}]`).addEventListener('click', () => this.selectTab())
  }

  private insertEditor(): void {
    document.querySelector(`.tab__content`).insertAdjacentHTML('beforeend', this.createEditorTemplate())
  }


  private createTab(): void {
    this.tab = new Tab(this.fileName)
  }


  private createEditorTemplate() {
    interface IFileContent {
      [index: string]: string,
    }
    const fileContent: IFileContent = {
      // <div class="editor" data-oncodejs-${this.fileName}>Script.js</div>
      "js": 'function foo()',
      "html": `Hello world!`,
      "css": 'html {}',
    }
    return `<div class="editor" data-oncode${this.fileType}-${this.fileName}>${fileContent[this.fileType]}</div>`
  }

}
