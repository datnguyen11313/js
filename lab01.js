// // // // // // // //CAU A

// // // // // // // // let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// // // // // // // // for(let i = 0 ; i < arr.length ; i++){
// // // // // // // //     console.log('Phần tử thứ %s sẽ là : %s', i , arr[i])
// // // // // // // // }

// // // // // // // //CAU B
// // // // // // // // let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// // // // // // // // let tong = 0
// // // // // // // // for( let i = 0 ; i < arr.length ; i++){
// // // // // // // //     tong = tong + arr[i]

// // // // // // // // }
// // // // // // // // console.log('Tổng là :', tong)

// // // // // // // // CAU C
// // // // // // // let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// // // // // // // let max = arr[0]
// // // // // // // for( let i = 0 ; i < arr.length ; i++){
// // // // // // //     if(arr[i] > max){
// // // // // // //         max = arr[i]
// // // // // // //     }
// // // // // // // }

// // // // // // // console.log('Số lớn nhất là : ', max)

// // // // // // // CAU D

// // // // // // let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// // // // // // let tong = 0 
// // // // // // for(let i = 0 ; i < arr.length ; i++){
// // // // // //     tong = tong + arr[i]
// // // // // //     trungbinhcong = tong / arr.length
// // // // // // }
// // // // // // console.log('Trung bình cộng là : ', trungbinhcong)

// // // // // // CAU E

// // // // // let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// // // // // for( let i = 0 ; i < arr.length / 2; i++){
// // // // //     let temp = arr[i]
// // // // //     arr[i] = arr[arr.length - 1 - i ]
// // // // //     arr[arr.length - 1 - i] = temp
// // // // // }
// // // // // console.log(arr)

// // // // // CAU F

// // // // let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4] 
// // // // let tansuatxuathien = {}
// // // // for( let i = 0 ; i < arr.length ; i++){
// // // //     phantuthui = arr[i]
// // // //     if(tansuatxuathien[phantuthui] === undefined){
// // // //         tansuatxuathien[phantuthui] = 1
// // // //     }
// // // //     else{
// // // //         tansuatxuathien[phantuthui] = tansuatxuathien[phantuthui] + 1
// // // //     }
// // // // }
// // // // console.log(tansuatxuathien)

// // // // CAU G

// // // // let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// // // // for(let i = arr.length ; i > 0 ; i-- ){
// // // //     arr[i] = arr[ i - 1]
    
// // // // }
// // // // arr[0] = 117
// // // // console.log(arr)

// // // // CAU H
// // // let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// // // let sotangdan = true

// // // for( let i = 0 ; i < arr.length ; i++){
// // //     if(arr[i] > arr[i+1]){
// // //         sotangdan= false
// // //         break
// // //     }
// // // }
// // //      if(sotangdan){
// // //         console.log('Là số tăng dần')
// // //     }
// // //     else{
// // //         console.log('Không phải số tăng dần')
// // //     }  

// // // console.log(sotangdan)

// // //CAU I 

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i = 0 ; i < arr.length ; i ++){
//     for(let i2 = i + 1; i2 < arr.length ; i2 ++)
//     if(arr[i] > arr[ i2]){
//         temp = arr[i]
//         arr[i] = arr[i2]
//         arr[ i2] = temp
//     }
// }
// console.log(arr)

// // CAU J 

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i = 0 ; i < arr.length ; i++){
//     for(let i2 = i + 1; i2 < arr.length ; i2++){
//         if(arr[i] < arr[i2]){
//             temp = arr[i]
//             arr[i] = arr[i2]
//             arr[i2] = temp
//         }
//     }
// }



// console.log(arr)

// CAU G
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i = 0 ; i < arr.length ; i ++){
//     if(arr[i] % 2 === 0 ){
//         console.log('Số chẳn là ', arr[i])
        
//     }
//     else{
//         console.log('Số lẻ là,', arr[i])
//     }
    
   
// }

// CAU 2A

//  let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0,14]
//  for( let i = 0 ; i < arr2.length ; i++){
//     for(let i2 = 0 ; i2 < arr2.length ; i2 ++){
//         if(arr2[i] + arr2[i2] === 10){
//             console.log( arr2[i], arr2[i2])
//         }
//     }
//  }
 
  
 function tinhtong(n){
    let tong = 0
    
    for(let i = 1 ; i <= n ; i++){
        tong = tong + i

    }
    return tong
 }
 let n = 200
 let ketqua = tinhtong(n)
 console.log(ketqua)