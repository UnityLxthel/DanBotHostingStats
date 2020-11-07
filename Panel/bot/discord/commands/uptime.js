exports.run = async (client, message, args) => {

    const humanizeDuration = require('humanize-duration');

    let myDate = new Date(client.readyTimestamp);
    var embed = new Discord.RichEmbed()
        .addField(":white_check_mark: Uptime:", `**${humanizeDuration(client.uptime, {round: true})}**`, true)
        .addField("Memory usage:", Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000), true)
        .setFooter(`Ready Timestamp: ${myDate.toString()}`)
        .setColor("GREEN")
    message.channel.send(embed);
}