$(function () {
    'use strict';

    blueimp.Gallery([
	{
            title: 'Periodic boundary conditions',
            subtitle: 'A non-cartesian doubly-periodic metasurface used to deflect a normally-incident plane wave',
            href: 'img_diogenes/dielectricReflectarray.png',
            type: 'image/png'
        },
	{
            title: 'Curvilinear elements',
            subtitle: 'Resonance of a nanosphere gold dimer with linear and quadratic elements',
            href: 'img_diogenes/curvilinear.png',
            type: 'image/png'
	},
	{
            title: 'Non-local dispersion model',
            subtitle: 'Gold nanosphere resonance above plasmon frequency with local and non-local dispersion models',
            href: 'img_diogenes/nonLocal.png',
            type: 'image/png'
	},
	{
            title: 'EELS source',
            subtitle: 'Excitation of surface plasmons on a gold nanosphere by a sweeping electron beam',
            href: 'img_diogenes/eels.png',
            type: 'image/png'
	},
	{
            title: 'Realistic computations',
            subtitle: 'Gap plasmon excitation under a metallic nanocube with realistic rounded edges',
            href: 'img_diogenes/nanoCube.png',
            type: 'image/png'
        }
    ], {
	container: '#blueimp-image-carousel',
        carousel: true
    });

});

