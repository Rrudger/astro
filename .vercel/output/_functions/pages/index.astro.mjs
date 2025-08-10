import { c as createComponent, m as maybeRenderHead, r as renderScript, a as renderTemplate, b as createAstro, d as addAttribute, e as renderHead, f as renderSlot, g as renderComponent } from '../chunks/astro/server_5cMBZCfD.mjs';
import 'kleur/colors';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="container"> <main> <section class="h-screen bg-accent grid place-content-center"> <div id="dataDiv" class="mb-8">
initial value
</div> <button id="getDataBtn" class="cursor-pointer rounded-xl border border-2 border-primary px-4 py-2
			transition-transform duration-300 hover:scale-125">
test
</button> </section> </main> ${renderScript($$result, "/home/rudger/test/astro/src/components/Main.astro?astro&type=script&index=0&lang.ts")} </div>`;
}, "/home/rudger/test/astro/src/components/Main.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.jpg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro-MongoDB</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/rudger/test/astro/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {})} ` })}`;
}, "/home/rudger/test/astro/src/pages/index.astro", void 0);

const $$file = "/home/rudger/test/astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
