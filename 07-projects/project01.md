# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-5gyzaz?file=page2.html)
# Solution code

## project 1: Color Scheme Switcher

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
     if(e.target.id === 'grey'){
       body.style.backgroundColor = e.target.id;
     }
     if(e.target.id === 'white'){
       body.style.backgroundColor = e.target.id;
     }
     if(e.target.id === 'blue'){
       body.style.backgroundColor = e.target.id;
     }
     if(e.target.id === 'yellow'){
       body.style.backgroundColor = e.target.id;
     }
     if(e.target.id === 'red'){
       body.style.backgroundColor = e.target.id;
     }
  })
});
        
```