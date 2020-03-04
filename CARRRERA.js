var v1=0,v2=0, turno=1, valor=0, valor1=0, temp=0,temp2=0, temp3=0;

do
{
    
    valor=dado();
    valor1=dado();
    

    v1+=hmm(valor);
    v2+=hmm(valor1);

    console.log(v1+"-"+v2)
}while(v1<100&&v2<100)

if(v1>=100&&v2>=100)
    {
       console.log("empate")
    
    }
    else
    {
        if(v2>v1)
        {
            console.log("El ganador es el numero 2");
        }
        else
        {
            console.log("El ganador es el numero 1");
        }
    }

function hmm(valor)
{
    if(valor==6)
    {
        temp=3;
    }
    else
    {
        if(valor==5||valor==4)
        {
            temp=1;
        }
        else
        {
            temp=2;
        }
    }

    return temp;
}
function dado()
{
    var valor=0;
    valor=Math.floor(Math.random()*6)+1;

    return valor;
}
