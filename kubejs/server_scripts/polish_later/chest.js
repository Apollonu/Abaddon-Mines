//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

    //Iron Chest Types
    let iron_chest_types = [
        'copper',
        'iron',
        'gold'
    ].forEach(type => {
        let input
        if (type.indexOf('copper') != -1) input = '#forge:chests/wooden'
        if (type.indexOf('iron') != -1) input = 'ironchest:copper_chest'
        if (type.indexOf('gold') != -1) input = 'ironchest:iron_chest'
        event.remove({output: 'ironchest:' + type + '_chest'})
        event.recipes.create.sequenced_assembly(['ironchest:' + type + '_chest'], input, [
            event.recipes.createDeploying(input, [input, '#forge:storage_blocks/' + type]),
            event.recipes.create.pressing(input, input),
            event.recipes.create.pressing(input, input),
            event.recipes.createDeploying(input, [input, '#forge:plates/' + type])
        ]).transitionalItem(input).loops(1)
    })

    //Iron Upgrade Types
    let iron_upgrade_types = [
        'copper',
        'iron',
        'gold'
    ].forEach(type => {
        let input
        let output
        if (type.indexOf('copper') != -1) input = '#minecraft:planks', output = 'ironchest:wood_to_copper_chest_upgrade'
        if (type.indexOf('iron') != -1) input = '#forge:ingots/copper', output = 'ironchest:copper_to_iron_chest_upgrade'
        if (type.indexOf('gold') != -1) input = '#forge:ingots/iron', output = 'ironchest:iron_to_gold_chest_upgrade'
        event.remove({output: output})
        event.recipes.create.sequenced_assembly([output], input, [
            event.recipes.createDeploying(input, [input, '#forge:storage_blocks/' + type]),
            event.recipes.create.pressing(input, input),
            event.recipes.create.pressing(input, input),
            event.recipes.createDeploying(input, [input, '#forge:plates/' + type])
        ]).transitionalItem(input).loops(1)
    })

    //Iron Diamond Chest
    event.remove({output: 'ironchest:diamond_chest'})
    event.shaped('ironchest:diamond_chest', ['ABA','BCB','DBD'], {
        A: '#forge:gems/diamond',
        B: '#forge:glass',
        C: 'ironchest:gold_chest',
        D: '#forge:gears/diamond'
    })

    //Iron Diamond Upgrade
    event.remove({output: 'ironchest:gold_to_diamond_chest_upgrade'})
    event.shaped('ironchest:gold_to_diamond_chest_upgrade', ['ABA','BCB','DBD'], {
        A: '#forge:gems/diamond',
        B: '#forge:glass',
        C: '#forge:ingots/gold',
        D: '#forge:gears/diamond'
    })

    //Colossal Wood Wall Recipe
    event.remove({output: 'colossalchests:chest_wall_wood'})
    event.shaped('4x colossalchests:chest_wall_wood', ['ABA','BCB','ABA'], {
        A: '#minecraft:logs',
        B: '#minecraft:planks',
        C: '#forge:chests/wooden'
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
    
    //Colossal Wall Types
    let colossal_wall_types = [
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
})