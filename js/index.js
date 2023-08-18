
$(document).ready(function(){


    //start making the ocrrr
     let allBodyOcr  =   $(".body-ocr").hide()
   $(".head-ocr").click(function(){
    $(this).next().slideToggle(500)
    $(".body-ocr").not($(this).next()).slideUp(500)
    
   })


//start making the scrool
//open btn

   let openBtn = $("#open-menu")
   let leftMenue = $(".left-menue")
   let closeBtn = $(".close-btn")

   openBtn.click(function(){
    leftMenue.css({left:0})
    openBtn.css("display","none")
   })

   closeBtn.click(function(){
    leftMenue.css({left:-295})
    openBtn.css("display","block")
   })


   $(".left-menue a").click(function(eventInfo){

    let aHref = eventInfo.target.getAttribute("href")
    let theOfset = $(aHref).offset().top
    
    $("body,html").animate({scrollTop:theOfset},1000)



   })

   //start making the count down timer....

   let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime()

   // Update the count down every 1 second

   let timer = setInterval(function(){

    let theNowDate = new Date()

    //the distance among them....
    let theDistance = countDownDate - theNowDate
      // Time calculations for days, hours, minutes and seconds

        let  days = Math.floor(theDistance / (1000 * 60 * 60 * 24));
        let  hours = Math.floor((theDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let  minutes = Math.floor((theDistance % (1000 * 60 * 60)) / (1000 * 60));
        let  seconds = Math.floor((theDistance % (1000 * 60)) / 1000);


        $(".days-left").html(days + " D")
        $(".hrs-left").html(hours + " h")
        $(".mins-left").html(minutes + " m")
        $(".secs-left").html(seconds + " s")

   },1000)


   //start making the character remaning....

   $("textarea").keyup(function(){
    let theLength = $(this).val().length

      $("#chars").text(
        100 - theLength <= 0 ? "your available character finished" : 100 - theLength
      )


     

     
   })

   
   })

    
   
   


   






   





    


