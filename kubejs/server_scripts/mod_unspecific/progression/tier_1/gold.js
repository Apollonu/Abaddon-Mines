//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

    //Melting Recipes
    event.custom({
        'type': 'tconstruct:ore_melting',
        'conditions': [{
            'type': 'mantle:tag_combination_filled',
            'match': [
                'forge:ores/gold',
                'forge:ore_rates/dense'
            ]
        }],
        'ingredient': {
            'type': 'forge:intersection',
            'children': [
                {'tag': 'forge:ores/gold'},
                {'tag': 'forge:ore_rates/dense'}
            ]
        },
        'rate': 'metal',
        'result': {
            'amount': 540,
            'tag': 'forge:molten_gold'
        },
        'temperature': 700,
        'time': 256
    })
    event.custom({
        'type': 'tconstruct:ore_melting',
        'conditions': [{
            'type': 'mantle:tag_combination_filled',
            'ignore': 'tconstruct:non_singular_ore_rates',
            'match': 'forge:ores/gold'
        }],
        'ingredient': {
            'type': 'forge:difference',
            'base': {'tag': 'forge:ores/gold'},
            'subtracted': {'tag': 'tconstruct:non_singular_ore_rates'}
        },
        'rate': 'metal',
        'result': {
            'amount': 180,
            'tag': 'forge:molten_gold'
        },
        'temperature': 700,
        'time': 142
    })
    event.custom({
        'type': 'tconstruct:ore_melting',
        'ingredient': {'tag': 'forge:raw_materials/gold'},
        'rate': 'metal',
        'result': {
            'amount': 90,
            'tag': 'forge:molten_gold'
        },
        'temperature': 700,
        'time': 85
    })
    event.custom({
        'type': 'tconstruct:ore_melting',
        'ingredient': {'tag': 'forge:storage_blocks/raw_gold'},
        'rate': 'metal',
        'result': {
            'amount': 810,
            'tag': 'forge:molten_gold'
        },
        'temperature': 700,
        'time': 341
    })
})