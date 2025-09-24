import { envs } from '../../config';

export class DiscordService {
	private readonly discordWebhookUrl: string = envs.DISCORD_WEBHOOK_URL;

	constructor() {}

	async notify(message: string) {
		const body = {
			content: message
			// embeds: [
			// 	{
			// 		image: {
			// 			url: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHB4YXNma250MWxtcGN0anIzMTRrZ2NjdjI1cGJiZ2phc2x4aG5mYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qp61kl8rdZwuQ/giphy.gif'
			// 		}
			// 	}
			// ]
		};

		const resp = await fetch(this.discordWebhookUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		});

		if (!resp.ok) {
			console.log('Error sending message to discord');
			return false;
		}

		return true;
	}
}
