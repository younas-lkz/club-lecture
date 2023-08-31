import { PractitionerRepository } from 'src/contexts/agenda/application/gateways/repositories/practitioner.repository';
import { PractitionerId } from 'src/contexts/agenda/entities/practitioners/id/id.value-type';
import { Practitioner } from 'src/contexts/agenda/entities/practitioners/practitioner/practitioner.aggregate';

export class PractitionerMockRepository implements PractitionerRepository {
  private practitioners: Map<string, Practitioner> = new Map();

  async getById(practitionerId: PractitionerId): Promise<Practitioner> {
    return this.practitioners.get(practitionerId.toString());
  }

  setNextPractitioner(practitioner: Practitioner) {
    this.practitioners.set(practitioner.id.toString(), practitioner);
  }
}
