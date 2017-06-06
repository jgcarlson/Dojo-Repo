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


red = Car(20000, '20mph', 'full', 140000)
