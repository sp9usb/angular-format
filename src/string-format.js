(function(){

  var isJsonObject = function(params){
    return (   params !== null 
            && params !== undefined 
            && params instanceof Object 
            && Object.keys(params).length > 0
           );
  };

  var isArrayObject = function(params){
    return (   params !== null
            && params !== undefined
            && params instanceof Array
            && params.length > 0
           );
  };

  var formatStringByArray = function(rootObj, params){
    // "alfa {0}"
    var keys = rootObj.match(/(\{[\d]{1,}\}){1}/g);
    for(var key in keys){
      // replace from {0} the "{" and "}" to empty string
      keyValue = key.replace('{', '').replace('}', '');
      rootObj = rootObj.replace(
          '{'+key+'}', 
          params[keyValue]
      );
    }

    return rootObj;
  };

  var formatStringByJson = function(rootObj, params){
    // "alfa {0}"
    var keys = rootObj.match(/(\{[a-zA-Z0-9]{1,}\}){1}/g);
    for(var key in keys){
      // replace from {0} the "{" and "}" to empty string
      keyValue = keys[key].replace('{', '').replace('}', '');
      rootObj = rootObj.replace(
          keys[key], 
          params[keyValue]
      );
    }

    return rootObj;
  };

  String.prototype.format = function(params){ 
    var $rootObj = this; 

    if (params === null || params === undefined){
      return $rootObj;
    } else if (isJsonObject(params)){
      return formatStringByJson($rootObj, params);
    } else if (isArrayObject(params)){
      return formatStringByArray($rootObj, params);
    } else {
      throw 'Invalid params object';
    }
  };

  return {};
})();