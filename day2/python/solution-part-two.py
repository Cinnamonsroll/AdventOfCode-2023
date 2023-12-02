def main():
    with open("input.txt", "r") as file:
        lines = file.readlines()

    sum_of_powers = 0

    for line in lines:
        colors = {"red": 0, "blue": 0, "green": 0}
        max_set = {"red": 0, "blue": 0, "green": 0}

        parts = line.split(":")
        game_id = int(parts[0].split(" ")[1])

        for round_data in parts[1].split(";"):
            data = [x.strip() for x in round_data.split(",")]

            for item in data:
                val, color = item.split(" ")
                num = int(val)
                if num > colors[color]:
                    colors[color] = num

            max_set["red"] = max(max_set["red"], colors["red"])
            max_set["green"] = max(max_set["green"], colors["green"])
            max_set["blue"] = max(max_set["blue"], colors["blue"])

        power = max_set["red"] * max_set["green"] * max_set["blue"]
        sum_of_powers += power

    print("Sum of Powers:", sum_of_powers)

if __name__ == "__main__":
    main()
