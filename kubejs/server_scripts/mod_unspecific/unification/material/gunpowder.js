//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'minecraft:gunpowder',
    }

    //Other Recipe Types
    event.remove({output: data.unified_individual, input: '#forge:charcoal', type: 'minecraft:crafting_shapeless'})

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
        unified_individual: 'quark:gunpowder_sack',
        unified_variants: [
            'thermal:gunpowder_block'
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