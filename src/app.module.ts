import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "database.sqlite3",
      entities: [User],
      synchronize: true, // TODO: Remove this in production.
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
