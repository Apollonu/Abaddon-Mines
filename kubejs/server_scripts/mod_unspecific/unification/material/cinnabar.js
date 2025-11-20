//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Block Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'spelunkery:cinnabar_block',
        unified_variants: [
            'thermal:cinnabar_block'
        ],
        output_recipe_types: [
            'thermal:press'
        ],
        input_recipe_types: [
            'thermal:press'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Gem Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'spelunkery:cinnabar',
        unified_variants: [
            'thermal:cinnabar'
        ],
        output_recipe_types: [
            'create:crushing',
            'minecraft:blasting',
            'minecraft:smelting',
            'thermal:crystallizer',
            'thermal:furnace',
            'thermal:press',
            'thermal:pulverizer',
            'thermal:smelter'
        ],
        input_recipe_types: [
            'thermal:press',
            'thermal:pulverizer',
            'thermal:smelter',
            'thermal:smelter_catalyst'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})