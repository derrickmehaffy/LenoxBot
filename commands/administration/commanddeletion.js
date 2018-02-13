exports.run = async(client, msg, args, lang) => {	
	const tableload = client.guildconfs.get(msg.guild.id);
	if (tableload.commanddel === 'false') {
		tableload.commanddel = 'true';
		await client.guildconfs.set(msg.guild.id, tableload);
		
		return msg.channel.send(lang.commanddel_deletionset);
	} else {
		tableload.commanddel = 'false';
		await client.guildconfs.set(msg.guild.id, tableload);
		
		return msg.channel.send(lang.commanddel_nodeletionset);
	}
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['cmddel'],
    userpermissions: ['ADMINISTRATOR']
};
exports.help = {
	name: 'commanddeletion',
	description: 'Toggles the deletion of a command after execution',
	usage: 'commanddeletion',
	example: ['commanddeletion'],
	category: 'administration',
    botpermissions: ['SEND_MESSAGES', 'MANAGE_MESSAGES']
};