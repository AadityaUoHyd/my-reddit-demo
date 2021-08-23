import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommunityModel } from '../community-response';
import { Router } from '@angular/router';
import { CommunityService } from '../community.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {
  createCommunityForm: FormGroup;
  communityModel: CommunityModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private communityService: CommunityService) {
    this.createCommunityForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.communityModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createCommunity() {
    this.communityModel.name = this.createCommunityForm.get('title')
    .value;
    this.communityModel.description = this.createCommunityForm.get('description')
    .value;
    this.communityService.createCommunity(this.communityModel).subscribe(data => {
      this.router.navigateByUrl('/list-communities');
    }, error => {
      throwError(error);
    })
  }
}