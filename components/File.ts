import Editor from './Editor'
// @ts-nocheck
export default class File {
  private fileName;
  private fileType;

  // editorTemplates = {
  //   html: '<div class="editor" data-oncodehtml>function foo(){}</div>',
  //   js: '<div class="tabs__tab tab" data-oncodejs>Script.js</div>',
  //   css: '<div class="tabs__tab tab" data-oncodecss>Style.css</div>'
  // }

  constructor(fileName: string, fileType: string) {
    this.fileType = fileType;
    this.fileName = fileName;
    this.createEditor();
  }

  createEditor(): void {
    switch (this.fileType) {
      case 'index.html': {
        document.querySelector('body').insertAdjacentHTML('beforeend', this.createHtmlEditor())
        const editor = new Editor(document.querySelector(`[data-oncodehtml-${this.fileName}]`), "html");
      }
        break;
      case 'styles.css': {
        document.querySelector('body').insertAdjacentHTML('beforeend', this.createCssEditor())
        const editor = new Editor(document.querySelector(`[data-oncodecss-${this.fileName}]`), "css");
      }
        break;
      case 'script.js': {
        document.querySelector('body').insertAdjacentHTML('beforeend', this.createJsEditor())
        const editor = new Editor(document.querySelector(`[data-oncodejs-${this.fileName}]`), "js");
      }
        break;
      default:
        break
    }

  }

  private createJsEditor() {
    return `<div class="editor" data-oncodejs-${this.fileName}>Script.js</div>`
  }

  private createHtmlEditor() {
    return `<div class="editor" data-oncodehtml-${this.fileName}>Index.html</div>`
  }

  private createCssEditor() {
    return `<div class="editor" data-oncodecss-${this.fileName}>Styles.css</div>`
  }
}
