const row = document.querySelector(".row");
const codeHTML = document.querySelector("#codehtml");
let count = 2;

function addColumn() {
  if(count < 10) {
    count++;
  }
  let res = "";
  let html = "&lt;!-- HTML --&gt;\n\n";
  html += "&lt;div class=\"row\"&gt;\n";
  for(let i=0; i<count; i++) {
    html += "&nbsp;&nbsp;&lt;div class=\"col\"&gt;Column&lt;/div&gt;\n";
    res += `<div class="col">Column</div>`
  }
  html += "&lt;/div&gt;";
  codeHTML.innerHTML = html;
  row.innerHTML = res;
}

function removeColumn() {
  if(count > 1) {
    count--;
  }
  let res = "";
  let html = "&lt;!-- HTML --&gt;\n\n";
  html += "&lt;div class=\"row\"&gt;\n";
  for(let i=0; i<count; i++) {
    html += "&nbsp;&nbsp;&lt;div class=\"col\"&gt;Column&lt;/div&gt;\n";
    res += `<div class="col">Column</div>`
  }
  html += "&lt;/div&gt;";
  codeHTML.innerHTML = html;
  row.innerHTML = res;
}