name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider",
                   "giraffe", "ticks", "dolphins", "llamas"]


def comb(a, b):
    if len(a) >= len(b):
        return dict(zip(a, b))
    else:
        return dict(zip(b, a))


# Only works for lists of equal length:


def complicated(a, b):
    my_dict = {}
    for i in range(max(len(a), len(b))):
        my_dict.update({a[i]: b[i]})
    return my_dict


print comb(name, favorite_animal)
print complicated(name, favorite_animal)
