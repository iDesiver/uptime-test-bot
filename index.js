const { Client } = require("discord.js")
const client = new Client()
require("dotenv").config()
const ascii = require("ascii-table")
const AsciiTable = require("ascii-table/ascii-table")

client.on("ready", () => console.log(`Up at ${client.user.tag} (${client.user.id})!`) )

client.on("message", async message => {
    if(message.author.bot) return
    if(message.content !== "uptime") return
    
    const uptime = new Date(new Date() - client.readyAt)
    const table = new ascii()
                        .setTitle("Uptime")
                        .setTitleAlign(AsciiTable.CENTER)
                        .setBorder('║', '═', '╬', '╬')
                        .setHeading("Time", "Measure")
                        .setAlign(0, AsciiTable.CENTER)

    if(uptime.getUTCHours() > 0) table.addRow(uptime.getUTCHours(), `Hour${uptime.getUTCHours()>1?"s":""}`)
    if(uptime.getUTCMinutes() > 0) table.addRow(uptime.getUTCMinutes(), `Minute${uptime.getUTCMinutes()>1?"s":""}`)
    if(uptime.getUTCSeconds() > 0) table.addRow(uptime.getUTCSeconds(), `Second${uptime.getUTCSeconds()>1?"s":""}`)
    
       
    await message.channel.send(table.toString(), {code: true})
})


client.login(process.env.token)