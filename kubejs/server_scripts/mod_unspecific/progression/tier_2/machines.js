//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

	//Pity Machine Frame Recipe
	event.remove({output: 'industrialforegoing:machine_frame_pity'})
	event.shaped('industrialforegoing:machine_frame_pity', ['ABA','ECE','ADA'], {
		A: '#minecraft:planks',
		B: 'thermal:rf_coil',
		C: 'thermal:redstone_servo',
		D: 'thermal:cured_rubber',
		E: 'minecraft:cobblestone'
	})
})
