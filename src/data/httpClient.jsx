
const API = "https://api.themoviedb.org/3";
export function get(path){
    return fetch(API+path,{
        headers:{
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2M5MDIzNGQ2ZDU0NzEzYWFkNDQzNjA4NDBmMTMzMSIsInN1YiI6IjY0YjZlNDg1MTM2NTQ1MDEzYjBjODhmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vVuYcyEmJHjcfRyGxgl0D5Pw0MMAN6XMA2rv4YdOujM",
            "Content-type": "aplication/json;charset=utf-8",
        },
    }).then((result) => result.json());
}