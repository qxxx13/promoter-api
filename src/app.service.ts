import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';

const apiToken = '7122963799:AAEob6YICa6xSSrzPOlQT_5SkqojvpCY-3k';

@Injectable()
export class AppService {
    bot = new TelegramBot(apiToken, { polling: true });

    getHello(): string {
        return 'Hello World!';
    }
}
