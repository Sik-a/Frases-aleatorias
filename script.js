const btn = document.getElementById("boton"); 

btn.addEventListener( 'click', function(){ 
const quotes = [
  {
    quote: "Be yourself; everyone else is already taken. ", 
    author: "- Oscar Wilde" 
  }, 
  { 
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", 
    author: "Albert Einstein" 
  }, 
  { 
    quote: "So many books, so little time.", 
    author: "Frank Zappa" 
  }, 
  { 
    quote: "A room without books is like a body without a soul.", 
    author: "Marcus Tullius Cicero" 
  }, 
  { 
    quote: "You only live once, but if you do it right, once is enough.", 
    author: "Mae West" 
  }, 
  { 
    quote: "Be the change that you wish to see in the world.", 
    author: "Mahatma Gandhi" 
  }, 
  { 
    quote: "If you tell the truth, you don't have to remember anything.", 
    author: "Mark Twain" 
  }, 
  { 
    quote: "Always forgive your enemies; nothing annoys them so much.", 
    author: "Oscar Wilde" 
  }, 
  { 
    quote: "Without music, life would be a mistake.", 
    author: "Friedrich Nietzsche" 
  }, 
  { 
    quote: "It is better to be hated for what you are than to be loved for what you are not.", 
    author: "Andre Gide" 
  }, 
  { 
    quote: "A friend is someone who knows all about you and still loves you.", 
    author: "Elbert Hubbard" 
  } 
]; 

let number = Math.floor( Math.random() * quotes.length); 

document.getElementById( 'quote' ).textContent = quotes[number].quote; 
document.getElementById( 'author' ).textContent = quotes[number].author; 
} )