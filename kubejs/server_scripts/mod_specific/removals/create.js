//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'create:'
	
	//Individual Items
	let individual_items = [
		prefix + 'copper_nugget'
	]
	
	//Remove Items Function Push
	remove_items (
		event,
		individual_items
	)
})