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

//Plate Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'thermal:iron_plate',
        unified_variants: [
            'create:iron_sheet'
        ],
        output_recipe_types: [
            'create:pressing'
        ],
        json_unified_variants: [
            '"id":"ad_astra:iron_plate"'
        ],
        json_recipe_types: [
            'ad_astra:compressing'
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
        unified_individual: [
            'ad_astra:iron_rod'
        ]
    }

    //Other Recipe Types
    event.custom({
        'type': 'createaddition:rolling',
        'input': {'tag': 'forge:ingots/iron'},
        'result': {'item': 'ad_astra:iron_rod', 'count': 2}
    })

    //Unify Items Function Push
    unify_items (
        data
    )
})