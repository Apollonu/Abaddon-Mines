//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

	//Variables
	let prefix = 'measurements:'
	
	//Ruler Recipe
	event.remove({output: prefix + 'tape_measure'})
	event.shaped(prefix + 'tape_measure', ['ABA', 'CDE', 'ABE'], {
		A: '#forge:plates/steel',
		B: 'minecraft:gray_wool',
		C: 'minecraft:yellow_wool',
		D: '#forge:wires/iron',
		E: '#forge:plastic'
	})
})