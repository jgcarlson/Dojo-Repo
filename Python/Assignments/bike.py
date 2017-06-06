class Bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def display_info(self):
        print 'This bike costs ${}, can go {}, and has gone {} miles.'.format(str(self.price), self.max_speed, str(self.miles))

    def ride(self):
        print 'Riding'
        self.miles += 10

    def reverse(self):
        print 'Reversing'
        self.miles -= 5


red_bike = Bike(300, '100mph')
red_bike.ride()
red_bike.ride()
red_bike.ride()
red_bike.reverse()
red_bike.display_info()
print '-' * 20
blue_bike = Bike(75, '40mph')
blue_bike.ride()
blue_bike.ride()
blue_bike.reverse()
blue_bike.reverse()
blue_bike.display_info()
print '-' * 20
green_bike = Bike(20, '5mph')
green_bike.reverse()
green_bike.reverse()
green_bike.reverse()
green_bike.display_info()
