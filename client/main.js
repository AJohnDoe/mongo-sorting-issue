window.onload = function() {
if (Meteor.isClient) {
  const body = document.querySelector("body");
  var coll = new Meteor.Collection();
  coll.insert({ text: 'Entry A', container: { arr: [ { sortField: 5 } ] }});
  coll.insert({ text: 'Entry B', container: { arr: [ { sortField: 7 } ] }});
  coll.insert({ text: 'Entry C', container: { arr: [ { sortField: 1 } ] }});
  body.innerHTML += "<h1>Sorting by container.arr.0.sortField</h1>";
  body.innerHTML += "<h2>Natural Order</h2>";
  body.innerHTML += JSON.stringify(coll.find({ }).fetch());
  body.innerHTML += "<br/><h2>Ascending Order</h2>";
  body.innerHTML += JSON.stringify(coll.find({ }, { sort: { 'container.arr.0.sortField': 1 } }).fetch());
  body.innerHTML += "<br/><h2>Descending Order</h2>";
  body.innerHTML += JSON.stringify(coll.find({ }, { sort: { 'container.arr.0.sortField': -1 } }).fetch());
  
  var col2 = new Meteor.Collection();
  col2.insert({ text: 'Entry A', container: [{ arr: [ { sortField: 5 } ] }]});
  col2.insert({ text: 'Entry B', container: [{ arr: [ { sortField: 7 } ] }]});
  col2.insert({ text: 'Entry C', container: [{ arr: [ { sortField: 1 } ] }]});
  body.innerHTML += "<h1>Sorting by container.0.arr.0.sortField</h1>";
  body.innerHTML += "<h2>Natural Order</h2>";
  body.innerHTML += JSON.stringify(col2.find({ }).fetch());
  body.innerHTML += "<br/><h2>Ascending Order</h2>";
  body.innerHTML += JSON.stringify(col2.find({ }, { sort: { 'container.0.arr.0.sortField': 1 } }).fetch());
  body.innerHTML += "<br/><h2>Descending Order</h2>";
  body.innerHTML += JSON.stringify(col2.find({ }, { sort: { 'container.0.arr.0.sortField': -1 } }).fetch());
  
  var col3 = new Meteor.Collection();
  col3.insert({ text: 'Entry A', arr: [ { sortField: 5 } ] });
  col3.insert({ text: 'Entry B', arr: [ { sortField: 7 } ] });
  col3.insert({ text: 'Entry C', arr: [ { sortField: 1 } ] });
  body.innerHTML += "<h1>Sorting by arr.0.sortField</h1>";
  body.innerHTML += "<h2>Natural Order</h2>";
  body.innerHTML += JSON.stringify(col3.find({ }).fetch());
  body.innerHTML += "<br/><h2>Ascending Order</h2>";
  body.innerHTML += JSON.stringify(col3.find({ }, { sort: { 'arr.0.sortField': 1 } }).fetch());
  body.innerHTML += "<br/><h2>Descending Order</h2>";
  body.innerHTML += JSON.stringify(col3.find({ }, { sort: { 'arr.0.sortField': -1 } }).fetch());
}
}
