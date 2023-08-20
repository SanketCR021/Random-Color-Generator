// console.log("hello world")

// const colorButton = document.querySelector("button")
const colorButton = document.querySelector(".mainButton")
// console.log(colorButton)

const body = document.body
// console.log(body)

///////////// Math.random() hame 0 - 0.99999999 ke bich koi bhi number dega double me
//////////// Math.floor(Math.random())hame 0 - 0.9 ke bich koi bhi number dega Integer me
////////////  Math.floor(Math.random() * 10)  ==> 0 - 9
///////////   Math.floor(Math.random() * 256)  ==> 0 - 255

 // const red = Math.floor(Math.random * 256)
 // console.log(red)


function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${blue}, ${green})`
}
 
// console.log(randomColorGenerator())


colorButton.addEventListener("click", ()=>{
    // console.log("You clicked me")
    const randomColor = randomColorGenerator()
    // console.log(randomColor)

    body.style.backgroundColor = randomColor
    
    const text = document.querySelector(".rgbText")
    // console.log(text.textContent)

    text.textContent = randomColor
    // console.log(text.textContent)
})