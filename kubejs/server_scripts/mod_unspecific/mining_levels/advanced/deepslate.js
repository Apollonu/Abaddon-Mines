//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 2

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Variables
	let material = 'deepslate'
	const all_individual_blocks = []
	let block_variants = ['_stairs', '_slab', '_wall']

	//Individual Blocks
	let individual_blocks = [
		'create:deepslate_pillar',
		'create:layered_deepslate',

		'minecraft:chiseled_deepslate',
		'minecraft:cracked_deepslate_bricks',
		'minecraft:cracked_deepslate_tiles',
		'minecraft:deepslate',
		'minecraft:reinforced_deepslate',
		
		'spelunkery:diamond_grindstone'
	]

	//Individual Tags
	let individual_tags = [
		'forge:ores_in_ground/' + material
	]
	
	//Block Types
	let block_types = [
		'create:cut_deepslate',
		'create:polished_cut_deepslate',

		'minecraft:cobbled_deepslate',
		'minecraft:polished_deepslate'
	].forEach(type => {
		block_variants.forEach(variant => {
			let individual = type + variant 
			all_individual_blocks.push(individual)
		})
		all_individual_blocks.push(type)
	})

	//Block + Plural Types
	let plural_types = [
		'create:cut_deepslate_bricks',
		'create:small_deepslate_bricks',
		'minecraft:deepslate_bricks',
		'minecraft:deepslate_tiles'
	].forEach(type => {
		let length = type.length
		block_variants.forEach(variant => {
			let individual = type.slice(0, length - 1) + variant
			all_individual_blocks.push(individual)
		})
		all_individual_blocks.push(type)
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