let memoly;

function append( _v){
    document.querySelector('input').value += _v;
}

function update( _v){
    document.querySelector('input').value = _v;
}

function calc(){
    const v = document.querySelector('input').value;
    memoly = v;
    const f = new Function('return ' + v);
    if(f().toString() === "2525"){
        update('(≧∀≦)');
    } else{
        update(f().toString());
    }
}

function callback(){
    document.querySelector('input').value = memoly;
}