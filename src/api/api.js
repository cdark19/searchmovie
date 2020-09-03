import {APIkey} from '../config/key'

export function apiSearchMovie(movie){

   const url =`https://www.omdbapi.com/?apikey=${APIkey}&s=${movie}&plot=full&page=2`

    return fetch(url)
            .then( res=> {
                return res.json()
            })
             .then( result =>{
                 return result
             }).catch( err=>{
                 return err
             })
}

export function MovieInfoAPI(id){
    const url =`http://www.omdbapi.com/?apikey=${APIkey}&i=${id}`

    return fetch(url)
             .then( res=>{
                 return res.json()
             }).then(result=>{
                 return result
             }).catch(
                 err=>{
                     return err
                 }
             )
}