//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersivepetroleum:lubricant',
        json_ids: [
            'pneumaticcraft:amadron/emerald_to_lubricant', //This Recipe is Removed
            'pneumaticcraft:amadron/lubricant_to_emerald',
            'pneumaticcraft:speed_upgrade',
            'pneumaticcraft:thermo_plant/lubricant_from_biodiesel',
            'pneumaticcraft:thermo_plant/lubricant_from_diesel' //This Recipe is Removed
        ],
        json_recipes: [
            {
                'type': 'pneumaticcraft:amadron',
                'id': 'pneumaticcraft:amadron/lubricant_to_emerald',
                'input': {
                    'type': 'FLUID',
                    'amount': 2500,
                    'id': 'immersivepetroleum:lubricant'
                },
                'level': 0,
                'output': {'type': 'ITEM', 'amount': 1, 'id': 'minecraft:emerald'},
                'static': true
            }, {
                'type': 'minecraft:crafting_shaped',
                'category': 'misc',
                'key': {
                    'C': {
                        'type': 'pneumaticcraft:fluid',
                        'amount': 1000,
                        'fluid': 'immersivepetroleum:lubricant'
                    },
                    'L': {'tag': 'pneumaticcraft:upgrade_components'},
                    'X': {'item':'minecraft:sugar'}
                },
                'pattern': ['LXL','XCX','LXL'],
                'result': {'item': 'pneumaticcraft:speed_upgrade'},
                'show_notification': true
            }, {
                'type': 'pneumaticcraft:thermo_plant',
                'exothermic': false,
                'fluid_input': {
                    'type': 'pneumaticcraft:fluid',
                    'amount': 1000,
                    'tag': 'forge:biodiesel'
                },
                'fluid_output': {'amount': 400, 'fluid': 'immersivepetroleum:lubricant'},
                'item_input': {'tag': 'forge:dusts/redstone'},
                'temperature': {'min_temp': 373}
            }
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})