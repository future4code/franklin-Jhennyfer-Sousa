import { User } from "../src/models/userModels"
import { performPurchase } from "../src/functions/performPurchase/performPurchase"

describe("Testando função de compra", () =>  {

	test("saldo do usuário maior que o valor de compra", () => {
	const userTest: User = {
		name: "Andreza",
		balance: 1000
	}

	const balanceUpdated =  performPurchase(userTest, 380 )

	expect(balanceUpdated).toEqual({
		name: "Andreza",
		balance: 620
	})

	} )

	test("saldo do usuário com saldo igual ao valor de compra", () => {
		const userTest: User = {
			name: "Andreza",
			balance: 1000
		}
	
		const balanceUpdated =  performPurchase(userTest, 1000 )
	
		expect(balanceUpdated).toEqual({
			name: "Andreza",
			balance: 0
		})
	
		} )

		test("saldo do usuário com saldo menor que o valor de compra", () => {
			const userTest: User = {
				name: "Andreza",
				balance: 900
			}
		
			const balanceUpdated =  performPurchase(userTest, 1000 )
		
			expect(balanceUpdated).toBeUndefined()
		
			} )
})