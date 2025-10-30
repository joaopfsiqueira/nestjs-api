import { Controller, Get, Query } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
  // GET /profiles
  @Get()
  findAll(@Query('location') location: string) {
    return [{location}];
  }
}
