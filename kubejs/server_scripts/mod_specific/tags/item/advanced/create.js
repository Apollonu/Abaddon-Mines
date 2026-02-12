//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Item Tag Event
ServerEvents.tags('item', event => {

	//Variables
	let prefix = 'create:'

	//Andesite Alloy Ingot Tag
	event.add('forge:ingots/andesite_alloy', prefix + 'andesite_alloy')

	//Crushed Types
	let crushed_types = [
		'aluminum',
		'copper',
		'gold',
		'iron',
		'lead',
		'nickel',
		'osmium',
		'silver',
		'tin',
		'uranium',
		'zinc'
	].forEach(type => {
		let individual = prefix + 'crushed_raw_' + type
		event.add(prefix + 'crushed_raw_materials/' + type, individual)
	})

	//Stripped Logs + Wood Tags
	event.get('minecraft:logs')
	.getObjectIds().forEach(individual => {
		individual = individual.toString()
		if (individual.includes('biomeswevegone:stripped')) {
			if (individual.includes('_log')) {
				event.add('forge:stripped_logs', individual)
			}
			else if (individual.includes('_wood')) {
				event.add('forge:stripped_wood', individual)
			}
		}
	})
})