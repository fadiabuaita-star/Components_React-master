
export function IsNumbericCode(keyCode){
    return (keyCode >= 48 && keyCode <=57);
}
//
export function IsBackspaceCode(keyCode){
    return keyCode===8;
}
//
export function IsDeleteCode(keyCode){
    return keyCode===46;
}