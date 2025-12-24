//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'ad_astra:'
	
	//Individual Items
	let individual_items = [
		prefix + 'calorite_panel',
		prefix + 'desh_panel',
		prefix + 'iron_panel',
		prefix + 'iron_plate',
		prefix + 'steel_block',
		prefix + 'steel_nugget',
		prefix + 'steel_panel',
		prefix + 'nugget_steel',
		prefix + 'ostrum_panel',
	]
	
	//Remove Items Function Push
	remove_items (
		event,
		individual_items
	)
})