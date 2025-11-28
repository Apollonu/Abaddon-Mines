//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'createaddition:'
	
	//Individual Items
	let individual_items = [
		prefix + 'connector',
		prefix + 'copper_spool',
		prefix + 'diamond_grit',
		prefix + 'electrum_block',
		prefix + 'electrum_ingot',
		prefix + 'electrum_sheet',
		prefix + 'electrum_spool',
		prefix + 'festive_spool',
		prefix + 'gold_spool',
		prefix + 'iron_rod',
		prefix + 'large_connector',
		prefix + 'redstone_relay',
		prefix + 'small_light_connector'
	]
	
	//Remove Items Function Push
	remove_items (
		event,
		individual_items
	)
})