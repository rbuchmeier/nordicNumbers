from validate_race_file import get_file
from validate_race_file import write_validated_race
from validate_race_file import get_level
from validate_race_file import get_location
from validate_race_file import get_skill
from validate_race_file import get_distance
from validate_race_file import get_date

import unittest
from mock import Mock
import mock

class ValidateRaceTests(unittest.TestCase):

    def test_get_file(self):
        pass

    def test_get_level(self):
        test_filename = 'Junior High Race'
        expected = 'ms_'
        actual = get_level(test_filename)
        self.assertEqual(expected, actual)

    def test_get_location(self):
        test_filename = 'Casper Race'
        expected = 'casper_'
        actual = get_location(test_filename)
        self.assertEqual(expected, actual)

    def test_get_skill(self):
        test_filename = 'Casper Skate Race'
        expected = 'skate_'
        actual = get_skill(test_filename)
        self.assertEqual(expected, actual)

    @unittest.skip('finish function, then unskip')
    def test_get_distance(self):
        test_filename = 'Junior High 4k Race'
        expected = '4k_'
        actual = get_distance(test_filename)
        self.assertEqual(expected, actual)

    @unittest.skip('finish function, then unskip')
    def test_get_date(self):
        test_filename = 'MS Lander 2017-02-18'
        expected = '2017-02-18_'
        actual = get_date(test_filename)
        self.assertEqual(expected, actual)

if __name__ == '__main__':
    unittest.main()

