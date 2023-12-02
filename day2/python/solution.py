def is_valid(colors, max_colors):
    return all(colors[i] <= max_colors[i] for i in range(len(colors)))

def main():
    with open("input.txt", "r") as file:
        lines = file.readlines()

    sum_result = 0
    max_colors = [12, 14, 13]

    for line in lines:
        colors = {"red": 0, "blue": 0, "green": 0}
        valid = True

        parts = line.split(":")
        game_id = int(parts[0].split(" ")[1])

        for round_data in parts[1].split(";"):
            data = [x.strip() for x in round_data.split(",")]

            for item in data:
                val, color = item.split(" ")
                colors[color] += int(val)

            if not is_valid(list(colors.values()), max_colors):
                valid = False
                break

            colors = {"red": 0, "blue": 0, "green": 0}

        if valid:
            sum_result += game_id

    print(sum_result)

if __name__ == "__main__":
    main()
