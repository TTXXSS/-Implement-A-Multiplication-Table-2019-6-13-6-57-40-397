function isStartLessThanEnd (start, end) {
    return start<end;
}

function isOutOfRange (start,end) {
    var isOutOfRange;
    if(start>0&&end<1001&&start<end)
    isOutOfRange=true;
    else 
    isOutOfRange=false;
    return isOutOfRange;
}
function createMultiplyTable (start,end,isStartLessThanEnd,isOutOfRange){
    var multiplyTable="";
    if(isStartLessThanEnd&&isOutOfRange){
        for(let i=start;i<=end;i++)
        for(let j=start;j<=i;j++){
            if(j===i){
            multiplyTable+=(j+"*"+i+"="+(i*j)+"\n");
            }
            else
            multiplyTable+=(j+"*"+i+"="+(i*j)+" ");
        }
        return multiplyTable;
    }
    return null;
  
  
}
module.exports = {isStartLessThanEnd,isOutOfRange,createMultiplyTable}