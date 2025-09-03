//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Astrodux Recipe
	event.custom({
		'fabric:load_conditions': [{
			'condition': 'fabric:all_mods_loaded',
			'values': [
				'patchouli'
			]
		}],
	'conditions': [{
		'type': 'forge:mod_loaded',
		'modid': 'patchouli'
	}],
	'type': 'patchouli:shaped_book_recipe',
	'pattern': [
		'#/#',
		'/B/',
		'#/#'
	],
	'key': {
		'#': {
		'item': 'minecraft:blue_dye'
		}, '/': {
		'tag': 'forge:ingots/steel'
		}, 'B': {
		'item': 'minecraft:book'
		}
	},
	'book': 'ad_astra:astrodux'
	})

	//Industrial Foregoing Manual Recipe
	event.custom({
		'type': 'minecraft:crafting_shapeless',
		'ingredients': [{
			'item': 'minecraft:book'
			}, {
			'item': 'minecraft:redstone'
			}, {
			'tag': 'forge:ingots/aluminum'
		}],
		'result': {
			'item': 'patchouli:guide_book',
			'nbt': {
				'patchouli:book': 'industrialforegoing:industrial_foregoing'
			}
		}
	})
})