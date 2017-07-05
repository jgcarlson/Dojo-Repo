function Ninja(name) {
  var speed = 3;
  var strength = 3;
  this.name = name;
  this.health = 100;
  this.useSpeed = function() {
    return speed;
  };
  this.useStrength = function() {
    return strength;
  };
}

Ninja.prototype.sayName = function() {
  console.log(this.name);
};

Ninja.prototype.showStats = function() {
  console.log(this.name);
  console.log(this.health);
  console.log(this.useSpeed());
  console.log(this.useStrength());
};

Ninja.prototype.drinkSake = function() {
  this.health += 10;
  console.log(this.health);
  return this;
};

Ninja.prototype.punch = function(ninja) {
  if (this instanceof Ninja) {
    ninja.health -= 5;
    console.log(ninja.name + ' was punched by ' + this.name + ' and lost 5 health.');
  } else {
    console.log(this.name + ' missed.');
  }
};

Ninja.prototype.kick = function(ninja) {
  if (this instanceof Ninja) {
    ninja.health -= this.useStrength() * 5;
    console.log(ninja.name + ' was kicked by ' + this.name + ' and lost ' + (this.useStrength() * 5) + ' health.');
  } else {
    console.log(this.name + ' missed.');
  }
};

var steve = new Ninja('Steve');
var bob = new Ninja('Bob');
console.log(steve);
console.log(steve.sayName());
console.log(steve.showStats());
steve.drinkSake().drinkSake().drinkSake();
console.log(steve.showStats());
bob.punch(steve);
console.log(steve.showStats());
steve.kick(bob);
console.log(bob.showStats());
