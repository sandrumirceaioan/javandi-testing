import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Pixel } from './pixel.model';
import { Tracking } from './tracking.model';

const ObjectId = Types.ObjectId;

@Injectable()
export class TradingPartnersService {

    constructor(
        @InjectModel('track') private readonly tracksModel: Model<Tracking>,
        @InjectModel('trackpxl') private readonly pixelModel: Model<Pixel>,
    ) { }

    onModuleInit() {
        console.log('TESTING JAVANDI');
        this.testJavandi();
    }


    async testJavandi() {
        // db usage example for tracks collection
        const tracks =  await this.tracksModel.find({}).count();
        console.log(tracks);

        // db usage example for pixels collection
        const pixels =  await this.pixelModel.find({}).count();
        console.log(pixels);
    }

}