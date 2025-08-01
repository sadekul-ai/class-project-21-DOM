
// https://www.google.com/search?q=dom+in+js&sca_esv=7e391c2c0531b813&sxsrf=AE3TifN9yz5tE8HnizkywO0tiqCuutydNQ%3A1754028639631&source=hp&ei=X1qMaJq8JOOKwbkP4IqLwQE&iflsig=AOw8s4IAAAAAaIxob9CFuxK5y4tWQySn2kio7qaEs1I7&oq=dom&gs_lp=Egdnd3Mtd2l6IgNkb20qAggAMgoQIxiABBiKBRgnMgoQIxiABBiKBRgnMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTMgcQABiABBgTSNMnUABYkghwAHgAkAEAmAHaAqABmwaqAQcwLjEuMS4xuAEDyAEA-AEBmAIDoALRBsICChAjGPAFGMkCGCfCAg4QABiABBiKBRixAxiDAcICDhAuGIAEGLEDGMcBGNEDwgILEC4YgAQYigUYsQPCAg4QLhiABBiKBRixAxiDAcICCxAAGIAEGIoFGLEDmAMAkgcHMC4xLjEuMaAH0x2yBwcwLjEuMS4xuAfRBsIHBzItMS4xLjHIByw&sclient=gws-wiz

// document.createElement(element) using for Create an HTML element
// document.removeChild(element) using for Remove an HTML element
// document.appendChild(element) using for Add an HTML element
// document.replaceChild(new, old) using for Replace an HTML element
// document.write(text) using for Write into the HTML output stream
// document.getElementById(id) using for selection the Id
// getElementsByClassName() using for selection the class 
// getElementsByTagName() using for selection the tag
// getElementsByAttributeName() using for selection the -----

 //Selecting Elements: Using methods like getElementById(), getElementsByClassName(), getElementsByTagName(), 
querySelector(), querySelectorAll()

// Modifying Content: Changing textContent, innerText, innerHTML, or attribute values

// Changing Styles: Modifying CSS properties using the style property.

 // Adding/Removing Elements: Creating new elements with createElement() and appending them or removing existing ones.

// Handling Events: Attaching event listeners (e.g., addEventListener()) to react to user interactions like clicks or key presses.

// document.createElement and .innerText using for text writing
// document.body.appendChild(text) using for print 
// document.getElementById() using for selection the Id


// let box = document.getElementById("myBox");
//   box.style.color = "red";
//   box.style.backgroundColor = "yellow";
//   box.style.fontSize = "20px"; 

// let text = document.createElement('article');
// article.textContent = 'Bangladesh is beautiful country';
// document.body.appendChild(text);

let body = document.getElementById('body');
body.style.margin = '0'
body.style.padding = '0'
body.style.background = 'grey'


let maiBox = document.getElementById('mainbox')

let text = document.createElement('h1');
 text.innerText = 'Bangladesh is a beautiful country';
document.body.appendChild(text);
text.style.color = 'red';
text.style.border = '3px, solid black,';
text.style.width = '800px';
text.style.alignItems = 'center';
text.style.fontSize = '50px';


let box_1 = document.createElement('box-1');
box_1.innerText = 'Shundorbon is good place for visit';
document.body.appendChild(box_1);
box_1.style.border = '3px, solid black,';
box_1.style.marginRight = '50px'
box_1.style.color = 'blue'
box_1.style.fontSize = '30px';
box_1.style.width = '800px';

let box_2 = document.createElement('box-2');
box_2.innerText = 'Coxes Bazar is a tourist place'
document.body.appendChild(box_2);
box_2.style.border = '3px, solid black,';
box_2.style.color = 'yellow'
box_2.style.fontSize = '30px';
box_2.style.width = '800px';









