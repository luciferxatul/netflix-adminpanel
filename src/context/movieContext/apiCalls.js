import axios from "axios";
import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess, updateMovieFailure, updateMovieStart, updateMovieSuccess } from "./MovieActions";


export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try{
      const res = await axios.get("/movies", {
        
        headers: {
            //token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGRjOTQ0ZWExZDQxMDM4ZmM0OWM0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODQ3Nzg3OSwiZXhwIjoxNzUxNjM2Mjc5fQ.M_2en3kZbq-z29ePrEXoGnIBauOYXDkKvVUWaSF0wxY"
        },
      });
      console.log(JSON.parse(localStorage.getItem("user")).accessToken);
      dispatch(getMoviesSuccess(res.data))
    }catch(err){
        dispatch(getMoviesFailure());
    }
}

//create
export const createMovie = async (movie,dispatch) => {
  dispatch(createMovieStart());
  try{
    const res = await axios.post("/movies", movie, {
      headers: {
          //token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGRjOTQ0ZWExZDQxMDM4ZmM0OWM0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODQ3Nzg3OSwiZXhwIjoxNzUxNjM2Mjc5fQ.M_2en3kZbq-z29ePrEXoGnIBauOYXDkKvVUWaSF0wxY"
      },
    });
    dispatch(createMovieSuccess(res.data));
  }catch(err){
      dispatch(createMovieFailure());
  }
}

//update
export const updateMovie = async (movie,dispatch) => {
  dispatch(updateMovieStart());
  try{
    const res = await axios.post("/movies", movie, {
      headers: {
          //token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGRjOTQ0ZWExZDQxMDM4ZmM0OWM0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODQ3Nzg3OSwiZXhwIjoxNzUxNjM2Mjc5fQ.M_2en3kZbq-z29ePrEXoGnIBauOYXDkKvVUWaSF0wxY"
      },
    });
    dispatch(updateMovieSuccess(res.data));
  }catch(err){
      dispatch(updateMovieFailure());
  }
}

//delete
export const deleteMovie = async (id,dispatch) => {
  dispatch(deleteMovieStart());
  try{
    await axios.delete("/movies/"+id, {
      headers: {
          //token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGRjOTQ0ZWExZDQxMDM4ZmM0OWM0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODQ3Nzg3OSwiZXhwIjoxNzUxNjM2Mjc5fQ.M_2en3kZbq-z29ePrEXoGnIBauOYXDkKvVUWaSF0wxY"
      },
    });
    dispatch(deleteMovieSuccess(id));
  }catch(err){
      dispatch(deleteMovieFailure());
  }
}