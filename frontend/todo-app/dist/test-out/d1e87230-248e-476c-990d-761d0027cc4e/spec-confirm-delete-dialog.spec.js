import {
  ConfirmDeleteDialog,
  init_confirm_delete_dialog
} from "./chunk-RXPPNJ2O.js";
import "./chunk-KDOZXXMP.js";
import {
  TestBed,
  init_testing
} from "./chunk-XNL2DVBY.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/components/confirm-delete-dialog/confirm-delete-dialog.spec.ts
var require_confirm_delete_dialog_spec = __commonJS({
  "src/app/components/confirm-delete-dialog/confirm-delete-dialog.spec.ts"(exports) {
    init_testing();
    init_confirm_delete_dialog();
    describe("ConfirmDeleteDialog", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ConfirmDeleteDialog]
        }).compileComponents();
        fixture = TestBed.createComponent(ConfirmDeleteDialog);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_confirm_delete_dialog_spec();
//# sourceMappingURL=spec-confirm-delete-dialog.spec.js.map
