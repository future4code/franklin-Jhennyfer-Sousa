import { verifyAge } from "../src/functions/verifyAge/verifyAge";
import { Casino, LOCATION } from "../src/models/casinoModels";
import { casinoUser, NATION } from "../src/models/userCasinoModels";

describe("Testando função verifyAge", () => {
    test("Brasileiro com permissão para entrar no estabelecimento no Brasil", () => {

        const casino: Casino = {
          name: "Casino bola 28",
          location: LOCATION.BRAZIL,
        };

        const userToTest: casinoUser   = {
            name: "Andy",
            age: 27,
            nacionality: NATION.BRAZILIAN,
          };
    
        const result = verifyAge(casino, [userToTest]);
        expect(result.brazilians.allowed).toEqual(["Andy"]);
      });

      test("Americano com permissão para entrar no estabelecimento no Brasil", () => {

        const casino: Casino = {
          name: "Casino bola 28",
          location: LOCATION.BRAZIL,
        };

        const userToTest: casinoUser   = {
            name: "Kim",
            age: 24,
            nacionality: NATION.AMERICAN,
          };
    
        const result = verifyAge(casino, [userToTest]);
        expect(result.americans.allowed).toEqual(["Kim"]);
      });

      test("Dois mericanos e dois brasileiros com 19 anos querem entrar em um casino nos EUA", () => {

        const casino: Casino = {
          name: "Casino ball 28",
          location: LOCATION.EUA,
        };

        const userToTestEUA: casinoUser   = {
            name: "Karl",
            age: 19,
            nacionality: NATION.AMERICAN,
          };

          const userToTestBR: casinoUser   = {
            name: "Katy",
            age: 19,
            nacionality: NATION.BRAZILIAN,
          };
    
        const result = verifyAge(casino, [userToTestBR, userToTestBR, userToTestEUA, userToTestEUA]);
        expect(result.americans.unallowed).toEqual(["userToTestEUA", "userToTestEUA"]});
        expect(result.americans.unallowed).toEqual(["userToTestEUA", "userToTestEUA"]});

});