import os

directory = r'C:\Users\Name\SOUNDS'



file_paths = []  # List which will store all of the full filepaths.

# Walk the tree.
for root, directories, files in os.walk(directory):
    for filename in files:
        # Join the two strings in order to form the full filepath.
        filepath = os.path.join(root, filename)
        file_paths.append(filepath)  # Add it to the list.

with open('soundlist.txt', 'a') as the_file:
    for fp in file_paths:
        the_file.write(fp)
        the_file.write('\n')

