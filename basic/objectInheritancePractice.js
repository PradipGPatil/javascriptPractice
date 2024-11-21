class Bird {

    constructor(name) {
      this.name = name; 
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  
  }
  
  class Crow extends Bird{
    speak() {  
      super.speak();
      console.log(`${this.name} sings.`);
    }
  
  }
  
  const crow = new Crow("Tim");
  crow.speak();
   