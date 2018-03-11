/* jshint ignore:start */
module.exports.run = async (bot, message, args) => {
    message.channel.send(`${message.author.username} created a vote on \`${args.join(" ")}\`. The vote will end in 30s, type yes or no in the chat to vote!`)
    var yes = 0;
    var no = 0;
    const votecollector = message.channel.createCollector(m => m.channel === message.channel, { time: 30000 });
    votecollector.on(`message`, m => {
        if (m.content.toLowerCase() === `no` && !message.author.id.voted) {
            no++;
            m.author.id.voted = true;
        }
        if (m.content.toLowerCase() === `yes` && !message.author.id.voted) {
            yes++;
            m.author.id.voted = true;
        }
    });
    votecollector.on(`end`, (collected, reason) => {
        if (yes > no) {
            message.channel.send(`${message.author.username}'s vote on \`${args.join(" ")}\` has ended. Yes won with ${yes} votes. No only had ${no} votes. :cry: `)
        }
        if (yes < no) {
            message.channel.send(`${message.author.username}'s vote on \`${args.join(" ")}\` has ended. No won with ${no} votes. In comparison, yes only had ${yes} votes. Pitiful. :joy: `)
        }
        if (yes == no) {
            message.channel.send(`${message.author.username}'s vote on \`${args.join(" ")}\` has ended. Yes had ${yes} votes. No had ${no} votes. We have ourselves a tie. :crossed_swords:`)
        }
    });
}

module.exports.help = {
    name: "vote"
}