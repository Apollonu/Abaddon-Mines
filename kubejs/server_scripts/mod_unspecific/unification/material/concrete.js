//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: [
            'immersiveengineering:concrete'
        ]
    }

    //Other Recipe Types
    event.custom({
        'type': 'tconstruct:casting_table',
        'cast': {'tag': 'tconstruct:casts/multi_use/ingot'},
        'cooling_time': 47,
        'fluid': {
            'amount': 90,
            'fluid': 'immersiveengineering:concrete'
        },
        'result': {'item': 'tfmg:cinderblock'}
    })
    event.custom({
        'type': 'tconstruct:casting_basin',
        'cast': {'item': 'tfmg:rebar_floor'},
        'cast_consumed': true,
        'cooling_time': 95,
        'fluid': {
            'amount': 540,
            'fluid': 'immersiveengineering:concrete'
        },
        'result': {'item': 'tfmg:rebar_concrete'}
    })
    event.custom({
        'type': 'tconstruct:casting_basin',
        'cast': {'item': 'tfmg:rebar_stairs'},
        'cast_consumed': true,
        'cooling_time': 95,
        'fluid': {
            'amount': 540,
            'fluid': 'immersiveengineering:concrete'
        },
        'result': {'item': 'tfmg:rebar_concrete_stairs'}
    })
    event.custom({
        'type': 'tconstruct:casting_basin',
        'cast': {'item': 'tfmg:rebar_wall'},
        'cast_consumed': true,
        'cooling_time': 95,
        'fluid': {
            'amount': 540,
            'fluid': 'immersiveengineering:concrete'
        },
        'result': {'item': 'tfmg:rebar_concrete_wall'}
    })

    //Unify Items Function Push
    unify_items (
        data
    )
})