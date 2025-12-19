//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'tconstruct:molten_steel',
        json_ids: [
            'tfmg:industrial_blasting/steel',
            'tfmg:industrial_blasting/steel_from_dust', //This Recipe is Removed
            'tfmg:industrial_blasting/steel_from_raw_iron' //This Recipe is Removed
        ],
        json_recipes: [
            {
                'type': 'tfmg:industrial_blasting',
                'hotAirUsage': 20,
                'ingredients': [{'item': 'create:crushed_raw_iron'}, {'tag': 'tfmg:flux'}],
                'processingTime': 20,
                'results': [
                    {'amount': 144, 'fluid': 'tconstruct:molten_steel'},
                    {'amount': 144, 'fluid': 'tfmg:molten_slag'},
                    {'amount': 200, 'fluid': 'tfmg:furnace_gas'}
                ]
            }
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Ingot Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'ad_astra:steel_ingot',
        unified_variants: [
            'immersiveengineering:ingot_steel',
            'mekanism:ingot_steel',
            'tfmg:steel_ingot'
        ],
        output_recipe_types: [
            'minecraft:blasting',
            'minecraft:crafting_shapeless',
            'minecraft:smelting',
            'thermal:furnace'
        ],
        input_recipe_types: [
            'minecraft:crafting_shaped',
            'minecraft:crafting_shapeless'
        ],
    }

    //Other Recipe Types
    event.remove({output: 'immersiveengineering:ingot_steel', input: '#forge:storage_blocks/steel', type: 'minecraft:crafting_shapeless'})
    event.remove({output: 'tfmg:steel_ingot', input: '#forge:storage_blocks/steel', type: 'minecraft:crafting_shapeless'})

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
        unified_individual: 'ad_astra:steel_plate',
        unified_variants: [
            'tfmg:heavy_plate'
        ],
        input_recipe_types: [
            'create:mechanical_crafting',
            'minecraft:crafting_shaped'
        ],
        json_ids: [
            'tfmg:sequenced_assembly/steel_mechanism'
        ],
        json_recipes: [
            {
                'type': 'create:sequenced_assembly',
                'ingredient': {'tag': 'forge:plates/steel'},
                'loops': 2,
                'results': [
                    {
                        'chance': 120.0,
                        'item': 'tfmg:steel_mechanism'
                    }, {
                        'chance': 4.0,
                        'item': 'minecraft:compass'
                    }, {
                        'chance': 4.0,
                        'tag': 'forge:ingots/steel'
                    }
                ],
                'sequence': [
                    {
                        'type': 'create:deploying',
                        'ingredients': [
                            {'item': 'tfmg:unfinished_steel_mechanism'},
                            {'item': 'tfmg:steel_cogwheel'}
                        ],
                        'results': [{'item': 'tfmg:unfinished_steel_mechanism'}]
                    }, {
                        'type': 'create:deploying',
                        'ingredients': [
                            {'item': 'tfmg:unfinished_steel_mechanism'},
                            {'tag': 'forge:plates/nickel'}
                        ],
                        'results': [{'item': 'tfmg:unfinished_steel_mechanism'}]
                    }, {
                        'type': 'create:deploying',
                        'ingredients': [
                            {'item': 'tfmg:unfinished_steel_mechanism'},
                            {'item': 'tfmg:large_steel_cogwheel'}
                        ],
                        'results': [{'item': 'tfmg:unfinished_steel_mechanism'}]
                    }, {
                        'type': 'create:deploying',
                        'ingredients': [
                            {'item': 'tfmg:unfinished_steel_mechanism'},
                            {'tag': 'forge:plates/lead'}
                        ],
                        'results': [{'item': 'tfmg:unfinished_steel_mechanism'}]
                    }, {
                        'type': 'create:deploying',
                        'ingredients': [
                            {'item': 'tfmg:unfinished_steel_mechanism'},
                            {'item': 'tfmg:screw'}
                        ],
                        'results': [{'item': 'tfmg:unfinished_steel_mechanism'}]
                    }, {
                        'type': 'create:deploying',
                        'ingredients': [
                            {'item': 'tfmg:unfinished_steel_mechanism'},
                            {'item': 'immersiveengineering:screwdriver'}
                        ],
                        'results': [{'item': 'tfmg:unfinished_steel_mechanism'}]
                    }
                ],
                'transitionalItem': {'item': 'tfmg:unfinished_steel_mechanism'}
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
        unified_individual: 'ad_astra:steel_rod',
        unified_variants: [
            'tfmg:rebar'
        ],
        input_recipe_types: [
            'create:mechanical_crafting',
            'minecraft:crafting_shaped',
            'vintage:auto_curving'
        ]
    }

    //Other Recipe Types
    event.shapeless('9x ' + data.unified_individual, 'tfmg:rebar_pile')

    //Unify Items Function Push
    unify_items (
        data
    )
})