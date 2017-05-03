from utils import LOCATIONS
import re

def get_file(filename):
    pass

def get_filename_details(filename):
    filename = filename.split('.')[0]
    return filename.split('_')

def get_race_info(filename):
    details = get_filename_details(filename)
    race_details = {}
    # Location
    for location in LOCATIONS:
        if location in details:
            race_details['location'] = location
    # Distance
    dist_re = re.compile('[0-9]+k')
    dist_matches = filter(dist_re.match, details)
    if len(dist_matches) > 0:
        race_details['distance'] = dist_matches.group()
    # Date
    dist_re = re.compile('[0-9]{4}-[0-9]{2}-[0-9]{2}')
    dist_matches = filter(dist_re.match, details)
    if len(dist_matches) > 0:
        race_details['date'] = dist_matches.group()
    # School Level
    race_details = get_details_for(race_details, 'level', ['ms', 'hs'], details)
    # Gender
    race_details = get_details_for(race_details, 'gender', ['Boys', 'Girls'], details)
    # Skill type
    race_details = get_details_for(race_details, 'skill', ['Skate', 'Classic'], details)

    race_details = get_missing_info(race_details)

    return race_details

def get_details_for(race_details, detail_type, options_list, details):
    for option in options_list:
        if option.lower() in details:
            race_details[detail_type] = option
    return race_details

def get_missing_info(race_details):
    pass

def get_headers(f):
    pass

def parse_file(race_file):
    pass

def get_skier_info(skier, headers):
    pass

def write_race_to_db(race):
    pass

def main():
    # Parse data
    ## Time should be converted to Int
    ## First/Last names should be fixed where possible (user input?)
    # Enter information into db
    filename = input('Please enter a filename: ')
    f = get_file(filename)
    race = get_race_info(filename)
    headers = get_headers(f)
    race = parse_file(f)
    for skier in data:
        race['skiers'].append(get_skier_info(skier, headers))
    write_race_to_db(race)

if __name__ is '__main__':
    main()

