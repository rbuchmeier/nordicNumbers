from add_race_to_db import get_file
from add_race_to_db import get_headers
from add_race_to_db import parse_file
from add_race_to_db import get_skier_info
from add_race_to_db import get_race_info
from add_race_to_db import write_race_to_db
from add_race_to_db import get_details_for
from add_race_to_db import get_details_with_re
from add_race_to_db import get_filename_details

import unittest
from mock import Mock
import mock

class AddRaceToDbTests(unittest.TestCase):

    def test_get_race_info(self):
        test_filename = 'casper_ms_5k_skate_boys_2017-02-18.csv'
        expected = {'location': 'casper', 'skill': 'Skate', 'distance': '5k', 'date': '2017-02-18', 'level': 'ms', 'gender': 'Boys'}
        actual = get_race_info(test_filename)
        self.assertEqual(expected, actual)

    def test_get_details_for(self):
        test_details = {}
        test_detail_type = 'level'
        test_options_list = 'ms', 'hs'
        test_file_details = ['casper', 'ms', '5k', '2017-02-18']
        expected = {'level': 'ms'}
        actual = get_details_for(test_details, test_detail_type, test_options_list, test_file_details)
        self.assertEqual(expected, actual)

    def test_get_details_for_with_existing_details(self):
        test_details = {'skill': 'skate'}
        test_detail_type = 'level'
        test_options_list = 'ms', 'hs'
        test_file_details = ['casper', 'ms', '5k', '2017-02-18']
        expected = {'skill': 'skate', 'level': 'ms'}
        actual = get_details_for(test_details, test_detail_type, test_options_list, test_file_details)
        self.assertEqual(expected, actual)

    def test_get_filename_details(self):
        test_filename = 'casper_ms_5k_2017-02-18.csv'
        expected_output = ['casper', 'ms', '5k', '2017-02-18']
        actual_output = get_filename_details(test_filename)

    def test_get_details_with_re_distance(self):
        test_details = {}
        test_detail_type = 'distance'
        test_regexp = '[0-9]+k'
        test_file_details = ['casper', 'ms', '5k', '2017-02-18']
        expected = {'distance': '5k'}
        actual = get_details_with_re(test_details, test_detail_type, test_regexp, test_file_details)
        self.assertEqual(expected, actual)

    def test_get_details_with_re_date(self):
        test_details = {}
        test_detail_type = 'date'
        test_regexp = '[0-9]{4}-[0-9]{2}-[0-9]{2}'
        test_file_details = ['casper', 'ms', '5k', '2017-02-18']
        expected = {'date': '2017-02-18'}
        actual = get_details_with_re(test_details, test_detail_type, test_regexp, test_file_details)
        self.assertEqual(expected, actual)

    def test_get_skier_info(self):
        test_skier = ['Ryan', 'Buchmeier', 'Lander', '15:30']
        test_heads = ['First', 'Last', 'Team', 'Time']
        expected = {'First': 'Ryan', 'Last': 'Buchmeier', 'Team': 'Lander', 'Time': 930}
        actual = get_skier_info(test_skier, test_heads)
        self.assertEqual(expected, actual)

if __name__ == '__main__':
    unittest.main()

