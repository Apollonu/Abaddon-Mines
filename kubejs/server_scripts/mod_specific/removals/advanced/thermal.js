//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'thermal:'
	const all_individual_items = []
	let raw_variants = ['', '_block']
	let ingot_variants = ['_block', '_ingot', '_nugget']
	
	//Individual Items
	let individual_items = [
		prefix + 'chiseled_slag',
		prefix + 'cracked_slag_bricks',
		prefix + 'coal_coke',
		prefix + 'coal_coke_block',
		prefix + 'copper_nugget',
		prefix + 'deepslate_lead_ore',
		prefix + 'electrum_ingot',
		prefix + 'electrum_nugget',
		prefix + 'gunpowder_block',
		prefix + 'iron_plate',
		prefix + 'lead_ore',
		prefix + 'machine_sawmill',
		prefix + 'niter_dust',
		prefix + 'polished_slag',
		prefix + 'saw_blade',
		prefix + 'sawdust',
		prefix + 'slag_block',
		prefix + 'slag_bricks',
		prefix + 'sulfur_dust'
	]

	//Raw Types
	let raw_types = [
		'lead',
		'silver'
	].forEach(type => {
		raw_variants.forEach(variant => {
			let individual = prefix + 'raw_' + type + variant
			all_individual_items.push(individual)
		})
	})
	
	//Dust variants
	let dust_types = [
		'bronze',
		'copper',
		'gold',
		'iron',
	].forEach(type => {
		let individual = prefix + type + '_dust'
		all_individual_items.push(individual)
	})
	
	//Ingot variants
	let ingot_types = [
		'bronze',
		'lead',
		'silver',
		'steel'
	].forEach(type => {
		ingot_variants.forEach(variant => {
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