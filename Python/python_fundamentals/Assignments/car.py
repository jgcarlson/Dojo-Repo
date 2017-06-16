class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price < 10000:
            self.tax = '0.12'
        else:
            self.tax = '0.15'
        self.display_all()

    def display_all(self):
        print "Price: {}, Speed: {}, Fuel: {}, Mileage: {}, Tax: {}".format(str(self.price), self.speed, self.fuel, str(self.mileage), self.tax)


red = Car(20000, '80mph', 'full', 140000)
blue = Car(2000, '80mph', 'half full', 10000)
green = Car(1000, '99mph', 'mostly full', 126000)
blue = Car(90000, '120mph', 'full', 567)
blue = Car(200, '0mph', 'empty', 225000)
blue = Car(12000, '9mph', 'almost empty', 40000)
