//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

    //Machine Casing Recipe
    event.remove({output: 'refinedstorage:machine_casing'})
    event.shaped('refinedstorage:machine_casing', ['AAA', 'ACA', 'BDB' ], {
        A: 'refinedstorage:quartz_enriched_iron',
        B: 'thermal:cured_rubber',
        C: 'mekanism:steel_casing',
        D: 'ae2:engineering_processor'
    })

    //Quartz Enriched Iron
    event.remove({output: 'refinedstorage:quartz_enriched_iron', input: '#forge:ingots/iron'})
    event.custom({
        'type': 'tconstruct:casting_table',
        'cast': {'item': '#forge:dusts/certus_quartz'},
        'cast_consumed': true,
        'cooling_time': 82,
        'fluid': {'amount': 180, 'tag': 'forge:molten_iron'},
        'result': 'refinedstorage:quartz_enriched_iron'
    })
})
