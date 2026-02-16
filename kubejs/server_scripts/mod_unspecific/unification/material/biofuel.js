//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'industrialforegoing:biofuel',
        json_ids: [
            'createaddition:mixing/bioethanol'
        ],
        json_recipes: [
            {
                'type': 'create:mixing',
                'ingredients': [
                    {'item': 'minecraft:sugar'},
                    {'item': 'create:cinder_flour'},
                    {'item': 'createaddition:biomass'},
                    {'item': 'createaddition:biomass'}
                ],
                'results': [{'fluid': 'industrialforegoing:biofuel', 'amount': 125}]
            }
        ]
    }

    //Other Recipe Types

    //Unify Items Function Push
    unify_items (
        data
    )
})
