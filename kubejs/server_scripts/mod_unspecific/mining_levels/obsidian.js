//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Variables
	let material = 'obsidian'

	//Individual Blocks
	let individual_blocks = [
		'minecraft:enchanting_table',
		'minecraft:ender_chest',
		'minecraft:obsidian',
		'minecraft:crying_obsidian',
		'minecraft:respawn_anchor',

		'quark:duskbound_block',
		'quark:duskbound_block_slab',
		'quark:duskbound_block_stairs',
		'quark:duskbound_lantern',
		'quark:obsidian_pressure_plate',
		
		'thermal:enderium_glass',
		'thermal:lumium_glass',
		'thermal:obsidian_glass',
		'thermal:signalum_glass',

		'tide:obsidian_loot_crate'
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