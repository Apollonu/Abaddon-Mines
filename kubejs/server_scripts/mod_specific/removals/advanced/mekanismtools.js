//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'mekanismtools:'
	const all_individual_items = []

	//Individual Items
	let individual_items = [

	]

	//Ore Types
	let paxel_types = [
		'bronze',
		'diamond',
		'gold',
		'iron',
		'lapis_lazuli',
		'netherite',
		'osmium',
		'refined_glowstone',
		'refined_obsidian',
		'steel',
		'stone',
		'wood'
	].forEach(type => {
		let individual = prefix + type + '_paxel'
		all_individual_items.push(individual)
	})

	
	//Remove Items Function Push
	remove_items (
		event,
		all_individual_items
	)
})