import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formEdit = this.fb.group({
    url: ['', Validators.required],
    tag: [''],
    descriptions: ['', Validators.required]
  });
  id = +this.routeMap.snapshot.paramMap.get('id');

  constructor(private bookServe: ServiceService,
              private routeMap: ActivatedRoute,
              private fb: FormBuilder,
              private route: Router) { }

  ngOnInit() {
    this.bookServe.findById(this.id).subscribe(data => {
      this.formEdit.patchValue({
        url: [data.url],
        tag: [data.tag],
        descriptions: [data.descriptions]
      });
    });
  }
  update() {
    const id = +this.routeMap.snapshot.paramMap.get('id');
    const bookData = this.formEdit.value;
    this.bookServe.update(id, bookData).subscribe(() => {
      this.route.navigate(['/awesome']);
    });
  }
  delete() {
    if (confirm('Are you delete?')) {
      this.bookServe.delete(this.id).subscribe(() => {
        this.route.navigate(['/awesome']);
      });
    }
  }
  get url() {
    return this.formEdit.get('url');
  }
  get tag() {
    return this.formEdit.get('tag');
  }
  get descriptions() {
    return this.formEdit.get('descriptions');
  }

}
