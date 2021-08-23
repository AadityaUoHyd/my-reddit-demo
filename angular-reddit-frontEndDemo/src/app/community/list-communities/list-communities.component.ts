import { Component, OnInit } from '@angular/core';
import { CommunityModel } from '../community-response';
import { CommunityService } from '../community.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-communities',
  templateUrl: './list-communities.component.html',
  styleUrls: ['./list-communities.component.css']
})
export class ListCommunitiesComponent implements OnInit {

  communities: Array<CommunityModel>;
  constructor(private communityService: CommunityService) { }

  ngOnInit() {
    this.communityService.getAllCommunities().subscribe(data => {
      this.communities = data;
    }, error => {
      throwError(error);
    })
  }
}