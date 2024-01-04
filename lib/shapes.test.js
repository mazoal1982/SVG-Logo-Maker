//const Circle = require("./shapes");
//const Square = require("./shapes");
// const Triangle = require("./shapes");
const {Circle, Square, Triangle} = require("./shapes")


// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle("abc","blue","green",100); // specify the radius
      var color = 'blue';
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="${color}" />`); // use a template literal and a comma
    });
  }); // close the parentheses and curly braces
  

// Square Shape
describe('Square', () => {
    test('renders correctly', () => {
      const shape = new Square("abc","green","blue",200);
      let color = 'green';
      shape.setColor(color);
      expect(shape.render()).toEqual(`<rect x="225" y="230" width="200" height="200" fill="green" />`);
    });
  });
  

// /// Triangle Shape
describe('Triangle', () => {
    test('renders correctly', () => {
      const shape = new Triangle(); // fixed typo: comst -> const
      var color = 'pink'; // added missing semicolon and quotes
      shape.setColor(color); // fixed typo: setCotor -> setColor
      expect(shape.render()).toEqual('<polygon height="100%" width="100%" points="0, 200 100, 0 200, 200" fill="pink"/>'); // added missing quotes and fill attribute
    });
  });
  








