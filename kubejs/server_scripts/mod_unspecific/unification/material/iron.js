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
        json_ids: [
            'ad_astra:compressing/iron_plate_from_compressing_iron_block',
            'ad_astra:compressing/iron_plate_from_compressing_iron_ingot'
        ],
        json_recipes: [
            {
                "type": "ad_astra:compressing",
                "cookingtime": 800,
                "energy": 20,
                "ingredient": {"item":"minecraft:iron_block"},
                "result": {"count": 9, "id": "thermal:iron_plate"}
            }, {
                "type": "ad_astra:compressing",
                "cookingtime": 100,
                "energy": 20,
                "ingredient": {"item": "minecraft:iron_ingot"},
                "result": {"count": 1, "id": "thermal:iron_plate"}
            }
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