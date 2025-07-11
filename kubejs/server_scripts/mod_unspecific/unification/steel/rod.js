//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'ad_astra:steel_rod'
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
            'input': {
                'tag': 'forge:ingots/steel',
                'count': 1
            },
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