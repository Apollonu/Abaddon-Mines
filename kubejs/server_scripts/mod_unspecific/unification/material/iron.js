//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Dust Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'mekanism:dust_iron',
        unified_variants: [
            'thermal:iron_dust'
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

//Rod Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'ad_astra:iron_rod',
        json_ids: [
            'createaddition:rolling/iron_ingot'
        ],
        json_recipes: [
            {
                "type": "createaddition:rolling",
                "input": {"tag":"forge:ingots/iron"},
                "result": {"item":"ad_astra:iron_rod", "count": 2}
            }
        ]
    }

    //Unify Items Function Push
    unify_items (
        data
    )
})
