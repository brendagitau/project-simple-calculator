
            //Adding functionality using JS code -->
            function calc()//<!--button onclick="calc();">=</button-->
            {
              //<!-- assigning variables to elements n1,n2,oper -->
                var n1 = parseFloat(document.getElementById('n1').value);
                var n2 = parseFloat(document.getElementById('n2').value);
                
                var oper = document.getElementById('operators').value;
               // <!--Adding conditions for operators ie what hapens when each operator is picked -->
                if(oper === '+')
                {
                    document.getElementById('result').value = n1+n2;
                }
                
                if(oper === '-')
                {
                    document.getElementById('result').value = n1-n2;
                }
                
                if(oper === '/')
                {
                    document.getElementById('result').value = n1/n2;
                }
                
                if(oper === 'X')
                {
                    document.getElementById('result').value = n1*n2;
                }
            }
            
        
        

