# sohwhatson

## Description
A bot that tells users what shows and events are on at the Sydney Opera House, based on interests and date.
Dialogue tree guides user / visitor organically through commands.

## Commands
"Hi"
"What's on today?"
"I like" []
        "contemporary music"
        "contemporary"
        "modern music"
        "modern"
        "bands"
        "pop"
        "rock"
        "folk"
        "soul"
        "RnB"
        "rnb"

        "the classics"
        "classic"
        "classical"
        "classical music"
        "the ballet"
        "ballet"
        "the opera"
        "opera"
        "orchestra"
        "orchestras"


## Approach
1. Pseudocode written outlining possible conversation trees. N.B. Commands can be used at any time in the chat, however dialogue organically guides the user through useable commands.
2. Key event details from sydneyoperahouse.com used to determine the pool of shows which a user can choose from.
3. Created first greeting dialogue for bot.
4. Created arrays for each 'genre' (music, talks, etc.). Filled these arrays with three key shows.
5. Wrote bot.respond to cycle through conditionals based on what genre of show the user inputs (wth the "I like ..." command).
6. Added Instagram and YouTube links to recommended shows.


## Installation
1.
2.


## Challenges / Next steps
- a "tell me more" command that expands on show information, sends more pictures and links
- storing user info based on likes, then suggesting other shows based on previous "like" info stored
- random greeting messages when entering and leaving a channel
- a timeout command that suggests commands and/or shows if the user remains idle for too long
- after user picks a show, also have "tell me more" or "buy tickets" options
- create more arrays to include wider scope of programming and events at Opera House
- alternate dialogue tree if user wishes to visit, but not attend an event (ie. dining in, a quick lunch, guided tours)
