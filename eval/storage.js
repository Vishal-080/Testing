function convert(amount,output){
    if (output === "kb"){
        let value = amount/1000;
        value.toFixed(3);
        return value+" "+ "mb";
    }
    else if (output === "mb"){
        let value = amount/1000;
        value.toFixed(3);
        return value+" "+"gb";
    }
    else if (output === "gb"){
        let value = amount/1000;
        value.toFixed(3);
        return value+" "+"tb";
    }
}

module.exports = convert;