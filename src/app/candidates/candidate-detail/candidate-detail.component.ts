import { Component, OnInit, Input, OnChanges, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CandidateService } from '../../services/index';
import { ICandidateResource, ICandidate, IEventResource, status, gender, type } from '../../models/models';
import { TOASTR_TOKEN, Toastr } from "../../common/index";

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {
  candidateStatus = status;
  candidateGender = gender;
  candidateType = type

  candidate: ICandidate;
  events: IEventResource[];
  candidateForm: FormGroup

  numberOfEvents: number;

  isEdit: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private candidateService: CandidateService,
    private fb: FormBuilder,
    @Inject(TOASTR_TOKEN) private _toastr: Toastr) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.candidateService.getCandidateById(params['id']))
      .subscribe((data) => {
        this.candidate = data;
      })
    this.route.params
      .switchMap((params: Params) => this.candidateService.getEventsOfCandidate(params['id']))
      .subscribe((data) => {
        this.events = data;
        this.numberOfEvents = data.length;
      })

    this.candidateForm = this.fb.group({
      education: ['', Validators.required],
      interests: ['', Validators.required],
      phone: ['', Validators.required],
      status: ['', Validators.required],
      gender: ['', Validators.required],
      type: ['', Validators.required]
    })
  }



  pullChanges() {
    this.candidateService.getCandidateById(this.candidate.candidateUuid)
      .subscribe((data) => {
        this.candidate = data;
      })
  }

  editOK() {
    this.isEdit = true;
  }

  editCancel() {
    this.isEdit = false;
  }

  onSubmit(candidateForm) {
    
    if (!this.candidateForm.value.gender) {
      this.candidateForm.value.gender = this.candidate.gender
    }
    if (!this.candidateForm.value.status) {
      this.candidateForm.value.status = this.candidate.status
    }
    if (!this.candidateForm.value.type) {
      this.candidateForm.value.type = this.candidate.type
    }
    if (!this.candidateForm.value.phone){
      this.candidateForm.value.phone = this.candidate.phone
    }
    if(!this.candidateForm.value.education){
      this.candidateForm.value.education = this.candidate.education
    }
    if(!this.candidateForm.value.interests){
      this.candidateForm.value.interests = this.candidate.interests
    }

    this.candidateService.updateCandidate(this.candidate.candidateUuid, this.candidateForm.value)
      .subscribe(
      (data) => { this.isEdit = false; },
      (err) => { this.isEdit = true, this._toastr.error('Updating candidate failed', 'Error!')},
      () => { this.pullChanges(), this._toastr.success('Candidate updated', 'Success!') })
  }

  setValues(){
    this.candidateForm.setValue({
      phone: this.candidate.phone,
    })
  }

}
