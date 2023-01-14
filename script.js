let one = document.getElementsByClassName('one')[0]
let two = document.getElementsByClassName('two')
let three = document.getElementsByClassName('three')
let four = document.getElementsByClassName('four')
let five = document.getElementsByClassName('five')
let six = document.getElementsByClassName('six')
let seven = document.getElementsByClassName('seven')
let eight = document.getElementsByClassName('eight')
let nine = document.getElementsByClassName('nine')
let ten = document.getElementsByClassName('ten')
let display = document.getElementsByClassName('display')[0]
let visible = document.getElementsByClassName('visible')
let process = document.getElementsByClassName('process')
let result = document.getElementsByClassName('result')[0]
let equal = document.getElementsByClassName('equal')
console.log(process);
console.log(result);

Array.from(process).forEach( (e) => {
    e.addEventListener('click',(e) => {
                console.log(e.innerHTML);
                if(e.target.innerHTML == 'x'){
                    result.innerHTML=display.innerHTML
                    display.innerHTML = ''
                    
                }
    })})

    equal.addEventListener('click',(e)=> {
        console.log(e.innerHTML);
        
    })


// console.log(visible);
//  for(i=0; i<visible.length;i++){
//     console.log(visible[i].innerHTML);
//     visible[i].addEventListener('click',(e) => {
//         display.innerHTML +=e.target.innerHTML
//     })
//  }

Array.from(visible).forEach( (e) => {
    e.addEventListener('click',(e) => {
                display.innerHTML +=e.target.innerHTML
    })})


let container = document.getElementsByClassName('container')
let div= document.getElementsByTagName('div')
container[0].addEventListener('click',(a) => {
    console.log(a.target.parentElement);
})
console.log(container);
console.log(div);

let fives = document.getElementById('five')
console.log(fives);


one.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    display.innerHTML=e.target.innerHTML
})