//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'createlowheated:'
	
	//Individual Fire Starters
	let individual_fire_starters = [
		'minecraft:lava_bucket',
		'minecraft:torch',
		
		'notreepunching:fire_starter'
	].forEach(individual => {
		event.add(prefix + 'burner_starters', individual)
	})
})