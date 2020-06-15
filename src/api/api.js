import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
const api_token ='e18f6001fd4236175f7dc468d0470702';
/*let  bodyFormData = new FormData();
    bodyFormData.append("file", file);
    bodyFormData.set("api_token", 'e18f6001fd4236175f7dc468d0470702');
    bodyFormData.set("return", "timecode,apple_music,deezer,spotify");*/
const instance = axios.create({
  baseURL: 'https://api.audd.io/',
});

export const soundAPI = {
  getMusicFromLyrics(lyrics){
    let formData = new FormData();
    formData.append('lyrics', lyrics);
    formData.set('return','deezer');
    return instance.get(`findLyrics/?q=${lyrics}&api_token=${api_token}` ).then(response => {
         console.log(response);
           console.log(response.data);
           return response.data;
         })
  },
  saveFile(file) {
    let formData = new FormData();
    formData.append('file', file);
    formData.set('api_token','e18f6001fd4236175f7dc468d0470702');
    formData.set('return','deezer');
    console.log(file);
    return instance.post(''  , formData,{
      headers: {
                "Content-Type": "multipart/form-data"
              }
            }).then(response => {
         console.log(response);
           console.log(response.data);
           return response.data;
         })
  }
}


/*
export const soundFileAPI = {
  getMusicFromFile(file){
    return instance.get().then(response => {
         console.log(response);
           console.log(response.data);
           return response.data;
         })
  }
}
*/
