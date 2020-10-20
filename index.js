const { Client } = require("discord.js")
const client = new Client()
require("dotenv")

client.on("ready", () => console.log("Up!") )

client.on("message", async message => {
    const time = () => new Date() - client.readyAt
    if(!message.content === "uptime") return
    await message.channel.send(`I've been up for ${time/1000*60*60*24}days, ${time/1000*60*60}hours and ${time/1000*60}minutes`)
})


client.login(process.env.token)