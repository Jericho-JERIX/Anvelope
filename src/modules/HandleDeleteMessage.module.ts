import { ButtonInteraction } from "discord.js";
import { DeleteButtonValue } from "../commands/sendSecretMessage";

export async function handleDeleteMessage(interaction: ButtonInteraction) {
    const data: DeleteButtonValue = JSON.parse(interaction.customId);
    if (data.owner_id !== interaction.user.id) {
        return interaction.reply({
            content: "Only the owner of this message can delete it.",
            ephemeral: true,
        });
    }
    else {
        return interaction.message.delete();
    }
}