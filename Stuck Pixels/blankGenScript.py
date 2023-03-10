from PIL import Image, ImageDraw

size = (1280, 720)
color = (255,255,255)
mode='RGB'
img = Image.new(mode, size, color)


img.save(r"C:\Change\This\Path\To\stuck_pixels.png")


