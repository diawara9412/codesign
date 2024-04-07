import './Accueil.css'
import Header from './Header';
import Sidbar from './Sidbar';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {toast} from 'react-toastify';


function Accueil() {

  const [titre,setTitre]= useState("");
 
 
  const navigate = useNavigate();
  let loginData;
  const data1={
    titre:titre,

   
  }

  function submit(e){
    e.preventDefault();
  
    
    axios.post("http://localhost:8080/api/AddTache", data1).then( (res)=>{
        if (res){
            
            console.log(res.data)
          
            presentToast();

           setTitre("");
           
           
            
        }
    },err => {
      // this.errorMessage = err.error.message
      // toast.error(err.data.message)
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      })
    }
    )
}
function presentToast(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Tache enregistrer avec succès',
    showConfirmButton: false,
    timer: 3000
  })
}

function presentToast1(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Tache Supprimer avec succès',
    showConfirmButton: false,
    timer: 2000
  })
}
const getColorForStatut = (statut) => {
  if (statut === 'Faire') {
    return 'blue';
  } else if (statut === 'Terminer') {
    return 'green';
  } else {
    return 'black'; // Couleur par défaut si le statut n'est ni 'Faire' ni 'Terminer'
  }
}

  const [tache, setTache]= useState([]);  
  const loadagent=()=>{

  
    axios.get("http://localhost:8080/api/AllTache").then((res)=>{
         setTache(res.data.reverse()) 
         
      })
     }
    //  if(localStorage["isLogin"]){
    //   loginData=JSON.parse(localStorage["isLogin"]);
      
    // }
  useEffect(()=>{
   loadagent();
   
  },[tache])

  function supprimer(id){
     axios.delete(`http://localhost:8080/api/deleteTache/${id}`).then((result)=>{
      presentToast1();
     
     })
  }
  return (
    <div>
      <Sidbar />
      <div class="all-content-wrapper">
        <Header />
        <div class="breadcome-area">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="breadcome-list">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <div class="breadcomb-wp">
											<div class="breadcomb-icon">
												<i class="icon nalika-home"></i>
											</div>
											<div class="breadcomb-ctn">
												<h2>Liste Des Taches</h2>
												
											</div>
										</div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="product-status mg-b-30">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="product-status-wrap">
                  <h4>Liste des Client</h4>
                  <div className="add-product">
                    <a data-toggle="modal" data-target="#noticeModal">Ajouter</a>
                  </div>
                  <table>
                    <tbody><tr>
                    
                      <th>Titre</th>

                      <th></th>
                      <th>Statut</th>
                      <th></th>
                      
                      <th>Actions</th>
                    </tr>
                    {
                       tache.map((tach)=>(
                      <tr key = {tach.id}>
                        
                        <td>
                        {tach.titre}
                        </td>

                        <td>
                        
                        </td>
                        
                        <td style={{ color: getColorForStatut(tach.statut) }}>{tach.statut}</td>
                       <td>
                        
                        </td>
                        <td>
                        <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"> <Link to={`/EditClient/${tach.id}`} data-toggle="tooltip" title="Edit" className="pd-setting-ed"><i className="fa fa-pencil-square-o" aria-hidden="true"  /></Link></button>
                          <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true" onClick={()=>supprimer(tach.id)} /></button>
                        </td>
                      </tr>
                       ))}



                    </tbody></table>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="modal fade" id="noticeModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-notice">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel">Ajouter Tache</h5>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                <i className="material-icons">fermer</i>
              </button>
            </div>
            <div className="modal-body">
            <div className="row">
            <div className="review-content-section">
                      <div className="input-group mg-b-pro-edt">
                        <span className="input-group-addon"><i className="icon nalika-user" aria-hidden="true" /></span>
                        <input type="text" className="form-control" placeholder="Titre" value={titre} onChange={(e)=>setTitre(e.target.value)} />
                      </div>
                      
                     
                      
                    </div>
                 
                 
                </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="text-center custom-pro-edt-ds">
                    <button type="button" className="btn btn-ctl-bt waves-effect waves-light m-r-10" onClick={submit}>Save
                    </button>
                    <button type="button" className="btn btn-ctl-bt waves-effect waves-light"  data-dismiss="modal">Discard
                    </button>
                  </div>
                </div>
              </div>

            </div>
            <div className="modal-footer justify-content-center">

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Accueil;