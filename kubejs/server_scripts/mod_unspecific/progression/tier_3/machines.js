//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

	//Foregoing Gears
	let foregoing_gears = [
		'animal_baby_separator',
		'biofuel_generator',
		'block_breaker',
		'block_placer',
		'fluid_collector',
		'fluid_placer',
		'mob_slaughter_factory',
		'plant_gatherer',
		'plant_sower',
		'sludge_refiner',
		'spores_recreator'
	].forEach(type => {
		event.replaceInput({output: 'industrialforegoing:' + type},
			'#industrialforegoing:machine_frame/pity',
			'#industrialforegoing:machine_frame/simple'
		)
	})

	//Thermal Ingots
	let thermal_ingots = [
		'compression',
		'lapidary',
		'magmatic',
		'numismatic',
		'stirling'
	].forEach(type => {
		event.replaceInput({output: 'thermal:dynamo_' + type},
			'#forge:ingots/iron',
			'#forge:ingots/steel'
		)
	})

	//Decoctive Diffuser Recipe
	event.remove({output: 'thermal:device_potion_diffuser'})
	event.shaped('thermal:device_potion_diffuser', ['ABA','CDC','AEA'], {
		A: '#forge:ingots/silver',
		B: '#forge:gears/constantan',
		C: '#forge:glass',
		D: '#industrialforegoing:machine_frame/simple',
		E: 'minecraft:glass_bottle'
	})

	//Dissolution Chamber Recipe
	event.remove({output: 'industrialforegoing:dissolution_chamber'})
	event.shaped('industrialforegoing:dissolution_chamber', ['ABA','CDC','EFE'], {
		A: '#forge:plastic',
		B: '#forge:crafting_tables',
		C: 'tfmg:steel_pipe',
		D: '#industrialforegoing:machine_frame/pity',
		E: '#forge:ingots/gold',
		F: '#forge:gears/compressed_iron'
	})

	//Insightful Condenser Recipe
	event.remove({output: 'thermal:device_xp_condenser'})
	event.shaped('thermal:device_xp_condenser', ['ABA','CDC','AEA'], {
		A: '#forge:ingots/silver',
		B: '#forge:gears/lapis',
		C: '#forge:glass',
		D: '#industrialforegoing:machine_frame/simple',
		E: 'thermal:xp_crystal'
	})

	//Nullifier Recipe
	event.remove({output: 'thermal:device_nullifier'})
	event.shaped('thermal:device_nullifier', ['ABA','CDC','AEA'], {
		A: '#forge:ingots/tin',
		B: '#forge:dusts/redstone',
		C: '#forge:glass',
		D: '#industrialforegoing:machine_frame/simple',
		E: 'minecraft:lava_bucket'
	})

	//Vacuumulator Recipe
	event.remove({output: 'thermal:device_collector'})
	event.shaped('thermal:device_collector', ['ABA','CDC','AEA'], {
		A: '#forge:ingots/tin',
		B: '#forge:ender_pearls',
		C: '#forge:glass',
		D: '#industrialforegoing:machine_frame/simple',
		E: 'minecraft:hopper'
	})
    
	//Simple Machine Frame Recipe
   	event.remove({output: 'industrialforegoing:machine_frame_simple'})
	event.recipes.industrialforegoing.dissolution_chamber(
		[
			'#forge:plastic',
			'#industrialforegoing:machine_frame/pity',
			'#forge:plastic',
			'minecraft:nether_brick',
			'minecraft:nether_brick',
			'#forge:plates/steel',
			'#forge:gears/gold',
			'#forge:plates/steel'
		],
        Fluid.of('thermal:latex', 250),
        'industrialforegoing:machine_frame_simple',
        100
    )
})
