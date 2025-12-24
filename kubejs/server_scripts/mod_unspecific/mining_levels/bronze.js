//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Variables
	let material = 'bronze'

	//Individual Blocks
	let individual_blocks = [
		'steampowered:bronze_boiler',
		'steampowered:bronze_burner',
		'steampowered:bronze_flywheel',
		'steampowered:bronze_steam_engine'
	]

	//Individual Tags
	let individual_tags = [
		'forge:storage_blocks/' + material
	]

	//Block Tags Function Push
	block_tags (
		event,
		material,
		individual_blocks,
		individual_tags
	)
})