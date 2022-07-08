# p5-evolutionary-impressions
Author: Julianna J. He <br />
Date: Jul. 7, 2022 <br />
Title: Artistic Generator
## Description
On the deployed website, there is an artistic generator which generates an approximate pixel version of the selected inspirational photo. Users can use the drag-down menu to see the generation of the other two photos. There is also a slider that allows users to see the generation in a slower mutation speed. The website will update the best design in the second image, as a better design is found in the process.
## Design Parameter Choices
I have two design parameters, which are opacity and intervals. With opacity, colors of the generated picture will vary in noticeable but small details, which can give a slightly texture change and a different perpectives of details, but won't affect the overall likeness towards the original inspirational picture. With intervals, it will affect how precise the details of the same coordinates is.
## Mutation Approach
Both opacity and intervals are controlled and changed while mutating to ensure the visuality. There is a opacity controller, which limit the max from going below 0.3 and the min from going below 0.1, in order to ensure the difference. There is a interval controller, setting the interval values random betweem mutation rate * 10 and mutation rate * 50, which ensures the mutation process is visable under high mutation rate.
## Artistic Statement
I am trying to generate the pixel version of a photo, with high similarity in both textures and colors. In the rendering process, I use the filled squares with similar colors and different opacity to the pixel of the original picture to start generating the pixel version. In the mutation process, I use the intervals and opacity to show the effects of mutation. Both intervals and opacity will be affected by the mutation rates slider bar, which can be controlled by users.
