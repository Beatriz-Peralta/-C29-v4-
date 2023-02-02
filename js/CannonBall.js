class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8, //elasticidade
      friction: 1.0, //fricçao do ar
      density: 1.0, //densidade
      isStatic: true //estatistica
    };
    this.r = 40; //medidado raio
    this.body = Bodies.circle(x, y, this.r, options); //crie um corpo circular
    this.image = loadImage("./assets/cannonball.png"); //carregue a imagem
    World.add(world, this.body); //adiciona ao mundo
  }

  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle); //defina o ângulo da bala para o canhão
    velocity.mult(20); //valor da velocidade aplicada inicialmente
    Matter.Body.setStatic(this.body, false);  //defina valor estático para o corpo
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y}); //defina a velocidade da bala para fazer a bala se mover
   
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r); //mostra a imagem
    pop();

    }
  }
  
  
