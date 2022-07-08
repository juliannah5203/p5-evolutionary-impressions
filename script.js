
/* exported p4_inspirations, p4_initialize, p4_render, p4_mutate */

// https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg
// https://www.gardendesign.com/pictures/images/675x529Max/site_3/asiatic-lily-cappuccino-lily-creative-commons_11653.jpg
// https://www.gardeningknowhow.com/wp-content/uploads/2019/11/red-rose-1024x678.jpg


function prandomHash(i, min, max){
    randomSeed(i*200);
    if (max == undefined){
      max = min;
      min = 0;
    }
      
    return random(1) * (max - min) + min;
  }
  
  function randomHash(i, min, max){
    return prandomHash(prandomHash(i, max+min), min, max);
  }
  const MAX_R = {daisy: 150, lily: 150, rose: 50};
  const MIN_R = {daisy: 20, lily: 10, rose: 5};
  
  const MAX_C = {daisy: 25, lily: 20, rose: 50};
  const MIN_C = {daisy: 0, lily: 1, rose: 1};
  
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
        initial = {type: "daisy", r_range:{max: 100, min: 20}, opa_range:{min: 128, max: 255}, intervals: 5, 
                sample_x: {min: 0, max: 1}, sample_y:{min: 0, max: 1}, c_range:{min: 0, max: 10}};    
      }
    
      if (inspiration.name == "lily"){
        initial = {type: "lily", r_range:{max: 100, min: 20}, opa_range:{min: 128, max: 255}, intervals: 3, 
                sample_x: {min: 0, max: 1}, sample_y:{min: 0, max: 1}, c_range:{min: 0, max: 10}};    
      }
    
      if (inspiration.name == "rose"){
        initial = {type: "rose", r_range:{max: 100, min: 5}, opa_range:{min: 128, max: 255}, intervals: 4, 
                sample_x: {min: 0, max: 1}, sample_y:{min: 0, max: 1}, c_range:{min: 1, max: 10}};    
      }
  
      return initial;
  }
  
  function p4_render(design, inspiration) {
    push();
    background(255);
    noStroke();
    
    scale(0.5);
    let iw = inspiration.image.width / design.intervals;
    let ih = inspiration.image.height / design.intervals;
    let [x, y] = [0,0];
    
    for (let i = 0; i < design.intervals; i++){
      //console.log(x);
      y = 0;
      for (let j = 0; j < design.intervals; j++){
        let k = floor(random(design.c_range.min, design.c_range.max+1));
        for (let n = 0; n < k; n++){
          let sx = random(x + design.sample_x.min * iw, x + design.sample_x.max * iw);
          let sy = random(y + design.sample_y.min * ih, y + design.sample_x.max * ih);
          
          let px_color = inspiration.image.get(sx, sy);
          //console.log(px_color)
          px_color[3] = random(design.opa_range.min, design.opa_range.max);
          fill(px_color);
          circle(random(x, x+iw), random(y, y+ih), 13);
        }
        y += ih;
      }
      x += iw;
    }
    pop();
    //console.log(x, y)
  }
  
  function mut(num, min, max, rate) {
    return constrain(randomGaussian(num, (rate * (max - min)) / 20), min, max);
  }
  
  
  
  const INIT_INTERVALS = 8;
  
  function gen_mut_param(param, mn, mx, rate){
    let i = mut(param.min, mn, param.max, rate);
    let j = mut(param.max, param.min, mx, rate);
    param.max = max(i, j);
    param.min = min(i, j);
    return param;
  }
  
  function p4_mutate(design, inspiration, rate) {
    //console.log(design.min_r, MIN_R[design.type], design.max_r, rate)
    design.r_range = gen_mut_param(design.r_range, MIN_R[design.type], MAX_R[design.type], rate);
   // console.log(design.r_range)
  
  
    design.opa_range = gen_mut_param(design.opa_range, 0, 255, rate);
  
    design.intervals =  floor(mut(design.intervals, 2, 20, rate));
    //console.log(design.intervals)
    design.sample_x = gen_mut_param(design.sample_x, 0, 1, rate);
    design.sample_y = gen_mut_param(design.sample_y, 0, 1, rate);
    
    design.c_range = gen_mut_param(design.c_range, MIN_C[design.type], MAX_C[design.type], rate);
  }
  
  