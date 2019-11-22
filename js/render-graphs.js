const workerURL = '/js/full.render.js';
let viz = new Viz({ workerURL });

$(document).ready(function() {
   $("div[data-graphviz]").each((i, el) => {
       console.log(el.innerText);
       viz.renderSVGElement(el.innerText)
            .then((svg) => {
                $(el).html(svg);
                $(el).css('display', 'block');
            })
            .catch(error => {
                // Create a new Viz instance (@see Caveats page for more info)
                viz = new Viz({ workerURL });
                // Possibly display the error
                console.error(error);
            });
   });
});