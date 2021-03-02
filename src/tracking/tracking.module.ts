import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TradingPartnersService } from './tracking.service';
import { TracksSchema } from './tracking.schema';
import { PixelsSchema } from './pixels.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'track', schema: TracksSchema },
      { name: 'trackpxl', schema: PixelsSchema }
    ])
  ],
  providers: [TradingPartnersService],
  exports: [TradingPartnersService]
})
export class TrackingModule { }
