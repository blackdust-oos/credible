var checkboxlt = document.querySelector('input[name=theme-lt]');
var checkboxdb = document.querySelector('input[name=theme-db]');
var checkboxdp = document.querySelector('input[name=theme-dp]');
var checkboxdi = document.querySelector('input[name=theme-di]');

//check if theme exist in local storage
document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('dark-tb') === null && localStorage.getItem('dark-pe') === null && localStorage.getItem('dark-in') === null){
        checkboxlt.checked = true;
        document.documentElement.setAttribute('data-theme', 'light-theme');
    } else {
        checkboxlt.checked = false;
    }
    ;

    if(localStorage.getItem('dark-tb') !== null){
        checkboxdb.checked = true;
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else if(localStorage.getItem('dark-pe') !== null){
        checkboxdp.checked = true;
        document.documentElement.setAttribute('data-theme', 'dark-peach');
    }
    else if(localStorage.getItem('dark-in') !== null){
        checkboxdi.checked = true;
        document.documentElement.setAttribute('data-theme', 'dark-indigo');
    }
})

         checkboxlt.addEventListener('change', function(){
             if(this.checked){
                 checkboxdp.checked = false;
                 checkboxdi.checked = false;
                 checkboxdb.checked = false;
                 localStorage.removeItem('dark-tb');
                 localStorage.removeItem('dark-pe');
                 localStorage.removeItem('dark-in');
                 document.documentElement.setAttribute('data-theme', 'light-theme');
             }
         });

        checkboxdb.addEventListener('change', function(){
            if(this.checked){
                checkboxdp.checked = false;
                checkboxdi.checked = false;
                checkboxlt.checked = false;

                trans()
                localStorage.setItem('dark-tb', 'dark');
                const theme = localStorage.getItem('dark-tb');

                document.documentElement.setAttribute('data-theme', theme);
               
                localStorage.removeItem('dark-pe');
                localStorage.removeItem('dark-in');
            }
            else{
                trans()
                checkboxlt.checked = true;
                localStorage.removeItem('dark-tb');
                document.documentElement.setAttribute('data-theme', 'light-theme');
            }
        });

        checkboxdp.addEventListener('change', function(){
            if(this.checked){
                checkboxdb.checked = false;
                checkboxdi.checked =false;
                checkboxlt.checked = false;

                trans()

                localStorage.setItem('dark-pe', 'dark-peach');

                const theme = localStorage.getItem('dark-pe');

                document.documentElement.setAttribute('data-theme', theme);

                
                localStorage.removeItem('dark-tb');
                localStorage.removeItem('dark-in');
            }
            else{
                trans()
                checkboxlt.checked = true;
                localStorage.removeItem('dark-pe');
                document.documentElement.setAttribute('data-theme', 'light-theme');
            }
        });
        checkboxdi.addEventListener('change', function(){
            if(this.checked){
                checkboxdp.checked = false;
                checkboxdb.checked =false;
                checkboxlt.checked = false;

                trans()


                localStorage.setItem('dark-in', 'dark-indigo');
                localStorage.setItem('true', true);

                const theme = localStorage.getItem('dark-in');

                document.documentElement.setAttribute('data-theme', theme);
                console.log(this.checked);

                localStorage.removeItem('dark-tb');
                localStorage.removeItem('dark-pe');
            }
            else{
                trans()
                checkboxlt.checked = true;
                localStorage.removeItem('dark-in');
                document.documentElement.setAttribute('data-theme', 'light-theme');
            }
        });



        function trans(){
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition');
            }, 1000);
        }
       