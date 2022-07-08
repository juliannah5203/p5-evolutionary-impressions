
/* exported p4_inspirations, p4_initialize, p4_render, p4_helperate */

// https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg
// https://www.gardendesign.com/pictures/images/675x529Max/site_3/asiatic-lily-cappuccino-lily-creative-commons_11653.jpg
// https://www.gardeningknowhow.com/wp-content/uploads/2019/11/red-rose-1024x678.jpg


  
function p4_inspirations() {
    let inspiration = [];
  
    inspiration[0] = {
          name: "daisy",
          assetUrl: "./assets/daisy.jpg"
      };
    inspiration[1] = {
          name: "lily",
          assetUrl: "./assets/lily.jpg"
      };
    inspiration[2] = {
          name: "rose",
          assetUrl: "./assets/rose.jpg"
      };
   
  
      return inspiration;
  }
  
  function p4_initialize(inspiration) {
    
      let initial = {};
      resizeCanvas(inspiration.image.width/2, inspiration.image.height/2);
      if (inspiration.name == "daisy"){
        initial = {type: "daisy", opacity:{min: 0.1, max: 1}, intervals: 10};    
      }
    
      if (inspiration.name == "lily"){
        initial = {type: "lily", opacity:{min: 0.1, max: 1}, intervals: 10};    
      }
    
      if (inspiration.name == "rose"){
        initial = {type: "rose", opacity:{min: 0.1, max: 1}, intervals: 10};    
      }
  
      return initial;
  }
  
  function p4_render(design, inspiration) {
    push();
    background(0);
    noStroke();
    scale(0.5);
    let xStep = inspiration.image.width / design.intervals;
    let yStep = inspiration.image.height / design.intervals;
    let [x, y] = [0,0];
    for (let i = 0; i < design.intervals; i++){
      y = 0;
      for (let j = 0; j < design.intervals; j++){
        
        for (let n = 0; n < random(5,20); n++){
          let pxColor = inspiration.image.get(x+xStep, y+yStep);
          pxColor[4] = random(design.opacity.min, design.opacity.max);
          fill(pxColor);
          square(random(x, x+xStep), random(y, y+yStep), 10);
        }
        y += yStep;
      }
      x += xStep;
    }
    pop();

  }

  
  function opaController(param, mx, rate){
    param.max = rate*param.max;
    if(param.max < 0.3){
      param.max = 0.3 + random(min(rate*param.max,mx));
      param.min = 0.1;
    }
    return param;
  }
  function intController(mn, mx, rate){
    return random(rate*mn, rate*mx);
  }
  
  function p4_mutate(design, inspiration, rate) {

    design.opacity = opaController(design.opacity, 1, rate);
    design.intervals = intController(10, 50, rate);

    
  
  }
  
  