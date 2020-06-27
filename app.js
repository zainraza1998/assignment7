

function text(num)
{
    var txt = document.getElementById("txt");
    txt.value += num; 
}


function clear_result()
{
    var txt = document.getElementById("txt");
    txt.value ="";

}


function result()
{
    var txt = document.getElementById("txt");
    txt.value = eval(txt.value);
}