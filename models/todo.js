var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
  FIXTURES: [
  {
    id: "1",
    title: 'buying boxes',
    isCompleted: false
  }, {
    id: "2",
    title: 'switching to PG&E',
    isCompleted: true
  }, {
    id: "3",
    title: 'order movers',
    isCompleted: false
  }
]});

export default Todo;