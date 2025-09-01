//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'tconstruct:'

	//Individual Items
	let individual_items = [
		prefix + 'copper_nugget',
		prefix + 'steel_block',
		prefix + 'steel_ingot',
		prefix + 'steel_nugget'
	]
	
	//Remove Items Function Push
	remove_items (
		event,
		individual_items
	)
})