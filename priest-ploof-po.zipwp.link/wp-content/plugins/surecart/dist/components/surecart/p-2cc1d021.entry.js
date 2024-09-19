import { r as t, h as i, a as r, c as o, H as e } from "./p-cc7ce8c7.js";
import { i as n } from "./p-d556eec7.js";
import { F as s } from "./p-8617d8eb.js";
const l =
  ".form-control{font-family:var(--sc-font-sans);font-size:var(--sc-font-size-medium);font-weight:var(--sc-font-weight-normal);display:flex;flex-direction:column;gap:var(--sc-input-label-margin)}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control--has-label .form-control__label{display:inline-block;color:var(--sc-input-label-color);font-weight:var(--sc-input-label-font-weight);text-transform:var(--sc-input-label-text-transform, none);letter-spacing:var(--sc-input-label-letter-spacing, 0)}.form-control--has-label.form-control--small .form-control__label{font-size:var(--sc-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--sc-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--sc-input-label-font-size-large)}::slotted(.control--errors){margin-top:var(--sc-spacing-small);color:var(--sc-color-danger-500)}::slotted([slot=label-end]){float:right}.form-control--is-required .required{color:var(--sc-color-danger-500)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--sc-input-help-text-color)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--sc-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--sc-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--sc-input-help-text-font-size-large)}.form-control--has-error .form-control__error-text{display:block;color:var(--sc-input-error-text-color)}.form-control--has-error.form-control--small .form-control__error-text{font-size:var(--sc-input-error-text-font-size-small)}.form-control--has-error.form-control--medium .form-control__error-text{font-size:var(--sc-input-error-text-font-size-medium)}.form-control--has-error.form-control--large .form-control__error-text{font-size:var(--sc-input-error-text-font-size-large)}.form-control--has-error ::part(base){border-color:rgb(var(--sl-color-danger-500))}.form-control--is-rtl.form-control--has-label .form-control__label{text-align:right}";
const a = class {
  constructor(i) {
    t(this, i);
    this.size = "medium";
    this.name = undefined;
    this.showLabel = true;
    this.label = undefined;
    this.labelId = undefined;
    this.inputId = undefined;
    this.required = false;
    this.help = undefined;
    this.helpId = undefined;
  }
  render() {
    return i(
      "div",
      {
        part: "form-control",
        class: {
          "form-control": true,
          "form-control--small": this.size === "small",
          "form-control--medium": this.size === "medium",
          "form-control--large": this.size === "large",
          "form-control--has-label": !!this.label && this.showLabel,
          "form-control--has-help-text": !!this.help,
          "form-control--is-required": !!this.required,
          "form-control--is-rtl": n(),
        },
      },
      i(
        "label",
        {
          part: "label",
          id: this.labelId,
          class: "form-control__label",
          htmlFor: this.inputId,
          "aria-hidden": !!this.label ? "false" : "true",
        },
        i("slot", { name: "label" }, this.label),
        i("slot", { name: "label-end" }),
        !!this.required &&
          i("span", { "aria-hidden": "true", class: "required" }, " ", "*"),
        i(
          "sc-visually-hidden",
          null,
          !!this.required ? wp.i18n.__("required", "surecart") : ""
        )
      ),
      i(
        "div",
        { part: "input", class: "form-control__input" },
        i("slot", null)
      ),
      this.help &&
        i(
          "div",
          {
            part: "help-text",
            id: this.helpId,
            class: "form-control__help-text",
          },
          i("slot", { name: "help-text" }, this.help)
        )
    );
  }
  get el() {
    return r(this);
  }
};
a.style = l;
const u =
  ":host{--focus-ring:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary);display:block;position:relative}.input__control[type=number]{-moz-appearance:textfield}.input__control::-webkit-outer-spin-button,.input__control::-webkit-inner-spin-button{-webkit-appearance:none}.input{flex:1 1 auto;display:inline-flex;align-items:center;justify-content:start;position:relative;width:100%;box-sizing:border-box;font-family:var(--sc-input-font-family);font-weight:var(--sc-input-font-weight);letter-spacing:var(--sc-input-letter-spacing);background-color:var(--sc-input-background-color);border:solid 1px var(--sc-input-border-color, var(--sc-input-border));vertical-align:middle;box-shadow:var(--sc-input-box-shadow);transition:var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) border, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow;cursor:text}.input:hover:not(.input--disabled){background-color:var(--sc-input-background-color-hover);border-color:var(--sc-input-border-color-hover);z-index:7}.input:hover:not(.input--disabled) .input__control{color:var(--sc-input-color-hover)}.input.input--focused:not(.input--disabled){background-color:var(--sc-input-background-color-focus);border-color:var(--sc-input-border-color-focus);box-shadow:var(--focus-ring);z-index:8}.input.input--focused:not(.input--disabled) .input__control{color:var(--sc-input-color-focus)}.input.input--disabled{background-color:var(--sc-input-background-color-disabled);border-color:var(--sc-input-border-color-disabled);opacity:0.5;cursor:not-allowed}.input.input--disabled .input__control{color:var(--sc-input-color-disabled)}.input.input--disabled .input__control::placeholder{color:var(--sc-input-placeholder-color-disabled)}.input__control{flex:1 1 auto;font-family:inherit;font-size:inherit;font-weight:inherit;min-width:0;height:100%;color:var(--sc-input-color);border:none;background:none;box-shadow:none;padding:0;margin:0;cursor:inherit;-webkit-appearance:none;box-sizing:border-box;width:100%}.input__control::-webkit-search-decoration,.input__control::-webkit-search-cancel-button,.input__control::-webkit-search-results-button,.input__control::-webkit-search-results-decoration{-webkit-appearance:none}.input__control:-webkit-autofill,.input__control:-webkit-autofill:hover,.input__control:-webkit-autofill:focus,.input__control:-webkit-autofill:active{box-shadow:0 0 0 var(--sc-input-height-large) var(--sc-input-background-color-hover) inset !important;-webkit-text-fill-color:var(--sc-input-color)}.input__control::placeholder{color:var(--sc-input-placeholder-color);user-select:none}.input__control:focus{outline:none}.input__prefix,.input__suffix{display:inline-flex;flex:0 0 auto;align-items:center;color:var(--sc-input-color);cursor:default}.input__prefix ::slotted(sc-icon),.input__suffix ::slotted(sc-icon){color:var(--sc-input-icon-color)}.input--small{border-radius:var(--sc-input-border-radius-small);font-size:var(--sc-input-font-size-small);height:var(--sc-input-height-small)}.input--small .input__control{height:calc(var(--sc-input-height-small) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-small)}.input--small .input__clear,.input--small .input__password-toggle{margin-right:var(--sc-input-spacing-small)}.input--small .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-small)}.input--small .input__suffix ::slotted(*){margin-right:var(--sc-input-spacing-small)}.input--small .input__suffix ::slotted(sc-dropdown){margin:0}.input--medium{border-radius:var(--sc-input-border-radius-medium);font-size:var(--sc-input-font-size-medium);height:var(--sc-input-height-medium)}.input--medium .input__control{height:calc(var(--sc-input-height-medium) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-medium)}.input--medium .input__clear,.input--medium .input__password-toggle{margin-right:var(--sc-input-spacing-medium)}.input--medium .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-medium) !important}.input--medium .input__suffix ::slotted(:not(sc-button[size=medium]):not(sc-button[size=small])){margin-right:var(--sc-input-spacing-medium) !important}.input--medium .input__suffix ::slotted(sc-tag),.input--medium .input__suffix ::slotted(sc-button[size=small]){line-height:1;margin-right:var(--sc-input-spacing-small) !important}.input--medium .input__suffix ::slotted(sc-dropdown){margin:3px}.input--large{border-radius:var(--sc-input-border-radius-large);font-size:var(--sc-input-font-size-large);height:var(--sc-input-height-large)}.input--large .input__control{height:calc(var(--sc-input-height-large) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-large)}.input--large .input__clear,.input--large .input__password-toggle{margin-right:var(--sc-input-spacing-large)}.input--large .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-large)}.input--large .input__suffix ::slotted(*){margin-right:var(--sc-input-spacing-large)}.input--large .input__suffix ::slotted(sc-dropdown){margin:3px}.input--pill.input--small{border-radius:var(--sc-input-height-small)}.input--pill.input--medium{border-radius:var(--sc-input-height-medium)}.input--pill.input--large{border-radius:var(--sc-input-height-large)}.input__clear,.input__password-toggle{display:inline-flex;align-items:center;font-size:inherit;color:var(--sc-input-icon-color);border:none;background:none;padding:0;transition:var(--sc-input-transition, var(--sc-transition-medium)) color;cursor:pointer}.input__clear:hover,.input__password-toggle:hover{color:var(--sc-input-icon-color-hover)}.input__clear:focus,.input__password-toggle:focus{outline:none}.input--empty .input__clear{visibility:hidden}.input--squared{border-radius:0}.input--squared-top{border-top-left-radius:0;border-top-right-radius:0}.input--squared-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0}.input--squared-left{border-top-left-radius:0;border-bottom-left-radius:0}.input--squared-right{border-top-right-radius:0;border-bottom-right-radius:0}";
let c = 0;
const p = class {
  constructor(i) {
    t(this, i);
    this.scChange = o(this, "scChange", 7);
    this.scClear = o(this, "scClear", 7);
    this.scInput = o(this, "scInput", 7);
    this.scFocus = o(this, "scFocus", 7);
    this.scBlur = o(this, "scBlur", 7);
    this.inputId = `input-${++c}`;
    this.helpId = `input-help-text-${c}`;
    this.labelId = `input-label-${c}`;
    this.squared = undefined;
    this.squaredBottom = undefined;
    this.squaredTop = undefined;
    this.squaredLeft = undefined;
    this.squaredRight = undefined;
    this.hidden = false;
    this.type = "text";
    this.size = "medium";
    this.name = undefined;
    this.value = "";
    this.pill = false;
    this.label = undefined;
    this.showLabel = true;
    this.help = "";
    this.clearable = false;
    this.togglePassword = false;
    this.placeholder = undefined;
    this.disabled = false;
    this.readonly = false;
    this.minlength = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.max = undefined;
    this.step = undefined;
    this.pattern = undefined;
    this.required = false;
    this.invalid = false;
    this.autocorrect = undefined;
    this.autocomplete = undefined;
    this.autofocus = undefined;
    this.spellcheck = undefined;
    this.inputmode = undefined;
    this.hasFocus = undefined;
    this.isPasswordVisible = false;
  }
  async reportValidity() {
    return this.input.reportValidity();
  }
  async triggerFocus(t) {
    return this.input.focus(t);
  }
  async setCustomValidity(t) {
    this.input.setCustomValidity(t);
    this.invalid = !this.input.checkValidity();
  }
  async triggerBlur() {
    return this.input.blur();
  }
  handleWheel() {
    var t;
    if (this.type === "number") {
      (t = this.input) === null || t === void 0 ? void 0 : t.blur();
    }
  }
  select() {
    return this.input.select();
  }
  handleBlur() {
    this.hasFocus = false;
    this.scBlur.emit();
  }
  handleFocus() {
    this.hasFocus = true;
    this.scFocus.emit();
  }
  handleChange() {
    this.value = this.input.value;
    this.scChange.emit();
  }
  handleInput() {
    this.value = this.input.value;
    this.scInput.emit();
  }
  handleClearClick(t) {
    this.value = "";
    this.scClear.emit();
    this.scInput.emit();
    this.scChange.emit();
    this.input.focus();
    t.stopPropagation();
  }
  handlePasswordToggle() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  handleFocusChange() {
    setTimeout(() => {
      this.hasFocus && this.input ? this.input.focus() : this.input.blur();
    }, 0);
  }
  handleValueChange() {
    if (this.input) {
      this.invalid = !this.input.checkValidity();
    }
  }
  componentDidLoad() {
    this.formController = new s(this.el).addFormData();
    this.handleFocusChange();
  }
  disconnectedCallback() {
    var t;
    (t = this.formController) === null || t === void 0
      ? void 0
      : t.removeFormData();
  }
  render() {
    var t;
    return i(
      e,
      { hidden: this.hidden },
      i(
        "sc-form-control",
        {
          exportparts: "label, help-text, form-control",
          size: this.size,
          required: this.required,
          label: this.label,
          showLabel: this.showLabel,
          help: this.help,
          inputId: this.inputId,
          helpId: this.helpId,
          labelId: this.labelId,
          name: this.name,
        },
        i("slot", { name: "label-end", slot: "label-end" }),
        i(
          "div",
          {
            part: "base",
            class: {
              input: true,
              "input--small": this.size === "small",
              "input--medium": this.size === "medium",
              "input--large": this.size === "large",
              "input--focused": this.hasFocus,
              "input--invalid": this.invalid,
              "input--disabled": this.disabled,
              "input--squared": this.squared,
              "input--squared-bottom": this.squaredBottom,
              "input--squared-top": this.squaredTop,
              "input--squared-left": this.squaredLeft,
              "input--squared-right": this.squaredRight,
            },
          },
          i(
            "span",
            { part: "prefix", class: "input__prefix" },
            i("slot", { name: "prefix" })
          ),
          i(
            "slot",
            null,
            i("input", {
              part: "input",
              id: this.inputId,
              class: "input__control",
              ref: (t) => (this.input = t),
              type:
                this.type === "password" && this.isPasswordVisible
                  ? "text"
                  : this.type,
              name: this.name,
              disabled: this.disabled,
              readonly: this.readonly,
              required: this.required,
              placeholder: this.placeholder,
              minlength: this.minlength,
              maxlength: this.maxlength,
              min: this.min,
              max: this.max,
              step: this.step,
              autocomplete: this.autocomplete,
              autocorrect: this.autocorrect,
              autofocus: this.autofocus,
              spellcheck: this.spellcheck,
              pattern: this.pattern,
              inputmode: this.inputmode,
              "aria-label": this.label,
              "aria-labelledby": this.labelId,
              "aria-invalid": this.invalid ? true : false,
              value: this.value,
              onChange: () => this.handleChange(),
              onInput: () => this.handleInput(),
              onFocus: () => this.handleFocus(),
              onBlur: () => this.handleBlur(),
              onKeyDown: (t) => t.stopPropagation(),
            })
          ),
          i(
            "span",
            { part: "suffix", class: "input__suffix" },
            i("slot", { name: "suffix" })
          ),
          this.clearable &&
            ((t = this.value) === null || t === void 0 ? void 0 : t.length) >
              0 &&
            i(
              "button",
              {
                part: "clear-button",
                class: "input__clear",
                type: "button",
                onClick: (t) => this.handleClearClick(t),
                tabindex: "-1",
              },
              i(
                "slot",
                { name: "clear-icon" },
                i(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "feather feather-x",
                  },
                  i("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                  i("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                )
              )
            )
        )
      )
    );
  }
  get el() {
    return r(this);
  }
  static get watchers() {
    return { hasFocus: ["handleFocusChange"], value: ["handleValueChange"] };
  }
};
p.style = u;
export { a as sc_form_control, p as sc_input };
//# sourceMappingURL=p-2cc1d021.entry.js.map
