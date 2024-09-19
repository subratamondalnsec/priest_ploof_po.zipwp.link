import {
  r as t,
  c as o,
  h as r,
  H as s,
  a as e,
  F as n,
} from "./p-cc7ce8c7.js";
import { i as a } from "./p-d556eec7.js";
import { g as i, a as l, s as c, b as u } from "./p-b8e5d313.js";
import { m as d } from "./p-7ef0f71c.js";
import { g as b } from "./p-a0a91ecb.js";
import { a as h } from "./p-18e45a13.js";
import { a as g } from "./p-1c2e2695.js";
const p =
  ":host{display:block}[hidden]{display:none !important}::slotted(*:not(:first-child)){margin-top:0.5rem;margin-bottom:0}::slotted(ul){line-height:1.4em;list-style-type:disc;margin:0;padding:0;padding-left:20px}.alert{font-family:var(--sc-input-font-family);font-weight:var(--sc-font-weight-normal);font-size:var(--sc-button-font-size-medium);line-height:var(--sc-line-height-dense);border-radius:var(--sc-alert-border-radius, var(--sc-border-radius-medium));padding:var(--sc-spacing-large);display:flex;align-items:flex-start;border:var(--sc-alert-border, var(--sc-input-border));border-top:solid var(--sc-alert-border-width, 3px);color:var(--sc-alert-color, var(--sc-input-label-color));background:var(--sc-alert-background-color, var(--sc-color-white));box-shadow:var(--sc-shadow-small)}.alert__text{flex:1}.alert.alert--primary{border-top-color:var(--sc-alert-primary-border-color, var(--sc-color-primary-500))}.alert.alert--primary a{color:var(--sc-color-primary-900)}.alert.alert--primary .alert__title{color:var(--sc-alert-title-color, var(--sc-color-gray-800))}.alert.alert--primary .alert__icon{color:var(--sc-alert-primary-icon-color, var(--sc-color-primary-500))}.alert.alert--info{border-top-color:var(--sc-alert-info-border-color, var(--sc-color-info-500))}.alert.alert--info a{color:var(--sc-color-info-900)}.alert.alert--info .alert__title{color:var(--sc-alert-title-color, var(--sc-color-gray-800))}.alert.alert--info .alert__icon{color:var(--sc-alert-info-icon-color, var(--sc-color-info-500))}.alert.alert--danger{border-top-color:var(--sc-alert-danger-border-color, var(--sc-color-danger-500))}.alert.alert--danger a{color:var(--sc-color-danger-900)}.alert.alert--danger .alert__title{color:var(--sc-alert-title-color, var(--sc-color-gray-800))}.alert.alert--danger .alert__icon{color:var(--sc-alert-danger-icon-color, var(--sc-color-danger-500))}.alert.alert--warning{border-top-color:var(--sc-alert-warning-border-color, var(--sc-color-warning-500))}.alert.alert--warning a{color:var(--sc-color-warning-900)}.alert.alert--warning .alert__title{color:var(--sc-alert-title-color, var(--sc-color-gray-800))}.alert.alert--warning .alert__icon{color:var(--sc-alert-warning-icon-color, var(--sc-color-warning-500))}.alert.alert--success{border-top-color:var(--sc-alert-success-border-color, var(--sc-color-success-500))}.alert.alert--success a{color:var(--sc-color-success-900)}.alert.alert--success .alert__title{color:var(--sc-alert-title-color, var(--sc-color-gray-800))}.alert.alert--success .alert__icon{color:var(--sc-alert-success-icon-color, var(--sc-color-success-500))}.alert__icon{flex:1;flex:0 0 auto;display:flex;align-items:center;font-size:var(--sc-font-size-large);padding-inline-end:var(--sc-spacing-medium)}.alert__title{font-weight:var(--sc-font-weight-semibold)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.alert__close{transition:background-color var(--sc-transition-fast) ease;display:inline-flex;border-radius:var(--sc-border-radius-small);padding:var(--sc-spacing-x-small);margin-left:auto;cursor:pointer}.alert__close svg{width:1em;height:1em}.alert--is-rtl{text-align:right}.alert--is-rtl.alert-close{margin-right:auto;margin-left:unset}.alert--is-rtl ::slotted(ul){margin:0;padding:0;padding-right:20px}";
const f = class {
  constructor(r) {
    t(this, r);
    this.scHide = o(this, "scHide", 7);
    this.scShow = o(this, "scShow", 7);
    this.open = false;
    this.title = undefined;
    this.closable = false;
    this.type = "primary";
    this.duration = Infinity;
    this.scrollOnOpen = undefined;
    this.scrollMargin = "0px";
    this.noIcon = undefined;
    this.autoHideTimeout = undefined;
  }
  async show() {
    if (this.open) {
      return;
    }
    this.open = true;
  }
  async hide() {
    if (!this.open) {
      return;
    }
    this.open = false;
  }
  restartAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = setTimeout(() => this.hide(), this.duration);
    }
  }
  handleMouseMove() {
    this.restartAutoHide();
  }
  handleCloseClick() {
    this.hide();
  }
  handleOpenChange() {
    this.open ? this.scShow.emit() : this.scHide.emit();
    if (this.open && this.scrollOnOpen) {
      this.el.scrollIntoView({ behavior: "smooth" });
    }
  }
  componentDidLoad() {
    this.handleOpenChange();
  }
  iconName() {
    switch (this.type) {
      case "danger":
        return "alert-circle";
      case "success":
        return "check-circle";
      case "warning":
        return "alert-triangle";
      default:
        return "info";
    }
  }
  icon() {
    return r("sc-icon", { name: this.iconName() });
  }
  render() {
    return r(
      s,
      { style: { "scroll-margin-top": this.scrollMargin } },
      r(
        "div",
        {
          class: {
            alert: true,
            "alert--primary": this.type === "primary",
            "alert--success": this.type === "success",
            "alert--info": this.type === "info",
            "alert--warning": this.type === "warning",
            "alert--danger": this.type === "danger",
            "alert--is-rtl": a(),
          },
          part: "base",
          role: "alert",
          "aria-live": "assertive",
          "aria-atomic": "true",
          "aria-hidden": this.open ? "false" : "true",
          hidden: this.open ? false : true,
          onMouseMove: () => this.handleMouseMove(),
        },
        r(
          "div",
          { class: "alert__icon", part: "icon" },
          r("slot", { name: "icon" }, this.icon())
        ),
        r(
          "div",
          { class: "alert__text", part: "text" },
          r(
            "div",
            { class: "alert__title", part: "title" },
            r("slot", { name: "title" }, this.title)
          ),
          r(
            "div",
            { class: "alert__message", part: "message" },
            r("slot", null)
          )
        ),
        this.closable &&
          r(
            "span",
            {
              part: "close",
              class: "alert__close",
              onClick: () => this.handleCloseClick(),
            },
            r("span", { class: "sr-only" }, "Dismiss"),
            r(
              "svg",
              {
                class: "h-5 w-5",
                "x-description": "Heroicon name: solid/x",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
              },
              r("path", {
                "fill-rule": "evenodd",
                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                "clip-rule": "evenodd",
              })
            )
          )
      )
    );
  }
  get el() {
    return e(this);
  }
  static get watchers() {
    return { open: ["handleOpenChange"] };
  }
};
f.style = p;
const v =
  ':host{display:block;position:var(--sc-block-ui-position, absolute);top:-5px;left:-5px;right:-5px;bottom:-5px;overflow:hidden;display:flex;align-items:center;justify-content:center}:host>*{z-index:1}:host:after{content:"";position:var(--sc-block-ui-position, absolute);top:0;left:0;right:0;bottom:0;cursor:wait;background:var(--sc-block-ui-background-color, var(--sc-color-white));opacity:var(--sc-block-ui-opacity, 0.15)}:host.transparent:after{background:transparent}.overlay__content{font-size:var(--sc-font-size-large);font-weight:var(--sc-font-weight-semibold);display:grid;gap:0.5em;text-align:center}';
const m = class {
  constructor(o) {
    t(this, o);
    this.zIndex = 1;
    this.transparent = undefined;
    this.spinner = undefined;
  }
  render() {
    return r(
      "div",
      {
        part: "base",
        class: { overlay: true, transparent: this.transparent },
        style: { "z-index": this.zIndex.toString() },
      },
      r(
        "div",
        { class: "overlay__content", part: "content" },
        r(
          "slot",
          { name: "spinner" },
          !this.transparent && this.spinner && r("sc-spinner", null)
        ),
        r("slot", null)
      )
    );
  }
};
m.style = v;
const x =
  ':host{display:inline-block;width:auto;cursor:pointer;--primary-color:var(--sc-color-primary-text);--primary-background:var(--sc-color-primary-500)}:host([full]){display:block}::slotted(*){pointer-events:none}.button{box-sizing:border-box;z-index:10;display:inline-flex;align-items:stretch;justify-content:center;width:100%;border-style:solid;border-width:var(--sc-input-border-width);font-family:var(--sc-input-font-family);font-weight:var(--sc-font-weight-semibold);text-decoration:none;user-select:none;white-space:nowrap;vertical-align:middle;padding:0;transition:var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) border, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow, var(--sc-input-transition, var(--sc-transition-medium)) opacity;cursor:inherit}.button::-moz-focus-inner{border:0}.button:focus{outline:none}.button:focus-visible{box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.button.button--disabled{cursor:not-allowed}.button.button--disabled *{pointer-events:none}.button.button--disabled .button__label,.button.button--disabled .button__suffix,.button.button--disabled .button__prefix{opacity:0.5}.button ::slotted(.sc--icon){pointer-events:none}.button__prefix,.button__suffix{flex:0 0 auto;display:flex;align-items:center}.button__label{display:flex;align-items:center}.button__label ::slotted(sc-icon){vertical-align:-2px}.button:not(.button--text):not(.button--link){box-shadow:var(--sc-shadow-small)}.button.button--standard.button--default{background-color:var(--sc-button-default-background-color, var(--sc-color-white));border-color:var(--sc-button-default-border-color, var(--sc-color-gray-300));color:var(--sc-button-default-color, var(--sc-color-gray-600))}.button.button--standard.button--default:hover:not(.button--disabled){background-color:var(--sc-button-default-hover-background-color, var(--sc-color-white));border-color:var(--sc-button-default-focus-border-color, var(--primary-background));color:var(--primary-background)}.button.button--standard.button--default:focus:not(.button--disabled){background-color:var(--sc-button-default-focus-background-color, var(--sc-color-white));border-color:var(--sc-button-default-focus-border-color, var(--sc-color-white));color:var(--primary-background);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.button.button--standard.button--default:active:not(.button--disabled){background-color:var(--sc-button-default-active-background-color, var(--sc-color-white));border-color:var(--sc-button-default-active-border-color, var(--sc-color-white));color:var(--primary-background)}.button.button--standard.button--primary{background-color:var(--primary-background);border-color:var(--primary-background);color:var(--primary-color)}.button.button--standard.button--primary:hover:not(.button--disabled){opacity:0.8}.button.button--standard.button--primary:focus:not(.button--disabled){opacity:0.8;color:var(--primary-color);border-color:var(--sc-color-white);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.button.button--standard.button--primary:active:not(.button--disabled){background-color:var(--primary-background);border-color:var(--sc-color-white);color:var(--primary-color)}.button.button--standard.button--success{background-color:var(--sc-color-success-500);border-color:var(--sc-color-success-500);color:var(--sc-color-success-text)}.button.button--standard.button--success:hover:not(.button--disabled){background-color:var(--sc-color-success-400);border-color:var(--sc-color-success-400);color:var(--sc-color-success-text)}.button.button--standard.button--success:focus:not(.button--disabled){background-color:var(--sc-color-success-400);border-color:var(--sc-color-success-400);color:var(--sc-color-success-text);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-success)}.button.button--standard.button--success:active:not(.button--disabled){background-color:var(--sc-color-success-500);border-color:var(--sc-color-success-500);color:var(--sc-color-success-text)}.button.button--standard.button--info{background-color:var(--sc-color-info-500);border-color:var(--sc-color-info-500);color:var(--sc-color-info-text)}.button.button--standard.button--info:hover:not(.button--disabled){background-color:var(--sc-color-info-400);border-color:var(--sc-color-info-400);color:var(--sc-color-info-text)}.button.button--standard.button--info:focus:not(.button--disabled){background-color:var(--sc-color-info-400);border-color:var(--sc-color-info-400);color:var(--sc-color-info-text);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-info)}.button.button--standard.button--info:active:not(.button--disabled){background-color:var(--sc-color-info-500);border-color:var(--sc-color-info-500);color:var(--sc-color-info-text)}.button.button--standard.button--warning{background-color:var(--sc-color-warning-500);border-color:var(--sc-color-warning-500);color:var(--sc-color-warning-text)}.button.button--standard.button--warning:hover:not(.button--disabled){background-color:var(--sc-color-warning-400);border-color:var(--sc-color-warning-400);color:var(--sc-color-warning-text)}.button.button--standard.button--warning:focus:not(.button--disabled){background-color:var(--sc-color-warning-400);border-color:var(--sc-color-warning-400);color:var(--sc-color-warning-text);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-warning)}.button.button--standard.button--warning:active:not(.button--disabled){background-color:var(--sc-color-warning-500);border-color:var(--sc-color-warning-500);color:var(--sc-color-warning-text)}.button.button--standard.button--danger{background-color:var(--sc-color-danger-500);border-color:var(--sc-color-danger-500);color:var(--sc-color-danger-text)}.button.button--standard.button--danger:hover:not(.button--disabled){background-color:var(--sc-color-danger-400);border-color:var(--sc-color-danger-400);color:var(--sc-color-danger-text)}.button.button--standard.button--danger:focus:not(.button--disabled){background-color:var(--sc-color-danger-400);border-color:var(--sc-color-danger-400);color:var(--sc-color-danger-text);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-danger)}.button.button--standard.button--danger:active:not(.button--disabled){background-color:var(--sc-color-danger-500);border-color:var(--sc-color-danger-500);color:var(--sc-color-danger-text)}.button--outline{background:none;border:solid 1px}.button--outline.button--default{border-color:var(--sc-color-gray-300);color:var(--sc-color-gray-700)}.button--outline.button--default:hover:not(.button--disabled){border-color:var(--primary-background);background-color:var(--primary-background);color:var(--sc-color-white)}.button--outline.button--default:focus:not(.button--disabled){border-color:var(--primary-background);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--primary-background)/var(--sc-focus-ring-alpha)}.button--outline.button--default:active:not(.button--disabled){opacity:0.8;color:var(--sc-color-white)}.button--outline.button--primary{border-color:var(--primary-background);color:var(--primary-background)}.button--outline.button--primary:hover:not(.button--disabled){background-color:var(--primary-background);opacity:0.8;color:var(--sc-color-white)}.button--outline.button--primary:focus:not(.button--disabled){border-color:var(--primary-background);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--primary-background)/var(--sc-focus-ring-alpha)}.button--outline.button--primary:active:not(.button--disabled){border-color:var(--primary-background);background-color:var(--primary-background);opacity:0.9;color:var(--sc-color-white)}.button--outline.button--success{border-color:var(--sc-color-success-500);color:var(--sc-color-success-500)}.button--outline.button--success:hover:not(.button--disabled){background-color:var(--sc-color-success-500);color:var(--sc-color-white)}.button--outline.button--success:focus:not(.button--disabled){border-color:var(--sc-color-success-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-color-success-500)/var(--sc-focus-ring-alpha)}.button--outline.button--success:active:not(.button--disabled){border-color:var(--sc-color-success-700);background-color:var(--sc-color-success-700);color:var(--sc-color-white)}.button--outline.button--info{border-color:var(--sc-color-gray-500);color:var(--sc-color-gray-500)}.button--outline.button--info:hover:not(.button--disabled){background-color:var(--sc-color-gray-500);color:var(--sc-color-white)}.button--outline.button--info:focus:not(.button--disabled){border-color:var(--sc-color-gray-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-color-gray-500)/var(--sc-focus-ring-alpha)}.button--outline.button--info:active:not(.button--disabled){border-color:var(--sc-color-gray-700);background-color:var(--sc-color-gray-700);color:var(--sc-color-white)}.button--outline.button--warning{border-color:var(--sc-color-warning-500);color:var(--sc-color-warning-500)}.button--outline.button--warning:hover:not(.button--disabled){background-color:var(--sc-color-warning-500);color:var(--sc-color-white)}.button--outline.button--warning:focus:not(.button--disabled){border-color:var(--sc-color-warning-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-color-warning-500)/var(--sc-focus-ring-alpha)}.button--outline.button--warning:active:not(.button--disabled){border-color:var(--sc-color-warning-700);background-color:var(--sc-color-warning-700);color:var(--sc-color-white)}.button--outline.button--danger{border-color:var(--sc-color-danger-500);color:var(--sc-color-danger-500)}.button--outline.button--danger:hover:not(.button--disabled){background-color:var(--sc-color-danger-500);color:var(--sc-color-white)}.button--outline.button--danger:focus:not(.button--disabled){border-color:var(--sc-color-danger-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-color-danger-500)/var(--sc-focus-ring-alpha)}.button--outline.button--danger:active:not(.button--disabled){border-color:var(--sc-color-danger-700);background-color:var(--sc-color-danger-700);color:var(--sc-color-white)}.button--text{background-color:transparent;border-color:transparent;color:inherit}.button--text:hover:not(.button--disabled){background-color:transparent;border-color:transparent;color:var(--sc-color-gray-600)}.button--text:focus:not(.button--disabled){background-color:transparent;border-color:transparent;box-shadow:0}.button--text:active:not(.button--disabled){background-color:transparent;border-color:transparent;box-shadow:0}.button--text.button--caret.button--has-label{padding-right:var(--sc-spacing-xx-small)}.button--text.button--caret.button--has-label .button__label{padding:0 var(--sc-spacing-xx-small) !important}.button--link{background-color:transparent;border-color:transparent;box-shadow:none;color:var(--sc-button-link-color, var(--primary-background));transition:opacity var(--sc-input-transition, var(--sc-transition-medium)) ease;text-decoration:var(--sc-button-link-text-decoration, none)}.button--link.button--has-label.button--small .button__label,.button--link.button--has-label.button--medium .button__label,.button--link.button--has-label.button--large .button__label{padding:0}.button--link:hover:not(.button--disabled){background-color:transparent;border-color:transparent;opacity:0.75}.button--link:focus:not(.button--disabled){background-color:transparent;border-color:transparent}.button--link:active:not(.button--disabled){background-color:transparent;border-color:transparent}.button--link.button--has-prefix:not(.button--text).button--small,.button--link.button--has-prefix:not(.button--text).button--medium,.button--link.button--has-prefix:not(.button--text).button--large{padding-left:0}.button--link.button--has-prefix:not(.button--text).button--small .button__label,.button--link.button--has-prefix:not(.button--text).button--medium .button__label,.button--link.button--has-prefix:not(.button--text).button--large .button__label{padding-left:var(--sc-spacing-xx-small)}.button--link.button--has-suffix:not(.button--text).button--small,.button--link.button--has-suffix:not(.button--text).button--medium,.button--link.button--has-suffix:not(.button--text).button--large{padding-right:0}.button--link.button--has-suffix:not(.button--text).button--small .button__label,.button--link.button--has-suffix:not(.button--text).button--medium .button__label,.button--link.button--has-suffix:not(.button--text).button--large .button__label{padding-right:var(--sc-spacing-xx-small)}.button--small{font-size:var(--sc-button-font-size-small);height:var(--sc-input-height-small);line-height:calc(var(--sc-input-height-small) - var(--sc-input-border-width) * 2);border-radius:var(--button-border-radius, var(--sc-input-border-radius-small))}.button--medium{font-size:var(--sc-button-font-size-medium);height:var(--sc-input-height-medium);line-height:calc(var(--sc-input-height-medium) - var(--sc-input-border-width) * 2);border-radius:var(--button-border-radius, var(--sc-input-border-radius-medium))}.button--large{font-size:var(--sc-button-font-size-large);height:var(--sc-input-height-large);line-height:calc(var(--sc-input-height-large) - var(--sc-input-border-width) * 2);border-radius:var(--button-border-radius, var(--sc-input-border-radius-large))}.button--full{display:block}.button--pill.button--small{border-radius:var(--sc-input-height-small)}.button--pill.button--medium{border-radius:var(--sc-input-height-medium)}.button--pill.button--large{border-radius:var(--sc-input-height-large)}.button--circle{padding-left:0;padding-right:0}.button--circle.button--small{width:var(--sc-input-height-small);border-radius:50%}.button--circle.button--medium{width:var(--sc-input-height-medium);border-radius:50%}.button--circle.button--large{width:var(--sc-input-height-large);border-radius:50%}.button--circle .button__prefix,.button--circle .button__suffix,.button--circle .button__caret{display:none}.button--caret .button__suffix{display:none}.button--caret .button__caret{display:flex;align-items:center}.button--caret .button__caret svg{width:1em;height:1em}.button--busy{position:relative;cursor:wait}.button--busy .button__prefix,.button--busy .button__label,.button--busy .button__suffix,.button--busy .button__caret{visibility:hidden}.button--busy *{pointer-events:none}.button--loading{position:relative;cursor:wait}.button--loading .button__prefix,.button--loading .button__label,.button--loading .button__suffix,.button--loading .button__caret{visibility:hidden}sc-spinner::part(base){--indicator-color:currentColor;--spinner-size:12px;position:absolute;top:calc(50% - var(--spinner-size) + var(--spinner-size) / 4);left:calc(50% - var(--spinner-size) + var(--spinner-size) / 4)}.button ::slotted(sc-badge){position:absolute;top:0;right:0;transform:translateY(-50%) translateX(50%);pointer-events:none}.button--has-label.button--small .button__label{padding:0 var(--sc-spacing-small)}.button--has-label.button--medium .button__label{padding:0 var(--sc-spacing-medium)}.button--has-label.button--large .button__label{padding:0 var(--sc-spacing-large)}.button--has-prefix:not(.button--text).button--small{padding-left:var(--sc-spacing-x-small)}.button--has-prefix:not(.button--text).button--small .button__label{padding-left:var(--sc-spacing-x-small)}.button--has-prefix:not(.button--text).button--medium{padding-left:var(--sc-spacing-small)}.button--has-prefix:not(.button--text).button--medium .button__label{padding-left:var(--sc-spacing-small)}.button--has-prefix:not(.button--text).button--large{padding-left:var(--sc-spacing-small)}.button--has-prefix:not(.button--text).button--large .button__label{padding-left:var(--sc-spacing-small)}.button--has-suffix.button--small,.button--caret.button--small{padding-right:var(--sc-spacing-x-small)}.button--has-suffix.button--small .button__label,.button--caret.button--small .button__label{padding-right:var(--sc-spacing-x-small)}.button--has-suffix.button--medium,.button--caret.button--medium{padding-right:var(--sc-spacing-small)}.button--has-suffix.button--medium .button__label,.button--caret.button--medium .button__label{padding-right:var(--sc-spacing-small)}.button--has-suffix.button--large,.button--caret.button--large{padding-right:var(--sc-spacing-small)}.button--has-suffix.button--large .button__label,.button--caret.button--large .button__label{padding-right:var(--sc-spacing-small)}:host(.sc-button-group__button--first) .button{border-top-right-radius:0;border-bottom-right-radius:0}:host(.sc-button-group__button--inner) .button{border-radius:0}:host(.sc-button-group__button--last) .button{border-top-left-radius:0;border-bottom-left-radius:0}:host(.sc-button-group__button:not(.sc-button-group__button--first)){margin-left:calc(-1 * var(--sc-input-border-width))}:host(.sc-button-group__button:not(.sc-button-group__button--focus,.sc-button-group__button--first,[type=default]):not(:hover,:active,:focus)) .button:after{content:"";position:absolute;top:0;left:0;bottom:0;border-left:solid 1px #fff4;mix-blend-mode:lighten}:host(.sc-button-group__button--hover){z-index:1}:host(.sc-button-group__button--focus){z-index:2}@keyframes busy-animation{0%{background-position:200px 0}}.button--is-rtl.button--has-prefix.button--small,.button--is-rtl.button--has-prefix.button--medium,.button--is-rtl.button--has-prefix.button--large{padding-left:0}.button--is-rtl.button--has-prefix.button--small .button__label,.button--is-rtl.button--has-prefix.button--medium .button__label,.button--is-rtl.button--has-prefix.button--large .button__label{padding-left:0;padding-right:var(--sc-spacing-xx-small)}.button--is-rtl.button--has-suffix.button--small,.button--is-rtl.button--has-suffix.button--medium,.button--is-rtl.button--has-suffix.button--large{padding-right:0}.button--is-rtl.button--has-suffix.button--small .button__label,.button--is-rtl.button--has-suffix.button--medium .button__label,.button--is-rtl.button--has-suffix.button--large .button__label{padding-right:0;padding-left:var(--sc-spacing-xx-small)}';
const w = class {
  constructor(r) {
    t(this, r);
    this.scBlur = o(this, "scBlur", 7);
    this.scFocus = o(this, "scFocus", 7);
    this.hasFocus = false;
    this.hasLabel = false;
    this.hasPrefix = false;
    this.hasSuffix = false;
    this.type = "default";
    this.size = "medium";
    this.caret = false;
    this.full = false;
    this.disabled = false;
    this.loading = false;
    this.outline = false;
    this.busy = false;
    this.pill = false;
    this.circle = false;
    this.submit = false;
    this.name = undefined;
    this.value = undefined;
    this.href = undefined;
    this.target = undefined;
    this.download = undefined;
    this.autofocus = undefined;
  }
  componentWillLoad() {
    this.handleSlotChange();
  }
  click() {
    this.button.click();
  }
  focus(t) {
    this.button.focus(t);
  }
  blur() {
    this.button.blur();
  }
  handleSlotChange() {
    this.hasLabel = !!this.button.children;
    this.hasPrefix = !!this.button.querySelector('[slot="prefix"]');
    this.hasSuffix = !!this.button.querySelector('[slot="suffix"]');
  }
  handleBlur() {
    this.hasFocus = false;
    this.scBlur.emit();
  }
  handleFocus() {
    this.hasFocus = true;
    this.scFocus.emit();
  }
  handleClick(t) {
    if (this.disabled || this.loading || this.busy) {
      t.preventDefault();
      t.stopPropagation();
    }
    if (this.submit) {
      this.submitForm();
    }
  }
  submitForm() {
    var t, o;
    const r =
      ((o =
        (t = this.button.closest("sc-form")) === null || t === void 0
          ? void 0
          : t.shadowRoot) === null || o === void 0
        ? void 0
        : o.querySelector("form")) || this.button.closest("form");
    const s = document.createElement("button");
    if (r) {
      s.type = "submit";
      s.style.position = "absolute";
      s.style.width = "0";
      s.style.height = "0";
      s.style.clip = "rect(0 0 0 0)";
      s.style.clipPath = "inset(50%)";
      s.style.overflow = "hidden";
      s.style.whiteSpace = "nowrap";
      r.append(s);
      s.click();
      s.remove();
    }
  }
  render() {
    const t = this.href ? "a" : "button";
    const o = r(
      n,
      null,
      r(
        "span",
        { part: "prefix", class: "button__prefix" },
        r("slot", {
          onSlotchange: () => this.handleSlotChange(),
          name: "prefix",
        })
      ),
      r(
        "span",
        { part: "label", class: "button__label" },
        r("slot", { onSlotchange: () => this.handleSlotChange() })
      ),
      r(
        "span",
        { part: "suffix", class: "button__suffix" },
        r("slot", {
          onSlotchange: () => this.handleSlotChange(),
          name: "suffix",
        })
      ),
      this.caret
        ? r(
            "span",
            { part: "caret", class: "button__caret" },
            r(
              "svg",
              {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              },
              r("polyline", { points: "6 9 12 15 18 9" })
            )
          )
        : "",
      this.loading || this.busy
        ? r("sc-spinner", { exportparts: "base:spinner" })
        : ""
    );
    return r(
      t,
      {
        part: "base",
        class: {
          button: true,
          [`button--${this.type}`]: !!this.type,
          [`button--${this.size}`]: true,
          "button--caret": this.caret,
          "button--circle": this.circle,
          "button--disabled": this.disabled,
          "button--focused": this.hasFocus,
          "button--loading": this.loading,
          "button--busy": this.busy,
          "button--pill": this.pill,
          "button--standard": !this.outline,
          "button--outline": this.outline,
          "button--has-label": this.hasLabel,
          "button--has-prefix": this.hasPrefix,
          "button--has-suffix": this.hasSuffix,
          "button--is-rtl": a(),
        },
        href: this.href,
        target: this.target,
        download: this.download,
        autoFocus: this.autofocus,
        rel: this.target ? "noreferrer noopener" : undefined,
        role: "button",
        "aria-disabled": this.disabled ? "true" : "false",
        "aria-busy": this.busy || this.loading ? "true" : "false",
        tabindex: this.disabled ? "-1" : "0",
        disabled: this.disabled || this.busy,
        type: this.submit ? "submit" : "button",
        name: this.name,
        value: this.value,
        onBlur: () => this.handleBlur(),
        onFocus: () => this.handleFocus(),
        onClick: (t) => this.handleClick(t),
      },
      o
    );
  }
  get button() {
    return e(this);
  }
};
w.style = x;
const y =
  ":host{display:block;position:relative}.dashboard-module{display:grid;gap:var(--sc-dashboard-module-spacing, 1em)}.heading{font-family:var(--sc-font-sans);display:flex;flex-wrap:wrap;gap:1em;align-items:center;justify-content:space-between}.heading__text{display:grid;flex:1;gap:calc(var(--sc-dashboard-module-spacing, 1em) / 2)}@media screen and (min-width: 720px){.heading{gap:2em}}.heading__title{font-size:var(--sc-dashbaord-module-heading-size, var(--sc-font-size-x-large));font-weight:var(--sc-dashbaord-module-heading-weight, var(--sc-font-weight-bold));line-height:var(--sc-dashbaord-module-heading-line-height, var(--sc-line-height-dense));white-space:nowrap}.heading__description{font-size:var(--sc-font-size-normal);line-height:var(--sc-line-height-dense);opacity:0.85}";
const _ = class {
  constructor(o) {
    t(this, o);
    this.heading = undefined;
    this.error = undefined;
    this.loading = undefined;
  }
  render() {
    return r(
      "div",
      { class: "dashboard-module", part: "base" },
      !!this.error &&
        r(
          "sc-alert",
          {
            exportparts:
              "base:error__base, icon:error__icon, text:error__text, title:error__title, message:error__message",
            open: !!this.error,
            type: "danger",
          },
          r("span", { slot: "title" }, wp.i18n.__("Error", "surecart")),
          this.error
        ),
      r(
        "div",
        { class: "heading", part: "heading" },
        r(
          "div",
          { class: "heading__text", part: "heading-text" },
          r(
            "div",
            { class: "heading__title", part: "heading-title" },
            r(
              "slot",
              { name: "heading", "aria-label": this.heading },
              this.heading
            )
          ),
          r(
            "div",
            { class: "heading__description", part: "heading-description" },
            r("slot", { name: "description" })
          )
        ),
        r("slot", { name: "end" })
      ),
      r("slot", null)
    );
  }
};
_.style = y;
const k = new Set();
function z(t) {
  k.add(t);
  document.body.classList.add("sc-scroll-lock");
}
function C(t) {
  k.delete(t);
  if (k.size === 0) {
    document.body.classList.remove("sc-scroll-lock");
  }
}
const j =
  ":host{--width:31rem;--header-spacing:var(--sc-spacing-large);--body-spacing:var(--sc-spacing-large);--footer-spacing:var(--sc-spacing-large);display:contents}[hidden]{display:none !important}.dialog{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--sc-z-index-dialog);box-sizing:border-box;text-align:left}.dialog__panel{display:flex;flex-direction:column;z-index:2;width:var(--width);max-width:100vw;max-height:100vh;background-color:var(--sc-panel-background-color);border-radius:var(--sc-border-radius-medium);box-shadow:var(--sc-shadow-x-large);position:relative}.dialog__panel:focus{outline:none}@media screen and (max-width: 420px){.dialog__panel{max-height:80vh}}.dialog--open .dialog__panel{display:flex;opacity:1;transform:none}.dialog__header{flex:0 0 auto;display:flex;border-bottom:1px solid var(--sc-color-gray-300)}.dialog__title{flex:1 1 auto;font:inherit;font-size:var(--sc-font-size-large);line-height:var(--sc-line-height-dense);padding:var(--header-spacing);margin:0}.dialog__close{flex:0 0 auto;display:flex;align-items:center;font-size:var(--sc-font-size-x-large);padding:0 calc(var(--header-spacing) / 2);z-index:2}.dialog__body{flex:1 1 auto;padding:var(--body-spacing);overflow:var(--dialog-body-overflow, auto);-webkit-overflow-scrolling:touch}.dialog__footer{flex:0 0 auto;text-align:right;padding:var(--footer-spacing)}.dialog__footer ::slotted(sl-button:not(:first-of-type)){margin-left:var(--sc-spacing-x-small)}.dialog:not(.dialog--has-footer) .dialog__footer{display:none}.dialog__overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--sc-overlay-background-color)}";
const D = class {
  constructor(r) {
    t(this, r);
    this.scRequestClose = o(this, "scRequestClose", 7);
    this.scShow = o(this, "scShow", 7);
    this.scAfterShow = o(this, "scAfterShow", 7);
    this.scHide = o(this, "scHide", 7);
    this.scAfterHide = o(this, "scAfterHide", 7);
    this.scInitialFocus = o(this, "scInitialFocus", 7);
    this.open = false;
    this.label = "";
    this.noHeader = false;
    this.hasFooter = false;
  }
  async show() {
    if (this.open) {
      return undefined;
    }
    this.open = true;
  }
  async hide() {
    if (!this.open) {
      return undefined;
    }
    this.open = false;
  }
  requestClose(t) {
    const o = this.scRequestClose.emit(t);
    if (o.defaultPrevented) {
      const t = i(this.el, "dialog.denyClose");
      l(this.panel, t.keyframes, t.options);
      return;
    }
    this.hide();
  }
  handleKeyDown(t) {
    if (t.key === "Escape") {
      t.stopPropagation();
      this.requestClose("keyboard");
    }
  }
  async handleOpenChange() {
    if (this.open) {
      this.scShow.emit();
      z(this.el);
      const t = this.el.querySelector("[autofocus]");
      if (t) {
        t.removeAttribute("autofocus");
      }
      await Promise.all([c(this.dialog), c(this.overlay)]);
      this.dialog.hidden = false;
      requestAnimationFrame(() => {
        const o = this.scInitialFocus.emit();
        if (!o.defaultPrevented) {
          if (t) {
            t.focus({ preventScroll: true });
          } else {
            this.panel.focus({ preventScroll: true });
          }
        }
        if (t) {
          t.setAttribute("autofocus", "");
        }
      });
      const o = i(this.el, "dialog.show");
      const r = i(this.el, "dialog.overlay.show");
      await Promise.all([
        l(this.panel, o.keyframes, o.options),
        l(this.overlay, r.keyframes, r.options),
      ]);
      this.scAfterShow.emit();
    } else {
      this.scHide.emit();
      await Promise.all([c(this.dialog), c(this.overlay)]);
      const t = i(this.el, "dialog.hide");
      const o = i(this.el, "dialog.overlay.hide");
      await Promise.all([
        l(this.panel, t.keyframes, t.options),
        l(this.overlay, o.keyframes, o.options),
      ]);
      this.dialog.hidden = true;
      C(this.el);
      const r = this.originalTrigger;
      if (
        typeof (r === null || r === void 0 ? void 0 : r.focus) === "function"
      ) {
        setTimeout(() => r.focus());
      }
      this.scAfterHide.emit();
    }
  }
  componentDidLoad() {
    this.hasFooter = !!this.el.querySelector('[slot="footer"]');
    this.dialog.hidden = !this.open;
    if (this.open) {
      z(this.el);
    }
  }
  disconnectedCallback() {
    C(this.el);
  }
  render() {
    return r(
      "div",
      {
        part: "base",
        ref: (t) => (this.dialog = t),
        class: {
          dialog: true,
          "dialog--open": this.open,
          "dialog--has-footer": this.hasFooter,
        },
        onKeyDown: (t) => this.handleKeyDown(t),
      },
      r("div", {
        part: "overlay",
        class: "dialog__overlay",
        onClick: (t) => {
          t.preventDefault();
          t.stopImmediatePropagation();
          this.requestClose("overlay");
        },
        ref: (t) => (this.overlay = t),
        tabindex: "-1",
      }),
      r(
        "div",
        {
          part: "panel",
          class: "dialog__panel",
          role: "dialog",
          "aria-modal": "true",
          "aria-hidden": this.open ? "false" : "true",
          "aria-label": this.noHeader || this.label,
          "aria-labelledby": !this.noHeader || "title",
          ref: (t) => (this.panel = t),
          tabindex: "0",
        },
        !this.noHeader &&
          r(
            "header",
            { part: "header", class: "dialog__header" },
            r(
              "h2",
              { part: "title", class: "dialog__title", id: "title" },
              r(
                "slot",
                { name: "label" },
                " ",
                this.label.length > 0 ? this.label : String.fromCharCode(65279),
                " "
              )
            ),
            r(
              "sc-button",
              {
                class: "dialog__close",
                type: "text",
                circle: true,
                part: "close-button",
                exportparts: "base:close-button__base",
                onClick: (t) => {
                  t.preventDefault();
                  t.stopImmediatePropagation();
                  this.requestClose("close-button");
                },
              },
              r("sc-icon", {
                name: "x",
                label: wp.i18n.__("Close", "surecart"),
              })
            )
          ),
        r("div", { part: "body", class: "dialog__body" }, r("slot", null)),
        r(
          "footer",
          { part: "footer", class: "dialog__footer" },
          r("slot", { name: "footer" })
        )
      )
    );
  }
  get el() {
    return e(this);
  }
  static get watchers() {
    return { open: ["handleOpenChange"] };
  }
};
u("dialog.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.8)" },
    { opacity: 1, transform: "scale(1)" },
  ],
  options: { duration: 150, easing: "ease" },
});
u("dialog.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.8)" },
  ],
  options: { duration: 150, easing: "ease" },
});
u("dialog.denyClose", {
  keyframes: [
    { transform: "scale(1)" },
    { transform: "scale(1.02)" },
    { transform: "scale(1)" },
  ],
  options: { duration: 150 },
});
u("dialog.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 150 },
});
u("dialog.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 150 },
});
D.style = j;
const S =
  ":host{display:block;--spacing:var(--sc-spacing-small)}.flex{display:flex;gap:var(--sc-flex-column-gap, var(--spacing));justify-content:var(--sc-flex-space-between, space-between)}.justify-flex-start{justify-content:flex-start}.justify-flex-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-space-between{justify-content:space-between}.justify-space-around{justify-content:space-around}.justify-space-evenly{justify-content:space-evenly}.wrap-wrap{flex-wrap:wrap}.wrap-no-wrap{flex-wrap:no-wrap}.align-flex-start{align-items:flex-start}.align-flex-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.direction-row{flex-direction:row}.direction-row-reverse{flex-direction:row-reverse}.direction-column{flex-direction:column}.direction-column-reverse{flex-direction:column-reverse}@media (max-width: 480px){.stack-mobile{flex-direction:column}}@media (max-width: 768px){.stack-tablet{flex-direction:column}}@media (max-width: 1180px){.stack-desktop{flex-direction:column}}";
const I = class {
  constructor(o) {
    t(this, o);
    this.alignItems = undefined;
    this.justifyContent = undefined;
    this.flexDirection = undefined;
    this.columnGap = undefined;
    this.flexWrap = undefined;
    this.stack = undefined;
  }
  render() {
    return r(
      "div",
      {
        part: "base",
        class: {
          flex: true,
          ...(this.justifyContent
            ? { [`justify-${this.justifyContent}`]: true }
            : {}),
          ...(this.alignItems ? { [`align-${this.alignItems}`]: true } : {}),
          ...(this.flexDirection
            ? { [`direction-${this.flexDirection}`]: true }
            : {}),
          ...(this.columnGap ? { [`column-gap-${this.columnGap}`]: true } : {}),
          ...(this.flexWrap ? { [`wrap-${this.flexWrap}`]: true } : {}),
          ...(this.stack ? { [`stack-${this.stack}`]: true } : {}),
        },
      },
      r("slot", null)
    );
  }
};
I.style = S;
const L = class {
  constructor(o) {
    t(this, o);
    this.locale = undefined;
    this.date = new Date();
    this.weekday = undefined;
    this.era = undefined;
    this.year = undefined;
    this.month = undefined;
    this.day = undefined;
    this.hour = undefined;
    this.minute = undefined;
    this.second = undefined;
    this.timeZoneName = undefined;
    this.timeZone = undefined;
    this.hourFormat = "auto";
    this.type = "date";
  }
  render() {
    const t =
      this.type === "timestamp"
        ? parseInt(this.date.toString()) * 1e3
        : this.date;
    const o = new Date(t);
    const r = this.hourFormat === "auto" ? undefined : this.hourFormat === "12";
    if (isNaN(o.getMilliseconds())) {
      return;
    }
    return new Intl.DateTimeFormat(this.locale, {
      weekday: this.weekday,
      era: this.era,
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      timeZoneName: this.timeZoneName,
      timeZone: this.timeZone,
      hour12: r,
    }).format(o);
  }
};
const F = { kg: "kilogram", lb: "pound", g: "gram", oz: "ounce" };
const H = class {
  constructor(o) {
    t(this, o);
    this.value = 0;
    this.locale = undefined;
    this.type = "decimal";
    this.noGrouping = false;
    this.currency = "USD";
    this.currencyDisplay = "symbol";
    this.minimumIntegerDigits = undefined;
    this.minimumFractionDigits = null;
    this.maximumFractionDigits = undefined;
    this.minimumSignificantDigits = undefined;
    this.maximumSignificantDigits = undefined;
    this.noConvert = undefined;
    this.unit = "lb";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    const t =
      navigator.language ||
      (navigator === null || navigator === void 0
        ? void 0
        : navigator.browserLanguage) ||
      (navigator.languages || ["en"])[0];
    const o =
      this.noConvert || this.type !== "currency"
        ? this.value
        : d(this.value, this.currency.toUpperCase());
    const r = o % 1 == 0 ? 0 : 2;
    return new Intl.NumberFormat(this.locale || t, {
      style: this.type,
      currency: this.currency.toUpperCase(),
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits:
        this.minimumFractionDigits !== null ? this.minimumFractionDigits : r,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits,
      unit: F[this.unit],
    }).format(o);
  }
};
const $ = new Map();
const N = (t) => {
  if ($.has(t)) {
    return $.get(t);
  } else {
    const o = fetch(t).then(async (t) => {
      if (t.ok) {
        const o = document.createElement("div");
        o.innerHTML = await t.text();
        const r = o.firstElementChild;
        return {
          ok: t.ok,
          status: t.status,
          svg: r && r.tagName.toLowerCase() === "svg" ? r.outerHTML : "",
        };
      } else {
        return { ok: t.ok, status: t.status, svg: null };
      }
    });
    $.set(t, o);
    return o;
  }
};
const P =
  ":host{--width:1em;--height:1em;display:inline-block;width:var(--width);height:var(--height);contain:strict;box-sizing:content-box !important}.icon,svg{display:block;height:100%;width:100%;stroke-width:var(--sc-icon-stroke-width, 2px)}";
const M = {
  "chevron-down": wp.i18n.__("Open", "surecart"),
  "chevron-up": wp.i18n.__("Close", "surecart"),
  "chevron-right": wp.i18n.__("Next", "surecart"),
  "chevron-left": wp.i18n.__("Previous", "surecart"),
  "arrow-right": wp.i18n.__("Next", "surecart"),
  "arrow-left": wp.i18n.__("Previous", "surecart"),
  "arrow-down": wp.i18n.__("Down", "surecart"),
  "arrow-up": wp.i18n.__("Up", "surecart"),
  "alert-circle": wp.i18n.__("Alert", "surecart"),
};
const A = new DOMParser();
const O = class {
  constructor(r) {
    t(this, r);
    this.scLoad = o(this, "scLoad", 7);
    this.svg = "";
    this.name = undefined;
    this.src = undefined;
    this.label = undefined;
    this.library = "default";
  }
  redraw() {
    this.setIcon();
  }
  componentWillLoad() {
    this.setIcon();
  }
  getLabel() {
    let t = "";
    if (this.label) {
      t = (M === null || M === void 0 ? void 0 : M[this.label]) || this.label;
    } else if (this.name) {
      t = (
        (M === null || M === void 0 ? void 0 : M[this.name]) || this.name
      ).replace(/-/g, " ");
    } else if (this.src) {
      t = this.src.replace(/.*\//, "").replace(/-/g, " ").replace(/\.svg/i, "");
    }
    return t;
  }
  async setIcon() {
    const t = b(this.library);
    const o = this.getUrl();
    if (o) {
      try {
        const r = await N(o);
        if (o !== this.getUrl()) {
          return;
        } else if (r.ok) {
          const o = A.parseFromString(r.svg, "text/html");
          const s = o.body.querySelector("svg");
          if (s) {
            if (t && t.mutator) {
              t.mutator(s);
            }
            this.svg = s.outerHTML;
            this.scLoad.emit();
          } else {
            this.svg = "";
            console.error({
              status: r === null || r === void 0 ? void 0 : r.status,
            });
          }
        } else {
          this.svg = "";
          console.error({
            status: r === null || r === void 0 ? void 0 : r.status,
          });
        }
      } catch {
        console.error({ status: -1 });
      }
    } else if (this.svg) {
      this.svg = "";
    }
  }
  getUrl() {
    const t = b(this.library);
    if (this.name && t) {
      return t.resolver(this.name);
    } else {
      return this.src;
    }
  }
  render() {
    return r("div", {
      part: "base",
      class: "icon",
      role: "img",
      "aria-label": this.getLabel(),
      innerHTML: this.svg,
    });
  }
  static get assetsDirs() {
    return ["icon-assets"];
  }
  static get watchers() {
    return { name: ["setIcon"], src: ["setIcon"], library: ["setIcon"] };
  }
};
O.style = P;
const T =
  ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--border-radius:var(--sc-border-radius-pill);--color:var(--sc-skeleton-color, var(--sc-color-gray-300));--sheen-color:var(--sc-skeleton-sheen-color, var(--sc-color-gray-400));display:block;position:relative}.skeleton{display:flex;width:100%;height:100%;min-height:1rem}.skeleton__indicator{flex:1 1 auto;background:var(--color);border-radius:var(--border-radius)}.skeleton--sheen .skeleton__indicator{background:linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));background-size:400% 100%;background-size:400% 100%;animation:sheen 3s ease-in-out infinite}.skeleton--pulse .skeleton__indicator{animation:pulse 2s ease-in-out 0.5s infinite}@keyframes sheen{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}";
const B = class {
  constructor(o) {
    t(this, o);
    this.effect = "sheen";
  }
  render() {
    return r(
      "div",
      {
        part: "base",
        class: {
          skeleton: true,
          "skeleton--pulse": this.effect === "pulse",
          "skeleton--sheen": this.effect === "sheen",
        },
        "aria-busy": "true",
        "aria-live": "polite",
      },
      r("div", { part: "indicator", class: "skeleton__indicator" })
    );
  }
};
B.style = T;
const R =
  ":host{--track-color:#0d131e20;--indicator-color:var(--sc-color-primary-500);--stroke-width:2px;--spinner-size:1em;display:inline-block}.spinner{display:inline-block;width:var(--spinner-size);height:var(--spinner-size);border-radius:50%;border:solid var(--stroke-width) var(--track-color);border-top-color:var(--indicator-color);border-right-color:var(--indicator-color);animation:1s linear infinite spin}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const q = class {
  constructor(o) {
    t(this, o);
  }
  render() {
    return r("span", {
      part: "base",
      class: "spinner",
      "aria-busy": "true",
      "aria-live": "polite",
    });
  }
};
q.style = R;
const U = class {
  constructor(r) {
    t(this, r);
    this.scRequestClose = o(this, "scRequestClose", 7);
    this.scRefresh = o(this, "scRefresh", 7);
    this.open = undefined;
    this.subscription = undefined;
    this.busy = undefined;
    this.error = undefined;
    this.upcomingPeriod = undefined;
    this.loading = false;
  }
  openChanged() {
    if (this.open) {
      this.fetchUpcoming();
    }
  }
  async fetchUpcoming() {
    var t;
    this.loading = true;
    try {
      this.upcomingPeriod = await h({
        method: "PATCH",
        path: g(
          `surecart/v1/subscriptions/${
            (t = this.subscription) === null || t === void 0 ? void 0 : t.id
          }/upcoming_period`,
          { skip_product_group_validation: true, expand: ["period.checkout"] }
        ),
        data: { purge_pending_update: false },
      });
    } catch (t) {
      this.error =
        (t === null || t === void 0 ? void 0 : t.message) ||
        wp.i18n.__("Something went wrong", "surecart");
    } finally {
      this.loading = false;
    }
  }
  async reactivateSubscription() {
    var t;
    try {
      this.error = "";
      this.busy = true;
      await h({
        path: `surecart/v1/subscriptions/${
          (t = this.subscription) === null || t === void 0 ? void 0 : t.id
        }/restore`,
        method: "PATCH",
      });
      this.scRefresh.emit();
      this.scRequestClose.emit("close-button");
    } catch (t) {
      this.error =
        (t === null || t === void 0 ? void 0 : t.message) ||
        wp.i18n.__("Something went wrong", "surecart");
    } finally {
      this.busy = false;
    }
  }
  renderLoading() {
    return r(
      "sc-flex",
      { flexDirection: "column", style: { gap: "1em" } },
      r("sc-skeleton", { style: { width: "20%", display: "inline-block" } }),
      r("sc-skeleton", { style: { width: "60%", display: "inline-block" } }),
      r("sc-skeleton", { style: { width: "40%", display: "inline-block" } })
    );
  }
  render() {
    var t, o, s, e;
    return r(
      "sc-dialog",
      {
        noHeader: true,
        open: this.open,
        style: {
          "--width": "600px",
          "--body-spacing": "var(--sc-spacing-xxx-large)",
        },
      },
      r(
        "sc-dashboard-module",
        {
          loading: this.loading,
          heading: wp.i18n.__("Resubscribe", "surecart"),
          class: "subscription-reactivate",
          error: this.error,
          style: { "--sc-dashboard-module-spacing": "1em" },
        },
        this.loading
          ? this.renderLoading()
          : r(
              n,
              null,
              r(
                "div",
                { slot: "description" },
                r(
                  "sc-alert",
                  {
                    open: true,
                    type: "warning",
                    title: wp.i18n.__("Confirm Charge", "surecart"),
                  },
                  wp.i18n.__("You will be charged", "surecart"),
                  " ",
                  r("sc-format-number", {
                    type: "currency",
                    value:
                      (o =
                        (t = this.upcomingPeriod) === null || t === void 0
                          ? void 0
                          : t.checkout) === null || o === void 0
                        ? void 0
                        : o.amount_due,
                    currency:
                      (s = this.subscription) === null || s === void 0
                        ? void 0
                        : s.currency,
                  }),
                  " ",
                  wp.i18n.__("immediately for your subscription.", "surecart")
                ),
                r(
                  "sc-text",
                  {
                    style: {
                      "--font-size": "var(--sc-font-size-medium)",
                      "--color": "var(--sc-input-label-color)",
                      "--line-height": "var(--sc-line-height-dense)",
                      "margin-top": "var(--sc-spacing-medium)",
                    },
                  },
                  wp.i18n.__(
                    "Your subscription will be reactivated and will renew automatically on",
                    "surecart"
                  ),
                  " ",
                  r(
                    "strong",
                    null,
                    r("sc-format-date", {
                      type: "timestamp",
                      date:
                        (e = this.upcomingPeriod) === null || e === void 0
                          ? void 0
                          : e.end_at,
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  )
                )
              ),
              r(
                "sc-flex",
                { justifyContent: "flex-start" },
                r(
                  "sc-button",
                  {
                    type: "primary",
                    loading: this.busy,
                    disabled: this.busy,
                    onClick: () => this.reactivateSubscription(),
                  },
                  wp.i18n.__("Yes, Reactivate", "surecart")
                ),
                r(
                  "sc-button",
                  {
                    disabled: this.busy,
                    style: { color: "var(--sc-color-gray-500)" },
                    type: "text",
                    onClick: () => this.scRequestClose.emit(),
                  },
                  wp.i18n.__("No, Keep Inactive", "surecart")
                )
              )
            ),
        this.busy && r("sc-block-ui", null)
      )
    );
  }
  static get watchers() {
    return { open: ["openChanged"] };
  }
};
const Y =
  ":host{display:block;--font-size:var(--font-size, var(--sc-font-size-medium));--font-weight:var(--font-size, var(--sc-font-weight-normal));--line-height:var(--font-size, var(--sc-line-height-medium));--text-align:left;--color:var(--color, inherit)}.text{margin:0;font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);text-align:var(--text-align);color:var(--sc-stacked-list-row-text-color, var(--color))}.text.is-truncated{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text--is-rtl .text{text-align:right}";
const K = class {
  constructor(o) {
    t(this, o);
    this.tag = "p";
    this.truncate = false;
  }
  render() {
    const t = this.tag;
    return r(
      t,
      {
        class: {
          text: true,
          "is-truncated": this.truncate,
          "text--is-rtl": a(),
        },
      },
      r("slot", null)
    );
  }
};
K.style = Y;
export {
  f as sc_alert,
  m as sc_block_ui,
  w as sc_button,
  _ as sc_dashboard_module,
  D as sc_dialog,
  I as sc_flex,
  L as sc_format_date,
  H as sc_format_number,
  O as sc_icon,
  B as sc_skeleton,
  q as sc_spinner,
  U as sc_subscription_reactivate,
  K as sc_text,
};
//# sourceMappingURL=p-a99af055.entry.js.map