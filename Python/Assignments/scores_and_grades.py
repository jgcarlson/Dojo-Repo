import random


def grade(num):
    if 60 < num < 70:
        print 'Score: ' + str(num) + '; Your grade is D.'
    elif 70 < num < 80:
        print 'Score: ' + str(num) + '; Your grade is C.'
    elif 80 < num < 90:
        print 'Score: ' + str(num) + '; Your grade is B.'
    else:
        print 'Score: ' + str(num) + '; Your grade is A.'

        
for i in range(1, 11):
    grade(random.randint(60, 100))
