import { PatientId } from './id';
import { PatientIdBadLength } from './patient-id-bad-length.error';

describe('Patient Id', () => {
  test('Patient id should be 6 numbers long', () => {
    const id: number = 1;
    expect(() => new PatientId(id)).toThrowError(PatientIdBadLength);
  });
});
