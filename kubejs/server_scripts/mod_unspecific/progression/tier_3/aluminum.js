//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

	//Smelting Recipe Removals
	event.replaceInput({output: '#forge:alloys/advanced', input: '#forge:ingots/iron'},
		'#forge:ingots/iron',
		'#forge:ingots/aluminum'
	)
})