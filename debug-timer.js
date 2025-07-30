// Additional debug script for married timer
(function() {
    console.log('Married Timer Debug Script Loaded');
    
    // Wait for DOM to be ready
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
    
    ready(function() {
        console.log('DOM Ready - Checking timer elements...');
        
        const years = document.getElementById('years');
        const months = document.getElementById('months');
        const days = document.getElementById('days');
        const hours = document.getElementById('hours');
        
        console.log('Timer elements found:', {
            years: years ? 'Found' : 'Missing',
            months: months ? 'Found' : 'Missing', 
            days: days ? 'Found' : 'Missing',
            hours: hours ? 'Found' : 'Missing'
        });
        
        if (years && months && days && hours) {
            console.log('All timer elements found - Timer should be working!');
            
            // Force an immediate update
            setTimeout(() => {
                console.log('Current timer values:', {
                    years: years.textContent,
                    months: months.textContent,
                    days: days.textContent,
                    hours: hours.textContent
                });
            }, 1000);
        } else {
            console.error('Missing timer elements - Timer will not work!');
        }
    });
})();
