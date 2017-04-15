"use strict";
/**
 * Created by Siva on 15-04-2017.
 */
var router_1 = require('@angular/router');
var user_component_1 = require("./components/user/user.component");
var simple_component_1 = require("./components/SimpleInterest/simple.component");
var compound_component_1 = require("./components/CompoundInterest/compound.component");
var appRoutes = [
    {
        path: '',
        component: user_component_1.UserComponent
    },
    {
        path: 'simple',
        component: simple_component_1.SimpleComponent
    },
    {
        path: 'compound',
        component: compound_component_1.CompoundComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map