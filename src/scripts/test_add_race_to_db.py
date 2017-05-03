from add_race_to_db import get_file
from add_race_to_db import get_headers
from add_race_to_db import parse_file
from add_race_to_db import get_skier_info
from add_race_to_db import write_race_to_db
from add_race_to_db import get_details_for

import unittest
from mock import Mock
import mock

class AddRaceToDbTests(unittest.TestCase):

    def test_get_race_info(self):
        test_filename = 'casper_ms_5k_2017-02-18.csv'
        pass

    def test_get_details_for(self):
        test_details = {}
        test_detail_type = 'level'
        test_options_list = 'ms', 'hs'
        test_file_details = ['casper', 'ms', '5k', '2017-02-18']
        expected = {'level': 'ms'}
        actual = get_details_for(test_details, test_detail_type, test_options_list, test_file_details)
        self.assertEqual(expected, actual)

if __name__ == '__main__':
    unittest.main()

