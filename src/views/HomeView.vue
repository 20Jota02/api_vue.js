<template>
   <div class="row">
    <div class="col-lg-8 offset-lg-2">
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead>

                 <tr>

                    <th>Id</th>
                    <th>Profile</th>
                    <th>User-nick</th>
                    <th>Password</th>
                    <th>Name</th>
                    <th>Last-Name</th>
                    <th>Phone-number</th>
                    <th>Email</th>
                    <th>Identification</th> 
                  </tr> 
                </thead>

                <tbody class="table-group-divider" id="contenido">
                    <tr v-for="user in users" >
                        <td>{{ user.id_user }}</td>
                        <td>{{ user.profile_id }}</td>
                        <td>{{ user.user_nick }}</td>
                        <td>**********</td>
                        <td>{{ user.usernames }}</td>
                        <td>{{ user.user_last_names }}</td>
                        <td>{{ user.phone_number}}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.identification}}</td>
                      
<td>
    <router-link :to="{path:'edit/'+user.id_user}" class="btn btn-warning">
<i class="fa-solid fa-edit"></i>
    </router-link> &nbsp;
    <button class="btn btn-danger">
        <i class="fa-solid fa-trash"></i>
    </button>
</td>
                    </tr>
                </tbody>
           
            </table>
        </div>
    </div>
   </div>



</template>

<script> 
import axios from 'axios';
export default{
    data(){
        return{users:null}
    },

    mounted(){
        this.getUsers();
    },

    methods:{
        getUsers(){
            axios.get('http://localhost/back_construyendo_pacifico/public/api/listar_usuarios').then(
                response =>(
                    this.users = response.data.results
                )
            );         
        },
        eliminar(id,nombre){
            
        }
    }


}
</script>
