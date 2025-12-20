//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Variables
	let prefix = 'pneumaticcraft:'

	//Spring Coiling Machine Recipe
	event.remove({output: prefix + 'compressed_iron_gear'})
	event.custom({
		'type': 'pneumaticcraft:pressure_chamber',
		'inputs': [{
				'type': 'pneumaticcraft:stacked_item',
				'tag': 'forge:gears/iron'
			}],
		'pressure': 2.0,
		'results': [{'count': 1, 'item': prefix + 'compressed_iron_gear'}]
	})
})