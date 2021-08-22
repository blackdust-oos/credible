var homeBtn = document.querySelector(".home-btn");
var h = document.querySelector(".home");
var navbarr = document.querySelector("nav");

var chatsBtn = document.querySelector(".chats-btn");
var c = document.querySelector(".chat-section-holder");

var chatsList= document.querySelector(".chats-side");
var chatView= document.querySelector(".chat-view");
//var chatbtn = document.querySelector(".drag-btn");




// chat section controller


const Chatctrl = (function(){
    

    const viewBlock = function(){
        //chatbtn.style.display = "none";
        chatsList.style.display = "block";
        chatsList.style.width = "100%";
        chatView.style.display = "none";
        console.log(window.getComputedStyle(chatsList).display);
    }
    const viewNone = function(){
         chatsList.style.display = "block";
         chatView.style.display = "flex";
        
         chatsList.style.width = "330px";
         chatView.style.width = "null";

        console.log(window.getComputedStyle(chatsList).display);
    }


        
    window.addEventListener('DOMContentLoaded', function(){
        
        var deviceWidth =  document.documentElement.clientWidth;
        if(deviceWidth <= 640){
            viewBlock();
            console.log(deviceWidth);
        } else if(deviceWidth >= 641) {
            viewNone();
        }
    }); 

    //display on resize
    window.addEventListener('resize', function(e){
        var deviceWidth =  document.documentElement.clientWidth;
        if(deviceWidth <= 640){
            viewBlock();
            
        } else if(deviceWidth >= 641) {
            viewNone();
        }
        console.log("resized" + deviceWidth);
    },true);     
    

    
        
})(); 

// && window.getComputedStyle(chatsnav).left === -"0vh"



// ui controller for the dynamic change of the  web
const UIctrl = function(cblock, cnone){
    cblock.style.display = "block";
    cnone.style.display = "none";
};


const App = (function(){
    
    //function for the page changer
    const pageChangerActionLoader = function(){
        homeBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            UIctrl(h,c);
        });
        chatsBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            UIctrl(c,h);
            return{
                
            }
        });
    }

    //show new chat dialog function
    const showNewChat = function(){
        const newchatdialog = document.querySelector(".start-new-chat-v");
        const newchatbtnholder = document.querySelector(".start-new");
       

                document.querySelector(".start-conversation").addEventListener("click", ()=>{
                    
                    UIctrl(newchatdialog,newchatbtnholder);
                });
                document.querySelector(".start-new-back").addEventListener("click", ()=>{
                    
                    UIctrl(newchatbtnholder,newchatdialog);
                })
    }

    
    return{
        init: function(){
            h.style.display = "block";
            c.style.display = "none";
            pageChangerActionLoader();
            showNewChat();
            
        }
    }
})(Chatctrl);
App.init();