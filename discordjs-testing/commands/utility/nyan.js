const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nyan')
        .setDescription('nyan cat video reply'),
    async execute(interaction) {
        await interaction.reply('https://www.youtube.com/watch?v=2yJgwwDcgV8');
    },
};