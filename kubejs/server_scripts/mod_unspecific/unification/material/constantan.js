//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Ingot Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'thermal:constantan_ingot'
    let unified_variants = [
        'tfmg:constantan_ingot'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'create:mixing'
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
    let unified_individual = 'thermal:constantan_plate'
    let unified_variants = [
        'vintage:constantan_sheet'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'create:pressing'
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

//Wire Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'tfmg:constantan_wire'
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
        {
            'type': 'createaddition:rolling',
            'input': {'tag': 'forge:plates/constantan'},  
            'result': {
                'item': unified_individual,
                'count': 2
            }
        }
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