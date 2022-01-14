import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getYoutube(): string {
    return 'Watching some youtube!!'; 
  }

  getNetflix(): string {
    return 'Seems like you\'ve paid for this service. Cool!! Enjoy Netflix!!';
  }
}
