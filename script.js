let  btn=document.querySelector('#addTaskButton');
let input=document.querySelector('#taskInput');
let ul=document.querySelector('#taskList');

btn.addEventListener('click',function(){
   let li=document.createElement('li');
   li.innerHTML=input.value;
   ul.appendChild(li);
   input.value='';
})