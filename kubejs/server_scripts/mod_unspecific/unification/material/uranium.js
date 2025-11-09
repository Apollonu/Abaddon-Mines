//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Ingot Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'mekanism:ingot_uranium'
    let unified_variants = [
        'immersiveengineering:ingot_uranium'
    ]

	//Output Recipe Types
	let output_recipe_types = [

	]

	//Input Recipe Types
    let input_recipe_types = [
        'minecraft:crafting_shaped'
    ]

    //Custom Recipe Types
    let custom_recipe_types = [

    ]

    //Other Recipe Types
    

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