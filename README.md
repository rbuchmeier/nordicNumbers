# Nordic Numbers
## Why
Nordic Numbers is intended to be a WebApp to enable Lander Skiers/Coaches/Parents to better analyze a skier's results.

## Who
Originally this was Ryan Buchmeier's project. But, since starting to mentor Josh Goodrich, he is also invited to collaborate. Also, Brennen Mazur is also invited as a way to hone his skills and start developing a portfolio.
Soon, I intend to make this open source, but I would like to get the basic stack up and running first

## The Result
### Minimum
At minimum, we want the following functionality:
- %-back on ski times
- Look at multiple, specific skiers' times/%-back over multiple races
- Enter a cleaned results sheet and have it entered into the system
### Goals
Now, you can be pretty basic with the above, so we would like to have the following:
- A decent UI (It should be Norm-accessable)
- A decent UX (Parents should enjoy this)
- Realiable, reasonably fast
### Dreams
We are developers, making dreams come true is what we do. Here are some of ours:
- Graphics! Charts! Rainbows!
- Information can be automatically updated to NordicNumbers (maybe even like live-timing or splits?!?)

## The Stack
### Front End
- React (Framework(/library)
- Redux (or some State-manager)
- d3.js (eventually, for charts)
- Bootstrap (*good* css is hard...)
- Scss (not necessary, may be fun)

### Back End:
- Node (Base platform, currently the webserver as well (which could be gone by nginx...but we probably don't need to get that fancy until we get bigger)
- MongoDB (Persistant Storage)
- Webpack (bundling)
- Mocha/Jasmine (Testing)
- Yark (Package Management)
- Express (Routing)

### DevOps/DataScience
- Docker (for containerizing applications)
- Python (parse excel files) - Yes, Nordic Numbers was supposed to be "full stack"...but parsing anything except json and xml in javascript **SUCKS**
