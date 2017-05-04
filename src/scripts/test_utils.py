from utils import parse_time_string_to_number_seconds

import unittest
from mock import Mock
import mock

class UtilsTests(unittest.TestCase):

    def test_parse_minutes_to_seconds(self):
        test_time = '11:00'
        expected = 660
        actual = parse_time_string_to_number_seconds(test_time)
        self.assertEqual(expected, actual)

    def test_parse_seconds_to_seconds(self):
        test_time = '00:45'
        expected = 45
        actual = parse_time_string_to_number_seconds(test_time)
        self.assertEqual(expected, actual)

    def test_parse_decimals_to_seconds(self):
        test_time = '10:30.5'
        expected = 630.5
        actual = parse_time_string_to_number_seconds(test_time)
        self.assertEqual(expected, actual)

    def test_parse_house_to_seconds(self):
        test_time = '1:10:30'
        expected = 4230
        actual = parse_time_string_to_number_seconds(test_time)
        self.assertEqual(expected, actual)

if __name__ == '__main__':
    unittest.main()
