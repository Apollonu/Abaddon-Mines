//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
    //Wool Recipe
    event.remove({output: 'minecraft:white_wool', input: 'minecraft:string'})
    event.shaped('minecraft:white_wool', ['AAA', 'AAA', 'AAA'], {
        A: 'minecraft:string'
    })
})