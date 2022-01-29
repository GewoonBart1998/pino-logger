import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
        imports: [LoggerModule.forRoot(), ConfigModule.forRoot()],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should make logs', () => {
      var i = 0;
      let testLog;
      const amountOfLogs = 10000;
      while (i < amountOfLogs) {
        i += 1
        expect(appController.sendPost(
            testLog = {
              timeStamp: '1519211809934',
              level: 'info',
              subject: 'new update',
              message: 'Er is een nieuwe update beschikbaar voor deze app',
              application: 'logging-monitoring'}
        )).toEqual("200 ok");
      }
    });
  });
});
