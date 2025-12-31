//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
    //Vanilla Furnace
    event.remove({output: 'minecraft:furnace'})
    event.shaped('minecraft:furnace', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:stone_tool_materials',
        B: 'minecraft:flint'
    })
    event.shaped('9x minecraft:furnace', ['AAA', 'ABA', 'AAA'], {
        A: 'quark:sturdy_stone',
        B: 'supplementaries:flint_block'
    })

    //Quark Furnaces
    event.remove({output: 'quark:blackstone_furnace'})
    event.shaped('quark:blackstone_furnace', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:blackstone',
        B: 'minecraft:flint'
    })
    event.remove({output: 'quark:deepslate_furnace'})
    event.shaped('quark:deepslate_furnace', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:cobbled_deepslate',
        B: 'minecraft:flint'
    })
})