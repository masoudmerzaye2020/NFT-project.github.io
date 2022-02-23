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




/*   anime({
    targets: '.image0_21_20',    
    rotate: -360, 
  easing: 'linear',
  loop: true, 
  duration:18000,
  loop:true,  
  }); */


  /* about page circling */
  anime({
    targets: '.image200_21_20',    
    easing: 'linear',
    rotate: 360,
    duration: 28000,
    loop:true,
  });

/* about page circles  */












var t0l = anime.timeline({
    autoplay: true,
    loop: true,
  }); 

  t0l
  .add({
     targets: '.image1_28_3',
    direction: 'reverse',
    easing: 'linear',
    rotate:[ 67,113,113],
    duration: 1000,
    delay:2000,
    loop:true, 
  })
  .add({
  /*   targets: '.image1_28_3',
    easing: 'linear',
    rotate: -113,
    duration: 1000, */
    
  })
 /*  .add({
    targets: '.image2_28_3 ,.image1_28_3',
    easing: 'linear',
    rotate: 178,
    duration: 2000,
  })
  .add({
    targets: '.image3_28_3',
    easing: 'linear',
    rotate: 45,
    duration: 2000,
  })
  .add({
    targets: '.image1_28_3 .image3_28_3',
    easing: 'linear',
    rotate: -167,
    duration: 2000,
  }) */;
  

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
            rotateX: 50,
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
/* 	tl.seek(tl.duration * (persentage/200)) 
    t2.seek(t2.duration * (persentage/300))   
    t3.seek(tl.duration * (persentage/400)) 
    t4.seek(tl.duration * (persentage/90))  */
    tl.seek(tl.duration * (persentage* 0.02)) 
    t2.seek(t2.duration * (persentage* 0.02)) 
    t3.seek(tl.duration * (persentage* 0.01)) 
    t4.seek(tl.duration * (persentage* 0.1)) 
   
    




   /*  t4.seek(t3.duration * (persentage /200))   */
  

   t21.seek(t2.duration * (persentage* 0.02))
   t22.seek(t2.duration * (persentage* 0.02))
   t23.seek(t2.duration * (persentage* 0.02))
   t24.seek(t2.duration * (persentage* 0.04))
  /*  t24.seek(t2.duration * (persentage/200)) */

     /* tl.seek(tl.duration * (persentage /300)) */
})