import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region node_modules/.pnpm/lucide-react@0.468.0_react@19.2.6/node_modules/lucide-react/dist/esm/shared/src/utils.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/.pnpm/lucide-react@0.468.0_react@19.2.6/node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/.pnpm/lucide-react@0.468.0_react@19.2.6/node_modules/lucide-react/dist/esm/Icon.js
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
	return (0, import_react.createElement)("svg", {
		ref,
		...defaultAttributes,
		width: size,
		height: size,
		stroke: color,
		strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
		className: mergeClasses("lucide", className),
		...rest
	}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
//#endregion
//#region node_modules/.pnpm/lucide-react@0.468.0_react@19.2.6/node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
		...props
	}));
	Component.displayName = `${iconName}`;
	return Component;
};
//#endregion
//#region node_modules/.pnpm/lucide-react@0.468.0_react@19.2.6/node_modules/lucide-react/dist/esm/icons/arrow-right.js
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowRight = createLucideIcon("ArrowRight", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
//#endregion
//#region node_modules/.pnpm/lucide-react@0.468.0_react@19.2.6/node_modules/lucide-react/dist/esm/icons/mail.js
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Mail = createLucideIcon("Mail", [["rect", {
	width: "20",
	height: "16",
	x: "2",
	y: "4",
	rx: "2",
	key: "18n3k1"
}], ["path", {
	d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
	key: "1ocrg3"
}]]);
//#endregion
//#region node_modules/.pnpm/lucide-react@0.468.0_react@19.2.6/node_modules/lucide-react/dist/esm/icons/map-pin.js
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MapPin = createLucideIcon("MapPin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]);
//#endregion
//#region node_modules/.pnpm/lucide-react@0.468.0_react@19.2.6/node_modules/lucide-react/dist/esm/icons/menu.js
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Menu = createLucideIcon("Menu", [
	["line", {
		x1: "4",
		x2: "20",
		y1: "12",
		y2: "12",
		key: "1e0a9i"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "6",
		y2: "6",
		key: "1owob3"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "18",
		y2: "18",
		key: "yk5zj1"
	}]
]);
//#endregion
//#region node_modules/.pnpm/lucide-react@0.468.0_react@19.2.6/node_modules/lucide-react/dist/esm/icons/phone.js
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Phone = createLucideIcon("Phone", [["path", {
	d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
	key: "foiqr5"
}]]);
//#endregion
//#region node_modules/.pnpm/lucide-react@0.468.0_react@19.2.6/node_modules/lucide-react/dist/esm/icons/x.js
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("X", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region app/site-components.tsx
var import_jsx_runtime = require_jsx_runtime();
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "/",
		className: "logo",
		"aria-label": "NeoHold Invest начало",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			className: "logo-mark",
			src: "/brand/neohold-mark.png",
			alt: ""
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "NEOHOLD" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "INVEST" })] })]
	});
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [path, setPath] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const sync = () => setScrolled(window.scrollY > 24);
		sync();
		setPath(window.location.pathname);
		window.addEventListener("scroll", sync, { passive: true });
		return () => window.removeEventListener("scroll", sync);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.classList.toggle("nav-open", open);
		const close = (event) => event.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", close);
		return () => {
			document.body.classList.remove("nav-open");
			window.removeEventListener("keydown", close);
		};
	}, [open]);
	const links = [
		["/", "Начало"],
		["/#about", "За нас"],
		["/portfolio", "Проекти"],
		["/#principles", "Подход"],
		["/#partners", "Партньори"],
		["/#contact", "Контакти"]
	];
	const active = (href) => href === "/portfolio" ? path === "/portfolio" : href === "/" ? path === "/" : false;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `header${scrolled ? " header-scrolled" : ""}${open ? " menu-open" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container nav",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					id: "primary-navigation",
					className: open ? "nav-links open" : "nav-links",
					"aria-label": "Основна навигация",
					children: [links.map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: active(href) ? "nav-link active" : "nav-link",
						"aria-current": active(href) ? "page" : void 0,
						href,
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })
					}, href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "nav-cta",
						href: "/#contact",
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Изпратете запитване" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "nav-cta-icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "menu",
					"aria-controls": "primary-navigation",
					"aria-label": open ? "Затвори менюто" : "Отвори менюто",
					"aria-expanded": open,
					onClick: () => setOpen(!open),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container footer-main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Инвестиционна компания за модерни жилищни сгради, редови къщи и бутикови комплекси." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Навигация" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#about",
					children: "За нас"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/portfolio",
					children: "Проекти"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#partners",
					children: "Партньори"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#contact",
					children: "Контакти"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Правна информация" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/privacy-policy",
					children: "Лични данни"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/terms-conditions",
					children: "Условия за ползване"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/accessibility-statement",
					children: "Достъпност"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Контакт" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "tel:+359887102828",
					children: "+359 887 102 828"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "mailto:ofiice@neoholdinvest.bg",
					children: "ofiice@neoholdinvest.bg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"гр. София, ж.к. Иван Вазов",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"ул. „Краище“, бл. 16"
				] })
			] })
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container footer-bottom",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			"© ",
			(/* @__PURE__ */ new Date()).getFullYear(),
			" NeoHold Invest. Всички права запазени."
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Инвестиционните решения изискват индивидуална оценка на риска." })]
	})] });
}
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "contact section",
		id: "contact",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container contact-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "eyebrow light",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Свържете се с нас"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					"Нека обсъдим",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "следващата възможност." })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "За информация относно проект „Лозана“, партньорство или инвестиционна идея — изпратете кратко запитване." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contact-lines",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+359887102828",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 18 }), "+359 887 102 828"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:ofiice@neoholdinvest.bg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 }), "ofiice@neoholdinvest.bg"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 }), "София, ж.к. Иван Вазов, ул. „Краище“, бл. 16"] })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "contact-form",
				onSubmit: (e) => e.preventDefault(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "two",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Име", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							autoComplete: "name",
							placeholder: "Вашето име"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Телефон", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							inputMode: "tel",
							autoComplete: "tel",
							placeholder: "+359"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Имейл", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						required: true,
						autoComplete: "email",
						placeholder: "name@company.bg"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Тема", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						defaultValue: "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Изберете тема"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Интерес към проект „Лозана“" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Инвестиционно партньорство" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Друго" })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Съобщение", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 4,
						placeholder: "Разкажете ни накратко..."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "btn btn-copper",
						type: "submit",
						children: ["Изпрати запитване ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
					})
				]
			})]
		})
	});
}
function LegalPage({ title, updated, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "legal",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container legal-head",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Правна информация"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Последна актуализация: ", updated] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container legal-body",
				children
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { ContactSection, Footer, Header, LegalPage };
