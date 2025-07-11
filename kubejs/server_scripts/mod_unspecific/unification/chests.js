//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
    //Chest Unification
    event.replaceInput({input: 'minecraft:chest'},
		'minecraft:chest',
		'#forge:chests/wooden'
	)
})