import { Matches } from '../api/matchesCollection.js';

Router.configure({
    layoutTemplate: "mainTpl"
});

Router.route("/", {
    name: "home",
    template: "matchesTpl"
});

Router.route("/about", {
    name: "about",
    template: "aboutTpl"
});

Router.route("/match/:_id", {
    name: "match",
    template: "matchTpl",
    data() {
        const currentMatch = this.params._id;
        return Matches.findOne({_id: currentMatch});
    }
});

