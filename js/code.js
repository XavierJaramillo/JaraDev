// modal control
$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
})

// panel control
window.onload = function() {
    setPanel('init');
};

function setPanel(panel) {
    panelInicio = document.getElementById('inicio');
    panelSobremi = document.getElementById('sobremi');
    panelExperiencia = document.getElementById('experiencia');
    panelProyectos = document.getElementById('proyectos');

    switch (panel) {
        case 'init':
            initPanel(panelInicio);
            break;
        case 'inicio':
            setInicio(panelInicio, panelSobremi, panelExperiencia, panelProyectos);
            break;
        case 'sobremi':
            setSobremi(panelInicio, panelSobremi, panelExperiencia, panelProyectos);
            break;
        case 'experiencia':
            setExperiencia(panelInicio, panelSobremi, panelExperiencia, panelProyectos);
            break;
        case 'proyectos':
            setProyectos(panelInicio, panelSobremi, panelExperiencia, panelProyectos);
            break;
    }
}

function initPanel(panelInicio) {
    panelInicio.style.display = "flex";
}

function setInicio(panelInicio, panelSobremi, panelExperiencia, panelProyectos) {
    panelInicio.style.display = "flex";
    panelSobremi.style.display = "none";
    panelExperiencia.style.display = "none";
    panelProyectos.style.display = "none";
}

function setSobremi(panelInicio, panelSobremi, panelExperiencia, panelProyectos) {
    panelInicio.style.display = "none";
    panelSobremi.style.display = "block";
    panelExperiencia.style.display = "none";
    panelProyectos.style.display = "none";
}

function setExperiencia(panelInicio, panelSobremi, panelExperiencia, panelProyectos) {
    panelInicio.style.display = "none";
    panelSobremi.style.display = "none";
    panelExperiencia.style.display = "block";
    panelProyectos.style.display = "none";
}

function setProyectos(panelInicio, panelSobremi, panelExperiencia, panelProyectos) {
    panelInicio.style.display = "none";
    panelSobremi.style.display = "none";
    panelExperiencia.style.display = "none";
    panelProyectos.style.display = "block";
}