//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'notreepunching:'
	const all_individual_items = []
	let tool_variants = ['_knife', '_mattock', '_saw']

	//Individual Items
	let individual_items = [
		prefix + 'flint_knife',
		prefix + 'flint_mattock',
		prefix + 'plant_fiber',
		prefix + 'plant_string'
	]

	//Tool Types
	let tool_types = [
		'diamond',
		'gold',
		'iron',
		'netherite'
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