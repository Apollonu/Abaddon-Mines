//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Redstone Flux Recipe
	event.remove({output: 'thermal:rf_coil'})
	event.shaped('2x thermal:rf_coil', [' AB', 'ABA', 'BA '], {
		A: '#forge:dusts/redstone',
		B: '#forge:ingots/electrum'
	})
})
