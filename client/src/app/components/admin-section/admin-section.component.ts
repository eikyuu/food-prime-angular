import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/shared/models/section';
import { SectionService } from 'src/app/shared/services/section.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {

  sectionForm = this.fb.group({
    id: [''],
    title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(1000)]]
  });

  public sections: Section[] = [];

  constructor(public sectionService: SectionService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.getSections();
  }

    getSections() {
      this.sectionService.getSections().subscribe(result => this.sections = result);
    }

    onEditSection(section: Section) {
      this.sectionForm.get('id').setValue(section.id);
      this.sectionForm.get('title').setValue(section.title);
      this.sectionForm.get('description').setValue(section.description);
    }

    onSubmit() {
      console.log(this.sectionForm.value.id);
      this.sectionService.updateSection(this.sectionForm.value, this.sectionForm.value.id).subscribe(result => result);
      this.sectionService.getSections().subscribe(result => this.sections = result);
  }
}
