//Exercises1
const container = document.getElementById('contaier')
console.log('container',container);
//2-2
// document.querySelector(".list")
// document.querySelector(".list").children
// document.querySelector(".list").children[1]
// document.querySelector(".list").children[1].textContent
document.querySelector(".list").children[1].textContent = "Richard"

//2-3
document.querySelectorAll(".list")[0].firstElementChild.textContent  = "Rachelle"
const list = document.querySelectorAll(".list")
list.forEach(list=> list.firstElementChild.textContent = "Rachelle")
console.log(list);

//2-4
list[1].children[1].remove()
//3-1
// list[1].classList.add('student_list')
list[0].classList
 list[0].classList.add('student_list')
list.forEach(list=> list.classList.add('#student_list'))
document.querySelector('ul')
document.querySelector('ui.student_list')
console.log(list);
//3-2
const firstul = document.querySelector('ul.list.student_list')
firstul.classList.add("university" ,"attendance")
console.log(firstul);





/////////////////////////////////////////////////////////////////////////////////
//Exercises 2
