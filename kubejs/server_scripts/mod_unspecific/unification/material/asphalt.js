//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        unified_individual: 'immersivepetroleum:asphalt'
    }

    //Other Recipe Types
    event.remove({output: data.unified_individual, type: 'immersiveengineering:shaped_fluid'})
    event.remove({output: 'tfmg:asphalt_mixture', type: 'create:mixing'})
    event.custom({
        'type': 'immersiveengineering:shaped_fluid',
        'category': 'misc',
        'key': {
            'B': {
            'type': 'immersiveengineering:fluid',
            'amount': 1000,
            'tag': 'minecraft:water'
            },
            'C': {
            'item': 'immersivepetroleum:bitumen'
            },
            'G': {
            'tag': 'forge:gravel'
            },
            'S': {
            'tag': 'forge:sand'
            }
        },
        'pattern': [
            'SCS',
            'GBG',
            'SCS'
        ],
        'result': {
            'count': 16,
            'item': 'tfmg:asphalt_mixture'
        },
        'show_notification': true
    })
    event.recipes.create.mixing('8x tfmg:asphalt_mixture', [
        '2x #forge:sand',
        '#forge:gravel',
        '#forge:bitumen',
        Fluid.of('minecraft:water', 500)
    ])
    event.recipes.create.compacting(data.unified_individual, '4x tfmg:asphalt_mixture').heated()

    //Unify Items Function Push
})