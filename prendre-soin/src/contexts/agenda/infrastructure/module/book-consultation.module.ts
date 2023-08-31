import { Module } from '@nestjs/common';
import { BookConsultationController } from '../controller/book-consultation.controller';
import { BookConsultationUseCase } from '../../application/use-cases/book-consultation/book-consultation.use-case';
import { PractitionerMockRepository } from '../gateways/repositories/practitioner/mock.repository';
import { PractitionerRepository } from '../../application/gateways/repositories/practitioner.repository';
import { Practitioner } from '../../entities/practitioners/practitioner/practitioner.aggregate';
import { PractitionerId } from '../../entities/practitioners/id/id.value-type';
import { Slot } from '../../entities/slots/slot.value-type';

@Module({
  imports: [],
  controllers: [BookConsultationController],
  providers: [
    {
      provide: BookConsultationUseCase,
      useFactory(practitionerRepository: PractitionerRepository) {
        return new BookConsultationUseCase(practitionerRepository);
      },
      inject: [PractitionerRepository],
    },
    {
      provide: PractitionerRepository,
      useFactory() {
        const repo = new PractitionerMockRepository();
        const practitionerId = new PractitionerId(
          'dfdb2dd2-6b02-4eb1-a8a4-119a577ef108',
        );
        const slot = new Slot(new Date('2023-11-25T06:00:00'));
        const practitioner = new Practitioner(practitionerId, [slot]);
        repo.setNextPractitioner(practitioner);
        return repo;
      },
    },
  ],
})
export class BookConsultationModule {}
