// @ts-nocheck
export default class Tabs {
  tabsTemplates = {
    js: '<button class="tablinks" name="London">London</button>',
  }
  private fileName: string;
  private fileType: string;
  private tabsContainerElement: HTMLElement;
  tabElement: HTMLElement;

  constructor(fileName: string, fileType: string) {
    this.fileName = fileName;
    this.fileType = fileType;
    this.tabsContainerElement = document.querySelector('.tabs');
    this.tabsContainerElement.insertAdjacentHTML('beforeend', this.createElementTab())
    this.tabElement = document.querySelector(`[data-tab-${this.fileName}]`)
    // for (i = 0; i < this.tabsElements.length; i++) {
    //   tabcontent[i].style.display = "none";
    // }
  }

  createElementTab() {
    return `<div class="tab" data-tab-${this.fileName}> <button class="tablinks">${this.fileName}.${this.fileType}</button> </div>`
  }

  selectTab() {
    document.querySelectorAll('.tab').forEach((tab)=>{
      tab.classList.remove('tab__show')
    })
    this.tabElement.classList.add('tab__show');
  }

}
