const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('createchannel')
    .setDescription('Creates a new channel')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('The name of the channel')
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('type')
        .setDescription('The type of the channel (text or voice)')
        .setRequired(true)
        .addChoices(
          { name: 'Text Channel', value: 'text' },
          { name: 'Voice Channel', value: 'voice' }
        )
    )
    .addChannelOption(option =>
      option.setName('parent')
        .setDescription('The parent category')
    )
    .addChannelOption(option =>
      option.setName('clonefrom')
        .setDescription('The channel to clone permissions from')
    ),
  async execute(interaction) {
    // Logic for creating a channel, setting permissions, etc.
    // ...
  }
};
