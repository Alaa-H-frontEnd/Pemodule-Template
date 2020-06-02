
function openNav() {

    if(true){
        document.getElementById('open').classList.add('openbtn2');

        document.getElementById('close').classList.add('nav2');
        
    }
    
}

function closeNav() {

    if(true){
        document.getElementById('open').classList.add('openbtn3');

        document.getElementById('close').classList.add('nav3');
    }
  
}



function validation(){

    let x = document.getElementById('n').value;
    let y = document.getElementById('e').value;

    if(x == '' && y == ''){
         document.getElementById('v2').innerHTML = 'Please enter your data!';
         document.getElementById('n').classList.add('validation-border');
         document.getElementById('e').classList.add('validation-border');
    }else if(x == ''){
        document.getElementById('v1').innerHTML = 'Please enter your name!';
        document.getElementById('e').classList.remove('validation-border');
        document.getElementById('n').classList.add('validation-border');
        
    }else if(y == ''){
        document.getElementById('v3').innerHTML = 'Please enter your E-mail!';
        document.getElementById('e').classList.add('validation-border');
        document.getElementById('n').classList.remove('validation-border');
    }else{
        document.getElementById('e').classList.remove('validation-border');
        document.getElementById('n').classList.remove('validation-border');
        document.getElementById('v3').innerHTML = '';
        document.getElementById('v2').innerHTML = '';
        document.getElementById('v1').innerHTML = '';


    }
}


function validation2(){
    let x = document.getElementById('e2').value;

    if(x == ''){
        document.getElementById('_v').innerHTML = 'Please enter your E-mail!';
        document.getElementById('e2').classList.add('border-validation');
    }else{
        document.getElementById('_v').innerHTML = '';
        document.getElementById('e2').classList.remove('border-validation');
    }
}