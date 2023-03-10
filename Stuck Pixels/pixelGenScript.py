from PIL import Image, ImageDraw
import random
#import numpy as np
img = Image.open(r"C:\Change\This\Path\To\stuck_pixels.png")

size = (1280, 720)
color = (255,255,255)
mode='RGB'
#im = Image.new(mode, size, color)
w=random.randint(0, 1280)
h=random.randint(0, 720)

data = img.getpixel((w,h))

       #layout dimension
while ((w>60 and w<850 and h>68 and h<640) or (w>914 and w<1252 and h>48 and h<294)) or (data[0]!=255 or data[1]!=255 or data[2]!=255):
    w=random.randint(0, 1280)
    h=random.randint(0, 720)
    data = img.getpixel((w,h)) 
      
img.putpixel((w,h),(255,0,0))
img.save(r"C:\Change\This\Path\To\stuck_pixels.png")



