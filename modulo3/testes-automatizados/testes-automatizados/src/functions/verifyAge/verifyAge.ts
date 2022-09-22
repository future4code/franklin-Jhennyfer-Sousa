import { Casino, LOCATION } from "../../models/casinoModels";
import { casinoUser, NATION, ResultUsers } from "../../models/userCasinoModels";

export function verifyAge(casino: Casino, users: casinoUser[]): ResultUsers {
    const allowed: casinoUser[] = [];
    const unallowed: casinoUser[] = [];
  
    for (const user of users) {
      if (casino.location === LOCATION.EUA) {
        if (user.age >= 21) {
          allowed.push(user);
        } else {
          unallowed.push(user);
        }
      } else if (casino.location === LOCATION.BRAZIL) {
        if (user.age >= 18) {
          allowed.push(user);
        } else {
          unallowed.push(user);
        }
        break;
      }
    }
  
    return {
      brazilians: {
        allowed: allowed
          .filter((user) => user.nacionality === NATION.BRAZILIAN)
          .map((u) => u.name),
        unallowed: unallowed
          .filter((user) => user.nacionality === NATION.BRAZILIAN)
          .map((u) => u.name),
      },
      americans: {
        allowed: allowed
          .filter((user) => user.nacionality === NATION.AMERICAN)
          .map((u) => u.name),
        unallowed: unallowed
          .filter((user) => user.nacionality === NATION.AMERICAN)
          .map((u) => u.name),
      },
    };
  }