//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'mekanism:dust_copper',
        unified_variants: [
            'thermal:copper_dust'
        ],
        output_recipe_types: [
            'thermal:centrifuge',
            'thermal:pulverizer'
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
        unified_individual: 'spelunkery:copper_nugget',
        unified_variants: [
            'create:copper_nugget',
            'thermal:copper_nugget'
        ],
        output_recipe_types: [
            'create:splashing',
            'thermal:press',
            'thermal:smelter'
        ],
        input_recipe_types: [
            'create:mixing',
            'minecraft:crafting_shaped'
        ]
    }

    //Other Recipe Types
    event.remove({output: '#forge:ingots/copper', input: data.unified_individual, type: 'minecraft:crafting_shaped'})
    event.shapeless('9x #forge:nuggets/copper', ['#forge:ingots/copper'])

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Plate Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'thermal:copper_plate',
        unified_variants: [
            'create:copper_sheet'
        ],
        output_recipe_types: [
            'create:pressing'
        ],
        input_recipe_types: [
            'create:cutting'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})