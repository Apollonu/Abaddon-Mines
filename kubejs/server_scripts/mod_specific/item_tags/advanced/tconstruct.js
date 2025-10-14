//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Item Tag Event
ServerEvents.tags('item', event => {

	//Variables
	let prefix = 'tconstruct:'

	//Hammer Types
	let hammer_types = [
		'sledge_hammer',
		'vein_hammer'
	].forEach(type => {
		event.add('forge:hammers', prefix + type)
	})
})