class Button {
    constructor() {
        this.button = createButton('Start Cooking');
        this.greeting = createElement("h2");
        this.continue = createButton("Continue");
        this.changeState = 0;
        this.button3 = createButton("continue");
        this.order = createElement("h2");
        this.button4 = createButton("Serve");
        this.way = createElement("h2");
        this.thanks = createElement("h2");
        this.button5 = createButton("Continue");
        this.enjoy = createElement("h2");
        this.button6 = createButton("At last");
        this.score = 0;
        this.showScore = createElement("h2");
        this.cooking = createElement("h2");
    }
    hide() {
        this.button.hide();
        this.greeting.hide();

    }
    show() {
        this.continue.show();
        this.button3.show();
        this.order.show();
        this.button4.show();
        this.way.show();
        this.thanks.show();
        this.button5.show();
        this.enjoy.show();
        this.button6.show();
        this.showScore.show();
        this.cooking.show();
    }

    display() {
        this.button.position(1000, 100);

        this.showScore.html("Your Points : " + this.score);
        this.showScore.position(300, 100);

        this.continue.position(1100, 100);
        this.button3.position(1100, 100);
        this.button4.position(1100, 100);
        this.button5.position(1100, 100);
        this.button6.position(1100, 100);

        this.cooking.html(" I love cooking !!");
        this.cooking.position(600, 160);


        this.order.html(" I want a chicken burger !!");
        this.order.position(550, 130);

        this.way.html("Your order is on the way Sir !");
        this.way.position(800, 130);

        this.thanks.html(" Thank you !!");
        this.thanks.position(550, 130);

        this.enjoy.html("Enjoying my pizza !");
        this.enjoy.position(800, 130);


        if (this.changeState === 2) {
            this.order.show();
        }
        if (this.changeState === 5) {
            this.enjoy.show();
            this.button6.show();
            this.score = 12250;
        }

        if (this.changeState === 6) {
            this.showScore.hide();
        } else {
            this.showScore.show();
        }

        if (this.changeState === 1) {
            this.cooking.show();
        } else {
            this.cooking.hide();
        }

        if (gameState === 0 || this.changeState !== 5) {
            this.enjoy.hide();
            this.button6.hide();
        }


        if (this.changeState === 4) {
            this.thanks.show();
            this.button5.show();
            this.score = + 6125;
        }

        if (gameState === 0 || this.changeState !== 4) {
            this.thanks.hide();
            this.button5.hide();

        }

        if (this.changeState === 3) {
            this.way.show();
        }

        if (gameState === 0 || this.changeState !== 3) {
            this.way.hide();
        }
        if (gameState === 0 || this.changeState !== 2) {
            this.order.hide();
        }

        if (gameState === 0 || this.changeState !== 1) {
            this.continue.hide();
        }
        if (gameState === 0 || this.changeState !== 2) {
            this.button3.hide();
        }
        if (this.changeState === 2) {
            this.button3.show();
        }

        if (this.changeState === 3) {
            this.button4.show();
        }

        if (gameState === 0 || this.changeState !== 3) {
            this.button4.hide();
        }
        this.greeting.html("Welcome to Monomita's Cooking Game")
        this.greeting.position(510, 290);

        this.button.mousePressed(() => {
            this.button.hide();
            this.greeting.hide();
            gameState = 1;
            this.changeState = 1;
        })

        this.continue.mousePressed(() => {
            cookImg = customer1Img;
            this.changeState = 2;
        })

        this.button3.mousePressed(() => {
            cookImg = serverImg;
            this.changeState = 3;
        })

        this.button4.mousePressed(() => {
            cookImg = customer1Img;
            this.changeState = 4;
        })

        this.button5.mousePressed(() => {
            cookImg = customer2Img;
            this.changeState = 5;
        })

        this.button6.mousePressed(() => {
            cookImg = endedImg;
            this.gameState = 2;
            this.changeState = 6;
        })

    }
}