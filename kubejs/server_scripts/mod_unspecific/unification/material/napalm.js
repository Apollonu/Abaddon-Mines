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