window.addEventListener('load',loadingFunction);
function loadingFunction(){
    const button_surface=document.querySelector('.button-surface');
    const button_inner=document.querySelector('.button-inner');

    const price_basic=document.querySelector('.price-basic');
    const price_prof=document.querySelector('.price-prof');
    const price_master=document.querySelector('.price-master');

   button_surface.addEventListener('click',(event)=>{
       button_surface.classList.toggle('button-toggling');
       if(button_surface.classList.contains('button-toggling')===true){

        
            price_basic.innerHTML='$19.99';
        price_prof.innerHTML='$24.99';
        price_master.innerHTML='$39.99';

       

       
    }
    else{
       
        price_basic.innerHTML='$199.99';
        price_prof.innerHTML='$249.99';
        price_master.innerHTML='$399.99';

      
    }
       
   })
}