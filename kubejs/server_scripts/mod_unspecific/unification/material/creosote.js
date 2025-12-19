//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersiveengineering:creosote',
        json_ids: [
            'tfmg:coking/charcoal',
            'tfmg:coking/coal',
            'thermal:machines/pyrolyzer/pyrolyzer_coal',
            'thermal:machines/pyrolyzer/pyrolyzer_logs'
        ],
        json_recipes: [
            {
                'type': 'tfmg:coking',
                'ingredients': [{'tag': 'minecraft:logs_that_burn'}],
                'processingTime': 600,
                'results': [
                    {'item': 'minecraft:charcoal'},
                    {'amount': 2, 'fluid': 'immersiveengineering:creosote'},
                    {'amount': 20, 'fluid': 'tfmg:carbon_dioxide'}
                ]
            }, {
                'type': 'tfmg:coking',
                'ingredients': [{'item':'minecraft:coal'}],
                'processingTime': 1200,
                'results': [
                    {'item': 'immersiveengineering:coal_coke'},
                    {'amount': 1, 'fluid': 'immersiveengineering:creosote'},
                    {'amount': 30, 'fluid': 'tfmg:carbon_dioxide'}
                ]
            }, {
                'type': 'thermal:pyrolyzer',
                'ingredient': {'item': 'minecraft:coal'},
                'result': [
                    {'item': 'immersiveengineering:coal_coke'},
                    {'item': 'thermal:tar', 'chance': 0.25},
                    {'fluid': 'immersiveengineering:creosote', 'amount': 250}
                ],
                'experience': 0.15
            }, {
                'type': 'thermal:pyrolyzer',
                'ingredient': {'tag': 'minecraft:logs'},
                'result': [
                    {'item': 'minecraft:charcoal'},
                    {'fluid': 'immersiveengineering:creosote', 'amount': 125}
                ],
                'experience': 0.15
            }
        ]
    }

    //Other Recipe Types
    event.remove({output: 'tfmg:hardened_planks'})
    event.recipes.create.mixing('tfmg:hardened_planks', [
        '#minecraft:planks',
        Fluid.of(data.unified_individual, 125)
    ]).heated()

    //Unify Items Function Push
    unify_items (
        data
    )
})