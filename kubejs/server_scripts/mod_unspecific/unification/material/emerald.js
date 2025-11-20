//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'thermal:emerald_dust',
        unified_variants: [
            'mekanism:dust_emerald'
        ],
        output_recipe_types: [
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
        unified_individual: 'spelunkery:emerald_shard',
    }

    //Other Recipe Types
    event.remove({output: '#forge:gems/emerald', input: data.unified_individual, type: 'minecraft:crafting_shaped'})
    event.shaped('#forge:gems/emerald', ['AAA','AAA','AAA'], {A: data.unified_individual})

    //Unify Items Function Push
    unify_items (
        data
    )
})