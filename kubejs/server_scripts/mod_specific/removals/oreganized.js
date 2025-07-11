//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'oreganized:'

	//Individual Items
	let individual_items = [
		prefix + 'deepslate_lead_ore',
		prefix + 'deepslate_silver_ore',
		prefix + 'electrum_block',
		prefix + 'electrum_nugget',
		prefix + 'lead_ore',
		prefix + 'netherite_nugget',
		prefix + 'silver_ore'
	]

	//Remove Items Function Push
	remove_items (
		event,
		individual_items
	)
})