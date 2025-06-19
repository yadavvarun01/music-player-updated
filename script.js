const songs = [
    {
      name: "Kudmayi",
      link: "https://paglasongs.com/files/download/id/14933",
      artists: "Shahid Mallya",
      image: "https://raw.githubusercontent.com/developergtm24/music-web/main/image%20musuic.jpg"
    },
    {
      name: "Jhol",
      link:"https://paagalworld.com.se/download/39896",
      artists: "Mannu ,Annural Khalid",
      image: "https://paagalworld.com.se/upload_file/1/400x400/thumb_66d9dfa987180.webp"
    },
    { name: "Russian Banda",
      link:"https://paagalworld.com.se/download/41038",
      artists: "Varun Yadav",
      image: "https://paagalworld.com.se/upload_file/2/400x400/thumb_67321206095fe.webp"
    },
    { name: "Hass Hass",
      link: "https://paagalworld.com.se/download/37067?q=320",
      artists: "Diljit Dosanjh , Sia",
      image: "https://paagalworld.com.se/upload_file/1/400x400/thumb_653b51722d7a0.webp"
    },
    { name: "4 5 Pistol",
      link: "https://paagalworld.com.se/download/49852",
      artists: "Masoom Sharma , Swara Verma",
      image: "https://paagalworld.com.se/upload_file/2/400x400/thumb_6827eebe20d1f.webp"
    },
    {
      name:"2 Khatole",
      link:"https://paagalworld.com.se/download/42750?q=320",
      artists:"Masoom Sharma",
      image:"https://paagalworld.com.se/upload_file/2/400x400/thumb_67d8f4de513e8.webp"
    },
    {
      name:"60 mukadame",
      link:"https://paagalworld.com.se/download/42738",
      artists:"Masoom Sharma , Shiva Choudhary",
      image:"https://paagalworld.com.se/upload_file/2/400x400/thumb_67d8f36f8e33e.webp"
    },
    {
      name:"Pistol Bole Gi",
      link:"https://paagalworld.com.se/download/41209",
      artists:"Masoom Sharma",
      image:"https://paagalworld.com.se/upload_file/2/400x400/thumb_675eb289b9fa4.webp"
    },
    {
      name:"Blender (feat. Dev Chouhan,Pooja Saxena)",
      link:"https://paagalworld.com.se/download/41031",
      artists:"Masoom Sharma , Swara Verma ,",
      image:"https://paagalworld.com.se/upload_file/2/400x400/thumb_6732112ae6c13.webp"
    },
    {
      name:"Thaa Ke Le Jaanga",
      link:"https://paagalworld.com.se/download/39756?q=320",
      artists:"Masoom Sharma , Ashu Twinkle",
      image:"https://paagalworld.com.se/upload_file/2/400x400/thumb_6697e1e96b291.webp"
    },
    {
      name:"Laal Pari",
      link:"https://paagalworld.com.se/download/54662",
      artists:"Yo Yo Honey Singh , Simar Kaur , Alfaaz",
      image:"https://paagalworld.com.se/upload_file/963/964/1655/400x400/thumb_68499e6b723ec.webp"
    },
     {
      name:" Dekha Ji Dekha Maine",
      link:"https://pagalnew.com/320-download/50748",
      artists:"Jyoti Nooran",
      image:"https://pagalnew.com/coverimages/dekha-ji-dekha-maine-jyoti-nooran-500-500.jpg"
    },
  ];
  
  var progress = document.querySelector("#progress");
  var song = document.querySelector("#song");
  var playBtn = document.querySelector("#play i");
  var index = 0;
  var img = document.querySelector(".img img");
  
  var title = document.querySelector("#title");
  var thumb = document.querySelector("#thumb");
  var artist = document.querySelector("#musician");
  
  var start = document.querySelector("#start");
  var end = document.querySelector("#end");
  
  song.src = songs[index].link;
  
  title.innerHTML = songs[index].name;
  artist.innerHTML = songs[index].artists;
  thumb.src = songs[index].image;
  
  song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
  
    setInterval(() => {
      var min = Math.floor(song.duration / 60);
      var sec = Math.floor(song.duration % 60);
  
      var curMin = Math.floor(song.currentTime / 60);
      var curSec = Math.floor(song.currentTime % 60);
  
      if (sec < 10) {
        sec = "0" + sec;
      }
      if (curSec < 10) {
        curSec = "0" + curSec;
      }
      if (min < 10) {
        min = "0" + min;
      }
      if (curMin < 10) {
        curMin = "0" + curMin;
      }
  
      end.innerHTML = min + ":" + sec;
      start.innerHTML = curMin + ":" + curSec;
    }, 1000);
  };
  
  function playPause() {
    if (playBtn.classList.contains("bx-pause")) {
      song.pause();
      playBtn.classList.remove("bx-pause");
      playBtn.classList.add("bx-play");
      img.classList.remove("play");
    } else {
      song.play();
      playBtn.classList.remove("bx-play");
      playBtn.classList.add("bx-pause");
      img.classList.add("play");
    }
  }
  
  if (song.play()) {
    setInterval(() => {
      progress.value = song.currentTime;
      if (song.currentTime == song.duration) {
        nextPlay();
      }
    }, 1000);
  }
  
  progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    playBtn.classList.remove("bx-play");
    playBtn.classList.add("bx-pause");
    img.classList.add("play");
  };
  
  function nextPlay() {
    index = index + 1;
    if (index > songs.length) {
      index = 0;
      song.src = songs[index].link;
      title.innerHTML = songs[index].name;
      artist.innerHTML = songs[index].artists;
      thumb.src = songs[index].image;
      song.play();
    } else {
      song.src = songs[index].link;
      title.innerHTML = songs[index].name;
      artist.innerHTML = songs[index].artists;
      thumb.src = songs[index].image;
      song.play();
    }
  }
  
  function prevPlay() {
    index = index - 1;
    if (index < 0) {
      index = songs.length;
      song.src = songs[index].link;
      title.innerHTML = songs[index].name;
      artist.innerHTML = songs[index].artists;
      thumb.src = songs[index].image;
      song.play();
    } else {
      song.src = songs[index].link;
      title.innerHTML = songs[index].name;
      artist.innerHTML = songs[index].artists;
      thumb.src = songs[index].image;
      song.play();
    }
  }
  
  
