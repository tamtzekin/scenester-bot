// Bot that recommends shows and events at the Sydney Opera House to users based on their mood inputs.

module.exports = (bot) => {

// SOH Bot intros itself and gives dialogue prompts.
  bot.hear(/Hi/, res => { // capital variants here too
    res.reply("Let me help you find something to do here. Just ask me, 'what's on today'?")
    res.reply("https://www.instagram.com/p/BTANl6Jh4yj/?taken-by=sydneyoperahouse")
    return res.reply("Hey! Welcome to the Sydney Opera House. It's a beautiful day down here...")
});

  bot.hear(/What's on today?|what's on today?|whats on today|whats on today?/, res => { // when i add more variants, it loops my code
    res.reply("What are you looking for? Let me help you pick. (Try typing, '@sohwhatson Show me something cool' / 'Show me something fancy' / 'Show me something stimulating').")
    return res.reply("There's so much on! From the classics like ballet, to guitar-playing swooners.") // put real date here?
});

// Defines arrays for different kinds of shows, arranged by genre or "mood".
const coolShows = [
  "We don't just do orchestras in here. The rave godfathers Underworld are playing tonight!" + "\nhttps://www.youtube.com/watch?v=krN3ledny-Y",
  "Billy Bragg & Joe Henry are serenading together in the Concert Hall this weekend. Proper political balladeers. " + "\nhttps://www.youtube.com/watch?v=mgwU4zCEJtY",
  "Mary J. Blige is on this Tuesday. The reigning queen of soul! " + "\nhttps://www.youtube.com/watch?v=BgcSHzgZ8gQ", // date night tag
  "The Sydney Symphony Orchestra are performing the score live to the first Harry Potter movie. Haven't seen that one for years! " + "\nhttps://www.youtube.com/watch?v=YOVS9yn2R7c"
];

const fancyShows = [
  "Are you into ballet? But you like the edgier stuff, right? You'll enjoy 'Faster'' by The Australian Ballet." + "\nhttps://www.youtube.com/watch?v=W5I28CQBIro",
  "If you like the classics, you really need to see 'The Nutcracker' ... with an Australian twist. " + "\nhttps://www.instagram.com/p/BS4mmP2F2V0/",
  "Joshua Bell and Academy of St Martin in the Fields are performing twice this weekend! Beethoven, Mozart, Schumann, Mendelssohn...quite possibly the best orchestra in the world right now. " + "\nhttps://www.youtube.com/watch?v=laGT9IB2bFo"
];

const stimulatingShows = [
  "Singer and poet legend Patti Smith is doing a talk in the Concert Hall this Sunday. It'll challenge you, I'm sure. " + "\nhttps://www.instagram.com/p/4mYawpRc6T/",
  "Djuki Mala might be your thing. Think contemporary dance fused with traditional Indigenous movement. " + "\nhttps://www.instagram.com/p/BTOWSi9FdkK/",
  "We're proud to present 'The 7 Stages of Grieving', an Aboriginal classic which confronts the grief of Indigenous people and their hopes for reconciliation. " + "\nhttps://www.youtube.com/watch?v=zbPuSX2wiC4"
];

// User picks the type ("mood") of show they want to see and bot gives randomised suggestions based on moodType arrays.
  bot.respond(/Show me something (.*)/i, res => {
    const moodType = res.match[1];

    console.log(moodType)
    if (moodType === "music") {
      return res.send("Music? There's a lot of music out there. You're going to have to be a bit more specific. If you want something edgy, try typing '@sohwhatson Show me something cool'")
    } else if (moodType === "cool") {
      return res.send(res.random(coolShows));
    } else if (moodType === "fancy") {
      return res.send(res.random(fancyShows));
    } else if (moodType === "stimulating") {
      return res.send(res.random(stimulatingShows));
    } else {
      return res.reply(`${moodType}? I don't think we have anything ${moodType} on today. Try typing '@sohwhatson Show me something fancy'`)
    }
  });
}

// //
// // // for number of tickets
// // bot.respond(/(.*) tickets/i, res => {
// //   // parseInt() turns a string into an integer
// //   const a = parseInt(res.match[1])
// //   const b = parseInt(res.match[2])
// //
// //   const sum = a + b
// //
// //   return res.reply(`${a} + ${b} = ${sum}`)
// // });

//
// //time out command
// //Are you still there? Just tell me "I want to see" followed by the type of show.
// // You could say, "I want to see family shows," or "I want to see contemporary music".
