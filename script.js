
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
        initial = {type: "daisy", opacity:{min: 0, max: 255}, intervals: 3};    
      }
    
      if (inspiration.name == "lily"){
        initial = {type: "lily", opacity:{min: 128, max: 255}, intervals: 3};    
      }
    
      if (inspiration.name == "rose"){
        initial = {type: "rose", opacity:{min: 128, max: 255}, intervals: 3};    
      }
  
      return initial;
  }
  
  function p4_render(design, inspiration) {
    push();
    background(0);
    noStroke();
    
    scale(0.5);
    let ix = inspiration.image.width / design.intervals;
    let iy = inspiration.image.height / design.intervals;
    let [x, y] = [0,0];
    
    for (let i = 0; i < design.intervals; i++){
      y = 0;
      
      for (let j = 0; j < design.intervals; j++){
        let k = random(0,11);
        for (let n = 0; n < k; n++){
  
          
          let px_color = inspiration.image.get(x+ix, y+iy);
          //console.log(px_color)
          px_color[3] = random(design.opacity.min, design.opacity.max);
          fill(px_color);
          square(random(x, x+ix), random(y, y+iy), 10);
        }
        y += iy;
      }
      x += ix;
    }
    pop();
    //console.log(x, y)
  }
  
  function helper(num, min, max, rate) {
    return constrain(randomGaussian(num, (rate * (max - min)) / 20), min, max);
  }
  
  
  function controller(param, mn, mx, rate){
    let i = helper(param.min, mn, param.max, rate);
    let j = helper(param.max, param.min, mx, rate);
    param.max = max(i, j);
    param.min = min(i, j);
    return param;
  }
  
  function p4_mutate(design, inspiration, rate) {
  
    design.opacity = controller(design.opacity, 0, 255, rate);
  
    design.intervals =  floor(helper(design.intervals, 2, 50, rate));

    
  
  }
  
  