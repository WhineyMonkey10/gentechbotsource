const { AsyncResource } = require('async_hooks');
const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});



const prefix = '-';


const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}


const token = 'token';

client.on('ready', () => { 
    console.log('Running...'); 
    console.log("STARTED");
});


client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('947235521757847604').send(`Welcome <${guildMember.user.id}> to Shield Network.`)
});



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
        } else if(command === 'link'){
            client.commands.get('linked').execute(message, args);
        } else if(command === 'whineymonkey10'){
            client.commands.get('whineymonkey10').execute(message, args);
        } else if(command === 'hogefoot'){
            client.commands.get('hogefoot').execute(message, args);
        } else if(command === 'support'){
            client.commands.get('support').execute(message, args)
        } else if(command === 'sklei'){
            client.commands.get('sklei').execute(message, args)
        } else if(command === 'kick'){
            client.commands.get('kick').execute(message, args)
        } else if(command === 'ban'){
            client.commands.get('ban').execute(message, args)
        } else if(command === 'alphx'){
            client.commands.get('alphx').execute(message, args)
        } else if(command === 'bee'){
            client.commands.get('bee').execute(message, args)
        } else if(command === 'loliamaprogamerwholikescheese'){
            client.commands.get('skleiskel').execute(message, args)
        } else if(command === 'mute'){
            client.commands.get('mute').execute(message, args)
        } else if(command === 'unmute'){
            client.commands.get('unmute').execute(message, args)
        } else if(command === 'syco'){
            client.commands.get('syco').execute(message, args)
        }
    });


client.login(token);
