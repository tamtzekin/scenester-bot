// projectplan.js
//
// GOAL: Chatbot that tells you what's on at the Opera HOuse

// What's On bot

// Log message when channel is open:
// Hey, welcome to the Sydney Opera House!
// Post photo of Forecourt (vertical)
// There's a lot going on inside today, so let me help you pick something.

// Log photos of what's on
// What kind of stuff are you into?
// We have the classics - ballet, opera, orchestras.
// We also have talks, family shows, theatre, dance and contemporary music.
// Tell me what you're into, and I'll suggest something.
// (type "i want to see" and then your choice, eg. "i want to see family shows")


  //time out command
  //Are you still there? Just tell me "I want to see" followed by the type of show.
  // You could say, "I want to see family shows," or "I want to see contemporary music".


//  When user enters "dance"
  //  You're into dance, huh? Very stylish!
  //  You might like 'Faster' by The Australian Ballet.

    //  If asking for first time, log these two messages:
    //  If you want to hear what it's about, just type "tell me more"
    //  If you want to get yourself a ticket, just type "get me a seat"
    //  If you want to see something else, type "show me something else"

      // if user types "tell me more", bot responds:
        // If you like your ballet modern and a bit challenging, you need to see this.
        // There's three parts to this work:
        //  'Faster' inspired by the London Olympics, the world premiere of the kinetic Squander and Glory
        //  and Infra, a haunting piece scored by Max Richter about the London bombings.

      // if user types "get me a seat"
        // Sure, you can reserve your tickets on our site here. Or, walk up the stairs and come visit us at the Box Office.

// when user types "music", bot responds:
  // 'We don't just do classical here!
  // Underworld are playing tonight!

    // Bot prompts user to say either: "tell me more" or "get me a seat"
      // If user types "tell me more"
        // Have you seen Trainspotting? They had a song in that movie.
        // The godfathers of rave. They're going to turn the Concert Hall into a club.

      // If user types "get me a seat"
        // Sure, you can buy tickets here. (Don't worry - you can still get up and dance)


//timeout call for alternate suggestions if undecided
// also running out of time for buying tix
// use res.reply for timeouts

// store what users choose to reference Similar Shows on Timeout
