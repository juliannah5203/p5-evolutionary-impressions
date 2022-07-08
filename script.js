
/* exported p4_inspirations, p4_initialize, p4_render, p4_mutate */

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
    return {};
  }
  
  function p4_render(design, inspiration) {}
  
  function p4_mutate(design, inspiration, rate) {}