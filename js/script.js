// Пока что закинул чисто для теста
document.addEventListener("keydown",function (e) {
    if (e.key === String(38)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        for (el in document.getElementsByClassName('.focused')){
            if (el.previousSibling.length) {
                el.classList.remove('focused').previousSibling.focus().classList.add('focused');
            }
        }
            if (document.getElementsByClassName('.focused').previousSibling.length) {
                document.getElementsByClassName('.focused').classList.remove('focused').previousSibling.focus().classList.add('focused');
            }
    }
    if (e.key === String(40)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        for (el in document.getElementsByClassName('.focused')){
            if (el.nextSibling.classList.contains('focusColor').length) {
                el.classList.remove('focused').nextSibling.focus().classList.add('focused');
            }
        }
    }
});
