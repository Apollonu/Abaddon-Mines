//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
	//Nasa Workbench Recipe
    event.remove({output: 'ad_astra:nasa_workbench'})
    event.recipes.createMechanicalCrafting('ad_astra:nasa_workbench', [
        'E F G', 'CAIAC', 'CDHDC', ' BAB '
    ], {
        A: '#forge:plates/steel',
        B: '#forge:storage_blocks/steel',
        C: '#forge:plates/desh',
        D: 'immersiveengineering:light_engineering',
        E: 'pneumaticcraft:assembly_laser',
        F: 'pneumaticcraft:assembly_controller',
        G: 'pneumaticcraft:assembly_drill',
        H: 'immersiveengineering:rs_engineering',
        I: 'mekanism:formulaic_assemblicator'
    })
})