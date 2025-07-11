//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 2

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Variables
	let prefix = 'spelunkery:'

	//Dust Types
	let dust_types = [
		'saltpeter',
		'sulfur'
	].forEach(type => {
		let individual = prefix + type
		event.add('forge:dusts', individual)
		event.add('forge:dusts/' + type, individual)
	})

	//Zinc Types
	let zinc_types = [
		'andesite_',
		'diorite_',
		'granite_'
	].forEach(type => {
		let individual = prefix + type + 'zinc_ore'
		event.add('forge:ores', individual)
		event.add('forge:ores/zinc', individual)
	})

	//Rough Block Types
	let rough_block_types = [
		'emerald',
		'diamond',
		'quartz',
	
		'cinnabar',
		'lazurite'
	].forEach(type => {
		let block = prefix + 'rough_' + type + '_block'
		if (type.includes('cinnabar')) type = 'redstone'
		if (type.includes('lazurite')) type = 'lapis'
		event.add('forge:storage_blocks', block)
		event.add('forge:storage_blocks/raw_' + type, block)
	})
})