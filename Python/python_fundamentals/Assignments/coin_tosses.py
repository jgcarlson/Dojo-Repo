import random

print random.randrange(1, 3, 1)


def toss(times):
    heads = 0
    tails = 0
    for i in range(1, times + 1):
        coin = random.randrange(1, 3, 1)
        if coin == 1:
            heads += 1
            print 'Attempt #' + str(i) + ': Throwing a coin... It\'s heads! Got ' + str(heads) + ' head and ' + str(tails) + ' tails so far'
        elif coin == 2:
            tails += 1
            print 'Attempt #' + str(i) + ': Throwing a coin... It\'s tails! Got ' + str(heads) + ' head and ' + str(tails) + ' tails so far'


toss(5000)
