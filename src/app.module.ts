import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { databaseConfig } from './db/config';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
