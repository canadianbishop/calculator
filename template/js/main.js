const list = document.querySelectorAll('li');
const ul = document.querySelector('ul');

// add event listner to all the todos

list.forEach(todo=>{
    todo.addEventListener('click', e=>{
        e.target.remove();
    });
});


// append a text to the todo each time  the butto is clicked

let button = document.querySelector('button');

button.addEventListener('click', ()=>{
    const newli = document.createElement('li');
   newli.textContent = 'this is a new item';
   ul.prepend(newli);
});

 var tolu = document.querySelector(".tolu");

let di = document.querySelector('div');

di.innerHTML = `<h1>this is the beginning</h1>`

di.appendChild(tolu);




// let myTag = document.createElement('h1');
// myTag.textContent = 'this is the beginging of great things';

//  di.append(myTag);





 let student = ['ayo', 'thema', 'king', 'femi']

 student.forEach(peeps => {
    let tag = document.createElement('p');
    tag.textContent = peeps;
    tag.classList.add('font');
     di.append(tag);
 });


 let para = document.querySelector('p');

 para.setAttribute('title', 'love');

// student.forEach((e)=>{
//  di.innerHTML+= `<p>${e} </p>;`
// });