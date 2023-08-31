import { PatientId } from '../../../entities/patients/id/id';
import { BookConsultationUseCase } from './book-consultation.use-case';
import { PractitionerId } from '../../../entities/practitioners/id/id.value-type';
import { Slot } from '../../../entities/slots/slot.value-type';
import { PractitionerMockRepository } from '../../../infrastructure/gateways/repositories/practitioner/mock.repository';
import { Practitioner } from '../../../entities/practitioners/practitioner/practitioner.aggregate';

describe('Book Consultation', () => {
  test("Patient can book practitioner's avaiable slot", async () => {
    const patientId = new PatientId(123_456);
    const practitionerId = new PractitionerId(
      'dfdb2dd2-6b02-4eb1-a8a4-119a577ef108',
    );
    const slot = new Slot(new Date('2023-11-25T06:00:00'));

    const practitionerRepository = new PractitionerMockRepository();
    const practitioner = new Practitioner(practitionerId, [slot]);
    practitionerRepository.setNextPractitioner(practitioner);
    const bookConsultation = new BookConsultationUseCase(
      practitionerRepository,
    );

    const res = await bookConsultation.handle(patientId, practitionerId, slot);

    expect(res).toEqual('OK');
  });
});
