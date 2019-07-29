# MHC Frontend Developer Test using Redux & Redux-Thunk (by Hendri Agustino)

This project is a coding test / developer test which I did for MHC. This is a frontend web application which consists of communication with a live database.

**Project Scope** :
- Design and develop a web application that will facilitate the online management of doctors, clinics and network. 
- All of which requires CRUD menus that have responsible and appropriate validations (e.g. names should not have numbers, etc.)
- There should be an admin login (you can use the User APIs to create via Postman – note when creating password – its bcrypt 10 cycles – and login via your frontend). 
- Admins will then land on a dashboard of a few numbers, e.g. Total Number of Providers, Total Number of Personnel, Total Number of Doctors. On the left, there should be a navigation pane with these headers – Dashboard (with the numbers), Personnel Manager, Provider Manager, Facilities Manager. 
- The admin can then view a list of Personnel in the Personnel Manager and delete / view more / create more. Same goes for all the other managers.

# Installation Instructions
## REQUIREMENTS

For development, you will need to install `Node.js` on your environment.

#### Node installation on OS X

1. Open the Terminal App and type brew install node.
2. Wait while Homebrew helps you download and install all the needed files for you to use.

After installing, you can check whether Node.js has been installed by typing `node-v` in terminal. Also to see if NPM is installed already, by typing `npm -v`

#### Node installation on Linux

On terminal, type in : 
`sudo apt-get install nodejs`

#### Node installation on Windows 

Go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and follow all the steps to download.

## INSTALL

`$ git clone git@github.com:hendriagustino/mhc-frontend-test.git`,
`$ cd mhc-frontend-test`,
`$ npm install`

# START 

`$ npm start`

# Installation Instructions
## First when running the application, we will be directed to the login form / authentication page
![login_form.png](https://github.com/hendriagustino/mhc-frontend-test/images/login_form.png)

## Whenever we visit any links other than this login form and if we are still unauthenticated, we will be redirected to this "Eror 404 page"
![error404.png](https://bitbucket.org/repo/E6o9zK4/images/4061459960-error404.png)

## Below is the Dashboard after logging in. Here we can see a series total number of Providers, Personnels, and Doctors
![dashboard.png](https://bitbucket.org/repo/E6o9zK4/images/663660014-dashboard.png)

## Personnel Manager page contains all the personnel(s) in the database, on this page we can Add Personnel, View Personnel and Delete Personnel
![personnel_manager.png](https://bitbucket.org/repo/E6o9zK4/images/3926128836-personnel_manager.png)

## Adding Personnel Form (not yet working)
![add_personnel_form.png](https://bitbucket.org/repo/E6o9zK4/images/2483786525-add_personnel_form.png)

## View Personnel Page
![:personnel:1.png](https://bitbucket.org/repo/E6o9zK4/images/4222815693-:personnel:1.png)

## Delete Personnel confirmation modal (clicking yes will then execute deletion of a personnel data)
![delete_personnel.png](https://bitbucket.org/repo/E6o9zK4/images/3377187143-delete_personnel.png)

## Facility Manager page contains all the facilities in the database, on this page we can Add Facility, View Facility and Delete Facility
![facility_manager.png](https://bitbucket.org/repo/E6o9zK4/images/3546183199-facility_manager.png)

## Adding Facility Form (not yet working)
![add_facility.png](https://bitbucket.org/repo/E6o9zK4/images/1767570932-add_facility.png)

## View Facility Page
![:facility:1.png](https://bitbucket.org/repo/E6o9zK4/images/1098919975-:facility:1.png)

## Delete Facility confirmation modal (clicking yes will then execute deletion of a facility data)
![delete_facility.png](https://bitbucket.org/repo/E6o9zK4/images/1332684451-delete_facility.png)

## Provider Manager page contains all the facilities in the database, on this page we can Add Provider, View Provider and Delete Provider
![provider_manager.png](https://bitbucket.org/repo/E6o9zK4/images/1839215650-provider_manager.png)

## Adding Provider Form (not yet working)

## View Provider Page
![:provider:1.png](https://bitbucket.org/repo/E6o9zK4/images/1194875318-:provider:1.png)

## Delete Provider confirmation modal (clicking yes will then execute deletion of a provider data)
![delete_provider.png](https://bitbucket.org/repo/E6o9zK4/images/3428876578-delete_provider.png)

## Logout button to finish user session
![logout.png](https://bitbucket.org/repo/E6o9zK4/images/2690395297-logout.png)
