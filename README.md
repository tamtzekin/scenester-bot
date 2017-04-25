# sohwhatson

# Author
Justin Tam (vkimmp3)

## Description
Recommends to users shows and events at the Sydney Opera House based on their custom inputs of interests and moods.
Dialogue tree guides user organically through commands.

## Commands
- "Hi" - introduces user to the bot
- "What's on today?" - open up options for different shows on
- "Show me something cool" - bot pulls a random selection from the shows marked as "cool"
- "Show me something fancy" - bot pulls a random selection from the shows marked as "fancy"
- "Show me something stimulating" - bot pulls a random selection from the shows marked as "stimulating"
- "Show me something pretty" - (Easter egg) Bot posts an random Instagram photo (selfie) of the Opera House looking good

## Approach
1.  Pseudocode written outlining possible conversation trees. N.B. Commands can be used at any time in the chat, however dialogue organically guides the user through useable commands.
2.  Key event details from sydneyoperahouse.com used to determine the pool of shows which a user can choose from.
3.  Created first greeting dialogue for bot.
4.  Created arrays for each 'genre' (music, talks, etc.). Filled these arrays with three key shows.
5.  Wrote bot.respond to cycle through conditionals based on what genre of show the user inputs (wth the "I like ..." command).
6.  Hubot commands can be quite direct, so used more open questions to give bot a more conversational tone and appearance (eg. "Show me something cool / fancy / stimulating" commands)
7.  Added Instagram and YouTube links to recommended shows.

## Installation
1.  Once you have Hubot installed, navigate to your Hubot projects directory.
2.  Edit `hubot.scripts.json` and add 'sohwhatson.js' to the array.
3.  Alternatively, copy files from this repository into your `scripts` directory.
4.  Restart your Hubot.

## Challenges / Next steps
- Code originally based on genre types ("contemporary music" "classical music" "talks" "conferences"). This was difficult to contain based on the amount of variables (ie. a user could say "I want to see baroque music"), so this was instead changed to "moodType". This allowed for three categories ("cool" | "fancy" | "stimulating"), which also allowed for breadth of show recommendations beyond genre.
- a "tell me more" command that expands on show information, sends more pictures and links
- storing user info based on likes, then suggesting other shows based on previous "like" info stored
- random greeting messages when entering and leaving a channel
- a timeout command that suggests commands and/or shows if the user remains idle for too long
- after user picks a show, also have "tell me more" or "buy tickets" options
- create more arrays to include wider scope of programming and events at Opera House
- alternate dialogue tree if user wishes to visit, but not attend an event (ie. dining in, a quick lunch, guided tours)
