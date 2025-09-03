//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Variables
	let prefix = 'create:'

	//Mechanical Press Recipe
	event.remove({output: prefix + 'mechanical_press'})
	event.shaped(prefix + 'mechanical_press', [' A', ' B', ' C' ], {
		A: prefix + 'shaft',
		B: prefix + 'andesite_casing',
		C: '#forge:storage_blocks/andesite_alloy'
	})

	//Millstone Recipe
	event.remove({output: prefix + 'millstone'})
	event.shaped(prefix + 'millstone', [' A', ' B', ' C' ], {
		A: prefix + 'cogwheel',
		B: prefix + 'andesite_casing',
		C: '#forge:storage_blocks/andesite_alloy'
	})

	//Whisk Recipe
	event.remove({output: prefix + 'whisk'})
	event.shaped(prefix + 'whisk', [' A ', 'BAB', 'BBB' ], {
		A: '#forge:ingots/andesite_alloy',
		B: '#forge:plates/zinc'
	})

	//Propeller Recipe
	event.remove({output: prefix + 'propeller'})
	event.shaped(prefix + 'propeller', [' A ', 'ABA', ' A '], {
		A: '#forge:plates/iron',
		B: prefix + 'cogwheel'
	})

	//Encased Fan Recipe
	event.remove({output: prefix + 'encased_fan'})
	event.shaped(prefix + 'encased_fan', [' A ', 'DB ', ' C '], {
		A: prefix + 'shaft',
		B: prefix + 'andesite_casing',
		C: prefix + 'propeller',
		D: '#forge:rods/iron'
	})
})