//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Variables
	let material = 'tin'

	//Individual Blocks
	let individual_blocks = [
		'mekanism:seismic_vibrator',
		'mekanism:fluidic_plenisher',
		'mekanism:resistive_heater'
	]

	//Individual Tags
	let individual_tags = [
		'forge:ores/' + material,
		'forge:storage_blocks/' + material,
		'forge:storage_blocks/raw_' + material
	]
	
	//Block Tags Function Push
	block_tags (
		event,
		material,
		individual_blocks,
		individual_tags
	)
})