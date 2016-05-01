import { Template } from 'meteor/templating';
import { Matches } from '../api/matchesCollection.js';

import "./match.html";
import "./mainTpl.html";
import "./navigationTpl.html";
import  "./matchTpl.html";

Template.matchesTpl.events({
    "click .delete"() {
        Matches.remove(this._id);
    }
});