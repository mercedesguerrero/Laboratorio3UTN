window.addEventListener('load', inicializarEventos);

function inicializarEventos()
{
    //aca atrapamos el evento submit que lo lanza el formulario (no el botòn)

    document.forms[0].addEventListener('submit', function(e){
        //e trae informacion acerca del evento
        //preventdefault lo que hace es que no haga lo que hace por defecto, sino que yo me encargo
        console.log(document.forms[0]);
        e.preventDefault();

        var informacion= new Array();

        var txtTitulo= document.getElementById('txtTitulo').value;
        var taDescripcion= document.getElementById('taDescripcion').value;
        var rdoVenta= document.getElementById('rdoVenta');
        var rdoAlquiler= document.getElementById('rdoAlquiler');
        var txtDormitorios= document.getElementById('txtDormitorios').value;
        var txtBaños= document.getElementById('txtBaños').value;
        var txtEstacionamiento= document.getElementById('txtEstacionamiento').value;
        var txtPrecio= document.getElementById('txtPrecio').value;


        informacion.push(txtTitulo);
        informacion.push(taDescripcion);

        if(rdoVenta.checked)
        {
            informacion.push(rdoVenta);
        }

        if(rdoAlquiler.checked)
        {
            informacion.push(rdoAlquiler);
        }

        informacion.push(txtDormitorios);
        informacion.push(txtBaños);
        informacion.push(txtEstacionamiento);
        informacion.push(txtPrecio);


        console.log(txtTitulo);
        console.log(taDescripcion);
        console.log(rdoVenta.checked);
        console.log(rdoAlquiler.checked);
        console.log(txtDormitorios);
        console.log(informacion);

        var anuncios= document.getElementById("cont-anuncios");
        var titulo= document.createElement("h3");






    });
}
