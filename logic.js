const fs = require('fs');

const calc = {
    kb: function(size) {
        return (size / 1000);
    },
    
    mb: function(size) {
        return (size / 1000000);
    },
    
    gb: function(size) {
        return (size/ 1000000000);
    }
}

module.exports = function(path, types) {
    const fileSize = fs.statSync(path).size;
    let res = {size: {bytes: fileSize}};
    types.forEach( type => {
        res.size[type] = calc[type](fileSize)
    })
    
    return res;
}