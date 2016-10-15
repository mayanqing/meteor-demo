/**
 * Created by myq on 16-10-15.
 */
Meteor.publish('posts', function() {
  return Posts.find();
});