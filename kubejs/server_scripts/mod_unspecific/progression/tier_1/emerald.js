//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

    //Jukebox Recipe
    event.replaceInput({output: 'minecraft:jukebox'},
        '#forge:gems/diamond',
        '#forge:gems/emerald'
    )

    //Precision Sawmill Recipe
    event.replaceOutput({input: 'minecraft:jukebox'},
        '#forge:gems/diamond',
        '#forge:gems/emerald'
    )

    //Custom Recipe Types
    let custom_recipe_types = [
        {
            'type': 'tconstruct:melting',
            'ingredient': {'item': 'minecraft:jukebox'},
            'result': {
                'amount': 100,
                'fluid': 'tconstruct:molten_emerald'
            },
            'temperature': 1450,
            'time': 83
        }, {
            'type': 'tconstruct:ore_melting',
            'conditions': [{
                'type': 'mantle:tag_combination_filled',
                'match': [
                    'forge:ores/emerald',
                    'forge:ore_rates/dense'
                ]
            }],
            'ingredient': {
                'type': 'forge:intersection',
                'children': [
                    {'tag': 'forge:ores/emerald'},
                    {'tag': 'forge:ore_rates/dense'}
                ]
            },
            'rate': 'gem',
            'result': {
                'amount': 300,
                'fluid': 'tconstruct:molten_emerald'
            },
            'temperature': 934,
            'time': 289
        }, {
            'type': 'tconstruct:ore_melting',
            'conditions': [{
                'type': 'mantle:tag_combination_filled',
                'ignore': 'tconstruct:non_singular_ore_rates',
                'match': 'forge:ores/emerald'
            }],
            'ingredient': {
                'type': 'forge:difference',
                'base': {'tag': 'forge:ores/emerald'},
                'subtracted': {'tag': 'tconstruct:non_singular_ore_rates'}
            },
            'rate': 'gem',
            'result': {
                'amount': 100,
                'fluid': 'tconstruct:molten_emerald'
            },
            'temperature': 934,
            'time': 161
        }, {
            'type': 'tconstruct:ore_melting',
            'conditions': [{
                'type': 'mantle:tag_combination_filled',
                'match': [
                    'forge:ores/emerald',
                    'forge:ore_rates/sparse'
                ]
            }],
            'ingredient': {
                'type': 'forge:intersection',
                'children': [
                    {'tag': 'forge:ores/emerald'},
                    {'tag': 'forge:ore_rates/sparse'}
                ]
            },
            'rate': 'gem',
            'result': {
                'amount': 50,
                'fluid': 'tconstruct:molten_emerald'
            },
            'temperature': 934,
            'time': 96
        }
    ].forEach(type => {
        event.custom(type)
    })
})