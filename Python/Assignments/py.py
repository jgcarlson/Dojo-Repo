from collections import OrderedDict

numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

webster = zip(rom, numArr)
print OrderedDict.fromkeys(rom, numArr)
