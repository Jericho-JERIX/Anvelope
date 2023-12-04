import { ActionRowBuilder, ApplicationCommandOptionType, Attachment, ButtonBuilder, ButtonStyle } from "discord.js";
import { SlashCommand } from "../scripts/types/SlashCommand";

export type DeleteButtonValue = {
    method: string;
    owner_id: string;
}

function DeleteButton({owner_id}: {
    owner_id: string;
}): ActionRowBuilder<any> {

    const initialValue: DeleteButtonValue = {
        method: "delete",
        owner_id
    }

	return new ActionRowBuilder().addComponents(
		new ButtonBuilder()
            .setCustomId(JSON.stringify(initialValue))
			.setLabel("Press Me")
			.setStyle(ButtonStyle.Danger)
	);
}

export const SendSecretMessage: SlashCommand = {
    name: "send-secret-message",
	description: "Send a message to this channel without anyone knowing who sent it.",
	options: [
		{
			name: "message",
			description: "Type something here",
			type: ApplicationCommandOptionType.String,
			required: true,
		},
        {
			name: "attachment",
			description: "Images, files, etc.",
			type: ApplicationCommandOptionType.Attachment,
			required: false,
		},
	],

    async onCommandExecuted(interaction) {
        const message = interaction.options.get("message");
        const attachments = interaction.options.getAttachment("attachment");

        const deleteButton = DeleteButton({
            owner_id: interaction.user.id
        });

        interaction.channel?.send({
            content: message?.value as string,
            files: attachments ? [attachments as Attachment]:[],
            components: [deleteButton],
        });

        await interaction.reply({
            content: "Message sent!",
            ephemeral: true,
        });
    }
}