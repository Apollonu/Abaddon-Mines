//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Brass Recipe Removal
	event.remove({output: 'create:brass_ingot', type: 'immersiveengineering:alloy'})

	//Wrench Recipe
	event.replaceInput({output: 'create:wrench'},
		'#forge:plates/gold',
		'#forge:plates/brass'
	)

	//Steam Engine Recipe
	event.replaceInput({output: 'create:steam_engine'},
		'#forge:plates/gold',
		'#forge:plates/brass'
	)

	//Smeltery Alloying Recipe
	event.custom({
		'type': 'tconstruct:alloy',
		'conditions': [{
			'type': 'mantle:tag_filled',
			'tag': 'forge:ingots/zinc'
		}],
		'inputs': [{
			'amount': 90,
			'tag': 'forge:molten_copper'
			}, {
			'amount': 90,
			'tag': 'forge:molten_zinc'
		}],
		'result': {
			'amount': 180,
			'tag': 'forge:molten_brass'
		},
		'temperature': 1050
	})
})