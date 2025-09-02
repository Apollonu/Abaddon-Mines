//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Variables
	let material = 'nahuatl'

	//Individual Blocks
	let individual_blocks = [
		'tconstruct:nahuatl',
		'tconstruct:nahuatl_fence',
		'tconstruct:nahuatl_slab',
		'tconstruct:nahuatl_stairs'
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