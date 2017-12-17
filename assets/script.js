$(document).ready(function() {
    var Task = Backbone.Model.extend({
        idAttribute: "_id"
    });

    var TaskView = Backbone.View.extend({
        initialize: function(options) {
            this.tasks = options.tasks;
        },
        events: {
            'click': 'deleteTask'
        },
        render: function() {
            this.$el.html('<li>' + this.model.get('task') + '</li>');
            return this;
        },
        deleteTask: function(evt) {
            console.log(this.model.isNew());
            this.model.destroy({
                wait: true,
                error: function(err) {
                    console.err(err);
                }
            });
        }
    });

    var TaskList = Backbone.Collection.extend({
        model: Task,
        url: '/task'
    });

    var View = Backbone.View.extend({
        collection: new TaskList(),
        el: 'body',
        initialize: function() {
            this.collection.on('sync', this.render, this);
            this.collection.on('remove', this.render, this);
            this.collection.fetch();
        },
        events: {
            'submit #todo-table form': 'addTask'
        },
        addTask: function(evt) {
            evt.preventDefault();
            this.collection.create({
                task: $('input[name=task]').val()
            }, {
                wait: true,
                success: function() {
                    $('input[name=task]').val('');
                },
                error: function(err) {
                    console.err(err);
                }
            });
        },
        render: function() {
            var tasks = this.collection;
            var $ul = $('ul', this.$el);
            $('li', $ul).remove();
            tasks.each(function(model) {
                $ul.append(new TaskView({
                    model: model
                }).render().$el);
            });
        }
    });
    new View();
});
