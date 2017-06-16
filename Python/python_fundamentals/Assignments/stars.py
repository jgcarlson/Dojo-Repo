def draw_stars(arr_list):
    for i in range(len(arr_list)):
        if isinstance(arr_list[i], int):
            print '*' * arr_list[i]
        elif isinstance(arr_list[i], str):
            print arr_list[i][0].lower() * len(arr_list[i])


# x = [4, 6, 1, 3, 5, 7, 25]
x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

draw_stars(x)
