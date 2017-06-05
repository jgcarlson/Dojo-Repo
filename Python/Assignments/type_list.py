test = ['magical unicorns', 19, 'hello', 98.98, 'world']

my_string = ''
my_sum = 0
my_bool = False
statement = "This list contains"
substrings = ['strings', 'numbers', 'booleans']
for each in test:
    if isinstance(each, str):

        if not any(x in substrings for x in statement):
            statement += ' strings'
        else:
            continue
    if isinstance(each, int or float):
        my_sum += each
        if not any(x in substrings for x in statement):
            statement += ' numbers'
        elif 'numbers' not in statement:
            statement += ' and numbers'
        else:
            continue
    if isinstance(each, bool):
        my_bool = each
        if not any(x in substrings for x in statement):
            statement += ' booleans'
        else:
            continue

print my_string
print my_sum
print my_bool
print statement
