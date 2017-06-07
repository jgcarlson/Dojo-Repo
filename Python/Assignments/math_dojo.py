class MathDojo(object):
    def __init__(self):
        self.total = 0

    def add(self, *num):
        self.num = num
        for i in num:
            if isinstance(i, int):
                self.total += i
            elif isinstance(i, list):
                self.total += sum(i)
            elif isinstance(i, tuple):
                self.total += sum(list(i))
        return self

    def sub(self, *num):
        for i in num:
            if isinstance(i, int):
                self.total -= i
            elif isinstance(i, list):
                self.total -= sum(i)
            elif isinstance(i, tuple):
                self.total -= sum(list(i))
        return self


md = MathDojo()

md.add([1], 3, 4).add([3, 5, 7, 8], [2, 4.3, 1.25],
                      (1, 2), (1, 3), (2, 3)).sub(2, [2, 3], [1.1, 2.3])
print md.total
