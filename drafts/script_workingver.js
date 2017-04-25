// // Bot that tells users what shows are on at the Opera House this week.
//
module.exports = (bot) => {
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
// SOH Bot intros itself and gives dialogue prompts.
  bot.hear(/hey/, res => {
    res.send("What would you like to see?")
    res.send("We also have talks, family shows, theatre, dance and contemporary music.")
    res.send("We have the classics - ballet, opera, orchestra.")
    res.send("https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/16998958_10154168126790723_1736814811751826039_n.jpg")
    res.send("Hi there! Welcome to the Sydney Opera House.") // use different greetings based on time of day?
});
//
// //time out command
// //Are you still there? Just tell me "I want to see" followed by the type of show.
// // You could say, "I want to see family shows," or "I want to see contemporary music".
//
//
// // Visitor picks the type of show they want to see.
//
//
// // Defines arrays for different kinds of shows.
// musicShows = [
//   "We dont just do classical here.\n Rave godfathers Underworld are playing tonight!",
//   "Billy Bragg & Joe Henry are playing together in the Concert Hall this week. Proper political balladeers.",
//   "Mary J. Blige is on this Tuesday. The reigning queen of soul!"
// ]
//
// classicShows = [
//   "Youre into ballet, huh? Very stylish!\nYou might like Faster by The Australian Ballet.",
//   "If you like the classics, you really need to see Sleeping Beauty."
// ]
//
// talksShows = [
//   "Singer and poet legend Patti Smith is doing a talk in the Concert Hall this Sunday.\nItll be wild, Im sure."
// ]
//
//   bot.hear(/(.*)/, res => {
//     const genre = res.match[1]
//
//     console.log(genre)
//
//     if (genre === "music", "contemporary", "contemporary music", "modern music", "new music", "bands", "rock", "rock bands") {
//       return res.send res.random musicShows
//
//     } else if (genre === "classic", "classics", "classical", "classical music", "ballet", "opera", "dance", "contemporary dance") {
//       return res.send res.random classicShows
//
//     } else if (genre === "talk", "talks", "ideas", "speaker", "speakers") {
//       return res.send res.random talksShows
//
//     } else {
//       return res.send(`${genre}? I don't think we have ${genre} on today. Is there anything else you'd like to see? Maybe talks, or family shows? Orchestras?`)
//     }
//   });
//
//
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
}
