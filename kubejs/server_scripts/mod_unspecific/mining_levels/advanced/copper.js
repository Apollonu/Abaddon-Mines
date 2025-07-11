//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Variables
	let material = 'copper'
	const all_individual_blocks = []
	let block_variants = ['', '_stairs', '_slab']
	let weather_variants = [':', ':exposed_', ':weathered_', ':oxidized_']
	let wax_variants = [':', ':waxed_']
	let anvil_variants = [':', ':chipped_', ':damaged_']

	//Individual Blocks
	let individual_blocks = [
		'create:copper_bars',
		'create:copper_casing',
		'create:copper_door',
		'create:copper_valve_handle',
		'create:fluid_pipe',
		'create:fluid_tank',
		'create:fluid_valve',
		'create:hose_pulley',
		'create:item_drain',
		'create:mechanical_pump',
		'create:portable_fluid_interface',
		'create:smart_fluid_pipe',
		'create:spout',
		'create:steam_engine',
		'create:steam_whistle',

		'minecraft:copper_block',
		'minecraft:lightning_rod',
		'minecraft:waxed_copper_block',

		'quark:raw_copper_bricks_wall',

		'supplementaries:cog_block',
		'supplementaries:fire_pit',

		'mekanism:supercharged_coil'
	]

	//Individual Tags
	let individual_tags = [
		'forge:ores/' + material,
		'immersiveengineering:blocks/' + material,
		'forge:storage_blocks/raw_' + material
	]
	
	//Block Types
	let block_types = [
		'quark:raw_copper_bricks'
	].forEach(type => {
		block_variants.forEach(variant => {
			let individual = type + variant 
			all_individual_blocks.push(individual)
		})
	})

	//Weather & Wax Types
	let weather_wax_types = [
		'everythingcopper:copper_bars',
		'everythingcopper:copper_chain',
		'everythingcopper:copper_door',
		'everythingcopper:copper_grate',
		'everythingcopper:copper_hopper',
		'everythingcopper:copper_lamp',
		'everythingcopper:copper_lantern',
		'everythingcopper:copper_pressure_plate',
		'everythingcopper:copper_soul_lantern',
		'everythingcopper:copper_trapdoor',
		'everythingcopper:chiseled_copper'
	].forEach(type => {
		weather_variants.forEach(weather => {
			wax_variants.forEach(wax => {
				let individual = type.replace(':', weather).replace(':', wax)
				all_individual_blocks.push(individual)
			})
		})
	})

	//Block + Weather & Wax Types
	let block_weather_wax_types = [
		'minecraft:cut_copper'
	].forEach(type => {
		block_variants.forEach(variant => {
			weather_variants.forEach(weather => {
				wax_variants.forEach(wax => {
					let individual = type.replace(':', weather).replace(':', wax) + variant
					all_individual_blocks.push(individual)
				})
			})
		})
	})

	//Block + Weather & Wax Plural Types
	let plural_types = [
		'create:copper_shingles',
		'create:copper_tiles'
	].forEach(type => {
		let length = type.length
		block_variants.forEach(variant => {
			weather_variants.forEach(weather => {
				wax_variants.forEach(wax => {
					let individual = type.slice(0, length - 1) + variant
					individual = individual.replace(':', weather).replace(':', wax)
					all_individual_blocks.push(individual)
				})
			})
		})
		all_individual_blocks.push(type)
	})

	//Anvil + Weather & Wax Types
	let anvil_weather_wax_types = [
		'everythingcopper:copper_anvil'
	].forEach(variant => {
		weather_variants.forEach(weather => {
			wax_variants.forEach(wax => {
				anvil_variants.forEach(anvil => {
					let individual = variant.replace(':', weather).replace(':', anvil).replace(':', wax)
					all_individual_blocks.push(individual)
				})
			})
		})
	})

	//Individual Combine
	individual_blocks.forEach(individual => {
		all_individual_blocks.push(individual)
	})

	//Block Tags Function Push
	block_tags (
		event,
		material,
		all_individual_blocks,
		individual_tags
	)
})