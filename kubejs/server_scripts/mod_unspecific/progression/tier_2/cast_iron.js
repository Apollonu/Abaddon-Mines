//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Mechanical Extruder Recipe
	event.remove({output: 'create_mechanical_extruder:mechanical_extruder'})
	event.shaped('create_mechanical_extruder:mechanical_extruder', ['EAE', 'CBC', 'DCD'], {
		A: 'create:shaft',
		B: 'create:andesite_casing',
		C: '#forge:glass',
		D: '#forge:ingots/cast_iron',
		E: '#vintage:springs/iron'
	})

	//Steel Types
	event.remove({output: '#forge:ingots/cast_iron', type: 'create:compacting'})
	let steel_types = [
		'#forge:ingots/',
		'#forge:storage_blocks/'
	].forEach(type => {
		event.replaceOutput({output: type + 'steel', type: 'immersiveengineering:blast_furnace'},
			type + 'steel',
			type + 'cast_iron'
		)
	})
})