//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Item Tag Event
ServerEvents.tags('item', event => {

	//Variables
	let prefix = 'architects_palette:'

	//Ender Pearl Block Tag
	event.add('forge:storage_blocks', prefix + 'ender_pearl_block')

	//Storage Types
	let storage_types = [
		'bread',
		'rotten_flesh',
		'scute'
	].forEach(type => {
		event.add('forge:storage_blocks', prefix + type + '_block')
		event.add('forge:storage_blocks/' + type, prefix + type + '_block')
	})
})