'esversion: 6';
'use moz';

class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = 3;
    this.speed = 3;
  }
  sayname() {
    console.log(this.name);
  }
  showStats() {
    console.log(this.name);
    console.log(this.health);
    console.log(this.strength);
    console.log(this.speed);
  }
  drinkSake() {
    this.health += 10;
    console.log('Added 10 health to', this.name);
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
  }
  speakWisdom() {
    this.drinkSake();
    console.log('What one programmer can do in one month, two programmers can do in two months.');
  }
}

let bob = new Ninja('Bob');

bob.showStats();
bob.drinkSake();
bob.showStats();

let steve = new Sensei('Steve');

steve.showStats();
steve.speakWisdom();
steve.showStats();
