//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'everythingcopper:'
	
	//Individual Items
	let individual_items = [
		prefix + 'chest_copper_minecart',
		prefix + 'copper_minecart',
		prefix + 'copper_nugget',
		prefix + 'copper_shield',
		prefix + 'furnace_copper_minecart',
		prefix + 'hopper_copper_minecart',
		prefix + 'tnt_copper_minecart'
	]

	//Remove Items Function Push
	remove_items (
		event,
		individual_items
	)
})