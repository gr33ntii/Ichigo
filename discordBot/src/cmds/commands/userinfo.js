/* jshint ignore:start */
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new RichEmbed()
        .setColor("#cb0231")
        .addField("Full Name", message.author.tag)
        .addField("ID", message.author.id)
        .addField("Ngày Tạo", message.author.createdAt)
        .setThumbnail("https://s-media-cache-ak0.pinimg.com/originals/de/c7/a1/dec7a10f2e0d6e3cda0c2646bfe2f4c3.png")
        .addField("Avatar", "Profile Avatar")
        .setImage(message.author.displayAvatarURL);


        message.channel.send(embed);
        return;
}

module.exports.help = {
    name: "userinfo"
}