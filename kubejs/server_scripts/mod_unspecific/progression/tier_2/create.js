//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

	//Variables
	let prefix = 'create:'

	//Large Water Wheel Recipe
	event.remove({output: prefix + 'large_water_wheel'})
    event.recipes.createMechanicalCrafting(prefix + 'large_water_wheel', [
		' ABA ', 'AACAA', 'BCDCB', 'AACAA', ' ABA '
    ], {
        A: '#minecraft:planks',
        B: '#minecraft:wooden_slabs',
		C: prefix + 'shaft',
		D: prefix + 'water_wheel'
    })

	//Water Wheel Recipe
	event.remove({output: prefix + 'water_wheel'})
    event.recipes.createMechanicalCrafting(prefix + 'water_wheel', [
		' AA ', 'ABCA', 'ACBA', ' AA '
    ], {
        A: '#minecraft:planks',
        B: prefix + 'andesite_casing',
        C: '#forge:rods/iron'
    })

    //Windmill Recipes
	event.remove({output: prefix + 'white_sail', input: '#c:rods'})
    event.recipes.createMechanicalCrafting('3x ' + prefix + 'white_sail', [
		'ACAB', 'CACD', 'ACAD', 'BDDB'
    ], {
        A: '#minecraft:wool',
        B: prefix + 'andesite_alloy',
        C: '#forge:rods/iron',
        D: '#c:rods/wooden'
    })
	event.recipes.createMechanicalCrafting('3x ' + prefix + 'white_sail', [
		'ACAB', 'CACD', 'ACAD', 'BDDB'
    ], {
        A: '#forge:fabric_hemp',
        B: prefix + 'andesite_alloy',
        C: '#forge:rods/iron',
        D: '#c:rods/wooden'
    })
})