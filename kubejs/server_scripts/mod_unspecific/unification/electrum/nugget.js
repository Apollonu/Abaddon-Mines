//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'createaddition:electrum_nugget'
    let unified_variants = [
        'thermal:electrum_nugget'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'minecraft:crafting_shapeless',
        'thermal:press'
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