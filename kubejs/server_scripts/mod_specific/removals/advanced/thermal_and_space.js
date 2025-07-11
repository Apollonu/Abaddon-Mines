//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'thermal_and_space:'
	const all_individual_items = []
	let ore_variants = ['glacio_', 'mars_', 'mercury_', 'moon_', 'venus_']

	//Individual Items
	let individual_items = [
		
	]

	//Ore Types
	let ore_types = [
		'lead'
	].forEach(type => {
		ore_variants.forEach(variant => {
			let individual = prefix + variant + type + '_ore'
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