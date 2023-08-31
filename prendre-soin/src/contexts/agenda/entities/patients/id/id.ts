import { PatientIdBadLength } from './patient-id-bad-length.error';

export class PatientId {
  constructor(private readonly id: number) {
    if (id <= 99_999 || id >= 1_000_000) {
      throw new PatientIdBadLength(id);
    }
  }

  public equals(other: PatientId) {
    return this.id === other.id;
  }
}
