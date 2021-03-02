require('dotenv').config();

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackingModule } from './tracking/tracking.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.CONNECTION_STRING, { useNewUrlParser: true, useFindAndModify: false }),
    TrackingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}