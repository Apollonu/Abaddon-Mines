//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'vintage:'
	const all_individual_items = []
	let component_variant = ['_rod', '_sheet', '_spring', '_wire']
	let spring_types = [':', ':small_']
	
	//Individual Items
	let individual_items = [
		prefix + 'aluminum_wire',
		prefix + 'constantan_wire',
		prefix + 'netherite_sheet',
		prefix + 'steel_rod',
		prefix + 'sulfur',
		prefix + 'sulfur_block',
		prefix + 'vanadium_block',
		prefix + 'vanadium_ingot',
		prefix + 'vanadium_nugget'
	]
	
	//Component Types
	let component_types = [
		'amethyst_bronze',
		'brass',
		'bronze',
		'calorite',
		'cast_iron',
		'cobalt',
		'constantan',
		'copper',
		'desh',
		'electrum',
		'fiery',
		'hepatizon',
		'invar',
		'ironwood',
		'knightmetal',
		'lead',
		'manyullyn',
		'nethersteel',
		'nickel',
		'ostrum',
		'palladium',
		'pig_iron',
		'platinum',
		'pure_gold',
		'queens_slime',
		'refined_glowstone',
		'refined_obsidian',
		'rhodium',
		'rose_gold',
		'shadow_steel',
		'silver',
		'slimesteel',
		'tin',
		'vanadium',
		'refined_radiance',
		'zinc'
	].forEach(type => {
		component_variant.forEach(variant => {
			let individual = prefix + type + variant
			if (variant.indexOf('_spring') != -1) {
				spring_types.forEach(spring => {
					spring = individual.replace(':', spring)
					all_individual_items.push(spring)
				})
			}
			else {all_individual_items.push(individual)}
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