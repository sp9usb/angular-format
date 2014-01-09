test( "string_format_array", function() {

  var stringToFormat = 'Now I {0} {1}';
  var formatted = stringToFormat.format(['see', 'you']);

  equal(formatted, 'Now I see you');
});

test( "string_format_json", function() {

  var stringToFormat = 'Now I {see} {you}';
  var formatted = stringToFormat.format({see: 'see', you: 'you'});

  equal(formatted, 'Now I see you');
});