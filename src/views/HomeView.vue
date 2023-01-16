<template>
    <!-- <div class="row">
     <div class="col-lg-8 offset-lg-1 ">
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
     <button class="btn btn-danger" v-on:click="eliminar(user.id_user,user.usernames)">
         <i class="fa-solid fa-trash"></i>
     </button>
 </td>
                     </tr>
                 </tbody>
            
             </table>
         </div>
     </div>
     
    </div> -->

    <div class="container">
     <div class="row">   <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
 <div class="conten">
    <div class="centerelem">
    <button type="button" class="button">
         <span class="button__text">add</span>
         <span class="button__icon">
             <ion-icon name="add-outline"></ion-icon>
         </span>
     </button>
     <div class="centerelem1">
     <div id='search-box'>
<form action='/search' id='search-form' method='get' target='_top'>
<input id='search-text' name='q' placeholder='Escribe lo que buscas' type='text'/>
<button id='search-button' type='submit'><span>Busca!</span></button>
</form>
</div>
     </div>
    </div>
 </div>
     <table class="table table-striped">
         <thead>
           <tr>
               
             </tr>
           </thead>
           <thead>
 
 <tr>
 
    <th>forumn</th>
    <th>descripcion</th>
    <th>acciones</th>
   
  </tr> 
 </thead>
           <tbody>
            <tr>
             <td>vue<br/><a href="https://aws.passkey.com/g/42238120" target="_blank">Gaylord National Hotel Convention Center</a><br/><i class="fa fa-map-marker"></i> 201 Waterfront Street<br/>National Harbor, MD 20745</td>
             <td>July 7 - 9, 2015</td>
             <td><button class="btn btn-primary">chat</button></td>
           </tr>
           <tr class="active">    
             <td><strong>juan </strong><br/><a href="https://aws.passkey.com/g/42238120" target="_blank">Gaylord National Hotel Convention Center</a><br/><i class="fa fa-map-marker"></i> 201 Waterfront Street<br/>National Harbor, MD 20745</td>
             <td><strong>AFTR Date & Registration</strong><br/>July 10, 2015<br/><br/><a class="btn btn-hot btn-block " href="/course/2015-Annual-Federal-Tax-Refresher-Course---National-Harbor%2C-MD" target="_blank"><i class="fa fa-hand-o-right"></i> Register Here</a></td>
             <td><button class="btn btn-primary">chat</button></td>
           </tr>           
           <!--Denbver-->
           <tr>
             <td>Denver , CO <br/><a href="https://aws.passkey.com/g/34249128" target="_blank">Hyatt Regency Denver at Colorado Convention Center</a><br/><i class="fa fa-map-marker"></i> 650 15th Street<br/>Denver, CO 80202</td>
             <td>July 28 - 30, 2015 </td>
             <td><button class="btn btn-primary">chat</button></td>
           </tr>
          
         </tbody>
       </table>
      </div>
 
     </div>
 
    </div>
 
 
 
 
 
 </template>
 
 <script> 
 import {confirmar} from '../funciones';
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
         eliminar(id,Name){
             confirmar(id,Name);
         }
     }
 
 
 }
 </script>
 <style>
 .boton1{
     background-color: red;
 }
 .boton1 img{
     height: 20px;
 }
 
 .conten{ position: relative;
    white-space: 100%;
    height: 90px;
    border-radius: 30px;
    background: #ffffff;
    box-shadow:inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);;
    top: -60px;
 
 }
 .fondo{
    width:100%;
    height: 90px;
    background: #0DCAF0;
    margin: 0px;
 }
 .centerelem{
   
    background: #333;
 padding-top: 18px;
 margin-left: 15px;

  
 }
 
 .button {
     display: flex;
     height: 50px;
     padding: 0;
     background: #009578;
     border: none;
     outline: none;
     border-radius: 5px;
     overflow: hidden;
     font-family: "Quicksand", sans-serif;
     font-size: 16px;
     font-weight: 500;
     cursor: pointer;
 }
 
 .button:hover {
     background: #008168;
 }
 
 .button:active {
     background: #006e58;
 }
 
 .button__text,
 .button__icon {
     display: inline-flex;
     align-items: center;
     padding: 0 24px;
     color: #fff;
     height: 100%;
 }
 
 .button__icon {
     font-size: 1.5em;
     background: rgba(0, 0, 0, 0.08);
 }

 
#search-box {
position: relative;
width: 80%;
margin: 0;

}
.centerelem1{
    background: #006e58;
}



#search-box {
position: relative;
width: 50%;
margin: 0;

}
#search-form {
height: 32px;
border: 1px solid #cbf3ee;
-webkit-border-radius: 15px;
-moz-border-radius: 15px;
border-radius: 15px;
background-color: #fff;
overflow: hidden;

}
#search-text {
font-size: 14px;
color: #ddd;
border-width: 0;
background: transparent;
justify-items: end;
}

#search-box input[type="text"] {
width: 90%;
padding: 8px 0 12px 1em;
color: #333;
outline: none;
}
#search-button {
position: absolute;
top: 0;
right: 0;
height: 34px;
width: 80px;
font-size: 14px;
color: #656;
text-align: center;
line-height: 4px;
border-width: 0;
background-color: #cbf3ee;
-webkit-border-radius: 0px 15px 15px;
-moz-border-radius: 0px 15px 15px 15px;
border-radius: 15px 15px 15px 15px;
cursor: pointer;
}

 </style>
 