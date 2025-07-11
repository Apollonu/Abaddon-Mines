//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

    //Variables
    let paper = 'minecraft:paper'
    let paper_pulp = 'htm:paper_pulp'
    
    //Input Types
    let input_types = [
        'farmersdelight:tree_bark',
        'mekanism:sawdust',
        'minecraft:sugar_cane',
        'netherexp:warphopper_fur'
    ].forEach(type => {
        event.remove({output: paper, input: type})
    })
    
    //Paper Pulp Recipes
    event.recipes.createMixing('2x ' + paper_pulp, [
		'1x minecraft:slime_ball',
        '3x minecraft:sugar_cane',
        Fluid.water(750)
	])
    event.recipes.createMixing(paper_pulp, [
		'2x minecraft:slime_ball',
        '5x farmersdelight:tree_bark',
        Fluid.water(1000)
	]).lowheated()
    event.recipes.createMixing('3x ' + paper_pulp, [
		'1x minecraft:slime_ball',
        '3x netherexp:warphopper_fur',
        Fluid.water(800)
	]).lowheated()
})