var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { name: 'Blue', length: '4:26' },
        { name: 'Green', length: '3:14' },
        { name: 'Red', length: '5:01' },
        { name: 'Pink', length: '3:21'},
        { name: 'Magenta', length: '2:15'}
    ]
};

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { name: 'Hello, Operator?', length: '1:01' },
        { name: 'Ring, ring, ring', length: '5:01' },
        { name: 'Fits in your pocket', length: '3:21'},
        { name: 'Can you hear me now?', length: '3:14' },
        { name: 'Wrong phone number', length: '2:15'}
    ]
};


var albumAnjunaBeats = {
  title: 'AnjunaBeats WorldWide 06',
  artist: 'Jaosn Ross',
  label: 'AnjunaBeats',
  year: '2017',
  albumArtUrl: 'assets/images/album_covers/21.png',
  songs: [
      { name: 'Begin Again', length: '1:31' },
      { name: 'You\'ll know', length: '5:20' },
      { name: 'Legacy', length: '5:05'},
      { name: 'SOS', length: '5:34' },
      { name: 'Universal', length: '4:47'}
  ]
};


var createSongRow = function(songNumber, songName, songLength){
  var template =
    '<tr class="album-view-song-item">'
      + '<td class = "song-item-number" data-song-number="' +  songNumber + '">' +  songNumber + '</td>'
      + '<td class="song-item-title">' + songName + '</td>'
      + '<td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

      var $row = $(template);

      var clickHandler = function() {
        // clickHandler logic
      };

      var onHover = function(event) {
        // Placeholder for function logic
      };

      var offHover = function(event) {
        // Placeholder for function logic
      };

      $row.find('.song-item-number').click(clickHandler);

      $row.hover(onHover, offHover);

      return $row;
};

// var albumTitle = document.getElementsByClassName('album-view-title')[0];
// var albumArtist = document.getElementsByClassName('album-view-artist')[0];
// var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
// var albumImage = document.getElementsByClassName('album-cover-art')[0];
// var albumSongList = document.getElementsByClassName('album-view-song-list')[0];


var setCurrentAlbum = function(album)  {

  var $albumTitle = $('.album-view-title');
  var $albumArtist = $('.album-view-artist');
  var $albumReleaseInfo = $('.album-view-release-info');
  var $albumImage = $('.album-cover-art');
  var $albumSongList = $('.album-view-song-list');

  $albumTitle.text(album.title);
  $albumArtist.text(album.artist);
  $albumReleaseInfo.text(album.year + ' ' + album.lable);
  $albumImage.attr('src', album.albumArtUrl);


  $albumSongList.empty();


  for(var i=0; i<album.songs.length; i++){
      var $newRow = createSongRow(i+1, album.songs[i].name, album.songs[i].length);
      $albumSongList.append($newRow);
  }
};


// Album Button Templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate= '<a class="album-song-button"><span class="ion-pause"></span></a>';

// Store state of playing songs
var currentlyPlayingSong = null;


$(document).ready(function() {
  setCurrentAlbum(albumPicasso);

  // var albums = [albumPicasso, albumMarconi, albumAnjunaBeats];
  // var index = 1;
  // albumImage.addEventListener("click", function(event){
  //   setCurrentAlbum(albums[index]);
  //   index++;
  //   if(index == albums.length){
  //     index = 0;
  //   }
  // });
});
