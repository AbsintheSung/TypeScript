

// async function getData(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')

//         if( !res.ok ){
//             const errorMessgae = await res.json() ;
//             throw new Error(errorMessgae)
//         }

//         const data = await res.json();
//         console.log(data)

//     } catch (error) {

//         console.error('Error:',error)
//         throw error
//     }
// }
// getData()