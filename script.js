let textArea = document.getElementById('textArea');
let totalCounter = document.getElementById('totalElement');
let remainingCounter = document.getElementById('remainingElement');

textArea.addEventListener("keyup", function(){
    updateCounter();
});

updateCounter();

function updateCounter(){
    totalCounter.innerHTML = textArea.value.length;
    remainingCounter.innerHTML = textArea.getAttribute("maxLength") - textArea.value.length;
}