//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Iron Rod Recipe
	event.remove({output: '#forge:rods/iron', type: 'minecraft:crafting_shaped'})

	//Custom Recipe Types
    let custom_recipe_types = [
		{
			'type': 'tconstruct:damagable_melting',
			'ingredient': {'item': 'minecraft:chainmail_boots'},
			'result': {
				'amount': 240,
				'tag': 'forge:molten_iron',
				'unit_size': 10
			},
			'temperature': 800,
			'time': 98
		}, {
			'type': 'tconstruct:damagable_melting',
			'ingredient': {'item': 'minecraft:chainmail_chestplate'},
			'result': {
				'amount': 480,
				'tag': 'forge:molten_iron',
				'unit_size': 10
			},
			'temperature': 800,
			'time': 139
		}, {
			'type': 'tconstruct:damagable_melting',
			'ingredient': {'item': 'minecraft:chainmail_helmet'},
			'result': {
				'amount': 300,
				'tag': 'forge:molten_iron',
				'unit_size': 10
			},
			'temperature': 800,
			'time': 110
		}, {
			'type': 'tconstruct:damagable_melting',
			'ingredient': {'item': 'minecraft:chainmail_leggings'},
			'result': {
				'amount': 420,
				'tag': 'forge:molten_iron',
				'unit_size': 10
			},
			'temperature': 800,
			'time': 130
		}, {
			'type': 'tconstruct:ore_melting',
			'conditions': [{
				'type': 'mantle:tag_combination_filled',
				'match': [
					'forge:ores/iron',
					'forge:ore_rates/dense'
				]
			}],
			'ingredient': {
				'type': 'forge:intersection',
				'children': [{
					'tag': 'forge:ores/iron'
				}, {
					'tag': 'forge:ore_rates/dense'
				}
			]},
			'rate': 'metal',
			'result': {
				'amount': 540,
				'tag': 'forge:molten_iron'
			},
			'temperature': 800,
			'time': 271
		}, {
			'type': 'tconstruct:ore_melting',
			'conditions': [{
				'type': 'mantle:tag_combination_filled',
				'ignore': 'tconstruct:non_singular_ore_rates',
				'match': 'forge:ores/iron'
			}],
			'ingredient': {
				'type': 'forge:difference',
				'base': {'tag': 'forge:ores/iron'},
				'subtracted': {'tag': 'tconstruct:non_singular_ore_rates'}
			},
			'rate': 'metal',
			'result': {
				'amount': 180,
				'tag': 'forge:molten_iron'
			},
			'temperature': 800,
			'time': 150
		}, {
			'type': 'tconstruct:ore_melting',
			'conditions': [{
				'type': 'mantle:tag_combination_filled',
				'match': [
					'forge:ores/iron',
					'forge:ore_rates/sparse'
				]
			}],
			'ingredient': {
				'type': 'forge:intersection',
				'children': [{
					'tag': 'forge:ores/iron'
				}, {
					'tag': 'forge:ore_rates/sparse'
				}]
			},
			'rate': 'metal',
			'result': {
				'amount': 90,
				'tag': 'forge:molten_iron'
			},
			'temperature': 800,
			'time': 90
		}, {
			'type': 'tconstruct:ore_melting',
			'ingredient': {'tag': 'forge:raw_materials/iron'},
			'rate': 'metal',
			'result': {
				'amount': 90,
				'tag': 'forge:molten_iron'
			},
			'temperature': 800,
			'time': 90
		}, {
			'type': 'tconstruct:ore_melting',
			'ingredient': {'tag': 'forge:storage_blocks/raw_iron'},
			'rate': 'metal',
			'result': {
				'amount': 810,
				'tag': 'forge:molten_iron'
			},
			'temperature': 800,
			'time': 361
		}
	].forEach(type => {
        event.custom(type)
    })
})