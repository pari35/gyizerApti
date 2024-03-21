/*
enter array as ex 
enter Number of   chairs required in need
if you need no chairs enter 0
*/



ex = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]]
need = 4

var findachair = function (ex, need) {
    if (need == 0) return 1
    let emptyNeed = []
    let sum = 0
    for (let i = 0; i < ex.length; i++) {
        if (ex[i][1] >= ex[i][0].length) {
            let empty = ex[i][1] - ex[i][0].length
            if (sum <= need) {
                sum += empty
                if(sum <= need){
                    emptyNeed.push(empty)
                }
            }
        }
    }
    let occChair = 0
    for (e in emptyNeed) {
        occChair += emptyNeed[e]
    }
    if (occChair < need) return 0
    return emptyNeed

}
console.log('ccc', findachair(ex, need));
