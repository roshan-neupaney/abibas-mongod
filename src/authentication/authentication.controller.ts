import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateAuthenticationDto } from './dto/create-authentication.dto';
import { UpdateAuthenticationDto } from './dto/update-authentication.dto';
import { CreateRefreshDto } from './dto/create-refresh.dto';
import { CreateLoginDto } from './dto/create-login.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('authentication')
@ApiTags('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Public()
  @Post('signup')
  create(@Body() createAuthenticationDto: CreateAuthenticationDto) {
    return this.authenticationService.create(createAuthenticationDto);
  }

  @Public()
  @Post('refresh')
  refresh(@Body() createRefreshDto: CreateRefreshDto) {
    try {
      return this.authenticationService.refresh(createRefreshDto);
    } catch (error) {
      return error;
    }
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() body: CreateLoginDto){
    return this.authenticationService.login(body)
  }

  @Public()
  @Get()
  findAll() {
    return this.authenticationService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authenticationService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthenticationDto: UpdateAuthenticationDto) {
  //   return this.authenticationService.update(+id, updateAuthenticationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authenticationService.remove(+id);
  // }
}
