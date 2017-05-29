# Instructions
## Add new race to db

1. Download race as .csv from (High Plains Nordic)[http://www.highplainsnordic.org/race-results]

2. Move race file to ./src/scripts/races

3. Do initial cleaning on race file:
- If you are opening in VIM, use the following commands:
-- `%s/\([1-8]\)\s\(Boys\|Girls\)/\1,\2` (Also be sure to add a header for gender if necessary) (someday may need to be aware of K or 9 as a grade)
-- `%s/\s,/,/g` (gets rid of some random spaces)

3. Run `python validate_race_file.py`

4. Follow any steps as prompted by the py file (be sure to use the same formats as directed). If the program says there are any errors, you must fix the error tthen try again.

5. After the py script has run, you should see 2 new race files in races/ corresponding to your input. If you do, you may now delete the original csv file.

6. Look through file to make sure there are no obvious flaws in the data (such as lines with just ,,,,, or Kindergarten as a grade, no Boys sneaking in to the girls file (hehe), etc...)

7. Be sure you are shelled into the server, then run: `python add_race_to_db.py` (be sure to enter the names of both files (as there should be one for boys and one for girls)

8. Confirm both files were indeed added to db (I would look for them on the nordic Numbers website)



## Potential Issues
1. If you are getting various errors when you input the race filename, be sure you have python3 installed.
