# Websocket Arcade

Pick some fun, simple game for two (or more?) players.

Then, turn it into a Websocket-based app that the players can play from different computers!

## Hard Requirements

- The app has to incorporate Node/Express, MongoDB, and Backbone
- The data must persist: a user can leave the page in which the game is being played, return, and resume playing where they left off
- There should be *one* master version of the app, stored in a single Github repository. (Remember all teammates can fork the repository to add it to their Github portfolios.)

## Suggestions

- Tic Tac Toe
- Connect 4
- Battleship
- Checkers
- Reversi
- High Card
- Dueling cursors
- Hangman (Think: Pixel Art)
- Pictionary

## How do you start?

#### Elect a leader... Maybe!
Some groups work well when they designate a person whose job isn't to be The Decider, nor The Do-er of Stuff, but rather to be the Official Checker of Whether Everyone's Contributing Equally -- a role which requires no coding experience whatsoever. Some groups don't work well this way. The important thing is to not be afraid to talk about it.

#### Agree on Github
Whose repository will be the master? Who will be working on which files, to prevent merge conflicts? Will you be branching, forking, or both?

#### Scope the game
Begin by assuming the players will play by the rules, and that they'll know when the game is over. Don't worry about, say, preventing players from going out of turn or putting their pieces in the wrong places until later on, when you have something that works.

#### Set a timeline
We'd suggest aiming to have a working user interface by the end of Thursday, and to add in rules and errors and persistence on Friday.

#### Divide and conquer
The main interactions to consider in this app are:
- The interactions between the browser and Node
- The interactions between Node and Mongo
- The interactions between the user and the browser (Backbone)
- The user experience (HTML and CSS)

You may want to try assigning a point-person to cover each relationship.

#### Start by refactoring!

If you look at the "Solution" branch of this repo, there's a Tic Tac Toe game already completed in there! It's about as basic as you can get, and doesn't enforce any rules. You might start with that and build on it.

https://github.com/ga-dc/websocket-arcade/tree/solution

## Playing from different computers

If you option-click on the wifi symbol in your menu bar, you should be able to see your current IP address. It'll be something like 172.20.3.229

Someone else can access the server running on your computer by typing into their address bar that IP address followed by the port number, which is probably 3000.

So, for example:

`http://172.20.3.229:3000`

## Bonus

Make a game that MORE than two people can play! Create a "waiting room" in which visitors can see who's available to play a game.

## Group BreakDown

| Group 1 | Group 2  | Group 3 | Group 4 | Group 5 |
|---------|----------|---------|---------|---------|
| eltahir | zakk     | nic     | ryan    | lindsey |
| tammy   | allyson  | kevin   | tyler   | damon   |
| aaron   | biboy    | enoch   | dj      | brad    |
| isa     | brittany | don     | ali     | gwen    |

| Group 6 | Group 7 | Group 8 | Group 9 | Group 10 |
|---------|---------|---------|---------|----------|
| p-man   | phil    | matt    | noah    | nabil    |
| preston | haleigh | sarah   | jocelyn | karen    |
| michael | janice  | adrian  | ammie   | keith    |
| john    | nick b  | chad    | jared   | toby     |
|         |         | rodger  | alif    | julia    |
