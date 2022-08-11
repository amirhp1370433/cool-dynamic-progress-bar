//selectors

const progress = document.querySelector('.progress') ;
const loading = document.querySelector('.loading') ;

//functions

let i = 0 ;
const fakeUploadPrc = [0,10,20,35,40,45,60,70,85,90,100] 
const interval = setInterval(()=>{
    progress.style.width = `${fakeUploadPrc[i]}%`
    loading.innerHTML = 'loading ' + fakeUploadPrc[i] + '%'
    i++
    if (i === fakeUploadPrc.length) {
        clearInterval(interval)
        loading.innerHTML = 'the file has been uploaded successfuly'
    }
},1000)
