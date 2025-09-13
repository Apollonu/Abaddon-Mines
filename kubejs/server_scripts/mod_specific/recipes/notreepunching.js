//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

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
})