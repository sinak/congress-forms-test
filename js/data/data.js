define([
  'https://rawgit.com/EFForg/congress-zip-plus-four/master/legislators.json',
], function(legislators) {
  console.log('testing')
  console.log(legislators);
  return {
    legislators: legislators
    }
});
