import {APIkey} from '../config/key'

export function apiSearchMovie(movie, page){

   const url =`https://www.omdbapi.com/?apikey=${APIkey}&s=${movie}&plot=full&page=${page}`

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
    const url =`https://www.omdbapi.com/?apikey=${APIkey}&i=${id}`

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