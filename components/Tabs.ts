// // @ts-nocheck
// export default class Tabs {
//   tabsTemplates = {
//     html: '<div class="tabs__tab tab">Index.html</div>',
//     js: '<div class="tabs__tab tab">Script.js</div>',
//     css: '<div class="tabs__tab tab">Style.css</div>'
//   }
//
//
//   tabsBtn = Array.from(document.querySelectorAll(".tab"));
//
//   tabsBtn.forEach(function (item) {
//     handleButtonClick(item);
//   });
//
//   // Создание новых табов
//
//   const tabAdd = document.querySelector(".header__tabs");
//
//   function newtab() {
//     if (tabsBtn.length <= 5) {
//       let newtab = document.createElement('div');
//       newtab.innerHTML = 'Hello World!';
//       newtab.className = 'tabs__tab tab';
//       tabsBtn.push(newtab);
//       tabAdd.prepend(newtab);
//       handleButtonClick(newtab);
//     }
//     return;
//   }
//
//   function handleButtonClick(item) {
//     item.addEventListener("click", function () {
//       let currentBtn = item;
//       tabsBtn.forEach(function (item) {
//         item.classList.remove('tabs__tab_active');
//       });
//       currentBtn.classList.add('tabs__tab_active');
//     });
//   };
// }
