import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService {

  constructor(
      private readonly logger: PinoLogger,
  ) {}


  getHello(): string {
    return 'Hello World!';
  }

  sendPost(testLogs){
    // console.log(testLogs)
    this.logger.info(testLogs)
    // this.logger.log(this.testLog)
    // this.logger.log(this.testLog)
    return "200 ok";
  }
}
