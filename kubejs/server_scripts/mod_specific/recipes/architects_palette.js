//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Variables
	let prefix = 'architects_palette:'

	//Abyssaline Recipe
	event.remove({output: prefix + 'abyssaline'})
	event.shaped('2x ' + prefix + 'abyssaline', ['AB', 'BA'], {
		A: '#forge:obsidian',
		B: '#forge:dusts/prismarine'
	})
	
	//Blackstone Types
	let blackstone_types = [
		'twisting',
		'weeping'
	].forEach(type => {
		event.remove({output: prefix + type + '_blackstone'})
		event.shaped('8x ' + prefix + type + '_blackstone', ['AAA', 'ABA', 'AAA'], {
			A: 'minecraft:blackstone',
			B: 'minecraft:' + type + '_vines'
		})
	})

	//Bread Block Recipes
	event.remove({output: prefix + 'bread_block'})
	event.shaped(prefix + 'bread_block', ['AAA', 'AAA', 'AAA'], {
		A: 'minecraft:bread'
	})
	event.shapeless('9x minecraft:bread', [prefix + 'bread_block'])

	//Choral End Stone Bricks Recipe
	event.remove({output: prefix + 'choral_end_stone_bricks'})
	event.shaped('8x ' + prefix + 'choral_end_stone_bricks', ['AAA', 'ABA', 'AAA'], {
		A: 'minecraft:end_stone_bricks',
		B: 'minecraft:chorus_fruit'
	})

	//Ender Pearl Block Recipes
	event.remove({output: prefix + 'ender_pearl_block'})
	event.remove({input: prefix + 'ender_pearl_block'})
	event.shaped(prefix + 'ender_pearl_block', ['AAA', 'AAA', 'AAA'], {
		A: '#forge:ender_pearls'
	})
	event.shapeless('9x minecraft:ender_pearl', [prefix + 'ender_pearl_block'])
	
	//Flint Block Recipe
	event.remove({output: prefix + 'flint_block'})
	event.shaped(prefix + 'flint_block', ['AA', 'AA'], {
		A: 'minecraft:flint'
	})

	//Nether Brass Torch Recipe
	event.remove({output: prefix + 'nether_brass_torch'})
	event.custom({
		'type': 'minecraft:crafting_shaped',
		'category': 'misc',
		'key': {
			'A': {'item': 'minecraft:stick'},
			'B': {'item': prefix + 'nether_brass_nugget'},
			'C': [{'item': 'minecraft:coal'}, {'item': 'minecraft:charcoal'}]
		},
		'pattern': ['C', 'A', 'B'],
		'result': {'count': 4, 'item': prefix + 'nether_brass_torch'},
		'show_notification': true
	})

	//Pipe Recipe
	event.remove({output: prefix + 'pipe'})
	event.shaped('6x ' + prefix + 'pipe', ['A A', 'A A', 'A A'], {
		A: 'quark:iron_plate'
	})

	//Scute Block Recipes
	event.remove({output: prefix + 'scute_block'})
	event.shaped(prefix + 'scute_block', ['AAA', 'AAA', 'AAA'], {
		A: 'minecraft:scute'
	})
	event.shapeless('9x minecraft:scute', [prefix + 'scute_block'])

	//Tread Plate Recipe
	event.remove({output: prefix + 'tread_plate'})
	event.shaped('3x ' + prefix + 'tread_plate', ['BBB', 'AAA', 'BBB'], {
		A: 'quark:iron_plate',
		B: '#forge:nuggets/iron'
	})
})