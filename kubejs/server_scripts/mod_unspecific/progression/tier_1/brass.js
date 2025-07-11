//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Brass Recipe
	event.remove({output: 'create:brass_ingot', type: 'immersiveengineering:alloy'})

	//Wrench Recipe
	event.replaceInput({output: 'create:wrench'},
		'#forge:plates/gold',
		'#forge:plates/brass'
	)
})