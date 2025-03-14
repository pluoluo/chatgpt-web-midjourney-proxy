import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { isNotEmptyString } from './utils/is';
import FormData  from 'form-data'
import  proxy from "express-http-proxy"
import pkg from '../package.json'

 const API_BASE_URL = isNotEmptyString(process.env.OPENAI_API_BASE_URL)
    ? process.env.OPENAI_API_BASE_URL
    : 'https://api.openai.com'

export const lumaProxy=proxy(process.env.LUMA_SERVER??  API_BASE_URL, {
  https: false, limit: '10mb',
  proxyReqPathResolver: function (req) {
    return  req.originalUrl //req.originalUrl.replace('/sunoapi', '') // 将URL中的 `/openapi` 替换为空字符串
  },
  proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
    //mlog("sunoapi")
    if ( process.env.LUMA_KEY ) proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.LUMA_KEY;
    else   proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.OPENAI_API_KEY;  
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    proxyReqOpts.headers['Mj-Version'] = pkg.version;
    return proxyReqOpts;
  },
  
});

export const runwayProxy=proxy(process.env.RUNWAY_SERVER??  API_BASE_URL, {
  https: false, limit: '10mb',
  proxyReqPathResolver: function (req) {
    return  req.originalUrl //req.originalUrl.replace('/sunoapi', '') // 将URL中的 `/openapi` 替换为空字符串
  },
  proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
    //mlog("sunoapi")
    if ( process.env.RUNWAY_KEY ) proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.RUNWAY_KEY;
    else   proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.OPENAI_API_KEY;  
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    proxyReqOpts.headers['Mj-Version'] = pkg.version;
    return proxyReqOpts;
  },
  
});

//runwaymlProxy

export const runwaymlProxy=proxy(process.env.RUNWAYML_SERVER??  API_BASE_URL, {
  https: false, limit: '10mb',
  proxyReqPathResolver: function (req) {
    let url =  req.originalUrl;
    let server= process.env.RUNWAYML_SERVER??  API_BASE_URL
    if( server.indexOf('runwayml.com')>-1 ){
        url= req.originalUrl.replace('/runwayml', '')
    }
    return url  //req.originalUrl.replace('/sunoapi', '') // 将URL中的 `/openapi` 替换为空字符串
  },
  proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
    //mlog("sunoapi")
    if ( process.env.RUNWAYML_KEY ) proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.RUNWAYML_KEY;
    else   proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.OPENAI_API_KEY;  
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    proxyReqOpts.headers['Mj-Version'] = pkg.version;
    proxyReqOpts.headers['X-Runway-Version'] = '2024-11-06'; //'X-Runway-Version': 
    return proxyReqOpts;
  },
  
});

export const klingProxy=proxy(process.env.KLING_SERVER??  API_BASE_URL, {
  https: false, limit: '10mb',
  proxyReqPathResolver: function (req) {
    return  req.originalUrl //req.originalUrl.replace('/sunoapi', '') // 将URL中的 `/openapi` 替换为空字符串
  },
  proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
    //mlog("sunoapi")
    if ( process.env.KLING_KEY ) proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.KLING_KEY;
    else   proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.OPENAI_API_KEY;  
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    proxyReqOpts.headers['Mj-Version'] = pkg.version;
    return proxyReqOpts;
  },
  
});

export const viggleProxy=proxy(process.env.VIGGLE_SERVER??  API_BASE_URL, {
  https: false, limit: '10mb',
  proxyReqPathResolver: function (req) {
    return  req.originalUrl //req.originalUrl.replace('/sunoapi', '') // 将URL中的 `/openapi` 替换为空字符串
  },
  proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
    //mlog("sunoapi")
    if ( process.env.VIGGLE_KEY ) proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.VIGGLE_KEY;
    else   proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.OPENAI_API_KEY;  
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    proxyReqOpts.headers['Mj-Version'] = pkg.version;
    return proxyReqOpts;
  },
  
})


export const ideoProxy=proxy(process.env.IDEO_SERVER??  API_BASE_URL, {
  https: false, limit: '10mb',
  proxyReqPathResolver: function (req) {
    return  req.originalUrl //req.originalUrl.replace('/sunoapi', '') // 将URL中的 `/openapi` 替换为空字符串
  },
  proxyReqOptDecorator: function (proxyReqOpts, srcReq) { 
    if ( process.env.IDEO_KEY ) proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.IDEO_KEY;
    else   proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.OPENAI_API_KEY;  
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    proxyReqOpts.headers['Mj-Version'] = pkg.version;
    return proxyReqOpts;
  },
  
})

export const pikaProxy=proxy(process.env.PIKA_SERVER??  API_BASE_URL, {
  https: false, limit: '10mb',
  proxyReqPathResolver: function (req) {
    return  req.originalUrl //req.originalUrl.replace('/sunoapi', '') // 将URL中的 `/openapi` 替换为空字符串
  },
  proxyReqOptDecorator: function (proxyReqOpts, srcReq) { 
    if ( process.env.PIKA_KEY ) proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.PIKA_KEY;
    else   proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.OPENAI_API_KEY;  
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    proxyReqOpts.headers['Mj-Version'] = pkg.version;
    return proxyReqOpts;
  },
  
})

export const pixverseProxy=proxy(process.env.PIXVERSE_SERVER??  API_BASE_URL, {
  https: false, limit: '10mb',
  proxyReqPathResolver: function (req) {
    return  req.originalUrl //req.originalUrl.replace('/sunoapi', '') // 将URL中的 `/openapi` 替换为空字符串
  },
  proxyReqOptDecorator: function (proxyReqOpts, srcReq) { 
    if ( process.env.PIXVERSE_KEY ) proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.PIXVERSE_KEY;
    else   proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.OPENAI_API_KEY;  
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    proxyReqOpts.headers['Mj-Version'] = pkg.version;
    return proxyReqOpts;
  },
  
})




export const udioProxy=proxy(process.env.UDIO_SERVER??  API_BASE_URL, {
  https: false, limit: '10mb',
  proxyReqPathResolver: function (req) {
    return  req.originalUrl //req.originalUrl.replace('/sunoapi', '') // 将URL中的 `/openapi` 替换为空字符串
  },
  proxyReqOptDecorator: function (proxyReqOpts, srcReq) { 
    if ( process.env.UDIO_KEY ) proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.UDIO_KEY;
    else   proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.OPENAI_API_KEY;  
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    proxyReqOpts.headers['Mj-Version'] = pkg.version;
    return proxyReqOpts;
  },
  
})



//req, res, next
export const ideoProxyFileDo=async( req:Request, res:Response, next?:NextFunction)=>{ 
    console.log('req.originalUrl', req.originalUrl );
    let  API_BASE_URL = isNotEmptyString(process.env.OPENAI_API_BASE_URL)
    ? process.env.OPENAI_API_BASE_URL
    : 'https://api.openai.com'
    API_BASE_URL= process.env.IDEO_SERVER??  API_BASE_URL
    if(req.file.buffer) {
      const fileBuffer = req.file.buffer;
      const formData = new FormData();
      formData.append('image_file',  fileBuffer,  { filename:  req.file.originalname }  );
      formData.append('image_request',  req.body.image_request );
     try{
       let url = `${API_BASE_URL}${req.originalUrl}` ;
      let responseBody = await axios.post( url , formData, {
              headers: {
              Authorization: 'Bearer '+ (process.env.IDEO_KEY??process.env.OPENAI_API_KEY) ,
              'Content-Type': 'multipart/form-data',
              //'Mj-Version': pkg.version
            }
        })   ; 
       res.json(responseBody.data );
      }catch(e){ 
        res.status( 400 ).json( {error: e } );
      }

    }else{
      res.status(400).json({'error':'uploader fail'});
    }
    
}

export const viggleProxyFileDo= async( req:Request, res:Response, next?:NextFunction)=>{
    // if ( process.env.VIGGLE_KEY ) proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.VIGGLE_KEY;
    // else   proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.OPENAI_API_KEY;  
    console.log('req.originalUrl', req.originalUrl );
    let  API_BASE_URL = isNotEmptyString(process.env.OPENAI_API_BASE_URL)
    ? process.env.OPENAI_API_BASE_URL
    : 'https://api.openai.com'
    API_BASE_URL= process.env.VIGGLE_SERVER??  API_BASE_URL
    if(req.file.buffer) {
      const fileBuffer = req.file.buffer;
      const formData = new FormData();
      formData.append('file',  fileBuffer,  { filename:  req.file.originalname }  );
     // formData.append('model',  req.body.model );
     try{
       let url = `${API_BASE_URL}${req.originalUrl}` ;
      let responseBody = await axios.post( url , formData, {
              headers: {
              Authorization: 'Bearer '+ (process.env.VIGGLE_KEY??process.env.OPENAI_API_KEY) ,
              'Content-Type': 'multipart/form-data',
              //'Mj-Version': pkg.version
            }
        })   ; 
       res.json(responseBody.data );
      }catch(e){ 
        res.status( 400 ).json( {error: e } );
      }

    }else{
      res.status(400).json({'error':'uploader fail'});
    }
    
}

export const sunoProxy=proxy(process.env.SUNO_SERVER || API_BASE_URL || 'https://api.openai.com', {
  https: false, limit: '10mb',
  proxyReqPathResolver: function (req) {
    return req.originalUrl.replace('/sunoapi', '') // 将URL中的 `/openapi` 替换为空字符串
  },
  proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
    //mlog("sunoapi")
    if ( process.env.SUNO_KEY ) proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.SUNO_KEY;
    else   proxyReqOpts.headers['Authorization'] ='Bearer '+process.env.OPENAI_API_KEY;  
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    proxyReqOpts.headers['Mj-Version'] = pkg.version;
    return proxyReqOpts;
  },
  
})