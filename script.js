    window.onload = () => {
        let bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
        bannerNode.parentNode.removeChild(bannerNode);
    }
    document.addEventListener('keypress', function(e){
    if(e.which == 13){
      calc();
    }
    }, false);
    function calc(){
        var dd = document.getElementById('dd')
        var mm = document.getElementById('mm')
        var yyyy = document.getElementById('yyyy')
        var ac = document.getElementsByName('radio')
        var ltYbis
        var bst
        var wd
        var kay = 0
        var ctr = 0
        var d = Number(dd.value) 
        var m = Number(mm.value)
        var y = Number(yyyy.value)
        var k = Number(kay.value)

        if(y < 0 || yyyy .value.length == 0 || yyyy.value.length >= 5 ){
            alert('[ERRO] Insira uma data entre 0 e 9999')
            yyyy.value = ''
            yyyy.focus()
            res.innerHTML = '<strong>OBSERVAÇÃO!</strong><br>Caso queira uma data a.C, selecione a opção acima. '
        }else{

            ltYbis = 0
            ctr = 0
            k = -1
            for (i = 1; i <= y; i++){
                ctr ++
                k ++

                if(ctr == 4 && i % 100 == 0 && (i / 100) % 4 !== 0){
                    ctr = 0
                    bst = false
            //console.log(bst)

        }else if(ctr == 4){
            k++
            ctr = 0
            bst = true
            ltYbis = i
            //console.log(bst)
            
        }
        
        if(ctr == 0 && k == 8){
            k = 1
        } 

        if(k == 7){
            k = 0
            
        }


    }
    
    if(m ==  1 ||m == 2){
        jf = true
    }else{
        jf = false
    }
    switch(m){
        case  1:
        m = 1
        break         
        case 2:
        m = 4
        break
        case 3:
        m = 4
        break
        case 4:
        m = 0
        break
        case 5:
        m = 2
        break
        case 6:
        m = 5
        break
        case 7: 
        m = 0
        break
        case 8: 
        m = 3
        break
        case 9: 
        m = 6
        break
        case 10:
        m = 1
        break
        case 11:
        m = 4
        break   
        case 12: 
        m = 6
        break 
        default:
        m = 'ERRO'        
    }

    if(d + m + k < 7){
        wd = d + m + k
    } else {
        wd = (d + m + k) % 7
    }
    if(jf == true && bst == true && ctr == 0){
        wd--
    }
    if(wd == -1){
        wd = 6
    }
    
    switch (wd) {
        case 1:
        wd = 'Domingo'
        break
        case 2:
        wd = 'Segunda-feira'
        break
        case 3:
        wd = 'Terça-feira'
        break
        case 4:
        wd = 'Quarta-feira'
        break
        case 5:
        wd = 'Quinta-feira'
        break
        case 6:
        wd = 'Sexta-feira'
        break
        case 0:
        wd = 'Sabado'
        break
        default:
        wd = 'ERRO'
     }if (ac [0].checked){
            let yplus = ltYbis + 4
            let yminus = ltYbis - 4
            res.innerHTML = `O dia da semana é ${wd} e o ano  
            ${bst == true && ctr == 0 ? 'é bissexto.':'não é bissexto.'} O próximo ano bissexto é 
             ${(yplus % 100 == 0 && (yplus / 100) % 4 !== 0 && y > 4) == true ? (ltYbis + 8) + ' d.C' : (ltYbis+4) + ' d.C'}, 
             e o anterior é ${(y <= 4 ?(ltYbis-=ltYbis-4)+ ' a.C' : (yminus % 100 == 0 && (yminus / 100) % 4 !== 0 && ctr == 0) == true? 
             (ltYbis - 8) + ' d.C' : y == ltYbis ? (ltYbis - 4) + ' d.C': ltYbis + ' d.C') }`
    
        }else if (ac [1].checked){
            let yplus = ltYbis + 4
            let yminus = ltYbis - 4
            res.innerHTML = `O dia da semana é ${wd} e o ano  
           ${bst == true && ctr == 0 ? 'é bissexto.':'não é bissexto.'} O ano bissexto anterior é  
           ${(yplus % 100 == 0 && (yplus / 100) % 4 !== 0) == true ? (ltYbis + 8) + ' a.C' : (ltYbis + 4) + ' a.C'} 
           e o próximo é ${(y <= 4 ?(ltYbis-=ltYbis-4)+ ' d.C' : (yminus % 100 == 0 && (yminus / 100) % 4 !== 0 && ctr == 0) == true? 
           (ltYbis - 8) + ' a.C' : y == ltYbis ? (ltYbis - 4) + ' a.C': ltYbis + ' a.C') }`
        } 
}
}
