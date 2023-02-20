import { Component } from '@angular/core';
import { PhotoService } from './photo.service';
import { PhotoModel } from './photo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-ex';
  loading = true;
  photos?: PhotoModel[];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetchData()
  }

  async fetchData() {
    this.loading = true
    const res = await this.photoService.getPhoto()
    this.photos = res
    this.loading = false
  }
}
