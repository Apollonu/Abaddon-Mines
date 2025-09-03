//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'mekanism:'
	const all_individual_items = []
	let ore_variants = ['block_', 'block_raw_', 'raw_']
	let ingot_variants = ['dust_', 'ingot_', 'nugget_']

	//Individual Items
	let individual_items = [
		prefix + 'block_charcoal',
		prefix + 'block_steel',
		prefix + 'deepslate_tin_ore',
		prefix + 'dust_diamond',
		prefix + 'dust_obsidian',
		prefix + 'dust_sulfur',
		prefix + 'flamethrower',
		prefix + 'ingot_steel',
		prefix + 'tin_ore'
	]

	//Ore Types
	let ore_types = [
		'lead',
		'tin',
		'uranium'
	].forEach(type => {
		ore_variants.forEach(variant => {
			let individual = prefix + variant + type
			all_individual_items.push(individual)
		})
	})

	//Ingot Types
	let ingot_types = [
		'lead',
		'tin'
	].forEach(type => {
		ingot_variants.forEach(variant => {
			let individual = prefix + variant + type
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