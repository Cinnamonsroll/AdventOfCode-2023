with open("input.txt", "r", encoding="utf-8") as file:
    input_data = file.read()

nums = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}

data = sum(
    int(str(digits[0]) + str(digits[-1]))
    for line in input_data.split("\n")
    for index, char in enumerate(line)
    if (remaining_substring := line[index:]).startswith(word := next((word for word, value in nums.items() if remaining_substring.startswith(word)), None))
    or char.isdigit()
    if (digits := [nums[word] if remaining_substring.startswith(word) else int(char) for word, value in nums.items()] + [int(char)])
)

print(data)
