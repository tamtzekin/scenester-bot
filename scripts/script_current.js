// Bot that tells users what shows are on at the Sydney Opera House this week.

module.exports = (bot) => {

// SOH Bot intros itself and gives dialogue prompts.
  bot.hear(/Hi/, res => { // capital variants here too
    res.reply("Let me help you find something to do here. Just ask me, 'what's on today'?")
    res.reply("https://www.instagram.com/p/BTANl6Jh4yj/?taken-by=sydneyoperahouse")
    return res.reply("Hey! Welcome to the Sydney Opera House. It's a beautiful day down here...")
});

  bot.hear(/What's on today?|what's on today?|whats on today|whats on today?/, res => { // when i add more variants, it loops my code
    res.reply("Just tell me what you like and I'll recommend something (try typing '@sohwhatson I like ...' and then what type of show you want to see).")
    return res.reply("Well, today we've got the classics like ballet and classical music. If you're more adventurous, we have talks and contemporary music.") // put real date here?
});

// Defines arrays for different kinds of shows, arranged by genre.
const musicShows = [
  "We don't just do orchestras in here. The rave godfathers Underworld are playing tonight!" + "\nhttps://www.youtube.com/watch?v=krN3ledny-Y",
  "Billy Bragg & Joe Henry are serenading together in the Concert Hall this weekend. Proper political balladeers. " + "\nhttps://www.youtube.com/watch?v=mgwU4zCEJtY",
  "Mary J. Blige is on this Tuesday. The reigning queen of soul! " + "\nhttps://www.youtube.com/watch?v=BgcSHzgZ8gQ" // date night tag
];

const classicShows = [
  "Are you into ballet? You're fancy, huh? You might like Faster by The Australian Ballet." + "\nhttps://www.youtube.com/watch?v=W5I28CQBIro",
  "If you like the classics, you really need to see The Nutcracker ... with an Australian twist. " + "\nhttps://www.instagram.com/p/BS4mmP2F2V0/",
  "Djuki Mala might be your thing. Think contemporary dance fused with traditional Indigenous movement. " + "https://www.instagram.com/p/BTOWSi9FdkK/"
];

const talksShows = [
  "Singer and poet legend Patti Smith is doing a talk in the Concert Hall this Sunday. It'll be wild, I'm sure.",
  "Second here. "
];

// Visitor picks the type of show they want to see and bot gives random suggestion based on genre arrays.
  bot.respond(/I like (.*)/i, res => {
    const genreType = res.match[1];

    console.log(genreType)
    if (genreType === "music") {
      return res.send("Music? There's a lot of music out there. You're going to have to be a bit more specific. Try 'I like the classics' or 'I like contemporary music'.")
    } else if (genreType === "contemporary music") {
      return res.send(res.random(musicShows));
    } else if (genreType === "the classics") {
      return res.send(res.random(classicShows));
    } else if (genreType === "talks") {
      return res.send(res.random(talksShows));
    } else {
      return res.reply(`${genreType}? I don't think we have ${genreType} on today. Is there anything else you'd like to see? Maybe talks, or family shows? Orchestras?`)
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
//
//

//
// // // Defines arrays for greetings and goodbyes
// // helloText = ['Hey there!', 'Welcome!', 'Gday!']
// // goodbyeText = ['Oh, youre going already? Enjoy your day!', 'Dont forget to take a selfie before you leave!', 'Enjoy your stay in sunny Sydney!', 'Come back soon! Theres plenty happening at the House.']
//
// // Triggers random greeting message when visitor enters room, goodbye message when visitor leaves.
//   // bot.enter (res) =>
//   //   res.send res.random helloText
//   // bot.leave (res) =>
//   //   res.send res.random goodbyeText
//
