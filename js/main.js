  /* hero images moving */
  anime({
    targets: '.image2_19_8',
    translateX: -20,
    direction: 'alternate',
    duration:1500,
    loop: true,
    easing: 'linear'
  });
  anime({
    targets: '.image1_19_8',
    translateX: 30,
    direction: 'alternate',
    duration:3000,
    loop: true,
    easing: 'linear'
  });
  anime({
    targets: '.image3_19_8',
    translateX: -20,
    direction: 'alternate',
    duration: 2000,
    loop: true,
    easing: 'linear'
  });
  /* end of hero images moving */



  /* index rotating idon */
  anime({
    targets: '.image1_2_14',
    
    rotateY: -360, 
  easing: 'linear',
  loop: true,
  direction: 'reverse',
  duration:6000,
  });
   /* end index rotating idon */


   /* fixed icon rotation */
   anime({
    targets: '.rotationtext',    
    rotate: 360,
  easing: 'linear',
  loop: true,
  
  duration:9000,
  });
  anime({
    targets: '.rotationarrow',    
    rotate: -360,
  easing: 'linear',
  loop: true,
  
  duration:9000,
  });
 /* end rollling */

  /* Index page image to left and right */
  function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
}
const
	parent = document.querySelector('.outerHeight'),
	els = document.querySelectorAll('.image1 .image2'),
	tl = anime.timeline({ autoplay: false })
    t2 = anime.timeline({ autoplay: false })

        tl.add({
            targets: ' .image1',
            /* rotateX: 50, */
            translateX: -400,            
            easing: 'easeInOutSine',                         
            opacity: ['0.5', '1'],
            duration: 1000,      
            autoplay: false        

        }); 

        t2.add({
            targets: '.image2',           
            translateX: 400,            
            easing: 'easeInOutSine',                         
            opacity: ['0.5', '1'],
            duration: 1000,      
            autoplay: false 
        });   

window.addEventListener('scroll', () => {
	const persentage = getScrollPercent()
    tl.seek(tl.duration * (persentage* 0.02)) 
    t2.seek(t2.duration * (persentage* 0.02)) 
})






/* --------------------------------- */

  /* about page circling */
  anime({
    targets: '.image200_21_20',    
    easing: 'linear',
    rotate: 360,
    duration: 28000,
    loop:true,
  });

/* about page circles  */


const t1122 = anime.timeline({    
    easing: 'easeInSine',
    loop:true,
     
  });  
  t1122.add({
    targets: '.image1_28_3',
    easing: 'linear',
    rotate: [160],
    duration: 2000,      
    
  })
  .add({
    targets: '.image2_28_3',
    easing: 'linear',
    rotate: [160],
    duration: 2000,      
    
  })
 .add({
    targets: '.image1_28_3 , .image2_28_3',
    easing: 'linear',
    
   /*  direction: 'reverse', */
    rotate: [0],
    duration: 2000,   
 });

 const tt = anime.timeline({    
  easing: 'easeInSine',
  loop:true,
   
});  
tt.add({
  targets: '.image3_28_3',
  easing: 'linear',
  rotate: -136,
  duration: 2000, 
  delay:2000,    
  
})
.add({
  targets: '.image3_28_3',
  easing: 'linear',
  rotate: 0,
  duration: 2000, 
  delay:2000,    
  
});

/* section circle */






 /* secondcircle */

/*  const tt = anime.timeline({    
    easing: 'easeInSine',
    loop:true,
     
  });  
  tt.add({
    targets: '.image2_28_3',
    easing: 'linear',
    rotate: 176,
    duration: 2000, 
    delay:2000,    
    
  })
  .add({
    targets: '.image2_28_3',
    easing: 'linear',
   
    rotate: 0,
    duration: 2000,
       
 }); */

 /*  third circle */

/*   const ttt = anime.timeline({    
    easing: 'easeInSine',
    loop:true,
     
  });  
  ttt.add({
    targets: '.image3_28_3',
    easing: 'linear',
    rotate:[-67,48],
    duration: 2000, 
        
    
  })
   .add({
    targets: '.image3_28_3',
    easing: 'linear',
    rotate:[48,-67],   
    duration: 2000,
    endDelay:2000,
       
 }) ; */

