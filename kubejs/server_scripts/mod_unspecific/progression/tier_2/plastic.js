//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

	//Straw Recipe
	event.remove({output: 'createaddition:straw'})
	event.shaped('createaddition:straw', ['AA', ' A', ' A'], {
		A: '#forge:plastic'
	})
})