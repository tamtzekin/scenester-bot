// sohwhatson
// Bot that recommends shows and events at the Sydney Opera House to users based on their mood inputs.

module.exports = (bot) => {

// SOH Bot intros itself and gives dialogue prompts.
  bot.hear(/Hi/, res => { // capital variants here too
    res.reply("Let me help you find something to do here. Just ask me, 'what's on today'?")
    res.reply("https://www.instagram.com/p/BPGPLUtgTkQ/")
    return res.reply("Hey! Welcome to the Sydney Opera House. It's a beautiful day down here :sun_with_face::sun_with_face:")
});

  bot.hear(/What's on today?|what's on today?|whats on today|whats on today?/, res => { // when i add more variants, it loops my code
    res.reply("Let me help you pick! Do you want to see something COOL:dark_sunglasses:? Or something FANCY:wine_glass:? Or do you want something STIMULATING:studio_microphone:? (Try typing, '@sohwhatson Show me something cool').")
    return res.reply("There's so much on! From the classics like ballet:two_hearts:, to a few classic rock gods:guitar:, to the great thinkers of our time:books:.") // put real date here?
});

// Defines arrays for different kinds of shows, arranged by genre or "mood".
const coolShows = [
  "We don't just do orchestras in here. The rave godfathers Underworld are playing tonight!:loud_sound::loud_sound:" + "\nhttps://www.youtube.com/watch?v=krN3ledny-Y",
  "Billy Bragg & Joe Henry :flag-gb: are serenading together in the Concert Hall this weekend. Proper political balladeers. " + "\nhttps://www.youtube.com/watch?v=mgwU4zCEJtY",
  ":fire::100:Mary J. Blige is on this Tuesday. The reigning queen of soul! " + "\nhttps://www.youtube.com/watch?v=BgcSHzgZ8gQ", // date night tag
  "The Sydney Symphony Orchestra are performing the score live to the first Harry Potter movie. Haven't seen that one for years! :revolving_hearts:" + "\nhttps://www.youtube.com/watch?v=YOVS9yn2R7c"
];

const fancyShows = [
  "Are you into ballet? But you like the edgier stuff, right? You'll enjoy 'Faster'' by The Australian Ballet." + "\nhttps://www.youtube.com/watch?v=W5I28CQBIro",
  "If you like the classics, you really need to see 'The Nutcracker' ... with an Australian twist. :dancer: " + "\nhttps://www.instagram.com/p/BS4mmP2F2V0/",
  "Joshua Bell and Academy of St Martin in the Fields :violin: are performing twice this weekend! Beethoven, Mozart, Schumann, Mendelssohn...quite possibly the best orchestra in the world right now. " + "\nhttps://www.youtube.com/watch?v=laGT9IB2bFo",
  "You know we do food too? Celebrate Mother's Day in style :cocktail: with Australia's best pavlova. You can almost taste it from here... " + "\nhttps://www.instagram.com/p/BQE-eyhjqak/"
];

const stimulatingShows = [
  "Singer, poet and :guitar: goddess Patti Smith is talking about her life and music in the Concert Hall this Sunday. " + "\nhttps://www.instagram.com/p/4mYawpRc6T/",
  "Djuki Mala might be your thing. Think contemporary dance fused with traditional Indigenous movement.:muscle: " + "\nhttps://www.instagram.com/p/BTOWSi9FdkK/",
  "We're proud to present 'The 7 Stages of Grieving', an Aboriginal classic which confronts the grief of Indigenous people and their hopes for reconciliation.:yellow_heart: " + "\nhttps://www.youtube.com/watch?v=zbPuSX2wiC4",
  "Dig into the deep and dirty world of Aussie talkback radio :radio: with Jonathan Biggins' witty theatre production 'Talk'.:studio_microphone: " + "\nhttps://www.youtube.com/watch?v=taoTRFsLOr4"
];

const prettyPicture = [
  "\nhttps://www.instagram.com/p/BQzd8bPBgFZ/",
  "\nhttps://www.instagram.com/p/BSNrTHohr16/",
  "\nhttps://www.instagram.com/p/BSzvH2-Bltm/",
  "\nhttps://www.instagram.com/p/BTANl6Jh4yj/",
  "\nhttps://www.instagram.com/p/BQPYEo0AkT5/",
  "\nhttps://www.instagram.com/p/BMgCQ5ChGNz/"
];

// User picks the type ("mood") of show they want to see and bot gives randomised suggestions based on moodType arrays.
  bot.respond(/Show me something (.*)/i, res => {
    const moodType = res.match[1];

    console.log(moodType)
    if (moodType === "pretty") {
      return res.send("Oh, yeah? You're looking right at it :fire: :kiss: :wink: " + res.random(prettyPicture));
    } else if (moodType === "cool") {
      return res.send(res.random(coolShows));
    } else if (moodType === "fancy") {
      return res.send(res.random(fancyShows));
    } else if (moodType === "stimulating") {
      return res.send(res.random(stimulatingShows));
    } else {
      return res.reply(`${moodType}? I don't know about that ... you're being a bit broad. You know this is the Opera House, right? Try typing '@sohwhatson Show me something fancy'.`)
    }
  });
}

// //time out command
// //Are you still there? Just tell me "I want to see" followed by the type of show.
// // You could say, "I want to see family shows," or "I want to see contemporary music".
