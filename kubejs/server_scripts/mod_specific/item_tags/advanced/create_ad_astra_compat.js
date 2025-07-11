//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'create_ad_astra_compat:'
	
	//Crushed Types
	let crushed_types = [
		'calorite',
		'desh',
		'ostrum'
	].forEach(type => {
		let individual = prefix + 'crushed_' + type + '_ore'
		event.add('create:crushed_raw_materials', individual)
		event.add('create:crushed_raw_materials/' + type, individual)
	})
})