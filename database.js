module.exports = {
  users: [
    {
      id: 1,
      username: "JohnDoe21",
      email: "johndoe123@email.com",
      password: "Johndoe123",
    },
  ],
  posts: [
    {
      id: 1,
      title: "What is the cosmere?",
      description:
        "The Cosmere is a shared fictional universe where many of author Brandon Sanderson's fantasy novels take place, including Mistborn and The Stormlight Archive.",
      comments: [
        "Cosmere is the best.",
        "I love the cosmere",
        "Brandon Sanderson is my favorite author.",
      ],
    },
    {
      id: 2,
      title:
        "Unpopular Opinion: Darrow's biggest flaw isn't hubris, it's his inability to truly rest.",
      description:
        "I'm halfway through Dark Age again, and it hit me: Darrow is defined by perpetual motion. He fears stagnation more than defeat. While his hubris is obvious, his real tragedy is that he fundamentally doesn't know how to stop fighting, even when the war is technically over. It costs him everything and everyone. Thoughts, goodman?",
      comments: [
        "Hard disagree. His inability to rest IS his hubris. He thinks only *he* can hold the line, which means he won't let anyone else take the burden. It's the same thing.",
        "The tragedy of the Rising is that the system only allows Golds to achieve greatness through constant, brutal striving. Darrow is a product of that machine, even if he hates it.",
        "You have to admire it though. After everything, the fact he keeps getting up is why he's the Reaper. Hail Reaper!",
        "I think Mustang is the only person who truly sees this. Her pleas for him to just *be* for a minute always break my heart.",
        "Nah, his biggest flaw is definitely his relationship with the comms system. Why does he always hang up prematurely?!",
      ],
    },
  ],
};
