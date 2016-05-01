import { Template } from 'meteor/templating';
import { Matches } from '../api/matchesCollection.js';

import "./match.html";

Template.matchesTemplate.events({
    "click .delete"() {
        Matches.remove(this._id);
    }
});