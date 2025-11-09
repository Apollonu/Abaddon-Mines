//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Unification
ServerEvents.recipes(event => {
    
    //Chest Unification
    event.replaceInput({input: 'minecraft:chest'},
		'minecraft:chest',
		'#forge:chests/wooden'
	)
})