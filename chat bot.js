const Discord = require('discord.js');
const mineflayer = require ('mineflayer');
const client = new Discord.Client()
client.login('')  

let bot
let fredbotConn = false
let prefix = '>'

const mineflayerWrapper = () => {
    bot = mineflayer.createBot({
        host: '', // server you want to join 
        port: 25565, // port of the server       
        username: '', // minecraft username
        password: '', // password of account        
        version: false,                 
        auth: 'microsoft'      
      })

    
      bot.on('login', () => { 
        fredbotConn = true
        console.log('Ingame Bot Onlne')
        bot.chat('Cats Am I Right')
    })
    
        bot.on('chat', (username, message) => {

            
            
    

        let channel = client.channels.cache.get('')  // channel ID to get the message from 
        if (!channel) return;
        channel.send(` > **${username}** ➠ ${message}`)
      })


      bot.on('end', () => {
        fredbotConn = false
        console.log('connection ended, reconnecting')
        setTimeout(mineflayerWrapper, 10000)
    })
    
}
mineflayerWrapper()


client.on('ready', () => {
    console.log('Bot Onlne')
})
    
client.on('message', async (message) => {
    console.log(message)
    if (!fredbotConn) return
    
    const author = message.author
    
    if (author.id == client.user.id) return
    
    const channel = message.channel
    
    try {
        const guildAuthor = message.member
    
        if (channel.id == '') {  // channel ID to send message in 
            bot.chat(`[${guildAuthor.displayName}] ➠ ${message.content} | Medelin`)
        }
    } catch(err) {
        console.log(err)
    }
})
