a = [2, 4, 10, 16]


def b(x, y):
    for i in range(len(x)):
        x[i] *= y
    return x


def layered_multiples(arg):
    for c in range(len(arg)):
        d = arg[c]
        arg[c] = 1
        arg[c] = str(arg[c]) * d
    return arg


print layered_multiples(b(a, 5))
