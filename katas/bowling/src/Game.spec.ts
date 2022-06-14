import { Game } from "./Game";

describe("", () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  test("When roll 1 expect score to be 1", () => {
    game.roll(1);
    const res = game.score();

    expect(res).toEqual(1);
  });

  test("When roll 0 expect score to be 0", () => {
    game.roll(0);
    const res = game.score();

    expect(res).toEqual(0);
  });

  test("When roll 1 and 2 score must equal 3", () => {
    game.roll(1);
    game.roll(2);
    const res = game.score();

    expect(res).toEqual(3);
  });

  test("When roll 9-1 => 1 score must equal 12", () => {
    game.roll(9);
    game.roll(1);
    game.roll(1);
    const res = game.score();

    expect(res).toEqual(12);
  });

  test("When roll 0-0 => 1 score must equal 1", () => {
    game.roll(0);
    game.roll(0);
    game.roll(1);
    const res = game.score();

    expect(res).toEqual(1);
  });

  test("When roll 1-2 => 9-1 => 1 score must equal 15", () => {
    game.roll(1);
    game.roll(2);
    game.roll(9);
    game.roll(1);
    game.roll(1);
    const res = game.score();

    expect(res).toEqual(15);
  });
});
