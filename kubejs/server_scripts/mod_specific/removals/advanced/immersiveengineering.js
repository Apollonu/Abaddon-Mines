//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'immersiveengineering:'
	const all_individual_items = []
	let raw_variants = ['deepslate_ore_', 'ore_', 'raw_', 'raw_block_', 'slab_storage_', 'storage_']
	let ingot_variants = ['ingot_', 'nugget_']
	let component_variants = ['dust_', 'plate_', 'wire_']
	
	//Individual Items
	let individual_items = [
		prefix + 'dust_coke',
		prefix + 'dust_constantan',
		prefix + 'dust_lead',
		prefix + 'dust_saltpeter',
		prefix + 'dust_sulfur',
		prefix + 'dust_wood',
		prefix + 'deepslate_ore_uranium',
		prefix + 'ingot_electrum',
		prefix + 'nugget_copper',
		prefix + 'ore_uranium',
		prefix + 'plate_constantan',
		prefix + 'plate_lead',
		prefix + 'slab_slag_brick',
		prefix + 'slab_storage_aluminum',
		prefix + 'slab_storage_constantan',
		prefix + 'slab_storage_electrum',
		prefix + 'slag',
		prefix + 'slag_brick',
		prefix + 'stairs_slag_brick',
		prefix + 'stick_aluminum',
		prefix + 'stick_iron',
		prefix + 'stick_steel',
		prefix + 'storage_aluminum',
		prefix + 'storage_constantan',
		prefix + 'storage_electrum',
		prefix + 'wall_slag_brick',
		prefix + 'wire_electrum'
	]
	
	//Raw Types
	let raw_types = [
		'lead',
		'nickel',
		'silver'
	].forEach(type => {
		raw_variants.forEach(variant => {
			let individual = prefix + variant + type
			all_individual_items.push(individual)
		})
	})
	
	//Ingot Types
	let ingot_types = [
		'aluminum',
		'constantan',
		'lead',
		'nickel',
		'silver',
		'steel',
		'uranium'
	].forEach(type => {
		ingot_variants.forEach(variant => {
			let individual = prefix + variant + type
			all_individual_items.push(individual)
		})
	})
	
	//Component Types
	let component_types = [
		'aluminum',
		'copper',
		'electrum',
		'gold',
		'iron',
		'nickel',
		'silver',
		'steel',
		'uranium'
	].forEach(type => {
		component_variants.forEach(variant => {
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