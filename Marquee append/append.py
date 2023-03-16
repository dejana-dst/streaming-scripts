import random

image_file = ":)"
marquee_file = "test.html"


with open(marquee_file, "a") as myfile:
    sa = str(random.randint(5,50))
    sd = str(random.randint(5,80))
    posleft = str(random.randint(2,98))
    myfile.write('<marquee behavior=scroll direction=down scrollamount='+sa+'scrolldelay='+sd+'''height=720 style='position:absolute; left:'''+posleft+'''%;height:720px;'><img src="'''+image_file+ '''" border=0></marquee>'''+ "\n")