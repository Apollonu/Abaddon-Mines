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

	//Steel Mechanism Recipe
	event.recipes.create.sequenced_assembly([
        Item.of('tfmg:steel_mechanism').withChance(120),
        Item.of('tfmg:steel_cogwheel').withChance(4),
        Item.of('#forge:ingots/steel').withChance(4)
    ], '#forge:plates/steel', [
		event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:steel_cogwheel']),
        event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', '#forge:plates/nickel']),
        event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:large_steel_cogwheel']),
        event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', '#forge:plates/lead']),
        event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screw']),
        event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'immersiveengineering:screwdriver'])
	]).transitionalItem('tfmg:unfinished_steel_mechanism').loops(2)

	//Generator Recipe
	event.custom({
		'type': 'create:sequenced_assembly',
		'ingredient': {
			'item': 'create:shaft'
		},
		'loops': 3,
		'results': [
			{
				'chance': 120.0,
				'item': 'tfmg:generator'
			}, {
				'chance': 8.0,
				'item': 'tfmg:steel_mechanism'
			}, {
				'chance': 8.0,
				'item': 'tfmg:steel_cogwheel'
			}, {
				'chance': 8.0,
				'item': 'tfmg:capacitor_item'
			}
		],
		'sequence': [
			{
			'type': 'create:deploying',
			'ingredients': [
				{
					'item': 'tfmg:unfinished_generator'
				}, {
					'item': 'tfmg:capacitor_item'
				}
			],
			'results': [{'item': 'tfmg:unfinished_generator'}]
			}, {
				'type': 'create:deploying',
				'ingredients': [
					{
						'item': 'tfmg:unfinished_generator'
					}, {
						'tag': 'forge:plates/steel'
					}
				],
				'results': [{'item': 'tfmg:unfinished_generator'}]
			}, {
				'type': 'tfmg:winding',
				'ingredients': [
					{
						'item': 'tfmg:unfinished_generator'
					}, {
						'item': 'tfmg:copper_spool'
					}
				],
				'processingTime': 75,
				'results': [{'item': 'tfmg:unfinished_generator'}]
			}, {
				'type': 'create:deploying',
				'ingredients': [
					{
						'item': 'tfmg:unfinished_generator'
					}, {
						'item': 'tfmg:magnet'
					}
				],
				'results': [{'item': 'tfmg:unfinished_generator'}]
			}, {
				'type': 'create:deploying',
				'ingredients': [
					{
						'item': 'tfmg:unfinished_generator'
					}, {
						'item': 'tfmg:steel_mechanism'
					}
				],
				'results': [{'item': 'tfmg:unfinished_generator'}]
			}, {
				'type': 'create:deploying',
				'ingredients': [
					{
						'item': 'tfmg:unfinished_generator'
					}, {
						'item': 'immersiveengineering:screwdriver'
					}
				],
				'results': [{'item': 'tfmg:unfinished_generator'}]
			}
		],
		'transitionalItem': {'item': 'tfmg:unfinished_generator'}
	})
})