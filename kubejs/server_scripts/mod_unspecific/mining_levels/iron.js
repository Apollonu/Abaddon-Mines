//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Variables
	let material = 'iron'

	//Individual Blocks
	let individual_blocks = [
		'ad_astra:iron_factory_block',
		'ad_astra:iron_panel',

		'create:blaze_burner',
		'create:chute',
		'create:empty_blaze_burner',
		'create:industrial_iron_block',
		'create:item_vault',
		'create:metal_bracket',
		'create:metal_girder',
		'create:smart_chute',

		'create_new_age:basic_solar_heating_plate',

		'mekanism:advanced_fluid_tank',
		'mekanism:basic_fluid_tank',
		'mekanism:bio_generator',
		'mekanism:electrolytic_separator',
		'mekanism:elite_fluid_tank',
		'mekanism:heat_generator',
		'mekanism:logistical_sorter',
		'mekanism:ultimate_fluid_tank',

		'immersiveengineering:blastfurnace_preheater',
		'immersiveengineering:capacitor_lv',
		'immersiveengineering:chute_iron',
		'immersiveengineering:coil_hv',
		'immersiveengineering:coil_lv',
		'immersiveengineering:coil_mv',
		'immersiveengineering:dynamo',
		'immersiveengineering:fluid_placer',
		'immersiveengineering:fluid_pipe',
		'immersiveengineering:fluid_sorter',
		'immersiveengineering:fluid_pump',
		'immersiveengineering:floodlight',
		'immersiveengineering:furnace_heater',
		'immersiveengineering:item_batcher',
		'immersiveengineering:light_engineering',
		'immersiveengineering:current_transformer',
		'immersiveengineering:metal_barrel',
		'immersiveengineering:reinforced_crate',
		'immersiveengineering:rs_engineering',
		'immersiveengineering:sheetmetal_iron',
		'immersiveengineering:slab_sheetmetal_iron',
		'immersiveengineering:sorter',
		'immersiveengineering:transformer',
		'immersiveengineering:transformer_hv',
		'immersiveengineering:turntable',

		'minecraft:anvil',
		'minecraft:cauldron',
		'minecraft:heavy_weighted_pressure_plate',
		'minecraft:hopper',
		'minecraft:iron_bars',
		'minecraft:iron_door',
		'minecraft:iron_trapdoor',

		'quark:crafter',
		'quark:iron_plate',
		'quark:iron_plate_slab',
		'quark:iron_pillar',
		'quark:iron_rod',
		'quark:iron_stairs',
		'quark:rusty_iron_plate',
		'quark:rusty_iron_plate_slab',
		'quark:rusty_iron_plate_stairs',

		'supplementaries:cannon',
		'supplementaries:iron_gate',
		'supplementaries:lock_block',
		'supplementaries:spring_launcher',
		'supplementaries:wind_vane',

		'tfmg:coke_oven',

		'vintage:spring_coiling_machine'
	]

	//Individual Tags
	let individual_tags = [
		'forge:ores/' + material,
		'forge:storage_blocks/' + material,
		'forge:storage_blocks/raw_' + material
	]

	//Block Tags Function Push
	block_tags (
		event,
		material,
		individual_blocks,
		individual_tags
	)
})