import { Module } from '@nestjs/common';
import { BookConsultationModule } from './contexts/agenda/infrastructure/module/book-consultation.module';

@Module({
  imports: [BookConsultationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
