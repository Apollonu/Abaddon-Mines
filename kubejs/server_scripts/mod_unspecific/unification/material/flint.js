//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'minecraft:flint'
    let unified_variants = [
        
    ]

	//Output Recipe Types
	let output_recipe_types = [

	]

	//Input Recipe Types
    let input_recipe_types = [
        
    ]

    //Custom Recipe Types
    let custom_recipe_types = [

    ]

    //Other Recipe Types
    event.remove({output: unified_individual, input: 'minecraft:gravel', type: 'minecraft:crafting_shapeless'})
    event.shapeless('2x ' + unified_individual, [
        'minecraft:gravel',
        'minecraft:gravel',
        'minecraft:gravel'
    ])

    //Unify Items Function Push
    unify_items (
        event,
        unified_individual,
        unified_variants,
        output_recipe_types,
        input_recipe_types,
        custom_recipe_types
    )
})