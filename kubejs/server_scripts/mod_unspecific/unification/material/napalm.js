//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersivepetroleum:napalm',
        json_ids: [
            'tfmg:filling/napalm_potato',
            'tfmg:mixing/napalm' //This Recipe is Removed
        ]
    }

    //Other Recipe Types
    event.recipes.create.filling('tfmg:napalm_potato', [Fluid.of('immersivepetroleum:napalm', 250), 'minecraft:potato'])

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Wire Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'tfmg:aluminum_wire',
        json_ids: [
            'vintage:rolling/aluminum_plate'
        ],
        json_recipes: [
            {
                'type': 'createaddition:rolling',
                'input': {'tag': 'forge:plates/aluminum'},
                'result': {'item': 'tfmg:aluminum_wire', 'count': 2}
            }
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})