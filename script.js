let  btn=document.querySelector('#addTaskButton');
let input=document.querySelector('#taskInput');
let ul=document.querySelector('#taskList');

btn.addEventListener('click',function(){
   console.log(input.value);
   let li=document.createElement('li');
   li.innerHTML=input.value;
   ul.appendChild(li);
})