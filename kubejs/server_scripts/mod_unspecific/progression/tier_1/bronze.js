//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Bronze Dust Recipe
	event.recipes.createMixing('2x mekanism:dust_bronze', [
		'3x #forge:dusts/copper',
		'1x #forge:dusts/tin'
	]).lowheated()
})