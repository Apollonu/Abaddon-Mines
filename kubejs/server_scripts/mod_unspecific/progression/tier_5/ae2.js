//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

    //Variables
    let prefix = 'ae2:'

    //Processor Types
    let processor_types = [
        'calculation',
        'engineering',
        'logic'
    ].forEach(type => {
        let input

        if (type == 'calculation') input = '#forge:gems/certus_quartz'
        if (type == 'engineering') input = '#forge:gems/diamond'
        if (type == 'logic') input = '#forge:ingots/gold'

        event.recipes.immersiveengineering.metal_press(
            prefix + 'printed_' + type + '_processor',
            input,
            prefix + type + '_processor_press'
        )
        event.recipes.immersiveengineering.metal_press(
            prefix + type + '_processor_press',
            'refinedstorage:quartz_enriched_iron_block',
            prefix + type + '_processor_press'
        )
        event.recipes.immersiveengineering.arc_furnace([prefix + type + '_processor'],
            prefix + 'printed_' + type + '_processor',
            [prefix + 'printed_silicon', '#forge:dusts/redstone', 'refinedstorage:processor_binding']
        )
    })

    //Machine Casing Recipe
    event.remove({output: 'refinedstorage:machine_casing'})
    event.shaped('refinedstorage:machine_casing', ['AAA', 'ACA', 'BDB' ], {
        A: 'refinedstorage:quartz_enriched_iron',
        B: 'thermal:cured_rubber',
        C: 'mekanism:steel_casing',
        D: 'ae2:engineering_processor'
    })

    //Printed Silicon Recipe
    event.recipes.immersiveengineering.metal_press(
        prefix + 'printed_silicon',
        '#forge:silicon',
        prefix + 'silicon_press'
    )

    //Quartz Enriched Iron
    event.remove({output: 'refinedstorage:quartz_enriched_iron', input: '#forge:ingots/iron'})
    event.custom({
        'type': 'tconstruct:casting_table',
        'cast': {'tag': 'forge:dusts/certus_quartz'},
        'cast_consumed': true,
        'cooling_time': 82,
        'fluid': {'amount': 90, 'tag': 'forge:molten_iron'},
        'result': 'refinedstorage:quartz_enriched_iron'
    })
})
