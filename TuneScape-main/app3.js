let music= new Audio('audio3/1.mp3');
// music.play();

   const songs=[
          {
            id:"1",
            songName:`52 Bars <br>  <div class="subtitle">Karan Aujla</div>`,
            poster:"img3/1.jpg"
          },
          {
            id:"2",
            songName:`Bille <br>  <div class="subtitle">Khan</div>`,
            poster:"img3/2.jpg"
          }
          ,
          {
            id:"3",
            songName:`Don't Look <br>  <div class="subtitle">Karan Aujla</div>`,
            poster: "img3/3.jpg"
          },
          {
            id:"4",
            songName:`Few Days <br>  <div class="subtitle">Karan Aujla</div>`,
            poster: "img3/4.jpg"
          },
          {
            id:"5",
            songName:`Lamborgini <br>  <div class="subtitle">Khan</div>`,
            poster: "img3/5.jpg"
          },
          {
            id:"6",
            songName:`God Damn <br>  <div class="subtitle">Karan Aujla</div>`,
            poster: "img3/6.jpg"
          },
          {
            id:"7",
            songName:`Hass Hass <br>  <div class="subtitle">DaljitXSia</div>`,
            poster: "img3/7.jpg"
          },
          {
            id:"8",
            songName:`Hint <br>  <div class="subtitle">Karan Aujla</div>`,
            poster: "img3/8.jpg"
          },
          {
            id:"9",
            songName:`Ishq Mitaye <br>  <div class="subtitle">Daljit</div>`,
            poster: "img3/9.jpg"
          }
          ,
          {
            id:"10",
            songName:`Khutti <br>  <div class="subtitle">Daljit</div>`,
            poster: "img3/10.jpg"
          },
          {
            id:"11",
            songName:`295 Moosetap <br>  <div class="subtitle">Sidhu Moose Wala </div>`,
            poster: "img3/11.jpg"
          },
          {
            id:"12",
            songName:`410 <br>  <div class="subtitle">Sidhu Moose Wala </div>`,
            poster: "img3/12.jpg"
          },
          {
            id:"13",
            songName:`Chorni<br>  <div class="subtitle">Sidhu Moose Wala </div>`,
            poster: "img3/13.jpg"
          },
          {
            id:"14",
            songName:`Dollar <br>  <div class="subtitle">Sidhu Moose Wala </div>`,
            poster: "img3/14.jpg"
          }
          ,
          {
            id:"15",
            songName:`Drippy <br>  <div class="subtitle">Sidhu Moose Wala </div>`,
            poster: "img3/15.jpg"
          },
          {
            id:"16",
            songName:`East Side Flow <br>  <div class="subtitle"> Sidhu Moose Wala </div>`,
            poster: "img3/16.jpg"
          },
          {
            id:"17",
            songName:`Never-Fold <br>  <div class="subtitle"> Sidhu Moose Wala </div>`,
            poster: "img3/17.jpg"
          }
          ,{
            id:"18",
            songName:`Old Skool  <br>  <div class="subtitle"> Sidhu Moose Wala </div>`,
            poster: "img3/18.jpg"
          },
          {
            id:"19",
            songName:`Outlaw <br>  <div class="subtitle">Sidhu Moose Wala </div>`,
            poster: "img3/19.jpg"
          },
          {
            id:"20",
            songName:`Same Beef <br>  <div class="subtitle">Sidhu Moose Wala </div>`,
            poster: "img3/20.jpg"
          }
          



   ]
  
   
   let masterPlay = document.getElementById('masterPlay');
   let wave = document.getElementById('wave');  
   
   //data search 

    let search_result=document.getElementsByClassName('search_results')[0];
    songs.forEach(element => {
      const {id,songName,poster} =element
      //  console.log();

       let card = document.createElement('a');

       card.classList.add('card');
      card.href="#" +id;
       card.innerHTML=`<img src="${poster}" alt="">
       <div class="content"> 
         
          ${songName}
        
       </div>`;

       search_result.appendChild(card);
       

    });


      let input=document.getElementsByTagName('input')[0];
      input.addEventListener('keyup',()=>{

         let input_value=input.value.toUpperCase();
         let iteams=search_result.getElementsByTagName('a');
         for (let index = 0; index < iteams.length; index++) {
          
          let as=iteams[index].getElementsByClassName('content')[0];
          let text_value = as.textContent  || as.innerHTML;

          if(text_value.toUpperCase().indexOf(input_value) > -1){
             iteams[index].style.display="flex";
            //  console.log("hello");
          }
          else{
            iteams[index].style.display="none";
          }
          if(input.value==0){
            search_result.style.display="none";
          }
          else{
            search_result.style.display="";
          }
         }

      })
     
   //data end


   

 
  function playMusic(){
     if (music.paused || music.currentTime <= 0) {
           music.play();
           wave.classList.add('active1');
           masterPlay.classList.remove('bi-play-fill');
          masterPlay.classList.add('bi-pause-fill');
       } else {
           music.pause();
           wave.classList.remove('active1');

           masterPlay.classList.add('bi-play-fill');
           masterPlay.classList.remove('bi-pause-fill');


       }
  };

  const makeAllplays= () =>{

    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
      
         
      el.classList.add('bi-play-circle-fill');
      el.classList.remove('bi-pause-circle-fill');
      

    })
}

        

    const makeAllBackground= () =>{

        Array.from(document.getElementsByClassName('songIteam')).forEach((el)=>{
          
          el.style.background='rgb(105,105,105,.0)';

        })
    }



    
    let index =0;
    let poster_master_play=document.getElementById('poster_master_play');
    let title=document.getElementById('title');
    let  download_music=document.getElementById('download_music');
    
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
           
      e.addEventListener('click',(el)=>{
 

           index=el.target.id;
          //  console.log(index);
          music.src=`audio3/${index}.mp3`;
          poster_master_play.src=`img3/${index}.jpg`;
          music.play(); 

            
          masterPlay.classList.remove('bi-play-fill');
          masterPlay.classList.add('bi-pause-fill');
          download_music.href = `audio3/${index}.mp3`;
          wave.classList.add('active1');
          
          let songTitles = songs.filter((els) =>{

            return els.id ==  index;
          });

          songTitles.forEach(elss =>{
            let {songName} =elss;
            title.innerHTML=songName;
          });
          makeAllBackground();
          Array.from(document.getElementsByClassName('songIteam'))[index-1].style.background="rgb(105,105,105,.1)";
             
         makeAllplays();
         
          el.target.classList.remove('bi-play-circle-fill');
          el.target.classList.add('bi-pause-circle-fill');

          wave.classList.add('active1');
      });
      
      

       } )


    let currentStart =document.getElementById('currentStart');

    let currentEnd =document.getElementById('currentEnd');
    
    let seek =document.getElementById('seek');
    let bar2 =document.getElementById('bar2');
    let dot =document.getElementsByClassName('dot')[0];


    music.addEventListener('timeupdate',()=>{

       let music_curr=music.currentTime;
      //  console.log(music_curr);
      let music_dur=music.duration;


      let  min1=Math.floor(music_dur /60);
      let  sec1=Math.floor(music_dur %60);

      // console.log(min1);
      if(sec1 <10){
        sec1=`0${sec1}`;
      }
      currentEnd.innerText=`${min1}:${sec1}`;

       let min2=Math.floor(music_curr /60);
       let sec2=Math.floor(music_curr %60);

       if(sec2 < 10){
        sec2 =`0${sec2}`;
       }

       currentStart.innerText=`${min2}:${sec2}`;

      let progressBar= parseInt((music_curr / music_dur)*100);
      seek.value =progressBar;
      // console.log(seek.value);
      let seekbar =seek.value;

      bar2.style.width = `${seekbar}%`;
      dot.style.left=`${seekbar}%`;

    });

    seek.addEventListener('change',()=>{
         music.currentTime=seek.value*music.duration/100;
    });

    let vol_icon =document.getElementById('vol_icon');
    
    let vol =document.getElementById('vol');
    
    let vol_bar =document.getElementsByClassName('vol_bar')[0];
    
    let vol_dot =document.getElementById('vol_dot');

      vol.addEventListener('change',()=>{
           
         if(vol.value==0){
          vol_icon.classList.remove('bi-volume-up-fill');
          vol_icon.classList.remove('bi-volume-down-fill');
          vol_icon.classList.add('bi-volume-off-fill');
         }
         if(vol.value>0){
          vol_icon.classList.remove('bi-volume-up-fill');
          vol_icon.classList.add('bi-volume-down-fill');
          vol_icon.classList.remove('bi-volume-off-fill');
         }
         if(vol.value>50){

          vol_icon.classList.add('bi-volume-up-fill');
          vol_icon.classList.remove('bi-volume-down-fill');
          vol_icon.classList.remove('bi-volume-off-fill');
         }
        
          let vol_a=vol.value;
          vol_bar.style.width=`${vol_a}%`;
          vol_dot.style.left=`${vol_a}%`;
          music.volume=vol_a /100;
          
      });

      let back=document.getElementById('back');
      let next=document.getElementById('next');
      
      function nextMusic(){
        index++;
        
        if(index>Array.from(document.getElementsByClassName('songIteam')).length){
          index=1;

         }

        music.src=`audio3/${index}.mp3`;
        poster_master_play.src=`img3/${index}.jpg`
        music.play(); 

          
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active1');
        
        let songTitles = songs.filter((els) =>{

          return els.id ==  index;
        });

        songTitles.forEach(elss =>{
          let {songName} =elss;
          title.innerHTML=songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songIteam'))[index-1].style.background="rgb(105,105,105,.1)";
           
       makeAllplays();
       
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');

        wave.classList.add('active1');

      };
 



let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
  
     pop_song.scrollLeft+=330;
      
});
pop_song_left.addEventListener('click',()=>{
  
    pop_song.scrollLeft-=330;
     
});


let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let Artists_bx=document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click',()=>{
  
    Artists_bx.scrollLeft+=330;
      
});
pop_art_left.addEventListener('click',()=>{
  
    Artists_bx.scrollLeft-=330;
     
});




Array.from(document.getElementsByClassName('songIteam')).forEach((e,i)=>{
  e.getElementsByTagName('img')[0].src=songs[i].poster;
  e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
 })
 


 function backMusic(){
          index -=1;
          
           if(index<1){
            index =Array.from(document.getElementsByClassName('songIteam')).length;

           }

          music.src=`audio3/${index}.mp3`;
          poster_master_play.src=`img3/${index}.jpg`
          music.play(); 

            
          masterPlay.classList.remove('bi-play-fill');
          masterPlay.classList.add('bi-pause-fill');
          wave.classList.add('active1');
          
          let songTitles = songs.filter((els) =>{

            return els.id ==  index;
          });

          songTitles.forEach(elss =>{
            let {songName} =elss;
            title.innerHTML=songName;
          });
          makeAllBackground();
          Array.from(document.getElementsByClassName('songIteam'))[index-1].style.background="rgb(105,105,105,.1)";
             
         makeAllplays();
         
          el.target.classList.remove('bi-play-circle-fill');
          el.target.classList.add('bi-pause-circle-fill');

          wave.classList.add('active1');

 };

//  function download(){

//   download_music.href = `audio/${index}.mp3`;
//  };


 function onoff(){
    
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
   masterPlay.classList.add('bi-pause-fill');
} else {
    music.pause();
    wave.classList.remove('active1');

    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');


}

 };


let shuffle=document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click',() =>{
  let a=shuffle.innerHTML;

  switch(a){
    case "next":
      shuffle.classList.add('bi-arrow-repeat');
      shuffle.classList.remove('bi-music-note-beamed');
      shuffle.classList.remove('bi-shuffle');
      shuffle.innerHTML = 'repeat';
      break;
     
      case "repeat":
        shuffle.classList.remove('bi-arrow-repeat');
        shuffle.classList.remove('bi-music-note-beamed');
        shuffle.classList.add('bi-shuffle');
        shuffle.innerHTML = 'random';
      
      break;
        
      case "random":
        shuffle.classList.remove('bi-arrow-repeat');
        shuffle.classList.add('bi-music-note-beamed');
        shuffle.classList.remove('bi-shuffle');
        shuffle.innerHTML = 'next';
      
      break;


  }
});



const next_music= () => {

  if(index == songs.length){
    index = 1;
  }
  else{
    index ++;
  }
  
    music.src=`audio3/${index}.mp3`;
    poster_master_play.src=`image3/${index}.jpg`;
    music.play(); 
  
      
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio3/${index}.mp3`;
    wave.classList.add('active1');
    
    let songTitles = songs.filter((els) =>{
  
      return els.id ==  index;
    });
  
    songTitles.forEach(elss =>{
      let {songName} =elss;
      title.innerHTML=songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songIteam'))[index-1].style.background="rgb(105,105,105,.1)";
       
   makeAllplays();
   
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
  
    wave.classList.add('active1');
   

}




const repeat_music= () => {
   
     index;
  
    music.src=`audio3/${index}.mp3`;
    poster_master_play.src=`img3/${index}.jpg`;
    music.play(); 
  
      
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio3/${index}.mp3`;
    wave.classList.add('active1');
    
    let songTitles = songs.filter((els) =>{
  
      return els.id ==  index;
    });
  
    songTitles.forEach(elss =>{
      let {songName} =elss;
      title.innerHTML=songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songIteam'))[index-1].style.background="rgb(105,105,105,.1)";
       
   makeAllplays();
   
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
  
    wave.classList.add('active1');
   

}

const random_music= () => {

  if(index == songs.length){
    index = 1;
  }
  else{
     index = Math.floor((Math.random() * songs.length) + 1 );
  }
  
    music.src=`audio3/${index}.mp3`;
    poster_master_play.src=`img3/${index}.jpg`;
    music.play(); 
  
      
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio3/${index}.mp3`;
    wave.classList.add('active1');
    
    let songTitles = songs.filter((els) =>{
  
      return els.id ==  index;
    });
  
    songTitles.forEach(elss =>{
      let {songName} =elss;
      title.innerHTML=songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songIteam'))[index-1].style.background="rgb(105,105,105,.1)";
       
   makeAllplays();
   
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
  
    wave.classList.add('active1');
   

}

music.addEventListener('ended',()=>{
  // index ++; 
  let b=shuffle.innerHTML;

  switch(b) {
      case 'repeat' :
        repeat_music();
        break;
        case 'next':
          next_music();
          break;

          case 'random' :
            random_music();
        break;
        

  }
})

