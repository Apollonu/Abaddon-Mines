//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Variables
	let prefix = 'backpacked:'

	//Backpack Recipe
	event.remove({output: prefix + 'backpack'})
	event.shaped(prefix + 'backpack', ['DBD', 'CAC', 'BBB'], {
		A: '#forge:chests/wooden',
		B: '#forge:leather',
		C: '#forge:ingots/iron',
		D: '#forge:string'
	})
})