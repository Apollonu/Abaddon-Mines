//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'thermal:sulfur'
    let unified_variants = [
        'vintage:sulfur'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'minecraft:crafting_shaped'
    ]

    //Input Recipe Types
    let input_recipe_types = [
        'create:crushing',
        'create:milling'
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