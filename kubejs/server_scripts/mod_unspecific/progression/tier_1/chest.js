//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
    //Chest Recipe
    event.remove({output: 'minecraft:chest'})
    event.shaped('minecraft:chest', ['BAB','ACA','BAB'], {
        A: '#minecraft:planks',
        B: '#minecraft:logs',
        C: '#forge:nuggets/iron'
    })
})