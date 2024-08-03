

function getUserID(headers){

    return headers['authorization'].split(' ')[1] ? headers['authorization'].split(' ')[1] : null;
}


module.exports =getUserID;