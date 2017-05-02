import csv

def get_file(filename):
    ifile = open(filename, 'r')
    return ifile

def write_validated_race(f, details):
    ignore_columns = get_columns_to_ignore(f)
    new_header_names = get_better_header_names(f)
    write_race(f, ignore_columns, new_header_names)

def main():
    # ask for filename
    # try to figure out what race it goes to
    # prompt for confirmation and to fill in blanks
    # Try to 
    filename = input('Please enter a filename: ')
    f = get_file(filename)
    race_details = get_race_details(f)
    write_validated_race(f, race_details)

if __name__ == "__main__":
    main()

