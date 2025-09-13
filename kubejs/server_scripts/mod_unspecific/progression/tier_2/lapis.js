//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Crushing Recipe Removal
	event.remove({output: '#forge:gems/lapis', input: 'minecraft:prismarine', type: 'create:crushing'})
})