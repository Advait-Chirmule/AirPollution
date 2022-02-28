let searchButton = document.getElementById('hit_it');
let i = 0;
let memory;
let memoryHTML;
let replacement;
let text;
const a1 = document.getElementById('searchbody');
const c1 = a1.innerHTML;
searchButton.addEventListener('click', function(e){
    e.preventdefault;
    let a = a1;
    let c = c1;
    text1 = document.getElementById('text1').value;
    text = " " + text1 + " ";
    replacement = " " + '<span style="color:red; background-color: #FFFF00"><b>' + text1 + "</b></span>" + " ";
    b = c.replaceAll(text, replacement);
    a.innerHTML = b;
});