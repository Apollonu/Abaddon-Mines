//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = 'create:iron_sheet'
    let unified_variants = [
        'thermal:iron_plate'
    ]

    //Output Recipe Types
    let output_recipe_types = [
        'thermal:press'
    ]

    //Input Recipe Types
    let input_recipe_types = [
        
    ]

    //Custom Recipe Types
    let custom_recipe_types = [
        {
            'type': 'ad_astra:compressing',
            'cookingtime': 100,
            'energy': 20,
            'ingredient': {
                'tag': 'forge:ingots/iron'
            },
            'result': {
                'count': 1,
                'id': unified_individual
            }
        }, {
            'type': 'ad_astra:compressing',
            'cookingtime': 800,
            'energy': 20,
            'ingredient': {
                'tag': 'forge:storage_blocks/iron'
            },
            'result': {
                'count': 9,
                'id': unified_individual
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