//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

	//Smelting Recipe Removals
	event.remove({output: '#forge:ingots/cobalt', input: '#forge:raw_materials/cobalt'})
	event.remove({output: '#forge:ingots/cobalt', input: '#forge:storage_blocks/raw_cobalt'})

	//Custom Recipe Types
    let custom_recipe_types = [
		{
			'type': 'tconstruct:melting',
			'ingredient': {'tag': 'forge:storage_blocks/cobalt'},
			'result': {
				'amount': 810,
				'tag': 'forge:molten_cobalt'
			},
			'temperature': 1050,
			'time': 194
		}, {
			'type': 'tconstruct:melting',
			'conditions': [{
				'type': 'mantle:tag_filled',
				'tag': 'forge:dusts/cobalt'
			}],
			'ingredient': {'tag': 'forge:dusts/cobalt'},
			'result': {
				'amount': 90,
				'tag': 'forge:molten_cobalt'
			},
			'temperature': 1050,
			'time': 49
		}, {
			'type': 'tconstruct:melting',
			'ingredient': {'tag': 'forge:ingots/cobalt'},
			'result': {
				'amount': 90,
				'tag': 'forge:molten_cobalt'
			},
			'temperature': 1050,
			'time': 65
		}, {
			'type': 'tconstruct:melting',
			'ingredient': {'tag': 'forge:nuggets/cobalt'},
			'result': {
				'amount': 10,
				'tag': 'forge:molten_cobalt'
			},
			'temperature': 1050,
			'time': 22
		}, {
			'type': 'tconstruct:ore_melting',
			'conditions': [{
				'type': 'mantle:tag_combination_filled',
				'match': [
					'forge:ores/cobalt',
					'forge:ore_rates/dense'
				]
			}],
			'ingredient': {
				'type': 'forge:intersection',
				'children': [
					{'tag': 'forge:ores/cobalt'},
					{'tag': 'forge:ore_rates/dense'}
				]
			},
			'rate': 'metal',
			'result': {
				'amount': 540,
				'tag': 'forge:molten_cobalt'
			},
			'temperature': 1050,
			'time': 292
		}, {
			'type': 'tconstruct:ore_melting',
			'conditions': [{
				'type': 'mantle:tag_combination_filled',
				'ignore': 'tconstruct:non_singular_ore_rates',
				'match': 'forge:ores/cobalt'
			}],
			'ingredient': {
				'type': 'forge:difference',
				'base': {'tag': 'forge:ores/cobalt'},
				'subtracted': {'tag': 'tconstruct:non_singular_ore_rates'}
			},
			'rate': 'metal',
			'result': {
				'amount': 180,
				'tag': 'forge:molten_cobalt'
			},
			'temperature': 1050,
			'time': 162
		}, {
			'type': 'tconstruct:ore_melting',
			'conditions': [{
				'type': 'mantle:tag_combination_filled',
				'match': [
					'forge:ores/cobalt',
					'forge:ore_rates/sparse'
				]
			}],
			'ingredient': {
				'type': 'forge:intersection',
				'children': [
					{'tag': 'forge:ores/cobalt'},
					{'tag': 'forge:ore_rates/sparse'}
				]
			},
			'rate': 'metal',
			'result': {
				'amount': 90,
				'tag': 'forge:molten_cobalt'
			},
			'temperature': 1050,
			'time': 97
		}, {
			'type': 'tconstruct:melting',
			'ingredient': {'item': 'tconstruct:cobalt_platform'},
			'result': {
				'amount': 100,
				'tag': 'forge:molten_cobalt'
			},
			'temperature': 1050,
			'time': 68
		}, {
			'type': 'tconstruct:melting',
			'ingredient': {'item': 'tconstruct:cobalt_reinforcement'},
			'result': {
				'amount': 90,
				'tag': 'forge:molten_cobalt'
			},
			'temperature': 1050,
			'time': 65
		}, {
			'type': 'tconstruct:melting',
			'byproducts': [{
				'amount': 1000,
				'fluid': 'tconstruct:scorched_stone'
			}],
			'ingredient': {'item': 'tconstruct:scorched_duct'},
			'result': {
				'amount': 180,
				'tag': 'forge:molten_gold'
			},
			'temperature': 1050,
			'time': 142
		}, {
			'type': 'tconstruct:melting',
			'byproducts': [{
				'amount': 1000,
				'fluid': 'tconstruct:seared_stone'
			}],
			'ingredient': {'item': 'tconstruct:seared_duct'},
			'result': {
				'amount': 180,
				'tag': 'forge:molten_gold'
			},
			'temperature': 1050,
			'time': 142
		}, {
			'type': 'tconstruct:material_melting',
			'input': 'tconstruct:cobalt',
			'result': {
				'amount': 90,
				'tag': 'forge:molten_cobalt'
			},
			'temperature': 1050
		}
	].forEach(type => {
        event.custom(type)
    })
})