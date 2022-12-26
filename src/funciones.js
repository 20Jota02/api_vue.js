import Swal from "sweetalert2";
import axios from "axios";

export function show_alerta(message,icon,focus=''){
    if (focus !='') {
        document.getElementById(focus).focus();
    }
    Swal.fire({
        title:message,
        icon:icon,
        customClass: {confirmButton: 'btn btn-primary', popup:'animated zoomIn'},
        buttonsStyling:false
    });
}

export function confirmar(id,name){
    var url = 'http://localhost/back_construyendo_pacifico/public/api/modificar_usuario/'+id;
    const swalWithBootstrapButtons = Swal.mixin({
        customClass:{confirmButton: 'btn btn-success me-3',cancelButton:'btn btn-danger'},
        buttonsStyling:false
    });
    swalWithBootstrapButtons.fire({
        title: 'Seguro de eliminar el usuario '+name,
        text: 'Se perderá lainformación del usurio',
        icon: 'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
    }).then((ressult) => {
        if (ressult.isConfirmed) {
            
        }else{
             
        }
    })
}