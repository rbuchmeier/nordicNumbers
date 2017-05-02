POSSIBLE_HEADERS = {
    "gender": ["gender", "sex"],
    "last": ["last", "last name"],
    "first": ["first", "first"],
    "team": ["team"],
    "start": ["start", "start time"],
    "finish": ["finish", "finish time"],
    "time": ["total time", "time"],
    "grade": ["grade", "class"]
}

def main():
    # Parse data
    ## Time should be converted to Int
    ## First/Last names should be fixed where possible (user input?)
    # Enter information into db
    filename = input('Please enter a filename: ')
    f = get_file(filename)
    race = get_race_info()
    headers = get_headers(f)
    race = parse_file(f)
    for skier in data:
        race['skiers'].append(get_skier_info(skier, headers))
    write_race_to_db(race)

if __name__ is '__main__':
    main()

