class TimeLimitedCache {
    constructor() {
        this.cache = {};
        this.timers = {};
    }
    
    set(key, value, duration) {
        const currentTime = Date.now();
        
        if (this.cache.hasOwnProperty(key) && this.cache[key].expires > currentTime) {
            // Key already exists and is not expired
            this.cache[key].value = value;
            this.cache[key].expires = currentTime + duration;
            clearTimeout(this.timers[key]);
            this._setTimer(key, duration);
            return true;
        } else {
            // New key or expired key
            this.cache[key] = {
                value: value,
                expires: currentTime + duration
            };
            this._setTimer(key, duration);
            return false;
        }
    }
    
    get(key) {
        const currentTime = Date.now();
        
        if (this.cache.hasOwnProperty(key) && this.cache[key].expires > currentTime) {
            // Key exists and is not expired
            return this.cache[key].value;
        } else {
            // Key doesn't exist or has expired
            return -1;
        }
    }
    
    count() {
        const currentTime = Date.now();
        let count = 0;
        
        for (const key in this.cache) {
            if (this.cache[key].expires > currentTime) {
                count++;
            }
        }
        
        return count;
    }
    
    _setTimer(key, duration) {
        this.timers[key] = setTimeout(() => {
            delete this.cache[key];
        }, duration);
    }
}
