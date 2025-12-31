//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

    //Hemp Recipe Removal
    event.remove({output: 'minecraft:string', input: 'immersiveengineering:hemp_fiber'})
})