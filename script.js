const mainDiv = document.querySelector(".main-main-div");
const centerDiv = document.querySelector(".center-div");

const ctop = centerDiv.offsetTop;



console.log(ctop);
console.log(visualViewport);



const countNum = document.querySelectorAll(".counter");


const speed = 250;
console.log(window.innerHeight)

function myFunction () {
    const html = document.documentElement;
    // alert("hello")
    let y = html.scrollTop;
    console.log(y.toFixed()); 
    
    if( y.toFixed() > 450){  
    
    console.log("entered"); 
    countNum.forEach(curNum => {
    
        const updateNum = () =>{
            const prevNum = parseInt(curNum.innerText);
            // console.log(prevNum);
    
            const targetNum = parseInt(curNum.dataset.number);
            // console.log(targetNum)
    
            const icrementNum = Math.trunc(targetNum / speed);
            // console.log(icrementNum);
    
            if(prevNum < targetNum){
                curNum.innerText = `${prevNum + icrementNum}+`;
                setTimeout(updateNum, 5)
            }
        }
    
    
        updateNum();
        
    });

} 
}









// mainDiv.addEventListener(Touch, )

