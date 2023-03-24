import os
import random


def generate_colour():
    rand_color = random.choices(range(256), k=3)
    return str(rand_color[0]+rand_color[1]*256+rand_color[2]*256*256)



dir_base = r'C:\Users\Name\SOUNDS'

soundlist = open('soundlist.txt', 'r')
llines = soundlist.readlines()

color = generate_colour()
game=''
for line in llines:
    line2 = line.strip().replace(dir_base,"")
    #print(line2)
    lines = line2.split('\\')
    #print(lines)
    if (lines[1]!=game):
        game = lines[1]
        print(generate_colour())    
