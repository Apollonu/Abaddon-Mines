//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'mekanism:sawdust',
        unified_variants: [
            'thermal:sawdust'
        ],
        output_recipe_types: [
            'minecraft:crafting_shapeless',
            'thermal:press',
            'thermal:pulverizer',
            'thermal:pulverizer_recycle',
            'thermal:sawmill'
        ],
        input_recipe_types: [
            'minecraft:crafting_shaped',
            'thermal:press'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})