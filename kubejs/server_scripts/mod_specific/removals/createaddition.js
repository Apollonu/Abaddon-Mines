//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'createaddition:'
	
	//Individual Items
	let individual_items = [
		prefix + 'diamond_grit',
		prefix + 'electrum_block',
		prefix + 'electrum_ingot',
		prefix + 'electrum_sheet',
		prefix + 'iron_rod'
	]
	
	//Remove Items Function Push
	remove_items (
		event,
		individual_items
	)
})