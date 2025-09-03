//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

	//
	event.replaceInput({output: '#forge:ingots/slimesteel', input: '#forge:ingots/iron'},
		'#forge:ingots/iron',
		'#forge:ingots/steel'
	)

	//Smeltery Alloying Recipe
	event.custom({
		'type': 'tconstruct:alloy',
		'inputs': [{
			'amount': 90,
			'tag': 'forge:molten_steel'
			}, {
			'amount': 250,
			'tag': 'tconstruct:sky_slime'
			}, {
			'amount': 250,
			'tag': 'tconstruct:seared_stone'
		}],
		'result': {
			'amount': 180,
			'fluid': 'tconstruct:molten_slimesteel'
		},
		'temperature': 900
	})
})