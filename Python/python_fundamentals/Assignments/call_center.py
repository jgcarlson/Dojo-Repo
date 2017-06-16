from random import randint


class Call(object):
    i = 100

    def __init__(self, name, phone_number, time, reason):
        Call.i += 1
        self.name = name
        self.number = phone_number
        self.time = time
        self.reason = reason
        self.call_id = self.i
        Super_Call_Center.call_list.append(self.name)

    def info(self):
        print '{} ({}) called at {} about {}. Call ID is {}'.format(self.name, self.number, str(self.time), self.reason, str(self.call_id))


class Call_Center(object):
    def __init__(self):
        self.call_list = []
        self.queue_size = len(self.call_list)


Super_Call_Center = Call_Center()

call1 = Call('Bob', '818-555-9876', '3pm', 'needing something fixed')
call2 = Call('Joe', '818-555-9876', '3pm', 'needing something fixed')
call3 = Call('Yelena Garon', '(209)948-5006',
             '20/09/13 13:12', 'needing something fixed')
call4 = Call('Phillip Bastarache', '(617)827-1752',
             '20/09/13 13:27', 'needing something fixed')
call5 = Call('Margrett Redford', '(512)890-1702',
             '20/09/13 13:37', 'needing something fixed')
call6 = Call('Quinn Mcnellis', '(512)758-7729',
             '20/09/13 13:40', 'needing something fixed')
call7 = Call('Elana Johnston', '(254)261-1205',
             '20/09/13 13:56', 'needing something fixed')
call8 = Call('Jeffie Stanley', '(406)747-5771',
             '20/09/13 13:45', 'needing something fixed')
call9 = Call('Tamar Longworth', '(563)605-8575',
             '20/09/13 13:36', 'needing something fixed')
call10 = Call('Laure Madruga', '(516)439-6351',
              '20/09/13 13:29', 'needing something fixed')
call11 = Call('Hollie Furlow', '(831)455-1210',
              '20/09/13 13:25', 'needing something fixed')
call12 = Call('Katelin Stahler', '(430)981-8770',
              '20/09/13 13:20', 'needing something fixed')
call13 = Call('Cammie James', '(541)633-9794',
              '20/09/13 13:19', 'needing something fixed')
call14 = Call('Zachery Chen', '(432)400-1451',
              '20/09/13 13:16', 'needing something fixed')
call15 = Call('Gaye Chang', '(478)689-1201',
              '20/09/13 13:03', 'needing something fixed')
call16 = Call('Kendall Shack', '(339)309-7138',
              '20/09/13 13:01', 'needing something fixed')
call1.info()
call2.info()
call3.info()
call4.info()
call5.info()
call6.info()
call7.info()
call8.info()
call9.info()
call10.info()
call11.info()
call12.info()
call13.info()
call14.info()
call15.info()
call16.info()

print Super_Call_Center.call_list
print Super_Call_Center.queue_size
