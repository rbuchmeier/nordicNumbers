import csv
from utils import LOCATIONS
from utils import get_file
REQUIRED_FIELDS = ['location', 'date', 'gender']

def write_validated_race(data, details, headers_to_avoid):
    if should_split_genders():
        write_race(data, details, headers_to_avoid, 'Boys')
        write_race(data, details, headers_to_avoid, 'Girls')
    else:
        write_race(data, details, headers_to_avoid)

def write_race(data, details, bad_headers):
    pass

def get_new_filename(filename):
    new_filename = ''
    new_filename += get_level(filename)
    new_filename += get_location(filename)
    new_filename += get_skill(filename)
    new_filename += get_distance(filename)
    new_filename += get_date(filename)
    new_filename = new_filename.rstrip('_') + '.csv'
    return new_filename

def get_level(filename):
    if 'junior high' in filename.lower():
        return 'ms_'
    else:
        level = input('High School (hs) or Middle School (ms): ')
        assert (level.lower() in ['hs', 'ms'])
        return level.lower() + '_'

def get_location(filename):
    for location in LOCATIONS:
        if location.lower() in filename.lower():
            return location.lower() + '_'
    location = input('Where did this take place? (eg casper, lander, etc...)')
    assert(location in LOCATIONS)
    return location.lower() + '_'

def get_skill(filename):
    if 'skate' in filename.lower():
        return 'skate_'
    elif 'classic' in filename.lower():
        return 'classic_'
    else:
        skill = input('What skill type? (skate or classic?): ')
        assert(skill.lower() in ['skate', 'classic'])
        return skill.lower() + '_'

def get_distance(filename):
    distance = input('What distance? (5k, 10k, etc...): ')
    return distance.lower() + '_'

def get_date(filename):
    date = input('What date? (e.g. 2017-02-18): ')
    return date.lower() + '_'
    

def main():
    # ask for filename
    # Must make filename have location, raceDate, gender, skill, distance to best possible
    # Make headers match first, last, team, start, finish, time, grade
    # Split up file into Boys and Girls individual files
    filename = input('Please enter a filename: ')
    data = get_file(filename)
    race_details = get_new_filename(filename)
    useless_header_indexes = get_useless_header_indexes(data)
    write_validated_race(data, race_details, useless_header_indexes)

if __name__ == "__main__":
    main()

