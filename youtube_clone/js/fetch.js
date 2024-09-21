
async function getVideosData(){
    const thumbnailFile = 'videos.txt';
    try{
        const response = await fetch(thumbnailFile);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();

        let location = document.querySelector('.grid-container');
        let videos = '';
        data.forEach(element => {
            
            videos += `
                <div class="video-info">
                    <div class="video-thumbnail">
                        <img src="${element.images.thumbnail}" class="img-thumbnail">
                    </div>
                    <div class="video-details">
                        <div class="video-channel">
                            <img src="${element.images.channel}" class="img-channel">
                        </div>
                        <div class="video-info-detailed">
                            <p class="video-title">${element.title}</p>
                            <p class="channel-name">${element.channel} &#10004;</p>
                            <p class="video-views">${element.views} &#8226; ${element.timespan}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        location.innerHTML = videos;
    }catch(err){
        console.log(err);
        
    }
}
// thumbnails

getVideosData();

