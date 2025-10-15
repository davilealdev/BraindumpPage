const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 400,
    reset: true
})

// Navbar

sr.reveal(' #logo', {delay:100, origin:'left'})
sr.reveal(' #first', {delay:200, origin: 'top'})
sr.reveal(' #second', {delay:300, origin:'top'})
sr.reveal(' #thirty', {delay:400, origin:'top'})
sr.reveal(' .button', {delay:300, origin:'right'})

//  Container

sr.reveal(' #firstbutton', {delay:400, origin:'top'})
sr.reveal(' #secondbutton', {delay:500, origin:'top'})
sr.reveal(' #bdPreview', {delay:100, origin:'bottom'})