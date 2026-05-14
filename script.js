function cambiarContenido(seccion) {
    const main = document.getElementById('contenedor-principal');

    if (seccion === 'home') {
        main.innerHTML = `
            <h4>Welcome~~</h4>
            <p>Hi guys!! .Look at this!!:</p>
            <img src="img/gudetama.jpg" style="max-width: 100%;">
        `;
    } 
    
    else if (seccion === 'info') {
        main.innerHTML = `
            <h4>Info</h4>
            <p>Created by Sanrio in 2013, his name is a combination of gude gude (the Japanese sound for being unmotivated or lazy) and tamago (egg).</p>
            <p>Gudetama isn't just a character; he’s a representation of burnout and apathy</p>
             <p>Gudetama was created by 26-year-old Sanrio designer AMY, real name Nagashima Emi (Japanese: 永嶋 瑛美), who graduated from Joshibi University of Art and Design in 2012. She usually creates female characters since she started learning how to paint, because she wants to express the beauty of women. The creation of Gudetama was inspired by an egg she was preparing for dinner after a long day at work. "The yolk looked cute...because of its droopy demeanor". </p>
        `;
    } 
    
    else if (seccion === 'Preguntas') {
        main.innerHTML = `
            <h4>Questions!!</h4>
            <div style="text-align: left;">
                <p><strong>Who created Gudetama?</strong></p>
                <p>​He was designed by Emi Nagashima (also known as Amy) in 2013</p>
                <hr>
                <p><strong>Is Gudetama a boy or a girl?</strong></p>
                <p>Actually, neither. Gudetama is officially non-binary/genderless.</p>
                 <hr>
                <p><strong>Why is Gudetama so sad/depressed?</strong></p>
                <p>Gudetama isn't necessarily sad; it's apathetic. It knows its ultimate fate is to be eaten, so it feels there is no point in putting in any effort.</p>
                
            </div>
        `;
    }
}