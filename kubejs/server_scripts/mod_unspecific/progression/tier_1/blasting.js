//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

    //String Recipe
    event.blasting('minecraft:string', 'htm:plant_string')

    //Seared brick Recipe Removal
    event.remove({output: 'tconstruct:seared_brick', type: 'minecraft:smelting'})
})