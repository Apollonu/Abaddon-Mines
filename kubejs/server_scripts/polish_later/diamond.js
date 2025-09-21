//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
    //Steel Drill Head Recipe
    event.remove({output: 'immersiveengineering:drillhead_steel'})
    event.shaped('immersiveengineering:drillhead_steel', ['  C', 'AA ', 'BA '], {
        A: '#forge:ingots/steel',
        B: '#forge:storage_blocks/steel',
        C: '#forge:gems/diamond'
    })
})