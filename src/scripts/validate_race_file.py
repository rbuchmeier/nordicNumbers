import csv
from utils import LOCATIONS
from utils import get_file

def write_validated_race(data, filename):
    
    if 'gender' in data[0]:
        write_race(data, filename, True)
    else:
        write_race(data, filename)

def write_race(data, filename, gender=None):  # TODO: oh dear...the indenting of hell
    if gender == None:
        with open('races/' + filename, 'w') as csvfile:
            writer = csv.writer(csvfile)
            for row in data:
                writer.writerow(row)
    else:
        gender_index = data[0].index('gender')
        with open('races/boys_' + filename, 'w') as boyfile, open('races/girls_' + filename, 'w') as girlfile:
            boywriter = csv.writer(boyfile)
            girlwriter = csv.writer(girlfile)
            del data[0][gender_index]
            boywriter.writerow(data[0])
            girlwriter.writerow(data[0])
            gender_switch = 'M'
            for row in data:
                for i, entry in enumerate(row):
                    if i == gender_index:
                        gender_switch = row[i]
                        del row[i]
                if gender_switch == 'M':
                    boywriter.writerow(row)
                else:
                    girlwriter.writerow(row)
    
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
    if 'junior high' in filename.lower() or 'ms' in filename.lower():
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

def fix_header(header):
    field_alterations = {
        'first': ['first', 'first name'],
        'last': ['last', 'last name'],
        'team': ['team'],
        'gender': ['sex', 'gender'],
        'start': ['start', 'start time'],
        'finish': ['finish', 'finish time'],
        'time': ['time', 'total time'],
        'grade': ['grade', 'class']
    }
    for field_type in field_alterations:
        if header.lower() in field_alterations[field_type]:
            return field_type
    return header

def remove_useless_columns(data):
    required_skier_fields = ['first', 'last', 'time']
    optional_skier_fields = ['team', 'start', 'finish', 'grade']
    all_accepted_fields = required_skier_fields + optional_skier_fields
    headers = data[0]
    headers = [fix_header(header) for header in headers]
    for field in required_skier_fields:
        if field not in headers:
            raise AssertionError('required field: {} not in headers'.format(field))
    for field in optional_skier_fields:
        if field not in headers:
            print('warning: {} not in headers'.format(field))
    data[0] = headers
    bad_headers = get_useless_header_indexes(data, all_accepted_fields)
    for row in data:
        for i in sorted(bad_headers, reverse=True):
            del row[i]
    return data

                
def get_useless_header_indexes(data, all_accepted_fields):
    bad_header_indexes = []
    headers = data[0]
    for i, header in enumerate(headers):
        if header not in all_accepted_fields and header != 'gender':
            bad_header_indexes.append(i)
    return bad_header_indexes

def main():
    # ask for filename
    # Must make filename have location, raceDate, gender, skill, distance to best possible
    # Make headers match first, last, team, start, finish, time, grade
    # Split up file into Boys and Girls individual files
    filename = input('Please enter a filename: ')
    data = get_file(filename)
    new_filename = get_new_filename(filename)
    data = remove_useless_columns(data)
    write_validated_race(data, new_filename)

if __name__ == "__main__":
    main()

