//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
    //Plate Types
    let plate_types = [
        {type: 'aluminum', hardness: 2},
        {type: 'brass', hardness: 1},
        {type: 'bronze', hardness: 0},
        {type: 'calorite', hardness: 3},
        {type: 'constantan', hardness: 1},
        {type: 'copper', hardness: 0},
        {type: 'desh', hardness: 3},
        {type: 'electrum', hardness: 1},
        {type: 'enderium', hardness: 3},
        {type: 'invar', hardness: 3},
        {type: 'iron', hardness: 1},
        {type: 'gold', hardness: 0},
        {type: 'lead', hardness: 1},
        {type: 'lumium', hardness: 3},
        {type: 'netherite', hardness: 3},
        {type: 'nickel', hardness: 1},
        {type: 'osmium', hardness: 3},
        {type: 'ostrum', hardness: 3},
        {type: 'signalum', hardness: 2},
        {type: 'silver', hardness: 1},
        {type: 'steel', hardness: 2},
        {type: 'tin', hardness: 0},
        {type: 'uranium', hardness: 2},
        {type: 'zinc', hardness: 1}
    ].forEach(plate => {
        let type = plate.type
        let hardness = plate.hardness

        let plate_item = '#forge:plates/' + type
        let ingot_item = '#forge:ingots/' + type

        event.remove({output: plate_item})

        if (hardness <= 0) {
            event.shapeless(plate_item, [
                ingot_item,
                '#forge:hammers'
            ]).damageIngredient('#forge:hammers')
        }

        if (hardness <= 1) {
            event.recipes.create.pressing(plate_item, ingot_item)
        }

        if (hardness <= 2) {
            if (hardness == 2) {
                event.recipes.create.sequenced_assembly([plate_item], ingot_item, [
                    event.recipes.create.pressing(ingot_item, ingot_item),
                    event.recipes.create.pressing(ingot_item, ingot_item),
                    event.recipes.create.pressing(ingot_item, ingot_item)
                ]).transitionalItem(ingot_item).loops(2)
                event.recipes.vintageimprovementsHammering(plate_item, ingot_item)
            }
            event.custom({
                'type': 'tconstruct:casting_table',
                'cast': {'tag': 'tconstruct:casts/multi_use/plate'},
                'conditions': [{'type': 'mantle:tag_filled', 'tag': 'forge:plates/' + type}],
                'cooling_time': 50,
                'fluid': {'amount': 90, 'tag': 'forge:molten_' + type},
                'result': {'tag': 'forge:plates/' + type}
            })
            event.custom({
                'type': 'tconstruct:casting_table',
                'cast': {'tag': 'tconstruct:casts/single_use/plate'},
                'cast_consumed': true,
                'conditions': [{'type': 'mantle:tag_filled', 'tag': 'forge:plates/' + type}],
                'cooling_time': 50,
                'fluid': {'amount': 90, 'tag': 'forge:molten_' + type},
                'result': {'tag': 'forge:plates/' + type}
            })
        }

        if (hardness <= 3) {
            event.recipes.immersiveengineering.metal_press(
                plate_item,
                ingot_item,
                'immersiveengineering:mold_plate',
                2400
            )
            event.recipes.thermal.press(plate_item, ingot_item)
        }
    })
})
