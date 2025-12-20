//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
	//Eye of Ender Recipe
    event.remove({output: 'minecraft:ender_eye'})
    event.shapeless( 'minecraft:ender_eye', ['#forge:dusts/enderium', '#forge:dusts/enderium', 'minecraft:blaze_powder'])
    event.remove({id: 'tconstruct:smelter/casting/ender/eye'})
    event.custom({
        'type': 'tconstruct:casting_table',
        'cast': {'item': 'minecraft:blaze_powder'},
        'cast_consumed': true,
        'cooling_time': 82,
        'fluid': {'amount': 180, 'tag': 'forge:molten_enderium'},
        'result': 'minecraft:ender_eye'
    })
})