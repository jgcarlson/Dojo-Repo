def mult():
    sieve = [True] * (100001)
    for p in range(2, 100001):
        if (sieve[p]):
            print 'Foo'
            for i in range(p, 100001, p):
                sieve[i] = False
        elif p**0.5 % 1 == 0:
            print 'Bar'
        else:
            print p


mult()
