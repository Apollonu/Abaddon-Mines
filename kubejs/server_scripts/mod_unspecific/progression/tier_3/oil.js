//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Crude Oil Distillation Recipe
	event.remove({output: 'immersivepetroleum:bitumen', type: 'immersivepetroleum:distillation'})
	event.custom({
		'type': 'immersivepetroleum:distillation',
		'byproducts': [{
			'chance': '0.07',
			'item': 'immersivepetroleum:bitumen'
		}],
		'energy': 1024,
		'input': {
			'amount': 60,
			'tag': 'forge:crude_oil'
		},
		'results': [
			{
			'amount': 15,
			'fluid': 'immersivepetroleum:naphtha'
			}, {
			'amount': 20,
			'fluid': 'thermal:light_oil'
			}, {
			'amount': 10,
			'fluid': 'immersivepetroleum:diesel_sulfur'
			}, {
			'amount': 30,
			'fluid': 'thermal:heavy_oil'
			}
		],
		'time': 1
	})

	//Heavy Oil Distillation Recipe
	event.custom({
		'type': 'immersivepetroleum:distillation',
		'byproducts': [{
			'chance': '0.05',
			'item': 'thermal:tar'
		}],
		'energy': 1024,
		'input': {
			'amount': 45,
			'tag': 'forge:heavy_oil'
		},
		'results': [
			{
			'amount': 20,
			'fluid': 'immersivepetroleum:diesel_sulfur'
			}, {
			'amount': 10,
			'fluid': 'immersivepetroleum:lubricant'
			}, {
			'amount': 15,
			'fluid': 'thermal:heavy_oil'
			}
		],
		'time': 1
	})

	//Light Oil Distillation Recipe
	event.custom({
		'type': 'immersivepetroleum:distillation',
		'energy': 1024,
		'input': {
			'amount': 40,
			'tag': 'forge:light_oil'
		},
		'results': [
			{
			'amount': 10,
			'fluid': 'tfmg:lpg'
			}, {
			'amount': 20,
			'fluid': 'immersivepetroleum:naphtha'
			}, {
			'amount': 15,
			'fluid': 'tfmg:kerosene'
			}
		],
		'time': 1
	})

	//Refined Fuel Recipe
	event.custom({
		'type': 'immersiveengineering:refinery',
		'catalyst': {
			'tag': 'forge:plates/nickel'
		},
		'energy': 120,
		'input0': {
			'amount': 100,
			'tag': 'forge:kerosene'
		},
		'result': {
			'amount': 100,
			'fluid': 'thermal:refined_fuel'
		}
	})

	//Rocket Fuel Recipe
	event.custom({
		'type': 'immersivepetroleum:hydrotreater',
		'energy': 168000,
		'input': {
			'amount': 500,
			'tag': 'forge:refined_fuel'
		},
		'result': {
			'amount': 400,
			'fluid': 'ad_astra:fuel'
		},
		'secondary_result': {
			'chance': '0.03',
			'item': 'thermal:tar'
		},
		'time': 200
	})
})