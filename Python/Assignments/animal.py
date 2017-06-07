class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def display_health(self):
        print 'This', self.name + '\'s health is', str(self.health) + '.'


class Dog(Animal):
    def __init__(self):
        super(Animal, self).__init__()
        self.health = 150

    def pet(self):
        self.health += 5


puppy = Dog('puppy')
