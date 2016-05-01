import { Template } from "meteor/templating";
import { Matches } from '../api/matchesCollection';

import "./match.js";
import "../routes/routes.js";


Template.matchesTpl.helpers({
    matches() {
        return Matches.find({}, {sort: {createdAt: -1}});
    },
    matchesCount() {
        return Matches.find().count();
    }
});

Template.matchesTpl.events({
    "submit .new-match"(event) {
        event.preventDefault();

        const target = event.target;
        const matchName = target.matchName.value;

        Matches.insert({
            matchName,
            createdAt: new Date()
            },
            (error, results) => Router.go("match", {_id: results})
        );

        target.matchName.value = "";
    }
});
