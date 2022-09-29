import { validateCharacter } from "../src/functions/characterFunction";

describe("Testando a função validate character", () => {
  test("Should return false for empty name", () => {
    const result = validateCharacter (
      {
      name: "",
      life: 1500,
      strength: 300,
      defense: 500
    }
  )

    expect(result).toBe(false);
  });
})

test("Should return false for empty name", () => {
  const result = validateCharacter({
    name: "",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for 0 life", () => {
  const result = validateCharacter({
    name: "Johnny Cage",
    life: 0,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for 0 strength", () => {
  const result = validateCharacter({
    name: "Johnny Cage",
    life: 1500,
    strength: 0,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for 0 defense", () => {
  const result = validateCharacter({
    name: "Johnny Cage",
    life: 1500,
    strength: 300,
    defense: 0,
  });

  expect(result).toBe(false);
});

test("Should return false for negative defense ", () => {
  const result = validateCharacter({
    name: "Johnny Cage",
    life: 1500,
    strength: 300,
    defense: -500,
  });

  expect(result).toBe(false);
});

test("Should return true for all valid inputs", () => {
  const result = validateCharacter({
    name: "Johnny Cage",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(true);
});
