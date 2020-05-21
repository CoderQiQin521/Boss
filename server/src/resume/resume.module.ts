import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';

@Module({
  controllers: [ResumeController]
})
export class ResumeModule {}
