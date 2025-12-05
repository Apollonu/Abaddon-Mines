//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Steel Rod Recipe
	event.remove({output: '#forge:rods/steel', type: 'minecraft:crafting_shaped'})

	//Steel Plate Recipe
	event.remove({output: '#forge:plates/steel', type: 'create:pressing'})
	event.recipes.create.sequenced_assembly(['#forge:plates/steel'], '#forge:ingots/steel', [
		event.recipes.create.pressing('tfmg:unprocessed_heavy_plate', 'tfmg:unprocessed_heavy_plate'),
		event.recipes.create.pressing('tfmg:unprocessed_heavy_plate', 'tfmg:unprocessed_heavy_plate'),
		event.recipes.create.pressing('tfmg:unprocessed_heavy_plate', 'tfmg:unprocessed_heavy_plate')
	]).transitionalItem('tfmg:unprocessed_heavy_plate').loops(2)

	//Metal Girder Recipe
	event.remove({output: 'create:metal_girder'})
	event.shaped(Item.of('create:metal_girder', 8), ['AAA', 'BBB'], {
		A: '#forge:plates/steel',
		B: '#forge:ingots/andesite_alloy'
	})

	//Schematicannon Recipe
	event.remove({output: 'create:schematicannon'})
	event.shaped('create:schematicannon', [' A ', 'CBC', 'EDE'], {
		A: 'supplementaries:cannon',
		B: '#forge:storage_blocks/steel',
		C: '#minecraft:logs',
		D: 'minecraft:dispenser',
		E: 'minecraft:smooth_stone'
	})

	//Mechanical Drill Recipe
	event.remove({output: 'create:mechanical_drill'})
	event.shaped('create:mechanical_drill', [' A ', 'CDC', 'EBE'], {
		A: 'immersiveengineering:drillhead_iron',
		B: 'create:andesite_casing',
		C: '#forge:ingots/cast_iron',
		D: '#forge:rods/steel',
		E: '#forge:ingots/steel'
	})

	//Generator Coil Recipe
	event.remove({output: 'create_new_age:generator_coil'})
	event.recipes.create.mechanical_crafting('create_new_age:generator_coil', [
		' AAA ',
		'ACBCA',
		'ABDBA',
		'ACBCA',
		' AAA '
	], {
		A: 'immersiveengineering:coil_lv',
		B: 'tfmg:magnet',
		C: '#forge:storage_blocks/copper',
		D: '#forge:storage_blocks/andesite_alloy'
	})
})