//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Variables
	let material = 'redstone'

	//Individual Blocks
	let individual_blocks = [
		'minecraft:deepslate_redstone_ore',
		'minecraft:redstone_block'
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