(() => {
  'use strict';

  function resetLessonPosition(){
    const content=document.querySelector('#lessonContent, #lessonContent2');
    if(content) content.scrollTop=0;
    if(innerWidth<=900) scrollTo({top:0,behavior:'smooth'});
  }

  document.addEventListener('click',event=>{
    const trigger=event.target.closest('.menu-item,[data-practice-topic]');
    if(!trigger)return;
    requestAnimationFrame(resetLessonPosition);
  });

  addEventListener('hashchange',()=>requestAnimationFrame(resetLessonPosition));
})();
