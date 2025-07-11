//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Variables
	let prefix = 'create_new_age:'
	
	//Generator Coil Recipe
	event.remove({output: prefix + 'generator_coil'})
	event.shaped(prefix + 'generator_coil', ['CBC', 'BAB', 'CBC'], {
		A: 'create:andesite_alloy_block',
		B: 'tfmg:magnet',
		C: '#forge:storage_blocks/copper'
	})
})