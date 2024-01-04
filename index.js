const {Circle, Square, Triangle} = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs")

inquirer.prompt([
    {
        type: "input",
        message: "Enter up to three letters for your logo.",
        name: "text"
    },
    {
        type: "list",
        message: "Choose shape.",
        name: "shape",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        message: "Enter text color.",
        name: "textColor"
    },
    {
        type: "input",
        message: "Enter shape color.",
        name: "color"
    },
])
.then(answers=>{
    if (answers.shape === "Circle"){
        let shape = new Circle(answers.text, answers.color, answers.textColor, 100)
        fs.writeFileSync("logo.svg", `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shape.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

</svg>
        `)
    }
    if (answers.shape === "Square"){
        let shape = new Square(answers.text, answers.color, answers.textColor, 200)
        fs.writeFileSync("logo.svg", `
        <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

  ${shape.render()}

  <text x="225" y="230" font-size="30" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

</svg>
        `)
    }
    if (answers.shape === "Triangle"){
        let shape = new Triangle(answers.text, answers.color, answers.textColor, 200)
        fs.writeFileSync("logo.svg", `
        <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

  ${shape.render()}

  <text x="100" y="125" font-size="30" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

</svg>
        `)
    }
})