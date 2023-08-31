import { PatientId } from 'src/contexts/agenda/entities/patients/id/id';
import { PractitionerRepository } from '../../gateways/repositories/practitioner.repository';
import { PractitionerId } from 'src/contexts/agenda/entities/practitioners/id/id.value-type';
import { Slot } from 'src/contexts/agenda/entities/slots/slot.value-type';

export class BookConsultationUseCase {
  constructor(
    private readonly practitionerRepository: PractitionerRepository,
  ) {}

  public async handle(
    patientId: PatientId,
    practitionerId: PractitionerId,
    slot: Slot,
  ) {
    const practitioner =
      await this.practitionerRepository.getById(practitionerId);
    const available = practitioner.isAvailable(slot);
    return available ? 'OK' : 'NOK';
  }
}
