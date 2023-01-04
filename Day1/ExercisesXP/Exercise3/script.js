//Exercises
//1)
const dev = document.getElementById('navBar')
  dev.setAttribute("name" , "socialNetworkNavigation ");
  console.log(dev);
  //2)
  let newli = document.createElement("li");
  console.log(newli);
  newA = document.createElement('a');
  newA.href ='http://www.marlins.com';
  //3)
  let newelement = document.createTextNode("Deconnexion");
      console.log(newelement);
//4
  let addUl = document.querySelector(ul)
  addUl = newli.appendChild(newelement)
   console.log(addUl);
   
   let firstElem = myUl.firstElementChild.textContent;
   console.log(firstElem);

let lastElem = myUl.lastElementChild;
   
   console.log(lastElem);
