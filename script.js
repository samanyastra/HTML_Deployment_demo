// // console.log("Hello From Javascript")
// // console.error("THIS IS VERY BAD ERROR FROM JAVASCRIPT...")
// // console.info("THIS iS info from js")
// // console.warn("This is warning from javascript")

// // a = 10
// // b = 10

// // // console.log(a+b, a-b, a*b, a/b, a%b)

// // // comparision operators

// // // compare a is equal to b?

// // console.log(a==b)

// // let a = 10
// // const PI = '3.14'

// // {
// //     console.log(a)
// //     let b = 20
// //     console.log(b, "inside the block")
// //     var c = "Hello Global js"
// // }
// // // console.log(b)
// // PI = 3.15
// // console.log(c)

// // console.log(document)

// // console.log(document.getElementById('my-div'))

// var my_div = document.getElementById('my-div');
// // document.getElementsByTagName()
// // document.getElementsByClassName('') // collection of html nodes
// console.log(my_div)

// my_div.style.backgroundColor = "blue"
// my_div.style.fontSize = "100px"




let my_div = document.getElementById('my-div')

my_div.style.backgroundColor = "cyan"

my_div.innerHTML = '<h1>This is new content from JS</h1>'
// conditional statements

// loops 
// repeat the execution

var a = 1
var new_content = ''
// for(initialize; condition;increment/decrement) { 
 // block of code
//}

// for(let i = 0; i< 10; i++){
//     new_content += '<div class="new-div">'+i+'</div>'
// }

// my_div.innerHTML = new_content

// my_div.onclick = () => console.log("My Div was clicked")
// my_div.onmouseover = () => console.log("user entered my div")



// DRY -> Do Not Repeat

// how do we create a function

// function <function_name> ( parameters ) {
// code
// return 
//}

// function to greet hello good evening

function greet () {
    console.log("Hello Dev, Welcome to JS")
}

function getNumberValue(e) {
//    console.log(e);
//    console.log(typeof(e.target.value))
   return e.target.value
}

// call it 
// greet()

// function doSomething (item) {
//     console.log(item)
// }


// function addition () {
//     // const first_number = parseFloat(number_one.value);
//     // console.log(first_number)
//     // const second_number = parseFloat(number_two.value)
//     // const result = first_number+second_number
//     // my_div.innerHTML = '<h1>'+ result +'</h1>'

//     let arr = [ "apple", "banana"]
//     // arr.forEach(doSomething)
//     arr.forEach((item) =>  { console.log(item) }  )
// }


// my_div.onclick = greet


// var number_one = document.getElementById('number-one')
// var number_two = document.getElementById('number-two')
// var submit_btn = document.getElementById('submit-btn')

// // number_one.onchange = getNumberValue

// submit_btn.onclick = addition


// problem statement 


// find the squares of the given numbers in array
// [1,2,3] => [1,4,9]  => foreach, map => 
        // automatically create a new array out of original => map

// let arr = [1,4,53,65,78,89,45]
// console.log(arr)
// let squares = arr.map((item) => '<div>'+item*item+'</div>')
// console.log(squares)
// my_div.innerHTML = squares
// // find the even numbers in the given array 
// // [1,2,3] => [2] => reduce, filter
//         // output as arr => filter
//         // string, int => reduce
// let even = arr.filter((item) => item%2==0)
// console.log(even)

var my_div_content = ''

fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then(result => {

        console.log(result)

        result.forEach( (item) => {
            my_div_content += '<h1>'+item.title+'</h1>' 
        }  )

        console.log(my_div_content)

        // result.forEach(element => {
        //     my_div_content += '<h1>'+element.title+'</h1>'
        // });
        my_div.innerHTML = my_div_content
    })
