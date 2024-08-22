// const getImg = (query) => {;
//     let apiKey = 'AIzaSyBfVDIr_2awICgC1Hn5cCM1MPh-ER7jcXM'; 
//     let cx = '062836d257326468f'; 
//     let url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${cx}&searchType=image&key=${apiKey}`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             if (data.items && data.items.length > 0) {
//                 let img = data.items[5].link;
//                 return img;
//             } else {
//                 return -1;
//             }
//         })
//         .catch(error => {
//             return -1;
//         });
// }

// console.log(getImg('Bajaj NS200'));

const getImg = async (query) => {
    try {
        let apiKey = 'AIzaSyBfVDIr_2awICgC1Hn5cCM1MPh-ER7jcXM'; 
        let cx = '062836d257326468f'; 
        let url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${cx}&searchType=image&key=${apiKey}`;
        
        const response = await fetch(url);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            let img = data.items[5].link;
            return img;
        } else {
            return -1;
        }
    } catch (error) {
        return -1;
    }
};

export default getImg;
