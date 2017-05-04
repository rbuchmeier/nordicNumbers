from utils import LOCATIONS
from utils import parse_time_string_to_number_seconds
from utils import get_file
import re
import csv

import pymongo

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
    race_details = get_details_with_re(race_details, 'distance', '[0-9]+k', details)
    race_details = get_details_with_re(race_details, 'date', '[0-9]{4}-[0-9]{2}-[0-9]{2}', details)
    race_details = get_details_for(race_details, 'level', ['ms', 'hs'], details)
    race_details = get_details_for(race_details, 'gender', ['Boys', 'Girls'], details)
    race_details = get_details_for(race_details, 'skill', ['Skate', 'Classic'], details)

    return race_details

def get_details_with_re(race_details, detail_type, regexp, details):
    dist_re = re.compile(regexp)
    dist_matches = filter(dist_re.match, details)
    if len(dist_matches) > 0:
        race_details[detail_type] = dist_matches[0]
    return race_details
    

def get_details_for(race_details, detail_type, options_list, details):
    for option in options_list:
        if option.lower() in details:
            race_details[detail_type] = option
    return race_details


def get_headers(data):
    return data.pop(0)

def get_skier_info(skier, headers):
    result = {}
    for i, header in enumerate(headers):
        if header == 'Time':
            skier[i] = parse_time_string_to_number_seconds(skier[i])
        result[header] = skier[i]
    return result

def write_race_to_db(race_info, race_results):
    # Should check to see if race already exists
    client = pymongo.MongoClient()
    db = client.nndb
    race = race_info
    race['skiers'] = [result for result in race_results]
    db.races.posts.insert_one(race)
    

def main():
    # Parse data
    ## Time should be converted to Int
    ## First/Last names should be fixed where possible (user input?)
    # Enter information into db
    filename = input('Please enter a filename: ')
    data = get_file(filename)
    race = get_race_info(filename)
    headers = get_headers(data)
    race['skiers'] = [get_skier_info(skier, headers) for skier in data]
    write_race_to_db(race)

if __name__ == '__main__':
    main()

