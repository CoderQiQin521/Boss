import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ResumeModule } from './resume/resume.module';

@Module({
  imports: [UserModule, ResumeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
