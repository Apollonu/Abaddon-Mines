//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Block Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'thermal:sulfur_block'
    }

    //Other Recipe Types
    event.remove({output: '#forge:gems/sulfur', input: data.unified_individual})

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
        unified_individual: 'spelunkery:sulfur',
        unified_variants: [
            'mekanism:dust_sulfur',
            'tfmg:sulfur_dust',
            'thermal:sulfur_dust'
        ],
        output_recipe_types: [
            'create:crushing',
            'create:milling',
            'mekanism:enriching',
            'mekanism:injecting',
            'minecraft:crafting_shapeless',
            'thermal:pulverizer',
            'thermal:refinery'
        ],
        input_recipe_types: [
            'create:mixing'
        ],
        json_ids: [
            'immersivepetroleum:hydrotreater/sulfur_recovery'
        ],
        json_recipes: [
            {
                'type': 'immersivepetroleum:hydrotreater',
                'energy': 8000,
                'input': {'amount': 1000, 'tag': 'forge:diesel_sulfur'},
                'result': {'amount': 1000, 'fluid': 'immersivepetroleum:diesel'},
                'secondary_input': {'amount': 500, 'tag': 'minecraft:water'},
                'secondary_result': {'chance': '1.0', 'count': 5, 'item': 'spelunkery:sulfur'},
                'time': 100
            }
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Fluid Acid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'mekanism:sulfuric_acid',
        json_ids: [
            'vintage:pressurizing/sulfuric_acid'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Fluid Dioxide Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'mekanism:sulfur_dioxide',
        json_ids: [
            'vintage:pressurizing/sulfur_dioxide'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Fluid Trioxide Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'mekanism:sulfur_trioxide',
        json_ids: [
            'vintage:pressurizing/sulfur_trioxide',
            'vintage:pressurizing/sulfur_trioxide_alt'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Gem Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'thermal:sulfur',
        unified_variants: [
            'vintage:sulfur'
        ],
        output_recipe_types: [
            'minecraft:crafting_shaped'
        ],
        input_recipe_types: [
            'create:crushing',
            'create:milling'
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})