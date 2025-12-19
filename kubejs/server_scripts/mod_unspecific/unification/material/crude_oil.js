//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'immersivepetroleum:crudeoil',
        json_ids: [
            'pneumaticcraft:amadron/emerald_to_oil', //This Recipe is Removed
            'pneumaticcraft:amadron/oil_to_emerald',
            'thermal:machines/centrifuge/centrifuge_oil_red_sand',
            'thermal:machines/centrifuge/centrifuge_oil_sand',
            'thermal_and_space:machine/centrifuge/centrifuge_mars_oil_sand',
            'thermal_and_space:machine/centrifuge/centrifuge_moon_oil_sand',
            'thermal_and_space:machine/centrifuge/centrifuge_venus_oil_sand'
        ],
        json_recipes: [
            {
                'type': 'pneumaticcraft:amadron',
                'id': 'pneumaticcraft:amadron/oil_to_emerald',
                'input': {'type': 'FLUID', 'amount': 5000, 'id': 'immersivepetroleum:crudeoil'},
                'level': 0,
                'output': {'type': 'ITEM', 'amount': 1, 'id' :'minecraft:emerald'},
                'static': true
            }, {
                'type': 'thermal:centrifuge',
                'ingredient': {'item': 'thermal:oil_red_sand'},
                'result': [
                    {'item': 'minecraft:red_sand', 'chance': 0.75, 'locked': true},
                    {'item': 'thermal:bitumen', 'chance': 1.5},
                    {'item': 'thermal:tar', 'chance': 1.0},
                    {'fluid': 'immersivepetroleum:crudeoil', 'amount': 100}
                ],
                'energy': 20000,
                'experience': 1.0
            }, {
                'type': 'thermal:centrifuge',
                'ingredient': {'item': 'thermal:oil_sand'},
                'result': [
                    {'item': 'minecraft:sand', 'chance': 0.75, 'locked': true},
                    {'item': 'thermal:bitumen', 'chance': 1.5},
                    {'item': 'thermal:tar', 'chance': 1.0},
                    {'fluid': 'immersivepetroleum:crudeoil', 'amount': 100}
                ],
                'energy': 20000,
                'experience': 1.0
            }, {
                'type': 'thermal:centrifuge',
                'ingredient': {'item': 'thermal_and_space:oil_mars_sand'},
                'result': [
                    {'item': 'ad_astra:mars_sand', 'chance': 0.75, 'locked': true},
                    {'item': 'thermal:bitumen', 'chance': 1.5},
                    {'item': 'thermal:tar', 'chance': 1.0},
                    {'fluid': 'immersivepetroleum:crudeoil', 'amount': 100}
                ],
                'energy': 20000
            }, {
                'type': 'thermal:centrifuge',
                'ingredient': {'item': 'thermal_and_space:oil_moon_sand'},
                'result': [
                    {'item': 'ad_astra:moon_sand', 'chance': 0.75, 'locked': true},
                    {'item': 'thermal:bitumen', 'chance': 1.5},
                    {'item': 'thermal:tar', 'chance': 1.0},
                    {'fluid': 'immersivepetroleum:crudeoil', 'amount': 100}
                ],
                'energy': 20000
            }, {
                'type': 'thermal:centrifuge',
                'ingredient': {'item': 'thermal_and_space:oil_venus_sand'},
                'result': [
                    {'item': 'ad_astra:venus_sand', 'chance': 0.75, 'locked': true},
                    {'item': 'thermal:bitumen', 'chance': 1.5},
                    {'item': 'thermal:tar', 'chance': 1.0},
                    {'fluid': 'immersivepetroleum:crudeoil', 'amount': 100}
                ],
                'energy': 20000
            }
        ]
    }

    //Other Recipe Types
    event.forEachRecipe({type: 'industrialforegoing:laser_drill_fluid'}, recipe => {
		let json = recipe.json.toString()
		json = json.replace('pneumaticcraft:oil', data.unified_individual)
		recipe.merge(JSON.parse(json))
	})

    //Unify Items Function Push
    unify_items (
        data
    )
})