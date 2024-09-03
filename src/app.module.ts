import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AnimalCategoryModule } from './animal-category/animal-category.module';
import { AnimalModule } from './animal/animal.module';
import { ShoesModule } from './shoes/shoes.module';
import { VideoModule } from './video/video.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards/at.guard';
import { PaymentModule } from './payment/payment.module';
import { EsewaModule } from './esewa/esewa.module';

@Module({
  imports: [
    SongsModule,
    PrismaModule,
    UserModule,
    AuthenticationModule,
    AnimalCategoryModule,
    AnimalModule,
    ShoesModule,
    VideoModule,
    PaymentModule,
    EsewaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('songs');
    // consumer.apply(LoggerMiddleware).forRoutes({path: 'songs', method: RequestMethod.POST})
    // consumer.apply(LoggerMiddleware).forRoutes(SongsController)
  }
}
