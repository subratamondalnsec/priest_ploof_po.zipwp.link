import { r as t, c as e, h as s } from "./p-cc7ce8c7.js";
import { c as i } from "./p-3a6d77cf.js";
const n = class {
  constructor(s) {
    t(this, s);
    this.scUpdateLineItems = e(this, "scUpdateLineItems", 7);
    this.order = undefined;
    this.syncItems = [];
  }
  handleLineItemToggle(t) {
    const e = t.detail;
    this.addSyncItem("toggle", e);
  }
  handleLineItemRemove(t) {
    const e = t.detail;
    this.addSyncItem("remove", e);
  }
  handleLineItemAdd(t) {
    const e = t.detail;
    this.addSyncItem("add", e);
  }
  handleLineItemUpdate(t) {
    const e = t.detail;
    this.addSyncItem("update", e);
  }
  async syncItemsHandler(t) {
    if (!(t === null || t === void 0 ? void 0 : t.length)) return;
    setTimeout(() => {
      var t;
      if (!((t = this.syncItems) === null || t === void 0 ? void 0 : t.length))
        return;
      const e = this.processSyncItems();
      this.scUpdateLineItems.emit(e);
      this.syncItems = [];
    }, 100);
  }
  addSyncItem(t, e) {
    this.syncItems = [...this.syncItems, ...[{ type: t, payload: e }]];
  }
  processSyncItems() {
    var t;
    let e = i(
      ((t = this === null || this === void 0 ? void 0 : this.order) === null ||
      t === void 0
        ? void 0
        : t.line_items) || []
    );
    const s = {
      toggle: this.toggleItem,
      add: this.addItem,
      remove: this.removeItem,
      update: this.updateItem,
    };
    (this.syncItems || []).forEach((t) => {
      e = s[t.type](t.payload, e);
    });
    return e;
  }
  addItem(t, e) {
    return [...e, ...[t]];
  }
  toggleItem(t, e) {
    var s;
    const i =
      (s = e.find((e) => e.price_id === t.price_id)) === null || s === void 0
        ? void 0
        : s.price_id;
    e = i ? e.filter((t) => i !== t.price_id) : [...e, ...[t]];
    return e;
  }
  removeItem(t, e) {
    if (!t.price_id) return e;
    return e.filter((e) => e.price_id !== t.price_id);
  }
  updateItem(t, e) {
    const s = e.findIndex((e) => e.price_id === t.price_id);
    if (s !== -1) {
      e[s] = t;
    } else {
      return [...e, ...[t]];
    }
    return e;
  }
  render() {
    return s("slot", null);
  }
  static get watchers() {
    return { syncItems: ["syncItemsHandler"] };
  }
};
export { n as sc_line_items_provider };
//# sourceMappingURL=p-d226cdb4.entry.js.map
