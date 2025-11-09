//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'mekanism:dust_gold'
    let unified_variants = [
        'thermal:gold_dust'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'thermal:centrifuge',
        'thermal:pulverizer'
    ]

    //Input Recipe Types
    let input_recipe_types = [
        
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

//Plate Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'thermal:gold_plate'
    let unified_variants = [
        'create:golden_sheet'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'create:pressing',
        'create:sequenced_assembly'
    ]

    //Input Recipe Types
    let input_recipe_types = [
        
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