import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import {
//   Gallery,
//   GalleryItem,
//   ImageItem,
//   ThumbnailsPosition,
//   ImageSize,
// } from 'ng-gallery';
// import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PhotosComponent {
  // items: GalleryItem[];

  // imageData = data;

  // constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  // ngOnInit() {
  //   /** Basic Gallery Example */

  //   // Creat gallery items
  //   this.items = this.imageData.map(
  //     (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
  //   );

  //   /** Lightbox Example */

  //   // Get a lightbox gallery ref
  //   const lightboxRef = this.gallery.ref('lightbox');

  //   // Add custom gallery config to the lightbox (optional)
  //   lightboxRef.setConfig({
  //     imageSize: ImageSize.Cover,
  //     thumbPosition: ThumbnailsPosition.Top,
  //   });

  //   // Load items into the lightbox gallery ref
  //   lightboxRef.load(this.items);
  // }
}

const data = [
  {
    srcUrl: 'assets/images/big-lightgallry/01.jpg',
    previewUrl: 'assets/images/big-lightgallry/01.jpg',
  },
  {
    srcUrl: 'assets/images/big-lightgallry/02.jpg',
    previewUrl: 'assets/images/big-lightgallry/02.jpg',
  },
  {
    srcUrl: 'assets/images/big-lightgallry/03.jpg',
    previewUrl: 'assets/images/big-lightgallry/03.jpg',
  },
  {
    srcUrl: 'assets/images/big-lightgallry/04.jpg',
    previewUrl: 'assets/images/big-lightgallry/04.jpg',
  },
  {
    srcUrl: 'assets/images/big-lightgallry/05.jpg',
    previewUrl: 'assets/images/big-lightgallry/05.jpg',
  },
  {
    srcUrl: 'assets/images/big-lightgallry/06.jpg',
    previewUrl: 'assets/images/big-lightgallry/06.jpg',
  },
];
