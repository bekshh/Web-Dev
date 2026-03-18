import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {

  albums: any[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {

    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
    });

  }
  deleteAlbum(id: number) {

    this.albumService.deleteAlbum(id).subscribe(() => {
  
      this.albums = this.albums.filter(album => album.id !== id);
  
    });
  
  }

}