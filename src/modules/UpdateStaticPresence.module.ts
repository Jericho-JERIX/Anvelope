import { ActivityType, Client } from "discord.js";

export function updateStaticPresence(client: Client) {
    client.user?.setPresence({
        activities: [
            {
                name: "███'s message ✉",
                type: ActivityType.Watching,
            },
        ],
        status: "online",
    })
}