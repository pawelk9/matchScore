import { Template } from "meteor/templating";
import { Matches } from '../api/matchesCollection';

import "./body.html";
import "./match.js"


Template.body.helpers({
    matches() {
        return Matches.find({}, {sort: {createdAt: -1}});
    }
});

Template.body.events({
    "submit .new-match"(event) {
        event.preventDefault();

        const target = event.target;
        const matchName = target.matchName.value;

        Matches.insert({
            matchName,
            createdAt: new Date()
        });

        target.matchName.value = "";
        console.log(matchName);
    }
});
