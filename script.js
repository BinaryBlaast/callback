(function(duration) {
    console.log(duration);
    let startTime = Date.now();
    const targetTime = startTime + duration * 1000;
  
    function checkTime() {
        console.log('called');
        if (Date.now() >= targetTime) {
            return;
        }
        
        const callback = function() {
            
            
            if (Date.now() >= targetTime){document.querySelector('p').textContent = "Happy Independence Day!"; return}; 
            
            checkTime();
        };
  
        setTimeout(callback, 0);
    }
  
    checkTime(); 
})(5);


