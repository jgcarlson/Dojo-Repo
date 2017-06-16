class Product(object):
    def __init__(self, price, item_name, brand, cost):
        self.price = price
        self.item_name = item_name
        self.brand = brand
        self.cost = cost
        self.status = 'is for sale'
        self.display_info()

    def sold(self):
        self.status = 'was sold'
        print 'This {} has been sold.'.format(self.item_name)
        self.display_info()

    def display_info(self):
        print 'This {} {} {} for ${} and cost the store ${}.'.format(self.brand, self.item_name, self.status, str(self.price), str(self.cost))

    def tax(self, tax):
        self.tax = tax
        self.total_cost = tax * self.price + self.price
        print 'The total for this', self.item_name, 'is', str(self.total_cost)

    def returned(self, reason):
        if reason == 'defective':
            self.price = 0
            print 'This', self.item_name, 'is defective.'
        elif reason == 'like new':
            self.status = 'is for sale'
            self.display_info()
        elif reason == 'opened':
            self.status = 'used and for sale'
            self.price = self.price - self.price / 5
            self.display_info()


yoyo = Product(10, 'Super Yoyo', 'Super Toy Company', 3)
dishwasher = Product(240, 'Cool Dishwasher', 'Maysomething', 110)
fork = Product(1, 'Normal Fork', 'The Fork Company', 0.2)

yoyo.sold()

dishwasher.tax(0.12)

yoyo.returned('opened')
