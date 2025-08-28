console.log('add file')

const hearts = document.getElementsByClassName('fa-heart')

for(const heart of hearts){
    heart.addEventListener('click',function(){
        
        let redHeart = Number(document.getElementById('red-heart').innerText)
        // console.log(redHeart)

        document.getElementById('red-heart').innerText = redHeart + 1;
    })
}
// function for gold coin
// function getGoldCoin(id){
//     const goldCoin = 100;
//     if(goldCoin>0){
//        const finalGoldCoin = goldCoin - 20;
//        return(finalGoldCoin)
//     }
//     else{
//         alert('not available coin')
//     }
// }

// coin section

let coins = document.getElementsByClassName('call-btn')

for(const coin of coins){
    coin.addEventListener('click',function(){
        console.log('haluu')

        let goldCoin = Number(document.getElementById('gold-coin').innerText)
        console.log(goldCoin)

       
        if(goldCoin > 0){
             document.getElementById('gold-coin').innerText = goldCoin - 20 ;
        }
        else{
            alert('invalid')
        }
    })
}