//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Iron Rod Recipe
	event.remove({output: '#forge:rods/iron', type: 'minecraft:crafting_shaped'})
})