export function onRequest (context, next) {

    context.locals.welcomeTitle = () => {
        return "Welcome back " + "name";
    };

    // return a Response or the result of calling `next()`
    return next();
};
