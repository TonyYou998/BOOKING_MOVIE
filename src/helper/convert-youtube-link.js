const convertYoutubeLink=(link)=>{
    if(link.indexOf("embed")>0){
        return link;
    }
    if(link.indexOf("v=")>0){
        const videoId=link.split("v=")[1];
        return "https://www.youtube.com/embed/"+videoId;
    }
    else{
        const videoId=link.split("/")[3];
        console.log(videoId);
        return "https://www.youtube.com/embed/"+videoId;
    }
    
   

    
}
export default convertYoutubeLink;