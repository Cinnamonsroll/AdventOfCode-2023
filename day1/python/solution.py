with open("./input.txt", "r") as file:
    input_text = file.read()

import re

data = sum(
    int(digits[0] + digits[-1]) if digits else 0
    for line in input_text.split("\n")
    if (digits := re.findall(r"\d", line))
)

print(data)
