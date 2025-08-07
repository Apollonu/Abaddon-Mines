//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Variables
const individual_logs = []

//Item Tag Event
ServerEvents.tags('item', event => {

	//Logs Push
	event.get('minecraft:logs')
	.getObjectIds().forEach(individual => {
		individual = individual.toString()
		if (individual.indexOf('stripped_') == -1 && individual.indexOf('_wood') == -1 && individual.indexOf('_hyphae') == -1 && individual.indexOf('glowing') == -1) {
			individual = individual + 's'
			individual_logs.push(individual)
		}
	})
})

//Recipe Event
ServerEvents.recipes(event => {

	//Wooden Tool Recipes
	event.shaped('minecraft:wooden_axe', ['BB', 'BA', ' A'], {
		A: 'minecraft:stick',
		B: '#minecraft:planks'
	})
	event.shaped('minecraft:wooden_hoe', ['BB', ' A', ' A'], {
		A: 'minecraft:stick',
		B: '#minecraft:planks'
	})
	event.shaped('minecraft:wooden_pickaxe', ['BBB', ' A ', ' A '], {
		A: 'minecraft:stick',
		B: '#minecraft:planks'
	})
	event.shaped('minecraft:wooden_shovel', ['B', 'A', 'A'], {
		A: 'minecraft:stick',
		B: '#minecraft:planks'
	})
	event.shaped('minecraft:wooden_sword', ['B', 'B', 'A'], {
		A: 'minecraft:stick',
		B: '#minecraft:planks'
	})

	//Campfire Recipes
    event.shaped('minecraft:campfire', [' B ', 'BCB', 'AAA'], {
        A: '#minecraft:logs',
        B: '#c:rods/wooden',
        C: '#minecraft:coals'
    })
    event.shaped('minecraft:soul_campfire', [' B ', 'BCB', 'AAA'], {
        A: '#minecraft:logs',
        B: '#c:rods/wooden',
        C: '#minecraft:soul_fire_base_blocks'
    })
    event.replaceInput({output: 'netherexp:ancient_campfire'},
        '#c:rods/wooden',
        '#c:rods/wooden'
    )

	//Chopping Recipes
	individual_logs.forEach(individual => {
		if (individual.includes('cerebrage_')) individual = individual.replace('cerebrage_', '')
		let plank = individual.replace('_log', '_plank')
		plank = plank.replace('_stem', '_plank')
		individual = '#' + individual
		if (individual.includes('palo_verde')) plank = 'minecraft:birch_planks'
		if (individual.includes('florus')) individual = '#biomeswevegone:florus_logs'
		if (individual.includes('rubberwood')) individual = '#forge:rubberwood_logs'
		
		event.remove({output: plank, input: individual, type: 'minecraft:crafting_shapeless'})
		event.shaped('2x ' + plank, ['B', 'A'], {
			A: individual,
			B: '#notreepunching:weak_saws'
		}).damageIngredient('#notreepunching:weak_saws', 1)
		event.shaped('4x ' + plank, ['B', 'A'], {
			A: individual,
			B: '#notreepunching:saws'
		}).damageIngredient('#notreepunching:saws', 1)
	})
})