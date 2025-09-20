//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'colossalchests:'
	
	//Individual Items
	let individual_items = [
		prefix + 'chest_wall_silver',
		prefix + 'colossal_chest_silver',
		prefix + 'interface_silver'
	]
	
	//Remove Items Function Push
	remove_items (
		event,
		individual_items
	)
})