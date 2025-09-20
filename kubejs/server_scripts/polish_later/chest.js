//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

    //Colossal Wood Wall Recipe
    event.remove({output: 'colossalchests:chest_wall_wood'})
    event.shaped('4x colossalchests:chest_wall_wood', ['ABA','BCB','ABA'], {
        A: '#minecraft:logs',
        B: '#minecraft:planks',
        C: '#forge:chests/wooden'
    })

    //Colossal Types
    let colossal_types = [
        'copper',
        'gold'
    ].forEach(type => {
        let variant
        if (type.indexOf('copper') != -1) variant = 'wood'
        if (type.indexOf('gold') != -1) variant = 'iron'
        event.remove({output: 'colossalchests:chest_wall_' + type})
        event.shaped('4x colossalchests:chest_wall_' + type, ['ABA','BCB','ABA'], {
            A: 'colossalchests:chest_wall_' + variant,
            B: '#forge:plates/' + type,
            C: '#forge:ingots/' + type
        })
    })

    //Colossal Interface Types
    let colossal_interface_types = [
        'copper',
        'diamond',
        'gold',
        'iron',
        'obsidian',
        'wood'
    ].forEach(type => {
        event.remove({output: 'colossalchests:interface_' + type})
        event.recipes.vintage.turning('colossalchests:interface_' + type, 'colossalchests:chest_wall_' + type)
    })

    //Colossal Core Types
    let colossal_core_types = [
        'copper',
        'diamond',
        'gold',
        'iron',
        'obsidian',
        'wood'
    ].forEach(type => {
        event.remove({output: 'colossalchests:colossal_chest_' + type})
        event.recipes.create.sequenced_assembly(['colossalchests:colossal_chest_' + type], 'colossalchests:chest_wall_' + type, [
            event.recipes.createDeploying('colossalchests:chest_wall_' + type, ['colossalchests:chest_wall_' + type, '#forge:rods/iron']),
            event.recipes.createDeploying('colossalchests:chest_wall_' + type, ['colossalchests:chest_wall_' + type, '#forge:gears/iron']),
            event.recipes.create.pressing('colossalchests:chest_wall_' + type, 'colossalchests:chest_wall_' + type)
        ]).transitionalItem('colossalchests:chest_wall_' + type).loops(2)
    })

    //Colossal Iron Wall Recipe
    event.remove({output: 'colossalchests:chest_wall_iron'})
    event.shaped('colossalchests:chest_wall_iron', ['ABA','BCB','ABA'], {
        A: '#forge:ingots/iron',
        B: '#forge:plates/iron',
        C: 'colossalchests:chest_wall_copper'
    })

    //Colossal Diamond Wall Recipe
    event.remove({output: 'colossalchests:chest_wall_diamond'})
    event.shaped('4x colossalchests:chest_wall_diamond', ['ABA','BCB','ABA'], {
        A: 'colossalchests:chest_wall_gold',
        B: '#forge:gems/diamond',
        C: '#forge:glass'
    })

    //Colossal Obsidian Wall Recipe
    event.remove({output: 'colossalchests:chest_wall_obsidian'})
    event.shaped('colossalchests:chest_wall_obsidian', [' A ','ABA',' A '], {
        A: '#forge:obsidian',
        B: 'colossalchests:chest_wall_diamond'
    })
})