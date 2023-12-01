import re

with open("input.txt", "r", encoding="utf-8") as file:
    input_data = file.read()

sum_result = sum(
    int(match.group(0)[0]) + int(match.group(0)[-1])
    for line in input_data.split("\n")
    if (match := re.search(r"\d", line))
)

print(sum_result)
