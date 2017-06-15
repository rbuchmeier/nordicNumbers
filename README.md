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
- React (Framework(/library))
- Redux (or some State-manager)
- d3.js (eventually, for charts)
- Bootstrap (*good* css is hard...)
- Scss (not necessary, may be fun)

### Back End:
- Node (Base platform, currently the webserver as well (which could be gone by nginx...but we probably don't need to get that fancy until we get bigger)
- MongoDB (Persistant Storage)
- Webpack (bundling)
- Mocha/Jasmine (Testing)
- Express (Routing)

### DevOps/DataScience
- Docker (for containerizing applications)
- Python (parse excel files) - Yes, Nordic Numbers was supposed to be "full stack"...but parsing anything except json and xml in javascript **SUCKS**

# Installing
## Github
- Make directory for nordic numbers and cd into it
- `git clone https://github.com/mariomarine/nordicNumbers`
## Node (React)
- Make sure npm and node are up to date (my current method for doing so below)
  - `node -v` or `npm -v`. Expected versions are npm 5 and node 8
  - `sudo npm cache clean -f`
  - `sudo npm install -g n`
  - `sudo n stable`
  - (Note: You may have to restart your terminal)
- Run `npm install`
- run `npm run build` to make sure everything installed right
  - A potential problem here is that the public folder does not exist. In which case: `mkdir src/client/public`
## Scripts (Python)
- Get virtualenv up and running with python 3
