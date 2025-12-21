//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {

	//Variables
	let prefix = 'steampowered:'
	const all_individual_items = []
	let cog_variants = ['bronze', 'cast_iron', 'steel']

	//Individual Items
	let individual_items = [
		prefix + 'alternator',
		prefix + 'brass_flywheel',
		prefix + 'bronze_sheet',
		prefix + 'furnace_engine',
		prefix + 'steel_boiler',
		prefix + 'steel_burner',
		prefix + 'steel_flywheel',
		prefix + 'steel_steam_engine'
	]

	//Cog Types
	let cog_types = [
		'_cogwheel',
		'_large_cogwheel'
	].forEach(type => {
		cog_variants.forEach(variant => {
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