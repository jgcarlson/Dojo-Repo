test = ['magical unicorns', 19, 'hello', 98.98, 'world']

my_string = ''
test_string = False
my_sum = 0
test_sum = False
my_bool = False
test_bool = False
statement = 'This list contains'
substrings = ['strings', 'numbers', 'booleans']

for each in test:
    if isinstance(each, str):
        my_string = my_string + ' ' + each
        test_string = True
    elif isinstance(each, int):
        my_sum += each
        test_string = True
    elif isinstance(each, bool):
        my_bool = False
        test_bool = True
    else:
        break

if test_string == True:
    statement += ' strings'
if test_string == True:
    statement += ' numbers'
if test_bool == True:
    statement += ' booleans'

print my_string
print my_sum
print my_bool
print statement
