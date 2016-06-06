

function deepAssign(target, source) {
    if(target===undefined||target===null){
        throw new TypeError('source cannot be null or undefind');}

    var to = Object(target);
    var len = arguments.length;

    for ( var i=1; i<len; i+=1){
        if(arguments[i]===undefined||arguments[i]===null){
            continue;}

        var from=arguments[i];
        var keys=Object.keys(Object(from));

        for(var key=0, lenKeys = keys.length; key < lenKeys; key+=1){
            if(from[keys[key]] instanceof Object){
                if( keys[key] in to){
                    to[keys[key]]=deepAssign(to[keys[key]],from[keys[key]]);}
                else{
                    to[keys[key]]=deepAssign({},from[keys[key]]);}}
            else{
                to[keys[key]]=from[keys[key]];}

        }
    }
    return to
}
