//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
    //Map Recipe
    event.replaceInput({output: 'minecraft:map', input: 'minecraft:compass'},
        'minecraft:compass',
        'minecraft:black_dye'
    )
})