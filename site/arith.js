
function show_hide()
{
    var click=document.getElementById('dropdown-content');
    if(click.style.display=="none")
    {
        click.style.display="block";
    }else{
        click.style.display="none";
    }
}

function add()
{
    var n1=parseInt(document.getElementById('v1').value);
    var n2=parseInt(document.getElementById('v2').value);
    var result = document.getElementById('result').innerHTML= "Result is "+(n1+n2);
}

function mul()
{
    var n1=parseInt(document.getElementById('v1').value);
    var n2=parseInt(document.getElementById('v2').value);
    var result = document.getElementById('result').innerHTML="Result is "+(n1*n2);
}

function sub()
{
    var n1=parseInt(document.getElementById('v1').value);
    var n2=parseInt(document.getElementById('v2').value);
    var result = document.getElementById('result').innerHTML="Result is "+(n1-n2);
}

function div()
{
    var n1=parseInt(document.getElementById('v1').value);
    var n2=parseInt(document.getElementById('v2').value);
    var result = document.getElementById('result').innerHTML= "Result is "+(n1/n2);
}

function mod()
{
    var n1=parseInt(document.getElementById('v1').value);
    var n2=parseInt(document.getElementById('v2').value);
    var result = document.getElementById('result').innerHTML= "Result is "+(n1%n2);
}

function allreset()
{
    document.getElementById('v1').value = "";
    document.getElementById('v2').value = "";

    document.getElementById('result').innerHTML= "";
}