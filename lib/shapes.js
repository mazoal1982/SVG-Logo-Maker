// Define a class for shapes
class Shape {
  // Constructor takes a color as an argument
  constructor(color) {
    // Set the color property of the shape
    this.color = color;
  }
  // Method to set the color of the shape
  setColor(color) {
    this.color = color;
  }
}

// Define a subclass for circles that inherits from Shape
class Circle extends Shape {
  // Constructor takes a radius as an argument
  constructor(text, color, textColor, radius ) {
    // Call the super constructor with the color
    super(color);
    // Set the radius property of the circle
    this.radius = radius;
    this.text = text;
    this.textColor = textColor;

  }
  // Method to render the circle as an SVG element
  render() {
    // Return a string that represents the circle element
    return `<circle cx="50%" cy="50%" r="${this.radius}" fill="${this.color}" />`;
  }
}

// Define a subclass for squares that inherits from Shape
class Square extends Shape {
  // Constructor takes a side as an argument
  constructor(text, color, textColor, side) {
    // Call the super constructor with the color
    super(color);
    // Set the side property of the square
    this.side = side;
    this.text = text;
    this.textColor = textColor;
  }
  // Method to render the square as an SVG element
  render() {
    // Return a string that represents the square element
    return `<rect x="225" y="230" width="${this.side}" height="${this.side}" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  // Constructor takes a side as an argument
  constructor(text, color, textColor) {
    // Call the super constructor with the color
    super(color);
    // Set the side property of the square
    this.text = text;
    this.textColor = textColor;
  }
  // Method to render the square as an SVG element
  render() {
    // Return a string that represents the square element
    return `<polygon height="100%" width="100%" points="0, 200 100, 0 200, 200" fill="${this.color}"/>`;
  }
}

module.exports={Circle, Square, Triangle}