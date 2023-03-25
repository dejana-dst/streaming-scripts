import os
import random
import json

def generate_colour():
    rand_color = random.choices(range(256), k=3)
    return str(rand_color[0]+rand_color[1]*256+rand_color[2]*256*256)



dir_base = r'C:\Users\Name\SOUNDS'

with open("examples2.json", "r") as read_file:
    button_base = json.load(read_file)


print(button_base['color'])
print(button_base['command_list'][0]['b0'])


deck_start = """
{
  "background_color": 4210752.0,
  "on": 1.0,
  "grid_y": 50.0,
  "snap_grid": true,
  "lb_version": "2.06.3",
  "background_image": "",
  "encrypted": false,
  "adaptive_resizing": true,
  "unique_id": "20220317221456867058912",
  "button_list": [
"""

deck_end = """
  ],
  "deck_name": "sounds",
  "grid_x": 50.0,
  "stretch": 0.0
}

"""


deck = deck_start











soundlist = open('soundlist.txt', 'r')
llines = soundlist.readlines()

color = generate_colour()
game=''

for count, line in enumerate(llines):
    line2 = line.strip().replace(dir_base,"")
    lines = line2.split('\\')
    if (lines[1]!=game):
        game = lines[1]
        color = generate_colour()   

    button_base['color']= color
    button_base['command_list'][0]['b0'] = line
    button_base['x']=count%50*0.02
    button_base['y']=count//50*0.02  
    button_base['text']=lines[2]
    button_base['triggers'][0]['message'] = "!"+lines[2]  

    deck +=button_base+","

deck = deck[:-1]+deck_end

with open('New_soundsdeck.json', 'w') as the_file:
    the_file.write(deck)