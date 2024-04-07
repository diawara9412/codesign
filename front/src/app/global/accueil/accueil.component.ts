import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';


import { MessageService } from 'primeng/api';
import { Router, RouterLink } from '@angular/router';

import { ServiceService } from '../../service.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, RouterLink,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule, NgxPaginationModule],
  providers: [MessageService],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
  @ViewChild('closeButton') closeButton!: ElementRef;
  listTache: any
  formgroup: any;
  formgroupUpdate: any
  submitted: boolean = false;
  tacheById: any


  p: number = 1;
  constructor(private router: Router, private service: ServiceService, public formBuilder: FormBuilder, private toastr: ToastrService, private renderer: Renderer2) { }

  ngOnInit() {
    // this.productService.getProducts().then(data => this.products = data);
    this.AllTache()

    this.formgroup = this.formBuilder.group({

      titre: ['', [Validators.required,]],

    },);
    this.formgroupUpdate = this.formBuilder.group({

      titre: ['', [Validators.required,]],
      statut: ['', [Validators.required,]],

    },);
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  navigateToPage(url: string) {
    this.router.navigate([url]);
  }

  AllTache() {
    this.service.getTache().subscribe({
      next: (data) => {
        this.listTache = data

        console.log(this.listTache);

      }
    })
  }

  tacheBy(id: number) {
    this.service.tacheById(id).subscribe((data) => {
      this.tacheById = data
      console.log(this.tacheById)
    })
  }
  updateTache() {
    this.service.updateTache(this.tacheById).subscribe((data) => {
      console.log("bien")
      this.service.showSuccess("Modification effectuer avec succès")
      
        location.replace("/global")
  

    }, err => {
      this.service.showError("Erreur")
    })

  }


  get registerFormControl() {
    return this.formgroup.controls;
  }

  ajouterTache(fg: FormGroup) {

    this.submitted = true;

    console.log(this.formgroup)

    console.log(fg.value)
    this.service.addTache(fg.value).subscribe((data) => {
      if (data) {
        console.log("bien")
        location.replace("/global")
        
        
        

      } else {
        this.service.showError("Erreur d'ajout")

      }
    })
  }
  deleteTache(id:number){
    this.service.deleteTache(id).subscribe((data)=>{
      this.service.showSuccess("Supression effectuer avec succès")
      this.ngOnInit()
    })
  }
}
