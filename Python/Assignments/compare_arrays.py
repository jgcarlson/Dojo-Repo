list_one = ['celery', 'carrots', 'bread']
list_two = ['celery', 'carrots', 'bread']

# basically saying: index for index, value in combined lists, if index == value
overlap = [i for i, j in zip(list_one, list_two) if i == j]

if len(overlap) == len(list_one) == len(list_two):
    print "The lists are the same."
else:
    print "The lists are not the same."
