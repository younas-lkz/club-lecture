export class Game {
  private rolls: number[] = [];

  roll(pins: number): void {
    this.rolls.push(pins);
  }

  score(): number {
    let score = 0;
    for (let i = 0; i < this.rolls.length; i++) {
      score += this.rolls[i];

      if (
        i > 1 &&
        i % 2 === 0 &&
        this.rolls[i - 2] + this.rolls[i - 1] === 10
      ) {
        score += this.rolls[i];
      }
    }

    return score;
  }
}
