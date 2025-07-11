//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'tfmg:'
	const all_individual_items = []
	let block_variants = ['_stairs', '_slab', '_wall']
	let ore_ingot_variants = ['_ore', '_ingot', '_nugget', '_block']
	let tool_variants = ['axe', 'hoe', 'pickaxe', 'shovel', 'sword']

	//Individual Items
	let individual_items = [
		prefix + 'aluminum_frame',
		prefix + 'aluminum_sheet',
		prefix + 'coal_coke',
		prefix + 'coal_coke_block',
		prefix + 'constantan_block',
		prefix + 'constantan_ingot',
		prefix + 'constantan_nugget',
		prefix + 'copper_wire',
		prefix + 'deepslate_lead_ore',
		prefix + 'deepslate_lithium_ore',
		prefix + 'deepslate_nickel_ore',
		prefix + 'galena_pillar',
		prefix + 'heavy_plate',
		prefix + 'layered_galena',
		prefix + 'lit_lithium_blade',
		prefix + 'lithium_blade',
		prefix + 'lithium_ore',
		prefix + 'lead_sheet',
		prefix + 'nickel_sheet',
		prefix + 'nitrate_dust',
		prefix + 'plastic_sheet',
		prefix + 'raw_lead',
		prefix + 'raw_lead_block',
		prefix + 'raw_lithium',
		prefix + 'raw_lithium_block',
		prefix + 'raw_nickel',
		prefix + 'raw_nickel_block',
		prefix + 'screwdriver',
		prefix + 'slag',
		prefix + 'steel_bars',
		prefix + 'steel_block',
		prefix + 'steel_boots',
		prefix + 'steel_chestplate',
		prefix + 'steel_frame',
		prefix + 'steel_helmet',
		prefix + 'steel_ingot',
		prefix + 'steel_leggings',
		prefix + 'steel_nugget',
		prefix + 'steel_scaffolding',
		prefix + 'steel_trapdoor',
		prefix + 'sulfur_dust'
	]

	//Galena Types
	let galena_types = [
		'galena',
		'cut_galena',
		'polished_cut_galena'
	].forEach(type => {
		block_variants.forEach(variant => {
			let individual = prefix + type + variant
			all_individual_items.push(individual)
		})
		all_individual_items.push(prefix + type)
	})

	//Galena Brick Types
	let galena_brick_types = [
		'cut_galena_bricks',
		'small_galena_bricks'
	].forEach(type => {
		let length = type.length
		block_variants.forEach(variant => {
			let individual = prefix + type.slice(0, length - 1) + variant
			all_individual_items.push(individual)
		})
		all_individual_items.push(prefix + type)
	})

	//Ore & Ingot Types
	let ore_ingot_types = [
		'nickel',
		'lead'
	].forEach(type => {
		ore_ingot_variants.forEach(variant => {
			let individual = prefix + type + variant
			all_individual_items.push(individual)
		})
	})

	//Tool Types
	let tool_types = [
		'lead_',
		'steel_'
	].forEach(type => {
		tool_variants.forEach(variant => {
			let individual = prefix + type + variant
			all_individual_items.push(individual)
		})
	})
	
	//Individual Combine
	individual_items.forEach(individual => {
		all_individual_items.push(individual)
	})
	
	//Remove Items Function Push
	remove_items (
		event,
		all_individual_items
	)
})