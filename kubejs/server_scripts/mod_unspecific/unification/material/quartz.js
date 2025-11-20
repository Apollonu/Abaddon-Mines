//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'mekanism:dust_quartz',
        unified_variants: [
            'thermal:quartz_dust'
        ],
        output_recipe_types: [
            'minecraft:crafting_shapeless',
            'thermal:pulverizer'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})