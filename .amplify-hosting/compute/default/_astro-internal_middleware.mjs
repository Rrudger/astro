import 'es-module-lexer';
import './chunks/astro-designed-error-pages_gPiogKRH.mjs';
import 'kleur/colors';
import './chunks/astro/server_Duw5E2X6.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_BLSP-Fz1.mjs';

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
