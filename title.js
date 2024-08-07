const colors = ['#F7567C', '#F8BD7F', '#52AA5E', '#4D9DE0', '#A62BA3'];
const textID = document.getElementById('title');
const text = textID.innerHTML.split('');

let insert = "";

for(let i=0; i<text.length; i++){
    insert += '<span style="color:'+colors[i]+'">'+text[i]+'</span>';
}

textID.innerHTML = insert;

