<template>
    <div class="container-fluid" id="sketchHolder">

    <div class="alert alert-light" id="alert" style="position: absolute;" role="alert">
        Click or tap the screen
      </div>

</div>
</template>

<script>
// @ is an alias to /src
import * as p5 from "p5"
export default {
  name: 'Funland',
  components: {
  },
  mounted(){
      new p5(p => {

      const sources = [
        "/sketch_images/suomi.png",
        "/sketch_images/demo_1.png",
        "/sketch_images/O.png",
        "/sketch_images/aquapark.png",
        "/sketch_images/sauna.png",
        "/sketch_images/brands.png"
        ];

      let helper, img, img2, img3, img4, img5, img6;
      let multiplier;
      let ticker = 0;
 
      let cnv;
      let font;
      let vehicles = [];
      let particles = [];
      let colors = ["#1f8be3","#FFFFFF"];
      let fontSize  = p.sqrt(p.windowWidth)+100;
      let fromTop = p.windowHeight/2.8;
      let fromLeft = p.windowWidth/2-190;

       p.preload  = () => {
        font = p.loadFont('/fonts/pretty_font.ttf');
        img = p.loadImage(sources[0]);
        img2 = p.loadImage(sources[1]);
        img3 = p.loadImage(sources[2]);
        img4 = p.loadImage(sources[3]);
        img5 = p.loadImage(sources[4]);
        img6 = p.loadImage(sources[5]);
        helper = img;
      }


      p.setup = () => {
        cnv = p.createCanvas(p.windowWidth, p.windowHeight);
        cnv.parent("sketchHolder");
        let points = font.textToPoints("Suomi",fromLeft,fromTop,fontSize);
        for (let index = 0; index < points.length; index++) {
          let pt = points[index];
          let vehicle = new Vehicle(pt.x, pt.y);
          vehicles.push(vehicle);
        }
        cnv.mouseClicked(switchTheme);
      };


      function startSketch(){
        vehicles = []
        multiplier = p.ceil(p.windowWidth/1000);
        p.pixelDensity(1);
        helper.loadPixels();
        for (var x = 0; x < helper.width; x++) {
          for (var y = 0; y < helper.height; y++) {
            var index = x + y * helper.width;
            var c = helper.pixels[index * 4];
            var b = p.brightness([c]);
            if (b > 50) {
              particles.push(new Vehicle(x*multiplier + (p.windowWidth-(350*multiplier))/2, y*multiplier+100));
            }
          }
        }
        console.log(particles.length)
      }

      function switchTheme(){
       // $(".alert").css("display","none");
        if(ticker === 1){
          helper = img2;
        }else if(ticker === 2){
          helper = img3;
        }else if(ticker === 3){
          helper = img4;
        }else if(ticker === 4){
          helper = img5;
        }else if(ticker === 5){
          helper = img6;
        }
        else if(ticker === 6){
          helper = img;
          ticker = 0;
        }
        particles = [];
        startSketch();
        ticker++;
        console.log(ticker)
      }


      
      p.draw = () => {
        p.background(50);
        for (let index = 0; index < vehicles.length; index++) {
          let v = vehicles[index];
          v.behav();
          v.update();
          v.showtext();
        }
        for (let ind = 0; ind < particles.length; ind+=11) {
          let pd = particles[ind];
          pd.behav();
          pd.update();
          pd.show();
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        vehicles = [];
        particles = [];
        startSketch();
      }
   

      function Vehicle(x, y){
        this.pos = p.createVector(p.random(p.width), p.random(-p.height,p.height));
        this.target  = p.createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.acc = p.createVector();
        this.r = 4;
        this.maxSpeed = 18.7;
        this.maxForce = 4.9;
        this.color = p.random(colors);

      }

      Vehicle.prototype.behav = function(){
        let arrive = this.arrive(this.target);
        this.applyForce(arrive);
        let mouse = p.createVector(p.mouseX,p.mouseY);
        let flee = this.flee(mouse);
        arrive.mult(1);
        flee.mult(0.8);
        this.applyForce(arrive);
        this.applyForce(flee);
      }
      
      Vehicle.prototype.applyForce = function(f){
        this.acc.add(f);
      }

      Vehicle.prototype.update = function(){
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
      }

      Vehicle.prototype.show = function(){
        p.stroke(this.color);
        p.strokeWeight(this.r);
        p.point(this.pos.x, this.pos.y);
      }

      Vehicle.prototype.showtext = function(){
        p.stroke(this.color);
        p.strokeWeight(8);
        p.point(this.pos.x, this.pos.y);
      }

      Vehicle.prototype.arrive = function(target){
        let desired = p5.Vector.sub(target,this.pos);
        let d = desired.mag();
        let speed = this.maxSpeed;
        if(d < 100){
          speed = p.map(d,0,100,0,this.maxSpeed);
        }
        desired.setMag(speed);
        let steer = p5.Vector.sub(desired,this.vel);
        steer.limit(this.maxForce);
        return steer;
      }
      
      
      Vehicle.prototype.flee = function(target)
      {
        let desired = p5.Vector.sub(target,this.pos);
        let d = desired.mag();
        if(d < 50)
        {
        desired.setMag(this.maxSpeed);
        desired.mult(-1);
        let steer = p5.Vector.sub(desired,this.vel);
        steer.limit(this.maxForce);
        return steer;
        }else
        {
        return p.createVector(0,0);
        }
      }

    });
  }
}
</script>
