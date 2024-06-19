const songs = [
    {
      name: "Kudmayi",
      link: "https://paglasongs.com/files/download/id/14933",
      artists: "Shahid Mallya",
      image: "https://raw.githubusercontent.com/developergtm24/music-web/main/image%20musuic.jpg"
    },
    {
      name: "Tum Se",
      link: "https://pagalsongs.com.in/siteuploads/files/sfd3/1494/Tum%20Se-(PagalSongs.Com.IN).mp3",
      artists: "Sachin-Jigar",
      image: "https://raw.githubusercontent.com/developergtm24/music-web/main/image%20musuic.jpg"
    },
    { name: "Kahani Meri",
      link: "https://pagalsongs.com.in/files/download/id/11608",
      artists: "Varun Yadav",
      image: "https://www.pagalworld.com.so/uploads/thumb/sft41/20202_4.jpg"
    },
    { name: "Sajni Re",
      link: "https://www.pagalworld.com.so/files/download/type/320/id/20202",
      artists: "Arijit Singh",
      image: "https://www.pagalworld.com.so/uploads/thumb/sft41/20202_4.jpg"
    },
    { name: "Matak Chalaungi",
      link: "https://www.pagalworld.com.tw/files/download/type/320/id/9100",
      artists: "Raj Mawar, Manisha Sharma",
      image: "https://www.pagalworld.com.tw/siteuploads/thumb/sft19/9100_4.jpg"
    },
    {
      name:"System Pe System",
      link:"https://www.pagalworld.com.tw/files/download/type/320/id/8631",
      artists:"R Mann",
      image:"https://www.pagalworld.com.tw/siteuploads/thumb/sft18/8631_4.jpg"
    },
    {
      name:"Ego Baat Batai",
      link:"https://www.pagalworld.com.tw/files/download/type/320/id/9592",
      artists:"Keshari Lal Yadav",
      image:"https://www.pagalworld.com.tw/siteuploads/thumb/sft20/9592_4.jpg"
    },
    {
      name:"Pandey Ji Ka Beta Hu",
      link:"https://pagalsongs.com.in/files/download/id/10064",
      artists:"Pradeep Pandey",
      image:"https://pagalsongs.com.in/siteuploads/thumb/sft21/10064_7.webp"
    },
    {
      name:"Herione",
      link:"https://www.pagalworld.com.sb/files/download/type/320/id/65221",
      artists:"Neelkamal Singh",
      image:"	https://www.pagalworld.com.sb/siteuploads/thumb/sft131/65221_4.jpg"
    },
    {
      name:"Paon Ki Jutti",
      link:"https://www.pagalworld.com.sb/files/download/type/320/id/71059",
      artists:"Jyoti Nooran",
      image:"https://www.pagalworld.com.sb/siteuploads/thumb/sft143/71059_4.jpg"
    },
    {
      name:"Seenu Junnu",
      link:"https://www.pagalworld.com.sb/files/download/type/320/id/70680",
      artists:"Developer Song",
      image:"https://www.pagalworld.com.sb/siteuploads/thumb/sft142/70680_4.jpg"
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
  