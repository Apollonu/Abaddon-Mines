//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'architects_palette:'
	const all_individual_items = []
	let block_variants = ['_slab', '_stairs', '_wall']
	let ore_brick_variants = ['_iron', 'gold', '_lapis']

	//Individual Items
	let individual_items = [
		prefix + 'charcoal_block',
		prefix + 'chiseled_gold_ore_brick',
		prefix + 'chiseled_iron_ore_brick',
		prefix + 'chiseled_lapis_ore_brick',
		prefix + 'coarse_snow',
		prefix + 'cracked_gold_ore_brick',
		prefix + 'cracked_iron_ore_brick',
		prefix + 'cracked_lapis_ore_brick',
		prefix + 'lit_osseous_skull',
		prefix + 'lit_withered_osseous_skull',
		prefix + 'osseous_pillar',
		prefix + 'osseous_skull',
		prefix + 'plating_block',
		prefix + 'plating_nub',
		prefix + 'plating_slab',
		prefix + 'plating_stairs',
		prefix + 'polished_glowstone',
		prefix + 'polished_glowstone_nub',
		prefix + 'polished_glowstone_slab',
		prefix + 'polished_glowstone_wall',
		prefix + 'runic_glowstone',
		prefix + 'sheet_metal_block',
		prefix + 'sheet_metal_wall',
		prefix + 'twisting_blackstone_bricks',
		prefix + 'weeping_blackstone_bricks',
		prefix + 'wither_lamp',
		prefix + 'withered_bone_block',
		prefix + 'withered_osseous_pillar',
		prefix + 'withered_osseous_skull'
	]

	//Brick Types
	let brick_types = [
		'iron_ore_bricks',
		'gold_ore_bricks',
		'lapis_ore_bricks',
		'osseous_bricks',
		'overgrown_algal_bricks',
		'withered_osseous_bricks'
	].forEach(type => {
		let length = type.length
		block_variants.forEach(variant => {
			let individual = prefix + type.slice(0, length - 1) + variant
			all_individual_items.push(individual)
		})
		all_individual_items.push(prefix + type)
	})
	
	//Ore Brick Types
	let ore_brick_types = [
		'',
		'chiseled',
		'cracked'
	].forEach(type => {
		ore_brick_variants.forEach(variant => {
			let individual = prefix + type + variant + '_ore_bricks'
			all_individual_items.push(individual)
		})
	})

	//Vertical Slab Types
	let vertical_slab_types = [
		'abyssaline_brick',
		'abyssaline_tile',
		'acacia_board',
		'algal_brick',
		'ancient_plating',
		'basalt_tile',
		'birch_board',
		'calcite_brick',
		'cerebral',
		'cerebral_tile',
		'coal_ore_brick',
		'crimson_board',
		'craterstone',
		'cut_nether_brass',
		'dark_oak_board',
		'dark_oracle_brick',
		'diamond_ore_brick',
		'dripstone_brick',
		'emerald_ore_brick',
		'entrails',
		'entwine',
		'esoterrack',
		'esoterrack_brick',
		'flint_tile',
		'gold_ore_brick',
		'gilded_sandstone',
		'hadaline_brick',
		'hadaline_tile',
		'hazard',
		'iron_ore_brick',
		'jungle_board',
		'lapis_ore_brick',
		'mangrove_board',
		'moonshale',
		'moonshale_brick',
		'myonite',
		'myonite_brick',
		'mushy_myonite',
		'mushy_myonite_brick',
		'nebulite',
		'nether_brass',
		'oak_board',
		'olivestone_brick',
		'olivestone_tile',
		'onyx',
		'onyx_brick',
		'oracle',
		'oracle_brick',
		'oracle_tile',
		'osseous_brick',
		'overgrown_algal_brick',
		'plating',
		'polished_glowstone',
		'polished_nebulite',
		'polished_packed_ice',
		'redstone_ore_brick',
		'smooth_nether_brass',
		'spruce_board',
		'sunmetal',
		'tread_plate',
		'tuff_brick',
		'twisted',
		'twisted_board',
		'wardstone',
		'wardstone_brick',
		'warped_board',
		'warpstone',
		'withered_osseous_brick'
	].forEach(type => {
		let individual = prefix + type + '_vertical_slab'
		all_individual_items.push(individual)
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