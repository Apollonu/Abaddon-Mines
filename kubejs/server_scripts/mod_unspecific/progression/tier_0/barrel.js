//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
    //Barrel Recipe
    event.remove({output: 'minecraft:barrel'})
    event.shaped('minecraft:barrel', ['ABA', 'C C', 'ABA'], {
        A: '#minecraft:planks',
        B: '#minecraft:wooden_slabs',
        C: '#minecraft:logs'
    })
})