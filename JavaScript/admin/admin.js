const aSideBar = document.querySelectorAll(".a-side-bar");
const liSideBar = document.querySelectorAll(".li-side-bar");
const subMenu = document.querySelectorAll(".sub-menu");
const iconArrowDown = document.querySelectorAll(".fa-chevron-down");
const iconArrowLeft = document.querySelectorAll(".fa-chevron-left");
const array = []
if(aSideBar){
    let isClick = false;
    aSideBar.forEach((element,index)=>{
        element.addEventListener("click",()=>{
          
            isClick=!isClick;
                                                     
            if(isClick ){
                array.push(index);
                if(array.length > 3){
                    array.splice(0, 1);
                }   
                const heightSubMenu = subMenu[index].offsetHeight + 45;
                liSideBar[index].style.height = heightSubMenu + "px" ;
                
                    iconArrowDown[index].style.display="block";
                    iconArrowLeft[index].style.display="none";

                
                               
            }
            else{
                liSideBar[array[array.length-1]].style.height = 45 + "px" ;
                
                    iconArrowDown[index].style.display="none";
                    iconArrowLeft[index].style.display="block";
                

            }
            
        })
    })


}