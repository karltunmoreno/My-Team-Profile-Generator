##  My-Team-Profile-Generator

![Ss](https://karltunmoreno.github.io/My-Portfolio/assets/images/team%20profile.jpg)

______________________________________________________________________________________________________________________________________________________________

### User Story


AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles


### Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

____________________________________________________________________________________________________________________________________________________________

## What was done

Using NODE and ES6 created and a cli app that asks you about your team and prints out a quick HTML file so you can show case it.

### Instalation

- Clone or Fork the Repo to your computer.
- Install NODEjs.
- Use NPM to install inquirer and jest:

```

npm install inquirer && jest 

```

### Usage

Run the following from the directory where you have downloaded the repo.

```

node index.js

```

Once the program starts answer all the relevant questions until the program finished.

The new team profile will be sotred in the dist folder and you can copy it to your working site.

### Video of Usage


https://www.youtube.com/watch?v=0E-6lsa0wlk&t=14s


















