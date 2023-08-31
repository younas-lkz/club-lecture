export class Slot {
  constructor(readonly startDate: Date) {}

  public equals(other: Slot) {
    return this.startDate === other.startDate;
  }
}
