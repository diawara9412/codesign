
import Sidbar from './Sidbar';
import Header from './Header';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function EditClient(){

  const [titre,setTitre]= useState("");
  const [statut,setStatut]= useState("");

  
  const navigate = useNavigate();
  const {id} = useParams();
   
  useEffect(()=>{
    axios.get(`http://localhost:8080/api/TacheById/${id}`).then((res)=>{
       setTitre(res.data.titre)
       setStatut(res.data.statut)
      
       
    })
   },[])

  const data={
    id:id,
    titre:titre,
    statut:statut,
  
   
  }
  function presentToast1(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tache Modifier avec succès',
      showConfirmButton: false,
      timer: 2000
    })
  }

  function update(e){
    e.preventDefault();
    axios.put(`http://localhost:8080/api/UpdateTache`,data).then((res)=>{
      if(res){
        navigate("/")
        presentToast1();
      }
    })
 }
    return (
         <div>
      <Sidbar/>
<div class="all-content-wrapper">
  <Header/>
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
												<h2>Modifier Tache</h2>
												<p><span class="bread-ntd"></span></p>
											</div>
										</div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <div class="breadcomb-report">
											<button data-toggle="tooltip" data-placement="left" title="Download Report" class="btn"><i class="icon nalika-download"></i></button>
										</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
  
    {/* Single pro tab review Start*/}
    <div className="single-product-tab-area mg-b-30">
  {/* Single pro tab review Start*/}
  <div className="single-pro-review-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="review-tab-pro-inner">
            
            <div id="myTabContent" className="tab-content custom-product-edit">
              <div className="product-tab-list tab-pane fade active in" id="description">
                <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="review-content-section">
                      <div className="input-group mg-b-pro-edt">
                        <span className="input-group-addon"><i className="icon nalika-user" aria-hidden="true" /></span>
                        <input type="text" className="form-control"  value={titre} onChange={(e)=>setTitre(e.target.value)} />
                      </div>
                 
                     
                      
                      
                    </div>
                    
                  </div> 
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <select name="select" className="form-control" value={statut} onChange={(e)=>setStatut(e.target.value)}>
                          
                          <option value="Faire">Faire</option>
                          <option value="Terminer">Terminer</option>
                          
                        </select>
                      
                  </div>
               
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="text-center custom-pro-edt-ds">
                      <button type="button" className="btn btn-ctl-bt waves-effect waves-light m-r-10" onClick={update}>Save
                      </button>
                      <button type="button" className="btn btn-ctl-bt waves-effect waves-light" data-toggle="modal" data-target="#noticeModal">Discard
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
          
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
{/* <div className="modal fade" id="noticeModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-notice">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="myModalLabel">How Do You Become an Affiliate?</h5>
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
          <i className="material-icons">close</i>
        </button>
      </div>
      <div className="modal-body">
      <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="review-content-section">
                      <div className="input-group mg-b-pro-edt">
                        <span className="input-group-addon"><i className="icon nalika-user" aria-hidden="true" /></span>
                        <input type="text" className="form-control" placeholder="First Name" />
                      </div>
                      <div className="input-group mg-b-pro-edt">
                        <span className="input-group-addon"><i className="icon nalika-edit" aria-hidden="true" /></span>
                        <input type="text" className="form-control" placeholder="Product Title" />
                      </div>
                      <div className="input-group mg-b-pro-edt">
                        <span className="input-group-addon"><i className="fa fa-usd" aria-hidden="true" /></span>
                        <input type="text" className="form-control" placeholder="Regular Price" />
                      </div>
                      <div className="input-group mg-b-pro-edt">
                        <span className="input-group-addon"><i className="icon nalika-new-file" aria-hidden="true" /></span>
                        <input type="text" className="form-control" placeholder="Tax" />
                      </div>
                      <div className="input-group mg-b-pro-edt">
                        <span className="input-group-addon"><i className="icon nalika-favorites" aria-hidden="true" /></span>
                        <input type="text" className="form-control" placeholder="Quantity" />
                      </div>
                    </div>
                    
                  </div> 
                 
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="review-content-section">
                      <div className="input-group mg-b-pro-edt">
                        <span className="input-group-addon"><i className="icon nalika-user" aria-hidden="true" /></span>
                        <input type="text" className="form-control" placeholder="Last Name" />
                      </div>
                      <div className="input-group mg-b-pro-edt">
                        <span className="input-group-addon"><i className="icon nalika-favorites-button" aria-hidden="true" /></span>
                        <input type="text" className="form-control" placeholder="Product Description" />
                      </div>
                      <div className="input-group mg-b-pro-edt">
                        <span className="input-group-addon"><i className="fa fa-usd" aria-hidden="true" /></span>
                        <input type="text" className="form-control" placeholder="Sale Price" />
                      </div>
                      <div className="input-group mg-b-pro-edt">
                        <span className="input-group-addon"><i className="icon nalika-like" aria-hidden="true" /></span>
                        <input type="text" className="form-control" placeholder="Category" />
                      </div>
                      <select name="select" className="form-control pro-edt-select form-control-primary">
                        <option value="opt1">Select One Value Only</option>
                        <option value="opt2">2</option>
                        <option value="opt3">3</option>
                        <option value="opt4">4</option>
                        <option value="opt5">5</option>
                        <option value="opt6">6</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="text-center custom-pro-edt-ds">
                      <button type="button" className="btn btn-ctl-bt waves-effect waves-light m-r-10">Save
                      </button>
                      <button type="button" className="btn btn-ctl-bt waves-effect waves-light">Discard
                      </button>
                    </div>
                  </div>
                </div>
       
      </div>
      <div className="modal-footer justify-content-center">
        
      </div>
    </div>
  </div>
</div> */}

</div>
    );
};

export default EditClient;