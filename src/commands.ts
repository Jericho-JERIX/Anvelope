import { Ping } from "./commands/ping";
import { SendSecretMessage } from "./commands/sendSecretMessage";
import { SlashCommand } from "./scripts/types/SlashCommand";

export const slashCommands: SlashCommand[] = [Ping,SendSecretMessage];
