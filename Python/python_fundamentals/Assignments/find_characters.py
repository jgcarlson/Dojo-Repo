word_list = ['hello', 'world', 'my', 'name', 'is', 'Anna']
char = 'o'
newList = []
for each in word_list:
    for x in each:
        if x == char:
            newList.append(each)

print newList
