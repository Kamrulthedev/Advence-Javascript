// const Promise = new Promise((resolve, reject)=> {
// setTimeout(()=>{
//          const data = 'Welcome to the Next Level Developers-----';
//          const erro = false;
//          if(!erro){
//             resolve(data)
//          }
//          else{
//             reject('Good Bay Developers');
//          }
// }, 2000)

// })


const newdata = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = "Welcome to the my Wesite";
        const error = false;
        if (!error) {
            resolve(data)
        }
        else {
            reject('Good Bay Developers............')
        }
    }, 2000)
});


async function getnewdata(){
    try{
        const data = await newdata;
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
};
getnewdata();


/**
 * Promise crate----
 * 
*/

const fetcheDate = new Promise((resolve, reject) => {
    setTimeout(() => {
        const date = 'Welcome to Next Level Developers !';
        const error = false;
        if (!error) {
            resolve(date);
        }
        else {
            reject('Good Bay Developers.......this is my Danger-----')
        }
    }, 2000)
});

// fetcheDate
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })


// async awith

// async function getdata() {
//     try {
//         const data = await fetcheDate;
//         console.log(data);
//     }
//     catch (error){
   
//     console.log(error)

//     }
// };
// getdata();


// async function getdata(){
//     try{
//      const data = await fetcheDate;
//      console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// getdata();





