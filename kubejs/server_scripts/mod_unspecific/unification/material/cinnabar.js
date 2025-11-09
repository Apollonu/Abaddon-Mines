//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Block Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'spelunkery:cinnabar_block'
    let unified_variants = [
        'thermal:cinnabar_block'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'thermal:press'
    ]

    //Input Recipe Types
    let input_recipe_types = [
        'thermal:press'
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

//Gem Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'spelunkery:cinnabar'
    let unified_variants = [
        'thermal:cinnabar'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'create:crushing',

        'minecraft:blasting',
        'minecraft:smelting',

        'thermal:crystallizer',
        'thermal:furnace',
        'thermal:press',
        'thermal:pulverizer',
        'thermal:smelter'
    ]

    //Input Recipe Types
    let input_recipe_types = [
        'thermal:press',
        'thermal:pulverizer',
        'thermal:smelter',
        'thermal:smelter_catalyst'
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