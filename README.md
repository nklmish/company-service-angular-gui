# company-service-gui
GUI for demonstrating how to consume HAL based REST API via angular frontend.

##Docker :
You can either fetch pre-build image from docker hub via 

```docker pull nklmish/company-service-angular-gui```

Or build docker image locally (useful for development purpose)

```docker build -t nklmish/company-service-angular-gui .```

Once docker image is installed locally, we need to execute

```docker run -it -p 3000:3000 nklmish/company-service-angular-gui```

Depending on docker installation, we can find **dockerIpAddress** using one of the following commands:

1. Linux : ```docker inspect <containerId>```
2. Boot2docker : ```boot2docker ip```
3. Docker Toolbox : ```docker-machine ip <machine>```

Open browser and type **dockerIpAddress:3000** (Note: replace dockerIpAddress with actual IP address allocated to docker) 

## Manual Installation:

- Install Node
	- on OSX install [home brew](http://brew.sh/) and type `brew install node`
	- on Windows install [chocolatey](https://chocolatey.org/)

- Install gulp-cli
npm install --global gulp-cli

## Launch
Run
```
npm install
bower install
gulp serve
```

##Tech stack and familarity

- Angular JS
- angular-hal
- Bootstrap
- Gulp (for build automation)
- Bower (package manager)
- Docker
- npm (for installing necessary dependencies)
- toastr

# TODO
- Unit test for front-end
- GUI (fix css styling)
- Improve gulp file
