//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersiveengineering:coal_coke',
        unified_variants: [
            'thermal:coal_coke'
        ],
        output_recipe_types: [
            'thermal:press',
            'thermal:pyrolyzer'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Block Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersiveengineering:coke',
        unified_variants: [
            'thermal:coal_coke_block'
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

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'tfmg:coal_coke_dust',
    }

    //Other Recipe Types
    event.recipes.create.crushing('9x ' + data.unified_individual, '#forge:storage_blocks/coal_coke')
    event.recipes.create.crushing(data.unified_individual, '#forge:coal_coke')

    //Unify Items Function Push
    unify_items (
        data
    )
})