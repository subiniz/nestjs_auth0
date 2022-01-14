import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthorizationGuard } from './authorization/authorization.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('youtube')
  getYoutube(): string {
    return this.appService.getYoutube();
  }

  @UseGuards(AuthorizationGuard)
  @Get('netflix')
  getNetflix(): string {
    return this.appService.getNetflix();
  }
}
