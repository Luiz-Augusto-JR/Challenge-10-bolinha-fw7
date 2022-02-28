
    var bandolerosVideo = document.getElementById("bandoleros");
    var music = new Audio("./src/sounds/music.mp3");
    var grande = new Audio("./src/sounds/grande.mp3");
    var lalalala = new Audio("./src/sounds/Cachorro LALALALA LALA.mp3")
    var laser1 = new Audio("./src/sounds/laser1.mp3");

    // criando a classe Ball que é uma function
    // definindo cor, raio, direção, posições e velocidade

    const Ball = function (x, y, radius) {
      this.color ="rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
      this.direction = Math.random() * Math.PI * 2
      this.radius = radius
      this.speed = Math.random() * 25 + 1
      this.x = x
      this.y = y
    }

    Ball.prototype = {
      updatePosition: function (width, height) {

        // definindo a direção aleatoria dentro do raio de 360 da bola
        // depois fazendo * a velocidade que é aleatoria tb

        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;

        // aplicando a física da bolinha na ESQUERDA

        if (this.x - this.radius < 0) {
          this.x = this.radius;

          this.direction = Math.atan2(
            Math.sin(this.direction),
            Math.cos(this.direction) * -1
          );

          // aplicando a física da bolinha na DIREITA

        } else if (this.x + this.radius > width) {
          this.x = width - this.radius;

          this.direction = Math.atan2(
            Math.sin(this.direction),
            Math.cos(this.direction) * -1
          );
        }

        // aplicando a física da bolinha no TOPO

        if (this.y - this.radius < 0) {
          this.y = this.radius;

          this.direction = Math.atan2(
            Math.sin(this.direction) * -1,
            Math.cos(this.direction)
          );

          // aplicando a física da bolinha no BOTTOM

        } else if (this.y + this.radius > height) {
          this.y = height - this.radius;

          this.direction = Math.atan2(
            Math.sin(this.direction) * -1,
            Math.cos(this.direction)
          )
        }
      }
    }

    // selecionando o canvas

    var context = document.querySelector("canvas").getContext("2d");

    // array pra armazenar bolinhas

    var balls = new Array();

    // sem o 0.5 tava bungando as bolinhas apareciam no canto inferior direito da tela

    let x = document.documentElement.clientWidth * 0.5;
    let y = document.documentElement.clientHeight * 0.5;

    function loop() {

      // fala para o navegador que deseja-se realizar uma animação
      // e pede que o navegador chame uma função específica
      // para atualizar um quadro de animação antes da próxima repaint
      // O método tem como argumento uma
      // callback que deve ser invocado antes da repaint.
      // tudo que esta aqui dentro fica sendo atualizado
      // toda vez que ele se auto chamar

      window.requestAnimationFrame(loop);

      // pegando o tamanho da tela dentro a cada loop

      let height = document.documentElement.clientHeight;
      let width = document.documentElement.clientWidth;

      // passando o tamanho para o canvas a cada loop
      // podendo assim redimencionar o tamanho da tela enquanto as bolinhas se adaptam ao novo tamanho de tela

      context.canvas.height = height;
      context.canvas.width = width;


      // for pra jogar as bolinhas no array BALL
      for (let index = 0; index < balls.length; index++) {
        let ball = balls[index];

        // passando pro context(que é o canvas)
        // as propriedades que ele vai ter, cor, posição, raio etc

        context.fillStyle = ball.color;
        context.beginPath();

        //valores originais de todas as bolinhas antes de passar pelas aleatoriedades de cada valor

        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        context.fill();

        // chamando o updatePosition(que ta dentro do prototype) aqui dentro do loop

        ball.updatePosition(width, height);

      }
    }

    // for dentro das funções pra jogar a quantidade de bolinhas que eu quero ali no array BALLS
    // math pra definir a aleatoriedade do tamanho da bolinha

    function gerandoUm() {
        balls.push(new Ball(x, y, Math.floor(Math.random() * 25 + 1)))
    }

    function gerandoUmGrande() {
        balls.push(new Ball(x, y, 300))
    }

    function gerandoUmPequeno() {
        balls.push(new Ball(x, y, 1))
    }

    function gerandoCem() {
        for (let index = 0; index < 100; index++) {
            balls.push(new Ball(x, y, Math.floor(Math.random() * 25)));
        }
    }

    function gerandoDezMil() {
        for (let index = 0; index < 10000; index++) {
            balls.push(new Ball(x, y, Math.floor(Math.random() * 25)));
        }
    }

    function pcDaNasa() {
        for (let index = 0; index < 50000; index++) {
            balls.push(new Ball(x, y, Math.floor(Math.random() * 25)));
        }
    }

    function velocidade() {
        loop()
    }

    function bandoleros(){
        bandolerosVideo.play() 
        music.pause() 
        lalalala.play()
    }

    function umaBolinha(){
        gerandoUm() 
        laser1.play() 
        laser1.currentTime=0
    }

    function play(){
        loop()
        music.play()
    }

    function buttonGrande(){
        gerandoUmGrande() 
        grande.play()
        grande.currentTime=0
    }

    function reset(){
        location = location.href
    }