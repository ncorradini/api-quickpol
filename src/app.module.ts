import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './db/config';
import { SurveyModule } from './modules/survey/survey.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), SurveyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
