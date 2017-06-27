function IIFE() {
    let zauber = 0;
    let kraft = 100;
    let mächte = 0;


    let fülleAlles = function() {
        this.zauber = 100;
        this.kraft = 100;
        this.mächte = "allmächtig";
    }

    let zustandAnzeige = () => {
        console.log('\n' +
            this.zauber +
            '\n' +
            this.kraft +
            '\n' +
            this.mächte);
    }

    return zustandAnzeige;

};

let zauberer = IIFE();

zauberer.zustandAnzeige();
