import re


digit_mapping = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
}

with open("input.txt", "r") as file:

    data = sum(
        digit_mapping[
            re.search("(" + "|".join(digit_mapping.keys()) + ")", line).group(1)
        ]
        * 10
        + digit_mapping[
            re.search("(?s:.*)(" + "|".join(digit_mapping.keys()) + ")", line).group(1)
        ]
        for line in file
    )

print(data)
