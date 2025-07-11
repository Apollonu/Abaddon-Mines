//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Mechanical Extruder Recipe
	event.remove({output: 'tfmg:fireproof_bricks'})
	event.shaped('2x tfmg:fireproof_bricks', ['ABA', 'BCB', 'ABA'], {
		A: 'tfmg:fireproof_brick',
		B: 'tfmg:cinderflourblock',
		C: '#forge:ingots/brick'
	})
})