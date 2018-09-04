import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  var coll = new Mongo.Collection();
  coll.insert({ text: 'Entry A', container: { arr: [ { sortField: 5 } ] }});
  coll.insert({ text: 'Entry B', container: { arr: [ { sortField: 7 } ] }});
  coll.insert({ text: 'Entry C', container: { arr: [ { sortField: 1 } ] }});
  
  console.log("Sorting by container.arr.0.sortField");
  console.log("Natural Order");
  console.log(JSON.stringify(coll.find({ }).fetch()));
  console.log("Sorting Ascending");
  console.log(JSON.stringify(coll.find({ }, { sort: { 'container.arr.0.sortField': 1 } }).fetch()));
  console.log("Sorting Descending");
  console.log(JSON.stringify(coll.find({ }, { sort: { 'container.arr.0.sortField': -1 } }).fetch()));
});
