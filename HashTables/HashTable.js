class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value){
        var keyIndex = this._hash(key);
        if(this.keyMap[keyIndex]){
            this.keyMap[keyIndex].push([key, value]);
        }else{
            this.keyMap[keyIndex] = [[key,value]]
        }
        return this;
    }
    get(key){
        var keyIndex = this._hash(key);
        var arr = this.keyMap[keyIndex];
        for(var j = 0; j < arr.length; j++){
            if(arr[j][0] == key){
                return arr[j][1];
            }
        }
        return undefined;
    }
}

var h = new HashTable(10);

h.set("helo", 10).set("hel", 3).set("jjsf", 4).set("fwfw", 1);

console.log(h.get("jjsf"));