//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'thermal:diamond_dust',
        unified_variants: [
            'createaddition:diamond_grit',
            'mekanism:dust_diamond'
        ],
        output_recipe_types: [
            'create:crushing',
            'mekanism:crushing'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Nugget Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'spelunkery:diamond_shard'
    }

    //Other Recipe Types
    event.remove({output: '#forge:gems/diamond', input: data.unified_individual, type: 'minecraft:crafting_shaped'})
    event.shaped('#forge:gems/diamond', ['AAA','AAA','AAA'], {A: data.unified_individual})

    //Unify Items Function Push
    unify_items (
        data
    )
})