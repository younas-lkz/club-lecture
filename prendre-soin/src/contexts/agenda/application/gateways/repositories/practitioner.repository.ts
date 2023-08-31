import { PractitionerId } from 'src/contexts/agenda/entities/practitioners/id/id.value-type';
import { Practitioner } from 'src/contexts/agenda/entities/practitioners/practitioner/practitioner.aggregate';

export abstract class PractitionerRepository {
  abstract getById(practitionerId: PractitionerId): Promise<Practitioner>;
}
