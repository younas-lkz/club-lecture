import { Slot } from '../../slots/slot.value-type';
import { PractitionerId } from '../id/id.value-type';

export class Practitioner {
  constructor(
    readonly id: PractitionerId,
    private availableSlots: Slot[],
  ) {}

  public isAvailable(slot: Slot) {
    return (
      this.availableSlots.find((availableSlot) =>
        slot.equals(availableSlot),
      ) !== undefined
    );
  }
}
