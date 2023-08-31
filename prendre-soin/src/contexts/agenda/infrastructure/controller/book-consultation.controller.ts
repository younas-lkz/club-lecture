import { Body, Controller, Param, Post } from '@nestjs/common';
import { BookConsultationUseCase } from '../../application/use-cases/book-consultation/book-consultation.use-case';
import { PatientId } from '../../entities/patients/id/id';
import { PractitionerId } from '../../entities/practitioners/id/id.value-type';
import { Slot } from '../../entities/slots/slot.value-type';

@Controller('book-consultation')
export class BookConsultationController {
  constructor(
    private readonly bookConsultationUseCase: BookConsultationUseCase,
  ) {}

  @Post('/practitioner/:pratitionerId')
  bookConsultation(
    @Param('pratitionerId') pratitionerId: string,
    @Body() { startDate }: Body,
  ) {
    const token = { patientId: 123_643 };
    const patientId = new PatientId(token.patientId);
    const practitionerId = new PractitionerId(pratitionerId);
    const slot = new Slot(startDate);

    return this.bookConsultationUseCase.handle(patientId, practitionerId, slot);
  }
}

type Body = {
  startDate: Date;
};
