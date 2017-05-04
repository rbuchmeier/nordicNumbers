LOCATIONS = ['casper', 'laramie', 'cody', 'jackson', 'lander', 'pinedale']

def parse_time_string_to_number_seconds(str_time):
    """ takes in a string (with seconds being after the last ':') and converts it into a number of seconds. """
    segments = str_time.split(':')
    seconds = float(segments.pop())
    minutes = int(segments.pop())
    seconds += minutes * 60
    if len(segments) == 1:
        hours = int(segments.pop())
        seconds += hours * 3600
    return seconds

def get_file(filename):
    with open(filename) as f:
        content = f.readlines()
    return [data.strip() for data in content]
