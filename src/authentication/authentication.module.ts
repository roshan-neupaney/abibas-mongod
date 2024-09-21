import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AtStrategy } from './strategies/at.strategy';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
    PrismaService,
    JwtService,
    ConfigService,
    AtStrategy,
  ],
})
export class AuthenticationModule {}
