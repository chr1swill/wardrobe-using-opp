const combinations = [] 

class Clothes {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  
  getType = () => {
    return this.type;
  }
  
  getColor = () => {
    return this.color;
  }
}

class Pants extends Clothes {
  constructor(type, color) {
    super(type, color);
  }
}

class Shirt extends Clothes {
  constructor(type, color) {
    super(type, color);
  }
}

const whiteShirt = new Shirt("polo", "white");
const greenShirt = new Shirt("polo", "green");
const navyShirt = new Shirt("polo", "navy");
const lightBlueShirt = new Shirt("polo", "light blue");
const turquoiseShirt = new Shirt("polo", "turquoise￼");
const yellowShirt = new Shirt("polo", "yellow");
const blackShirt = new Shirt("polo", "black");
const greyShirt = new Shirt("polo", "grey");

const navyPants = new Pants("chinos", "navy");
const olivePants = new Pants("chinos", "olive");
const beigePants = new Pants("chinos", "beige");

for (const shirt of [whiteShirt, greenShirt, navyShirt, lightBlueShirt, yellowShirt, blackShirt, greyShirt]) {
  for (const pants of [navyPants, olivePants, beigePants]) {
    // Create a new combination object
    const combination = {
      shirt: shirt,
      pants: pants,
    };
    // Add the combination to the array
    combinations.push(combination);
  }
}

for (const combination of combinations) {
  console.log(`Shirt Type: ${combination.shirt.getType()}, Color: ${combination.shirt.getColor()}`);
  console.log(`Pants Type: ${combination.pants.getType()}, Color: ${combination.pants.getColor()}`);
  console.log('---');
}
<<<<<<< HEAD
=======

>>>>>>> 073824b2090394af23dc6c93160fe679036afcf3
