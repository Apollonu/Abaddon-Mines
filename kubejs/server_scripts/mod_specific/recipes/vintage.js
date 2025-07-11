//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Variables
	let prefix = 'vintage:'

	//Spring Coiling Machine Recipe
	event.remove({output: prefix + 'spring_coiling_machine'})
	event.shaped(prefix + 'spring_coiling_machine', ['DC ', 'DBA', ' E '], {
		A: 'create:shaft',
		B: 'create:andesite_casing',
		C: prefix + 'spring_coiling_machine_wheel',
		D: '#forge:ingots/iron',
		E: '#forge:rods/andesite'
	})
})