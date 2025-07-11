//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'industrialforegoing:'
	const all_individual_items = []

	//Individual Items
	let individual_items = [
		prefix + 'conveyor',
		prefix + 'diamond_gear',
		prefix + 'gold_gear',
		prefix + 'iron_gear',
		prefix + 'plastic',
		prefix + 'tinydryrubber'
	]

	//Conveyor Types
	let conveyor_types = [
		'blinking',
		'bouncing',
		'detection',
		'dropping',
		'extraction',
		'insertion',
		'splitting'
	].forEach(type => {
		let individual = prefix + 'conveyor_' + type + '_upgrade'
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