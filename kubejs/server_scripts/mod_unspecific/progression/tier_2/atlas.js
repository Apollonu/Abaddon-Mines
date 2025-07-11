//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Atlas Recipe
	event.shapeless('map_atlases:atlas', [
		'#map_atlases:sticky_crafting_items',
		'minecraft:book',
		'#minecraft:compasses',
		'#supplementaries:altimeters',
		'minecraft:map'
	])
})