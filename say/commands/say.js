const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const axios = require('axios');
const fs = require('fs')
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Says message you would like to send.")
    .addStringOption(option =>
        option.setName('message')
          .setDescription('Message you want')
          .setRequired(true)),
  run: async (interaction) => {
    if (!interaction.memberPermissions.has('ADMINISTRATOR')) return interaction.reply({ content: 'No permissions', ephemeral: true });
      interaction.channel.send({ content: interaction.options.get('message').value })

  },
};
