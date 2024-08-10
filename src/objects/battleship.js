class Ship {
    constructor(length){
        this.length = length;
        this.timesHit = 0;
        this.sunk = false;
    }
    //getter functions
    getLength() {
        return this.length;
    }

    getTimesHit(){
        return this.timesHit;
    }
    
    //setter functions
    isHit(){
        this.timesHit++;
    }

    isSunk(){
        if(this.timesHit === this.length){
            sunk = true;
        }
    }
}

class gameBoard {
    
}