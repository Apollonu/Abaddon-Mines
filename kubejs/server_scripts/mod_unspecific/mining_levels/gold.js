//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Variables
	let material = 'gold'

	//Individual Blocks
	let individual_blocks = [
		'minecraft:deepslate_gold_ore',
		'minecraft:light_weighted_pressure_plate',

		'quark:gold_bars',

		'supplementaries:gold_gate'
	]

	//Individual Tags
	let individual_tags = [
		
	]

	//Block Tags Function Push
	block_tags (
		event,
		material,
		individual_blocks,
		individual_tags
	)
})