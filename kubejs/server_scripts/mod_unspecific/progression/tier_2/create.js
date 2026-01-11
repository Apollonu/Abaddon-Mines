//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

	//Variables
	let prefix = 'create:'

	//Large Water Wheel Recipe
	event.remove({output: prefix + 'large_water_wheel'})
    event.recipes.createMechanicalCrafting(prefix + 'large_water_wheel', [
		' AAA ', 'AABAA', 'ABCBA', 'AABAA', ' AAA '
    ], {
        A: '#minecraft:planks',
		B: '#forge:nuggets/iron',
		C: prefix + 'water_wheel'
    })

    //Sail Frame Recipes
	event.remove({output: prefix + 'sail_frame'})
    event.shaped('2x ' + prefix + 'sail_frame', ['BAB', 'A A', 'BAB'], {
        A: '#forge:rods/wooden',
        B: '#forge:nuggets/iron'
    })

	//Water Wheel Recipe
	event.remove({output: prefix + 'water_wheel'})
    event.shaped(prefix + 'water_wheel', ['ABA', 'BCB', 'ABA'], {
        A: '#minecraft:planks',
        B: '#forge:nuggets/iron',
        C: prefix + 'shaft'
    })

    //White Sail Recipes
    event.remove({output: prefix + 'white_sail'})
    event.shapeless(prefix + 'white_sail', [prefix + 'sail_frame', '#minecraft:wool'])
    event.shapeless(prefix + 'white_sail', [prefix + 'sail_frame', '#forge:fabric_hemp'])
})
