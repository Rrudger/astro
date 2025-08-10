import 'es-module-lexer';
import './chunks/astro-designed-error-pages_ClNEgaUK.mjs';
import 'kleur/colors';
import './chunks/astro/server_5cMBZCfD.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_CZz7oS4J.mjs';

function onRequest$1 (context, next) {

    context.locals.welcomeTitle = () => {
        return "Welcome back " + "name";
    };

    // return a Response or the result of calling `next()`
    return next();
}

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
