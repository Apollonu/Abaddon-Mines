//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'sophisticatedbackpacks:'

	//Individual Items
	let individual_items = [
		prefix + 'inception_upgrade',
		prefix + 'stack_upgrade_omega_tier',
		prefix + 'stack_upgrade_tier_4',
		prefix + 'netherite_backpack'
	]

	//Remove Items Function Push
	remove_items (
		event,
		individual_items
	)
})