class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100
        self.display_health()

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def display_health(self):
        print self.name + '\'s health is', str(self.health) + '.'


class Dog(Animal):
    def __init__(self, name):
        super(Animal, self).__init__()
        self.name = name
        self.health = 150

    def pet(self):
        self.health += 5
        return self


class Dragon(Animal):
    def __init__(self, name):
        super(Animal, self).__init__()
        self.name = name
        self.health = 170

    def fly(self):
        self.health -= 10
        return self

    def display_health(self):
        print self.name + '\'s health is', str(self.health) + '.'
        print 'I AM A DRAGON.'


bob = Dog('Bob')
print bob.name
bob.walk().walk().walk().run().run().pet().display_health()
larry = Dragon('Larry')
print larry.name
larry.walk().run().run().fly().fly().display_health()

# Doesn't work:
# bob.fly()
# larry.pet()
