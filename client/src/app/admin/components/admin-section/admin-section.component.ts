import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/home/shared/section';
import { DataService } from 'src/app/home/shared/data.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {
  editSection = false;

  sectionForm = this.fb.group({
    id: [''],
    title: [''],
    description: ['']
  });

  public sections: Section[] = [];

  constructor(public dataService: DataService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.getSections();
  }

    getSections() {
      this.dataService.getSections().subscribe(result => this.sections = result);
    }

    onEditSection(section: Section) {
      this.sectionForm.get('id').setValue(section.id);
      this.sectionForm.get('title').setValue(section.title);
      this.sectionForm.get('description').setValue(section.description);
      this.editSection = true;
    }

    onSubmit() {
      console.log(this.sectionForm.value.id);
      this.dataService.updateSection(this.sectionForm.value, this.sectionForm.value.id).subscribe(result => result);
      window.location.reload();
  }
}
