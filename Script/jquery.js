


        $(document).ready(function(){
        $('.color_div1').click(function(){
            $('.d11').attr('src', 'images/d12.jpeg'); 

            })

            $('.color_div2').click(function(){
            $('.d11').attr('src', 'images/d13.jpeg'); 

            })

            $('.product').mouseenter(function(){
                $('.probtn').css('background-color','White')
                $('.probtn').css('color','black')
                $('.probtn').css('border','black')
            })
            
            $('.probtn').click(function(){
                $('.probtn').css('color','black')
            })


            
            if (window.matchMedia('(width: 375px)').matches)
            {
            $('.probtn').click(function(){
             $('#dress11').css('height','1650px')
             $('.product').css('display','block')

            });

          
            
            $('.probtn').mouseleave(function(){
                $('.product').css('display','none')

             $('#dress11').css('height','1400px')

            });
            
            
            }


            
            if (window.matchMedia('(width: 360px)').matches)
            {
            $('.probtn').click(function(){
             $('#dress11').css('height','1650px')
             $('.product').css('display','block')
            });
            
             
            $('.probtn').mouseleave(function(){
             $('.product').css('display','none')
             $('#dress11').css('height','1300px')

            });
            }



            if (window.matchMedia('(width: 600px)').matches)
            {
            $('.probtn').click(function(){
             $('#dress11').css('height','1750px')
             $('.product').css('display','block')
            });
            
             
            $('.probtn').mouseleave(function(){
             $('.product').css('display','none')
             $('#dress11').css('height','1550px')

            });
            }


            if (window.matchMedia('(width: 320px)').matches)
            {
            $('.probtn').click(function(){
             $('#dress11').css('height','1500px')
             $('.product').css('display','block')
            });
            
             
            $('.probtn').mouseleave(function(){
             $('.product').css('display','none')
             $('#dress11').css('height','1150px')

            });
            }

                 
            if (window.matchMedia('(width: 384px)').matches)
            {
            $('.probtn').click(function(){
             $('#dress11').css('height','1650px')
             $('.product').css('display','block')

            });

          
            
            $('.probtn').mouseleave(function(){
                $('.product').css('display','none')

             $('#dress11').css('height','1350px')

            });
            
            
            }


            if (window.matchMedia('(width: 393px)').matches)
            {
            $('.probtn').click(function(){
             $('#dress11').css('height','1650px')
             $('.product').css('display','block')

            });

          
            
            $('.probtn').mouseleave(function(){
                $('.product').css('display','none')

             $('#dress11').css('height','1370px')

            });
            
            
            }


            if (window.matchMedia('(width: 390px)').matches)
            {
            $('.probtn').click(function(){
             $('#dress11').css('height','1650px')
             $('.product').css('display','block')

            });

          
            
            $('.probtn').mouseleave(function(){
                $('.product').css('display','none')

             $('#dress11').css('height','1370px')

            });
            
            
            }


            if (window.matchMedia('(width: 414px)').matches)
             {
            $('.probtn').click(function(){
            $('#dress11').css('height','1650px')
            $('.product').css('display','block')

            });



            $('.probtn').mouseleave(function(){
           $('.product').css('display','none')

           $('#dress11').css('height','1370px')

            });

           }


           if (window.matchMedia('(width: 412px)').matches)
           {
          $('.probtn').click(function(){
          $('#dress11').css('height','1650px')
          $('.product').css('display','block')

          });



          $('.probtn').mouseleave(function(){
         $('.product').css('display','none')

         $('#dress11').css('height','1370px')

          });

         }



         if (window.matchMedia('(width: 425px)').matches)
         {
        $('.probtn').click(function(){
        $('#dress11').css('height','1650px')
        $('.product').css('display','block')

        });



        $('.probtn').mouseleave(function(){
       $('.product').css('display','none')

       $('#dress11').css('height','1370px')

        });

       }


        



     })