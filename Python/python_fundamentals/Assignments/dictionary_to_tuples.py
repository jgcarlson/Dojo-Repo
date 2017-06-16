my_dict = {
    "Speros": "(555) 555-5555",
    "Michael": "(999) 999-9999",
    "Jay": "(777) 777-7777"
}


def tup(dic):
    cont = []
    for i, j in dic.viewitems():
        cont.append((i, j))
    return cont


print(tup(my_dict))
