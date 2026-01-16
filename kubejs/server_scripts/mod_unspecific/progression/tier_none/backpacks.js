//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
    //Backpack Recipe
    event.remove({output: 'sophisticatedbackpacks:backpack'})
    event.shaped('sophisticatedbackpacks:backpack', ['ABA', 'CDC', 'BBB'], {
        A: '#forge:string',
        B: '#forge:leather',
        C: 'minecraft:barrel',
        D: '#forge:ingots/bronze'
    })

    //Copper Backpack Recipe
    event.remove({output: 'sophisticatedbackpacks:copper_backpack'})
    event.shaped('sophisticatedbackpacks:copper_backpack', ['DED', 'BAB', 'CDC'], {
        A: 'sophisticatedbackpacks:backpack',
        B: '#forge:gears/copper',
        C: '#forge:plates/copper',
        D: '#minecraft:wool',
        E: 'minecraft:tripwire_hook'
    })

    //Iron Backpack Recipe
    event.remove({output: 'sophisticatedbackpacks:iron_backpack'})
	event.recipes.create.sequenced_assembly(['sophisticatedbackpacks:iron_backpack'], 'sophisticatedbackpacks:copper_backpack', [
		event.recipes.createDeploying('sophisticatedbackpacks:copper_backpack', ['sophisticatedbackpacks:copper_backpack', '#forge:string']),
        event.recipes.createDeploying('sophisticatedbackpacks:copper_backpack', ['sophisticatedbackpacks:copper_backpack', 'ironchest:iron_chest']),
        event.recipes.createDeploying('sophisticatedbackpacks:copper_backpack', ['sophisticatedbackpacks:copper_backpack', '#forge:leather']),
		event.recipes.createDeploying('sophisticatedbackpacks:copper_backpack', ['sophisticatedbackpacks:copper_backpack', '#forge:gears/compressed_iron'])
	]).transitionalItem('sophisticatedbackpacks:copper_backpack').loops(1)

    //Gold Backpack Recipe
    event.remove({output: 'sophisticatedbackpacks:gold_backpack'})
	event.recipes.create.sequenced_assembly(['sophisticatedbackpacks:gold_backpack'], 'sophisticatedbackpacks:iron_backpack', [
		event.recipes.createDeploying('sophisticatedbackpacks:iron_backpack', ['sophisticatedbackpacks:iron_backpack', '#minecraft:wool']),
        event.recipes.createDeploying('sophisticatedbackpacks:iron_backpack', ['sophisticatedbackpacks:iron_backpack', 'ironchest:gold_chest']),
        event.recipes.createDeploying('sophisticatedbackpacks:iron_backpack', ['sophisticatedbackpacks:iron_backpack', '#forge:leather']),
		event.recipes.createDeploying('sophisticatedbackpacks:iron_backpack', ['sophisticatedbackpacks:iron_backpack', 'thermal:rf_coil'])
	]).transitionalItem('sophisticatedbackpacks:iron_backpack').loops(1)

    //Diamond Backpack Recipe
    event.remove({output: 'sophisticatedbackpacks:diamond_backpack'})
	event.recipes.create.sequenced_assembly(['sophisticatedbackpacks:diamond_backpack'], 'sophisticatedbackpacks:gold_backpack', [
		event.recipes.createDeploying('sophisticatedbackpacks:gold_backpack', ['sophisticatedbackpacks:gold_backpack', '#thermal:rockwool']),
        event.recipes.createDeploying('sophisticatedbackpacks:gold_backpack', ['sophisticatedbackpacks:gold_backpack', 'ironchest:diamond_chest']),
        event.recipes.createDeploying('sophisticatedbackpacks:gold_backpack', ['sophisticatedbackpacks:gold_backpack', '#forge:leather']),
		event.recipes.createDeploying('sophisticatedbackpacks:gold_backpack', ['sophisticatedbackpacks:gold_backpack', '#forge:circuits/basic'])
	]).transitionalItem('sophisticatedbackpacks:gold_backpack').loops(1)
})
