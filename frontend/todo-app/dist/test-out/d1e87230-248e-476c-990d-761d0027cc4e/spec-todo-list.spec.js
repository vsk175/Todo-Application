import {
  HttpClient,
  MatIconModule,
  init_http,
  init_icon
} from "./chunk-HULXU27X.js";
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  ConfirmDeleteDialog,
  MatDialog,
  MatDialogModule,
  OverlayConfig,
  OverlayModule,
  PortalModule,
  TemplatePortal,
  createGlobalPositionStrategy,
  createOverlayRef,
  init_confirm_delete_dialog,
  init_dialog,
  init_overlay,
  init_portal
} from "./chunk-RXPPNJ2O.js";
import {
  BreakpointObserver,
  Breakpoints,
  Directionality,
  LiveAnnouncer,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  ObserversModule,
  Platform,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _animationsDisabled,
  coerceBooleanProperty,
  coerceElement,
  coerceNumberProperty,
  getSupportedInputTypes,
  init_a11y,
  init_animation_ChQ1vjiF,
  init_bidi,
  init_button,
  init_coercion,
  init_common_module_cKSwHniA,
  init_element_x4z00URv,
  init_layout,
  init_observers,
  init_platform,
  init_platform_DNDzkVcI,
  init_style_loader_B2sGQXxD
} from "./chunk-KDOZXXMP.js";
import "./chunk-USWOFTV7.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Optional,
  Output,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  TestBed,
  Version,
  ViewChild,
  ViewEncapsulation,
  __decorate,
  afterNextRender,
  afterRenderEffect,
  auditTime,
  booleanAttribute,
  computed,
  contentChild,
  core_exports,
  effect,
  filter,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  init_common,
  init_core,
  init_esm,
  init_operators,
  init_testing,
  init_tslib_es6,
  inject,
  isPromise,
  isSignal,
  isSubscribable,
  map,
  merge,
  of,
  pairwise,
  shareReplay,
  signal,
  startWith,
  takeUntil,
  untracked,
  viewChild,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-XNL2DVBY.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\components\todo-list\todo-list.html
var todo_list_default;
var init_todo_list = __esm({
  "angular:jit:template:src\\app\\components\\todo-list\\todo-list.html"() {
    todo_list_default = '<div class="todo-container">\r\n  <div class="title-row">\r\n  <mat-icon class="title-icon" color="primary">list_alt</mat-icon>\r\n  <h2 class="title-text" color="primary">TODO APP</h2>\r\n</div>\r\n\r\n  <!-- Add Todo Item -->\r\n  <div class="add-task">\r\n    <mat-form-field class="task-input" appearance="outline">\r\n      <mat-label>Add New Task</mat-label>\r\n      <input matInput [(ngModel)]="newTaskTitle" (keyup.enter)="addTodoItem()" />\r\n    </mat-form-field>\r\n    <button mat-icon-button color="primary" (click)="addTodoItem()" [disabled]="!newTaskTitle.trim()" aria-label="Add">\r\n      <mat-icon>add_circle</mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <ul class="todo-list">\r\n      <li *ngFor="let todo of todos" class="todo-item">\r\n    <!-- Edit Todo Item View Mode -->\r\n    <div *ngIf="editingTodoId === todo.id; else viewMode" class="edit-row">\r\n      <input [(ngModel)]="updatedTitle" (keyup.enter)="saveEdit(todo)" class="edit-input" />\r\n      <button mat-icon-button color="primary" (click)="saveEdit(todo)">\r\n        <mat-icon>check</mat-icon>\r\n      </button>\r\n      <button mat-icon-button color="warn" (click)="cancelEdit()">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n\r\n    <!-- Normal View Mode -->\r\n    <ng-template #viewMode>\r\n      <span>{{ todo.title }}</span>\r\n      <div>\r\n        <button mat-icon-button color="primary" (click)="startEdit(todo)">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color="warn" (click)="confirmAndDelete(todo)">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </div>\r\n    </ng-template>\r\n  </li>\r\n  </ul>\r\n\r\n <!-- Empty Todo List -->\r\n<div *ngIf="todos.length === 0" class="no-todos">\r\n  <div class="title-row">\r\n    <h4>No tasks yet. Add some to get started!</h4>\r\n  </div>\r\n</div>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\components\todo-list\todo-list.css
var todo_list_default2;
var init_todo_list2 = __esm({
  "angular:jit:style:src\\app\\components\\todo-list\\todo-list.css"() {
    todo_list_default2 = "/* src/app/components/todo-list/todo-list.css */\n.todo-container {\n  max-width: 500px;\n  margin: 2rem auto;\n  padding: 1.5rem;\n  background: #fff;\n  border-radius: 1rem;\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);\n  font-family: sans-serif;\n}\n.add-task {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.add-task button {\n  margin-bottom: 21px;\n}\n.task-input {\n  flex: 1;\n}\n.title-row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n  padding: 1rem;\n  background-color: #f3f6f9;\n  border-radius: 12px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\n.title-icon {\n  font-size: 2 rem;\n}\n.title-text {\n  font-size: 2rem;\n  font-weight: 400;\n  margin: 0;\n  letter-spacing: 0.5px;\n}\n.todo-list {\n  padding: 0;\n  list-style: none;\n  margin: 0;\n}\n.todo-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  margin-bottom: 0.5rem;\n  background: #f0f4f8;\n  border-radius: 0.5rem;\n}\n.edit-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex: 1;\n}\n.edit-input {\n  flex: 1;\n  padding: 0.5rem;\n  font-size: 1rem;\n}\n.no-todos {\n  text-align: center;\n  color: #666;\n  font-style: italic;\n}\n/*# sourceMappingURL=todo-list.css.map */\n";
  }
});

// node_modules/@angular/forms/fesm2022/forms.mjs
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
function isEmptyInputValue(value) {
  return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
  if (value == null) {
    return null;
  } else if (Array.isArray(value) || typeof value === "string") {
    return value.length;
  } else if (value instanceof Set) {
    return value.size;
  }
  return null;
}
function minValidator(min) {
  return (control) => {
    if (control.value == null || min == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? { "min": { "min": min, "actual": control.value } } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (control.value == null || max == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? { "max": { "max": max, "actual": control.value } } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? { "required": true } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : { "required": true };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : { "email": true };
}
function minLengthValidator(minLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length === null || length === 0) {
      return null;
    }
    return length < minLength ? { "minlength": { "requiredLength": minLength, "actualLength": length } } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length !== null && length > maxLength) {
      return { "maxlength": { "requiredLength": maxLength, "actualLength": length } };
    }
    return null;
  };
}
function patternValidator(pattern) {
  if (!pattern)
    return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^")
      regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$")
      regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : { "pattern": { "requiredPattern": regexStr, "actualValue": value } };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive. You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control)
      _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor)
      _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, { emitModelToViewChange: false });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path?.[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never")
    return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
function checkParentType$1(parent) {
  if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) {
    throw formGroupNameException();
  } else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) {
    throw modelParentException();
  }
}
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
function hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
function checkParentType(parent, name) {
  if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) {
    throw ngModelGroupException();
  } else if (!(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName)) {
    throw controlParentException(name);
  }
}
function _buildValueString$1(id, value) {
  if (id == null)
    return `${value}`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
function _buildValueString(id, value) {
  if (id == null)
    return `${value}`;
  if (typeof value === "string")
    value = `'${value}'`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var BaseControlValueAccessor, BuiltInControlValueAccessor, NG_VALUE_ACCESSOR, CHECKBOX_VALUE_ACCESSOR, CheckboxControlValueAccessor, DEFAULT_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NG_VALIDATORS, NG_ASYNC_VALIDATORS, EMAIL_REGEXP, Validators, AbstractControlDirective, ControlContainer, NgControl, AbstractControlStatus, ngControlStatusHost, ngGroupStatusHost, NgControlStatus, NgControlStatusGroup, formControlNameExample, formGroupNameExample, formArrayNameExample, ngModelGroupExample, ngModelWithFormGroupExample, disabledAttrWarning, asyncValidatorsDroppedWithOptsWarning, VALID, INVALID, PENDING, DISABLED, ControlEvent, ValueChangeEvent, PristineChangeEvent, TouchedChangeEvent, StatusChangeEvent, FormSubmittedEvent, FormResetEvent, AbstractControl, FormGroup, FormRecord, CALL_SET_DISABLED_STATE, setDisabledStateDefault, formDirectiveProvider$1, resolvedPromise$1, NgForm, FormControl, isFormControl, AbstractFormGroupDirective, modelGroupProvider, NgModelGroup, formControlBinding$1, resolvedPromise, NgModel, \u0275NgNoValidate, NUMBER_VALUE_ACCESSOR, NumberValueAccessor, RADIO_VALUE_ACCESSOR, RadioControlRegistry, RadioControlValueAccessor, RANGE_VALUE_ACCESSOR, RangeValueAccessor, NG_MODEL_WITH_FORM_CONTROL_WARNING, formControlBinding, FormControlDirective, formDirectiveProvider, FormGroupDirective, formGroupNameProvider, FormGroupName, formArrayNameProvider, FormArrayName, controlNameBinding, FormControlName, SELECT_VALUE_ACCESSOR, SelectControlValueAccessor, NgSelectOption, SELECT_MULTIPLE_VALUE_ACCESSOR, SelectMultipleControlValueAccessor, \u0275NgSelectMultipleOption, AbstractValidatorDirective, MAX_VALIDATOR, MaxValidator, MIN_VALIDATOR, MinValidator, REQUIRED_VALIDATOR, CHECKBOX_REQUIRED_VALIDATOR, RequiredValidator, CheckboxRequiredValidator, EMAIL_VALIDATOR, EmailValidator, MIN_LENGTH_VALIDATOR, MinLengthValidator, MAX_LENGTH_VALIDATOR, MaxLengthValidator, PATTERN_VALIDATOR, PatternValidator, SHARED_FORM_DIRECTIVES, TEMPLATE_DRIVEN_DIRECTIVES, REACTIVE_DRIVEN_DIRECTIVES, \u0275InternalFormsSharedModule, FormArray, FormBuilder, NonNullableFormBuilder, UntypedFormBuilder, VERSION, FormsModule, ReactiveFormsModule;
var init_forms = __esm({
  "node_modules/@angular/forms/fesm2022/forms.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_esm();
    init_operators();
    BaseControlValueAccessor = class _BaseControlValueAccessor {
      _renderer;
      _elementRef;
      /**
       * The registered callback function called when a change or input event occurs on the input
       * element.
       * @docs-private
       */
      onChange = (_) => {
      };
      /**
       * The registered callback function called when a blur event occurs on the input element.
       * @docs-private
       */
      onTouched = () => {
      };
      constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
      }
      /**
       * Helper method that sets a property on a target element using the current Renderer
       * implementation.
       * @docs-private
       */
      setProperty(key, value) {
        this._renderer.setProperty(this._elementRef.nativeElement, key, value);
      }
      /**
       * Registers a function called when the control is touched.
       * @docs-private
       */
      registerOnTouched(fn) {
        this.onTouched = fn;
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = fn;
      }
      /**
       * Sets the "disabled" property on the range input element.
       * @docs-private
       */
      setDisabledState(isDisabled) {
        this.setProperty("disabled", isDisabled);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _BaseControlValueAccessor, deps: [{ token: Renderer2 }, { token: ElementRef }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _BaseControlValueAccessor, isStandalone: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: BaseControlValueAccessor, decorators: [{
      type: Directive
    }], ctorParameters: () => [{ type: Renderer2 }, { type: ElementRef }] });
    BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _BuiltInControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _BuiltInControlValueAccessor, isStandalone: true, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: BuiltInControlValueAccessor, decorators: [{
      type: Directive
    }] });
    NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
    CHECKBOX_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxControlValueAccessor),
      multi: true
    };
    CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
      /**
       * Sets the "checked" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        this.setProperty("checked", value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _CheckboxControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _CheckboxControlValueAccessor, isStandalone: false, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]", host: { listeners: { "change": "onChange($any($event.target).checked)", "blur": "onTouched()" } }, providers: [CHECKBOX_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: CheckboxControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
        host: { "(change)": "onChange($any($event.target).checked)", "(blur)": "onTouched()" },
        providers: [CHECKBOX_VALUE_ACCESSOR],
        standalone: false
      }]
    }] });
    DEFAULT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DefaultValueAccessor),
      multi: true
    };
    COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
    DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
      _compositionMode;
      /** Whether the user is creating a composition string (IME events). */
      _composing = false;
      constructor(renderer, elementRef, _compositionMode) {
        super(renderer, elementRef);
        this._compositionMode = _compositionMode;
        if (this._compositionMode == null) {
          this._compositionMode = !_isAndroid();
        }
      }
      /**
       * Sets the "value" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        const normalizedValue = value == null ? "" : value;
        this.setProperty("value", normalizedValue);
      }
      /** @internal */
      _handleInput(value) {
        if (!this._compositionMode || this._compositionMode && !this._composing) {
          this.onChange(value);
        }
      }
      /** @internal */
      _compositionStart() {
        this._composing = true;
      }
      /** @internal */
      _compositionEnd(value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _DefaultValueAccessor, deps: [{ token: Renderer2 }, { token: ElementRef }, { token: COMPOSITION_BUFFER_MODE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _DefaultValueAccessor, isStandalone: false, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]", host: { listeners: { "input": "_handleInput($any($event.target).value)", "blur": "onTouched()", "compositionstart": "_compositionStart()", "compositionend": "_compositionEnd($any($event.target).value)" } }, providers: [DEFAULT_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: DefaultValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
        // TODO: vsavkin replace the above selector with the one below it once
        // https://github.com/angular/angular/issues/3011 is implemented
        // selector: '[ngModel],[formControl],[formControlName]',
        host: {
          "(input)": "_handleInput($any($event.target).value)",
          "(blur)": "onTouched()",
          "(compositionstart)": "_compositionStart()",
          "(compositionend)": "_compositionEnd($any($event.target).value)"
        },
        providers: [DEFAULT_VALUE_ACCESSOR],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: Renderer2 }, { type: ElementRef }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }] }] });
    NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
    NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
    EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    Validators = class {
      /**
       * @description
       * Validator that requires the control's value to be greater than or equal to the provided number.
       *
       * @usageNotes
       *
       * ### Validate against a minimum of 3
       *
       * ```ts
       * const control = new FormControl(2, Validators.min(3));
       *
       * console.log(control.errors); // {min: {min: 3, actual: 2}}
       * ```
       *
       * @returns A validator function that returns an error map with the
       * `min` property if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static min(min) {
        return minValidator(min);
      }
      /**
       * @description
       * Validator that requires the control's value to be less than or equal to the provided number.
       *
       * @usageNotes
       *
       * ### Validate against a maximum of 15
       *
       * ```ts
       * const control = new FormControl(16, Validators.max(15));
       *
       * console.log(control.errors); // {max: {max: 15, actual: 16}}
       * ```
       *
       * @returns A validator function that returns an error map with the
       * `max` property if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static max(max) {
        return maxValidator(max);
      }
      /**
       * @description
       * Validator that requires the control have a non-empty value.
       *
       * @usageNotes
       *
       * ### Validate that the field is non-empty
       *
       * ```ts
       * const control = new FormControl('', Validators.required);
       *
       * console.log(control.errors); // {required: true}
       * ```
       *
       * @returns An error map with the `required` property
       * if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static required(control) {
        return requiredValidator(control);
      }
      /**
       * @description
       * Validator that requires the control's value be true. This validator is commonly
       * used for required checkboxes.
       *
       * @usageNotes
       *
       * ### Validate that the field value is true
       *
       * ```ts
       * const control = new FormControl('some value', Validators.requiredTrue);
       *
       * console.log(control.errors); // {required: true}
       * ```
       *
       * @returns An error map that contains the `required` property
       * set to `true` if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static requiredTrue(control) {
        return requiredTrueValidator(control);
      }
      /**
       * @description
       * Validator that requires the control's value pass an email validation test.
       *
       * Tests the value using a [regular
       * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
       * pattern suitable for common use cases. The pattern is based on the definition of a valid email
       * address in the [WHATWG HTML
       * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
       * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
       * lengths of different parts of the address).
       *
       * The differences from the WHATWG version include:
       * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
       * - Disallow `local-part` to be longer than 64 characters.
       * - Disallow the whole address to be longer than 254 characters.
       *
       * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
       * validate the value against a different pattern.
       *
       * @usageNotes
       *
       * ### Validate that the field matches a valid email pattern
       *
       * ```ts
       * const control = new FormControl('bad@', Validators.email);
       *
       * console.log(control.errors); // {email: true}
       * ```
       *
       * @returns An error map with the `email` property
       * if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static email(control) {
        return emailValidator(control);
      }
      /**
       * @description
       * Validator that requires the number of items in the control's value to be greater than or equal
       * to the provided minimum length. This validator is also provided by default if you use
       * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
       * only for types that have a numeric `length` or `size` property, such as strings, arrays or
       * sets. The `minLength` validator logic is also not invoked for values when their `length` or
       * `size` property is 0 (for example in case of an empty string or an empty array), to support
       * optional controls. You can use the standard `required` validator if empty values should not be
       * considered valid.
       *
       * @usageNotes
       *
       * ### Validate that the field has a minimum of 3 characters
       *
       * ```ts
       * const control = new FormControl('ng', Validators.minLength(3));
       *
       * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
       * ```
       *
       * ```html
       * <input minlength="5">
       * ```
       *
       * @returns A validator function that returns an error map with the
       * `minlength` property if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static minLength(minLength) {
        return minLengthValidator(minLength);
      }
      /**
       * @description
       * Validator that requires the number of items in the control's value to be less than or equal
       * to the provided maximum length. This validator is also provided by default if you use
       * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
       * only for types that have a numeric `length` or `size` property, such as strings, arrays or
       * sets.
       *
       * @usageNotes
       *
       * ### Validate that the field has maximum of 5 characters
       *
       * ```ts
       * const control = new FormControl('Angular', Validators.maxLength(5));
       *
       * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
       * ```
       *
       * ```html
       * <input maxlength="5">
       * ```
       *
       * @returns A validator function that returns an error map with the
       * `maxlength` property if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static maxLength(maxLength) {
        return maxLengthValidator(maxLength);
      }
      /**
       * @description
       * Validator that requires the control's value to match a regex pattern. This validator is also
       * provided by default if you use the HTML5 `pattern` attribute.
       *
       * @usageNotes
       *
       * ### Validate that the field only contains letters or spaces
       *
       * ```ts
       * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
       *
       * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
       * ```
       *
       * ```html
       * <input pattern="[a-zA-Z ]*">
       * ```
       *
       * ### Pattern matching with the global or sticky flag
       *
       * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
       * can produce different results on the same input when validations are run consecutively. This is
       * due to how the behavior of `RegExp.prototype.test` is
       * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
       * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
       * Due to this behavior, it is recommended that when using
       * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
       * flag enabled.
       *
       * ```ts
       * // Not recommended (since the `g` flag is used)
       * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
       *
       * // Good
       * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
       * ```
       *
       * @param pattern A regular expression to be used as is to test the values, or a string.
       * If a string is passed, the `^` character is prepended and the `$` character is
       * appended to the provided string (if not already present), and the resulting regular
       * expression is used to test the values.
       *
       * @returns A validator function that returns an error map with the
       * `pattern` property if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static pattern(pattern) {
        return patternValidator(pattern);
      }
      /**
       * @description
       * Validator that performs no operation.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static nullValidator(control) {
        return nullValidator();
      }
      static compose(validators) {
        return compose(validators);
      }
      /**
       * @description
       * Compose multiple async validators into a single function that returns the union
       * of the individual error objects for the provided control.
       *
       * @returns A validator function that returns an error map with the
       * merged error objects of the async validators if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static composeAsync(validators) {
        return composeAsync(validators);
      }
    };
    AbstractControlDirective = class {
      /**
       * @description
       * Reports the value of the control if it is present, otherwise null.
       */
      get value() {
        return this.control ? this.control.value : null;
      }
      /**
       * @description
       * Reports whether the control is valid. A control is considered valid if no
       * validation errors exist with the current value.
       * If the control is not present, null is returned.
       */
      get valid() {
        return this.control ? this.control.valid : null;
      }
      /**
       * @description
       * Reports whether the control is invalid, meaning that an error exists in the input value.
       * If the control is not present, null is returned.
       */
      get invalid() {
        return this.control ? this.control.invalid : null;
      }
      /**
       * @description
       * Reports whether a control is pending, meaning that async validation is occurring and
       * errors are not yet available for the input value. If the control is not present, null is
       * returned.
       */
      get pending() {
        return this.control ? this.control.pending : null;
      }
      /**
       * @description
       * Reports whether the control is disabled, meaning that the control is disabled
       * in the UI and is exempt from validation checks and excluded from aggregate
       * values of ancestor controls. If the control is not present, null is returned.
       */
      get disabled() {
        return this.control ? this.control.disabled : null;
      }
      /**
       * @description
       * Reports whether the control is enabled, meaning that the control is included in ancestor
       * calculations of validity or value. If the control is not present, null is returned.
       */
      get enabled() {
        return this.control ? this.control.enabled : null;
      }
      /**
       * @description
       * Reports the control's validation errors. If the control is not present, null is returned.
       */
      get errors() {
        return this.control ? this.control.errors : null;
      }
      /**
       * @description
       * Reports whether the control is pristine, meaning that the user has not yet changed
       * the value in the UI. If the control is not present, null is returned.
       */
      get pristine() {
        return this.control ? this.control.pristine : null;
      }
      /**
       * @description
       * Reports whether the control is dirty, meaning that the user has changed
       * the value in the UI. If the control is not present, null is returned.
       */
      get dirty() {
        return this.control ? this.control.dirty : null;
      }
      /**
       * @description
       * Reports whether the control is touched, meaning that the user has triggered
       * a `blur` event on it. If the control is not present, null is returned.
       */
      get touched() {
        return this.control ? this.control.touched : null;
      }
      /**
       * @description
       * Reports the validation status of the control. Possible values include:
       * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
       * If the control is not present, null is returned.
       */
      get status() {
        return this.control ? this.control.status : null;
      }
      /**
       * @description
       * Reports whether the control is untouched, meaning that the user has not yet triggered
       * a `blur` event on it. If the control is not present, null is returned.
       */
      get untouched() {
        return this.control ? this.control.untouched : null;
      }
      /**
       * @description
       * Returns a multicasting observable that emits a validation status whenever it is
       * calculated for the control. If the control is not present, null is returned.
       */
      get statusChanges() {
        return this.control ? this.control.statusChanges : null;
      }
      /**
       * @description
       * Returns a multicasting observable of value changes for the control that emits every time the
       * value of the control changes in the UI or programmatically.
       * If the control is not present, null is returned.
       */
      get valueChanges() {
        return this.control ? this.control.valueChanges : null;
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return null;
      }
      /**
       * Contains the result of merging synchronous validators into a single validator function
       * (combined using `Validators.compose`).
       */
      _composedValidatorFn;
      /**
       * Contains the result of merging asynchronous validators into a single validator function
       * (combined using `Validators.composeAsync`).
       */
      _composedAsyncValidatorFn;
      /**
       * Set of synchronous validators as they were provided while calling `setValidators` function.
       * @internal
       */
      _rawValidators = [];
      /**
       * Set of asynchronous validators as they were provided while calling `setAsyncValidators`
       * function.
       * @internal
       */
      _rawAsyncValidators = [];
      /**
       * Sets synchronous validators for this directive.
       * @internal
       */
      _setValidators(validators) {
        this._rawValidators = validators || [];
        this._composedValidatorFn = composeValidators(this._rawValidators);
      }
      /**
       * Sets asynchronous validators for this directive.
       * @internal
       */
      _setAsyncValidators(validators) {
        this._rawAsyncValidators = validators || [];
        this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
      }
      /**
       * @description
       * Synchronous validator function composed of all the synchronous validators registered with this
       * directive.
       */
      get validator() {
        return this._composedValidatorFn || null;
      }
      /**
       * @description
       * Asynchronous validator function composed of all the asynchronous validators registered with
       * this directive.
       */
      get asyncValidator() {
        return this._composedAsyncValidatorFn || null;
      }
      /*
       * The set of callbacks to be invoked when directive instance is being destroyed.
       */
      _onDestroyCallbacks = [];
      /**
       * Internal function to register callbacks that should be invoked
       * when directive instance is being destroyed.
       * @internal
       */
      _registerOnDestroy(fn) {
        this._onDestroyCallbacks.push(fn);
      }
      /**
       * Internal function to invoke all registered "on destroy" callbacks.
       * Note: calling this function also clears the list of callbacks.
       * @internal
       */
      _invokeOnDestroyCallbacks() {
        this._onDestroyCallbacks.forEach((fn) => fn());
        this._onDestroyCallbacks = [];
      }
      /**
       * @description
       * Resets the control with the provided value if the control is present.
       */
      reset(value = void 0) {
        if (this.control)
          this.control.reset(value);
      }
      /**
       * @description
       * Reports whether the control with the given path has the error specified.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * If no path is given, this method checks for the error on the current control.
       *
       * @returns whether the given error is present in the control at the given path.
       *
       * If the control is not present, false is returned.
       */
      hasError(errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
      }
      /**
       * @description
       * Reports error data for the control with the given path.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * @returns error data for that particular error. If the control or error is not present,
       * null is returned.
       */
      getError(errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
      }
    };
    ControlContainer = class extends AbstractControlDirective {
      /**
       * @description
       * The name for the control
       */
      name;
      /**
       * @description
       * The top-level form directive for the control.
       */
      get formDirective() {
        return null;
      }
      /**
       * @description
       * The path to this group.
       */
      get path() {
        return null;
      }
    };
    NgControl = class extends AbstractControlDirective {
      /**
       * @description
       * The parent form for the control.
       *
       * @internal
       */
      _parent = null;
      /**
       * @description
       * The name for the control
       */
      name = null;
      /**
       * @description
       * The value accessor for the control
       */
      valueAccessor = null;
    };
    AbstractControlStatus = class {
      _cd;
      constructor(cd) {
        this._cd = cd;
      }
      get isTouched() {
        this._cd?.control?._touched?.();
        return !!this._cd?.control?.touched;
      }
      get isUntouched() {
        return !!this._cd?.control?.untouched;
      }
      get isPristine() {
        this._cd?.control?._pristine?.();
        return !!this._cd?.control?.pristine;
      }
      get isDirty() {
        return !!this._cd?.control?.dirty;
      }
      get isValid() {
        this._cd?.control?._status?.();
        return !!this._cd?.control?.valid;
      }
      get isInvalid() {
        return !!this._cd?.control?.invalid;
      }
      get isPending() {
        return !!this._cd?.control?.pending;
      }
      get isSubmitted() {
        this._cd?._submitted?.();
        return !!this._cd?.submitted;
      }
    };
    ngControlStatusHost = {
      "[class.ng-untouched]": "isUntouched",
      "[class.ng-touched]": "isTouched",
      "[class.ng-pristine]": "isPristine",
      "[class.ng-dirty]": "isDirty",
      "[class.ng-valid]": "isValid",
      "[class.ng-invalid]": "isInvalid",
      "[class.ng-pending]": "isPending"
    };
    ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
      "[class.ng-submitted]": "isSubmitted"
    });
    NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
      constructor(cd) {
        super(cd);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _NgControlStatus, deps: [{ token: NgControl, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _NgControlStatus, isStandalone: false, selector: "[formControlName],[ngModel],[formControl]", host: { properties: { "class.ng-untouched": "isUntouched", "class.ng-touched": "isTouched", "class.ng-pristine": "isPristine", "class.ng-dirty": "isDirty", "class.ng-valid": "isValid", "class.ng-invalid": "isInvalid", "class.ng-pending": "isPending" } }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: NgControlStatus, decorators: [{
      type: Directive,
      args: [{
        selector: "[formControlName],[ngModel],[formControl]",
        host: ngControlStatusHost,
        standalone: false
      }]
    }], ctorParameters: () => [{ type: NgControl, decorators: [{
      type: Self
    }] }] });
    NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
      constructor(cd) {
        super(cd);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _NgControlStatusGroup, deps: [{ token: ControlContainer, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _NgControlStatusGroup, isStandalone: false, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]", host: { properties: { "class.ng-untouched": "isUntouched", "class.ng-touched": "isTouched", "class.ng-pristine": "isPristine", "class.ng-dirty": "isDirty", "class.ng-valid": "isValid", "class.ng-invalid": "isInvalid", "class.ng-pending": "isPending", "class.ng-submitted": "isSubmitted" } }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: NgControlStatusGroup, decorators: [{
      type: Directive,
      args: [{
        selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
        host: ngGroupStatusHost,
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Self
    }] }] });
    formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
    formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
    formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
    ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
    ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
    disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
    asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
    VALID = "VALID";
    INVALID = "INVALID";
    PENDING = "PENDING";
    DISABLED = "DISABLED";
    ControlEvent = class {
    };
    ValueChangeEvent = class extends ControlEvent {
      value;
      source;
      constructor(value, source) {
        super();
        this.value = value;
        this.source = source;
      }
    };
    PristineChangeEvent = class extends ControlEvent {
      pristine;
      source;
      constructor(pristine, source) {
        super();
        this.pristine = pristine;
        this.source = source;
      }
    };
    TouchedChangeEvent = class extends ControlEvent {
      touched;
      source;
      constructor(touched, source) {
        super();
        this.touched = touched;
        this.source = source;
      }
    };
    StatusChangeEvent = class extends ControlEvent {
      status;
      source;
      constructor(status, source) {
        super();
        this.status = status;
        this.source = source;
      }
    };
    FormSubmittedEvent = class extends ControlEvent {
      source;
      constructor(source) {
        super();
        this.source = source;
      }
    };
    FormResetEvent = class extends ControlEvent {
      source;
      constructor(source) {
        super();
        this.source = source;
      }
    };
    AbstractControl = class {
      /** @internal */
      _pendingDirty = false;
      /**
       * Indicates that a control has its own pending asynchronous validation in progress.
       * It also stores if the control should emit events when the validation status changes.
       *
       * @internal
       */
      _hasOwnPendingAsyncValidator = null;
      /** @internal */
      _pendingTouched = false;
      /** @internal */
      _onCollectionChange = () => {
      };
      /** @internal */
      _updateOn;
      _parent = null;
      _asyncValidationSubscription;
      /**
       * Contains the result of merging synchronous validators into a single validator function
       * (combined using `Validators.compose`).
       *
       * @internal
       */
      _composedValidatorFn;
      /**
       * Contains the result of merging asynchronous validators into a single validator function
       * (combined using `Validators.composeAsync`).
       *
       * @internal
       */
      _composedAsyncValidatorFn;
      /**
       * Synchronous validators as they were provided:
       *  - in `AbstractControl` constructor
       *  - as an argument while calling `setValidators` function
       *  - while calling the setter on the `validator` field (e.g. `control.validator = validatorFn`)
       *
       * @internal
       */
      _rawValidators;
      /**
       * Asynchronous validators as they were provided:
       *  - in `AbstractControl` constructor
       *  - as an argument while calling `setAsyncValidators` function
       *  - while calling the setter on the `asyncValidator` field (e.g. `control.asyncValidator =
       * asyncValidatorFn`)
       *
       * @internal
       */
      _rawAsyncValidators;
      /**
       * The current value of the control.
       *
       * * For a `FormControl`, the current value.
       * * For an enabled `FormGroup`, the values of enabled controls as an object
       * with a key-value pair for each member of the group.
       * * For a disabled `FormGroup`, the values of all controls as an object
       * with a key-value pair for each member of the group.
       * * For a `FormArray`, the values of enabled controls as an array.
       *
       */
      value;
      /**
       * Initialize the AbstractControl instance.
       *
       * @param validators The function or array of functions that is used to determine the validity of
       *     this control synchronously.
       * @param asyncValidators The function or array of functions that is used to determine validity of
       *     this control asynchronously.
       */
      constructor(validators, asyncValidators) {
        this._assignValidators(validators);
        this._assignAsyncValidators(asyncValidators);
      }
      /**
       * Returns the function that is used to determine the validity of this control synchronously.
       * If multiple validators have been added, this will be a single composed function.
       * See `Validators.compose()` for additional information.
       */
      get validator() {
        return this._composedValidatorFn;
      }
      set validator(validatorFn) {
        this._rawValidators = this._composedValidatorFn = validatorFn;
      }
      /**
       * Returns the function that is used to determine the validity of this control asynchronously.
       * If multiple validators have been added, this will be a single composed function.
       * See `Validators.compose()` for additional information.
       */
      get asyncValidator() {
        return this._composedAsyncValidatorFn;
      }
      set asyncValidator(asyncValidatorFn) {
        this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
      }
      /**
       * The parent control.
       */
      get parent() {
        return this._parent;
      }
      /**
       * The validation status of the control.
       *
       * @see {@link FormControlStatus}
       *
       * These status values are mutually exclusive, so a control cannot be
       * both valid AND invalid or invalid AND disabled.
       */
      get status() {
        return untracked(this.statusReactive);
      }
      set status(v) {
        untracked(() => this.statusReactive.set(v));
      }
      /** @internal */
      _status = computed(() => this.statusReactive(), ...ngDevMode ? [{ debugName: "_status" }] : []);
      statusReactive = signal(void 0, ...ngDevMode ? [{ debugName: "statusReactive" }] : []);
      /**
       * A control is `valid` when its `status` is `VALID`.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if the control has passed all of its validation tests,
       * false otherwise.
       */
      get valid() {
        return this.status === VALID;
      }
      /**
       * A control is `invalid` when its `status` is `INVALID`.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if this control has failed one or more of its validation checks,
       * false otherwise.
       */
      get invalid() {
        return this.status === INVALID;
      }
      /**
       * A control is `pending` when its `status` is `PENDING`.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if this control is in the process of conducting a validation check,
       * false otherwise.
       */
      get pending() {
        return this.status == PENDING;
      }
      /**
       * A control is `disabled` when its `status` is `DISABLED`.
       *
       * Disabled controls are exempt from validation checks and
       * are not included in the aggregate value of their ancestor
       * controls.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if the control is disabled, false otherwise.
       */
      get disabled() {
        return this.status === DISABLED;
      }
      /**
       * A control is `enabled` as long as its `status` is not `DISABLED`.
       *
       * @returns True if the control has any status other than 'DISABLED',
       * false if the status is 'DISABLED'.
       *
       * @see {@link AbstractControl.status}
       *
       */
      get enabled() {
        return this.status !== DISABLED;
      }
      /**
       * An object containing any errors generated by failing validation,
       * or null if there are no errors.
       */
      errors;
      /**
       * A control is `pristine` if the user has not yet changed
       * the value in the UI.
       *
       * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
       * Programmatic changes to a control's value do not mark it dirty.
       */
      get pristine() {
        return untracked(this.pristineReactive);
      }
      set pristine(v) {
        untracked(() => this.pristineReactive.set(v));
      }
      /** @internal */
      _pristine = computed(() => this.pristineReactive(), ...ngDevMode ? [{ debugName: "_pristine" }] : []);
      pristineReactive = signal(true, ...ngDevMode ? [{ debugName: "pristineReactive" }] : []);
      /**
       * A control is `dirty` if the user has changed the value
       * in the UI.
       *
       * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
       * Programmatic changes to a control's value do not mark it dirty.
       */
      get dirty() {
        return !this.pristine;
      }
      /**
       * True if the control is marked as `touched`.
       *
       * A control is marked `touched` once the user has triggered
       * a `blur` event on it.
       */
      get touched() {
        return untracked(this.touchedReactive);
      }
      set touched(v) {
        untracked(() => this.touchedReactive.set(v));
      }
      /** @internal */
      _touched = computed(() => this.touchedReactive(), ...ngDevMode ? [{ debugName: "_touched" }] : []);
      touchedReactive = signal(false, ...ngDevMode ? [{ debugName: "touchedReactive" }] : []);
      /**
       * True if the control has not been marked as touched
       *
       * A control is `untouched` if the user has not yet triggered
       * a `blur` event on it.
       */
      get untouched() {
        return !this.touched;
      }
      /**
       * Exposed as observable, see below.
       *
       * @internal
       */
      _events = new Subject();
      /**
       * A multicasting observable that emits an event every time the state of the control changes.
       * It emits for value, status, pristine or touched changes.
       *
       * **Note**: On value change, the emit happens right after a value of this control is updated. The
       * value of a parent control (for example if this FormControl is a part of a FormGroup) is updated
       * later, so accessing a value of a parent control (using the `value` property) from the callback
       * of this event might result in getting a value that has not been updated yet. Subscribe to the
       * `events` of the parent control instead.
       * For other event types, the events are emitted after the parent control has been updated.
       *
       */
      events = this._events.asObservable();
      /**
       * A multicasting observable that emits an event every time the value of the control changes, in
       * the UI or programmatically. It also emits an event each time you call enable() or disable()
       * without passing along {emitEvent: false} as a function argument.
       *
       * **Note**: the emit happens right after a value of this control is updated. The value of a
       * parent control (for example if this FormControl is a part of a FormGroup) is updated later, so
       * accessing a value of a parent control (using the `value` property) from the callback of this
       * event might result in getting a value that has not been updated yet. Subscribe to the
       * `valueChanges` event of the parent control instead.
       */
      valueChanges;
      /**
       * A multicasting observable that emits an event every time the validation `status` of the control
       * recalculates.
       *
       * @see {@link FormControlStatus}
       * @see {@link AbstractControl.status}
       */
      statusChanges;
      /**
       * Reports the update strategy of the `AbstractControl` (meaning
       * the event on which the control updates itself).
       * Possible values: `'change'` | `'blur'` | `'submit'`
       * Default value: `'change'`
       */
      get updateOn() {
        return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
      }
      /**
       * Sets the synchronous validators that are active on this control.  Calling
       * this overwrites any existing synchronous validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * If you want to add a new validator without affecting existing ones, consider
       * using `addValidators()` method instead.
       */
      setValidators(validators) {
        this._assignValidators(validators);
      }
      /**
       * Sets the asynchronous validators that are active on this control. Calling this
       * overwrites any existing asynchronous validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * If you want to add a new validator without affecting existing ones, consider
       * using `addAsyncValidators()` method instead.
       */
      setAsyncValidators(validators) {
        this._assignAsyncValidators(validators);
      }
      /**
       * Add a synchronous validator or validators to this control, without affecting other validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * Adding a validator that already exists will have no effect. If duplicate validator functions
       * are present in the `validators` array, only the first instance would be added to a form
       * control.
       *
       * @param validators The new validator function or functions to add to this control.
       */
      addValidators(validators) {
        this.setValidators(addValidators(validators, this._rawValidators));
      }
      /**
       * Add an asynchronous validator or validators to this control, without affecting other
       * validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * Adding a validator that already exists will have no effect.
       *
       * @param validators The new asynchronous validator function or functions to add to this control.
       */
      addAsyncValidators(validators) {
        this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
      }
      /**
       * Remove a synchronous validator from this control, without affecting other validators.
       * Validators are compared by function reference; you must pass a reference to the exact same
       * validator function as the one that was originally set. If a provided validator is not found,
       * it is ignored.
       *
       * @usageNotes
       *
       * ### Reference to a ValidatorFn
       *
       * ```
       * // Reference to the RequiredValidator
       * const ctrl = new FormControl<string | null>('', Validators.required);
       * ctrl.removeValidators(Validators.required);
       *
       * // Reference to anonymous function inside MinValidator
       * const minValidator = Validators.min(3);
       * const ctrl = new FormControl<string | null>('', minValidator);
       * expect(ctrl.hasValidator(minValidator)).toEqual(true)
       * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
       *
       * ctrl.removeValidators(minValidator);
       * ```
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * @param validators The validator or validators to remove.
       */
      removeValidators(validators) {
        this.setValidators(removeValidators(validators, this._rawValidators));
      }
      /**
       * Remove an asynchronous validator from this control, without affecting other validators.
       * Validators are compared by function reference; you must pass a reference to the exact same
       * validator function as the one that was originally set. If a provided validator is not found, it
       * is ignored.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * @param validators The asynchronous validator or validators to remove.
       */
      removeAsyncValidators(validators) {
        this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
      }
      /**
       * Check whether a synchronous validator function is present on this control. The provided
       * validator must be a reference to the exact same function that was provided.
       *
       * @usageNotes
       *
       * ### Reference to a ValidatorFn
       *
       * ```
       * // Reference to the RequiredValidator
       * const ctrl = new FormControl<number | null>(0, Validators.required);
       * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
       *
       * // Reference to anonymous function inside MinValidator
       * const minValidator = Validators.min(3);
       * const ctrl = new FormControl<number | null>(0, minValidator);
       * expect(ctrl.hasValidator(minValidator)).toEqual(true)
       * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
       * ```
       *
       * @param validator The validator to check for presence. Compared by function reference.
       * @returns Whether the provided validator was found on this control.
       */
      hasValidator(validator) {
        return hasValidator(this._rawValidators, validator);
      }
      /**
       * Check whether an asynchronous validator function is present on this control. The provided
       * validator must be a reference to the exact same function that was provided.
       *
       * @param validator The asynchronous validator to check for presence. Compared by function
       *     reference.
       * @returns Whether the provided asynchronous validator was found on this control.
       */
      hasAsyncValidator(validator) {
        return hasValidator(this._rawAsyncValidators, validator);
      }
      /**
       * Empties out the synchronous validator list.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       */
      clearValidators() {
        this.validator = null;
      }
      /**
       * Empties out the async validator list.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       */
      clearAsyncValidators() {
        this.asyncValidator = null;
      }
      markAsTouched(opts = {}) {
        const changed = this.touched === false;
        this.touched = true;
        const sourceControl = opts.sourceControl ?? this;
        if (this._parent && !opts.onlySelf) {
          this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new TouchedChangeEvent(true, sourceControl));
        }
      }
      /**
       * Marks the control and all its descendant controls as `dirty`.
       * @see {@link markAsDirty()}
       *
       * @param opts Configuration options that determine how the control propagates changes
       * and emits events after marking is applied.
       * * `emitEvent`: When true or not supplied (the default), the `events`
       * observable emits a `PristineChangeEvent` with the `pristine` property being `false`.
       * When false, no events are emitted.
       */
      markAllAsDirty(opts = {}) {
        this.markAsDirty({ onlySelf: true, emitEvent: opts.emitEvent, sourceControl: this });
        this._forEachChild((control) => control.markAllAsDirty(opts));
      }
      /**
       * Marks the control and all its descendant controls as `touched`.
       * @see {@link markAsTouched()}
       *
       * @param opts Configuration options that determine how the control propagates changes
       * and emits events after marking is applied.
       * * `emitEvent`: When true or not supplied (the default), the `events`
       * observable emits a `TouchedChangeEvent` with the `touched` property being `true`.
       * When false, no events are emitted.
       */
      markAllAsTouched(opts = {}) {
        this.markAsTouched({ onlySelf: true, emitEvent: opts.emitEvent, sourceControl: this });
        this._forEachChild((control) => control.markAllAsTouched(opts));
      }
      markAsUntouched(opts = {}) {
        const changed = this.touched === true;
        this.touched = false;
        this._pendingTouched = false;
        const sourceControl = opts.sourceControl ?? this;
        this._forEachChild((control) => {
          control.markAsUntouched({ onlySelf: true, emitEvent: opts.emitEvent, sourceControl });
        });
        if (this._parent && !opts.onlySelf) {
          this._parent._updateTouched(opts, sourceControl);
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new TouchedChangeEvent(false, sourceControl));
        }
      }
      markAsDirty(opts = {}) {
        const changed = this.pristine === true;
        this.pristine = false;
        const sourceControl = opts.sourceControl ?? this;
        if (this._parent && !opts.onlySelf) {
          this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new PristineChangeEvent(false, sourceControl));
        }
      }
      markAsPristine(opts = {}) {
        const changed = this.pristine === false;
        this.pristine = true;
        this._pendingDirty = false;
        const sourceControl = opts.sourceControl ?? this;
        this._forEachChild((control) => {
          control.markAsPristine({ onlySelf: true, emitEvent: opts.emitEvent });
        });
        if (this._parent && !opts.onlySelf) {
          this._parent._updatePristine(opts, sourceControl);
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new PristineChangeEvent(true, sourceControl));
        }
      }
      markAsPending(opts = {}) {
        this.status = PENDING;
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
          this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
      }
      disable(opts = {}) {
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        this.status = DISABLED;
        this.errors = null;
        this._forEachChild((control) => {
          control.disable(__spreadProps(__spreadValues({}, opts), { onlySelf: true }));
        });
        this._updateValue();
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new ValueChangeEvent(this.value, sourceControl));
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.valueChanges.emit(this.value);
          this.statusChanges.emit(this.status);
        }
        this._updateAncestors(__spreadProps(__spreadValues({}, opts), { skipPristineCheck }), this);
        this._onDisabledChange.forEach((changeFn) => changeFn(true));
      }
      /**
       * Enables the control. This means the control is included in validation checks and
       * the aggregate value of its parent. Its status recalculates based on its value and
       * its validators.
       *
       * By default, if the control has children, all children are enabled.
       *
       * @see {@link AbstractControl.status}
       *
       * @param opts Configure options that control how the control propagates changes and
       * emits events when marked as untouched
       * * `onlySelf`: When true, mark only this control. When false or not supplied,
       * marks all direct ancestors. Default is false.
       * * `emitEvent`: When true or not supplied (the default), the `statusChanges`,
       * `valueChanges` and `events`
       * observables emit events with the latest status and value when the control is enabled.
       * When false, no events are emitted.
       */
      enable(opts = {}) {
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        this.status = VALID;
        this._forEachChild((control) => {
          control.enable(__spreadProps(__spreadValues({}, opts), { onlySelf: true }));
        });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors(__spreadProps(__spreadValues({}, opts), { skipPristineCheck }), this);
        this._onDisabledChange.forEach((changeFn) => changeFn(false));
      }
      _updateAncestors(opts, sourceControl) {
        if (this._parent && !opts.onlySelf) {
          this._parent.updateValueAndValidity(opts);
          if (!opts.skipPristineCheck) {
            this._parent._updatePristine({}, sourceControl);
          }
          this._parent._updateTouched({}, sourceControl);
        }
      }
      /**
       * Sets the parent of the control
       *
       * @param parent The new parent.
       */
      setParent(parent) {
        this._parent = parent;
      }
      /**
       * The raw value of this control. For most control implementations, the raw value will include
       * disabled children.
       */
      getRawValue() {
        return this.value;
      }
      updateValueAndValidity(opts = {}) {
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
          const shouldHaveEmitted = this._cancelExistingSubscription();
          this.errors = this._runValidator();
          this.status = this._calculateStatus();
          if (this.status === VALID || this.status === PENDING) {
            this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
          }
        }
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new ValueChangeEvent(this.value, sourceControl));
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.valueChanges.emit(this.value);
          this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
          this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
      }
      /** @internal */
      _updateTreeValidity(opts = { emitEvent: true }) {
        this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
      }
      _setInitialStatus() {
        this.status = this._allControlsDisabled() ? DISABLED : VALID;
      }
      _runValidator() {
        return this.validator ? this.validator(this) : null;
      }
      _runAsyncValidator(shouldHaveEmitted, emitEvent) {
        if (this.asyncValidator) {
          this.status = PENDING;
          this._hasOwnPendingAsyncValidator = {
            emitEvent: emitEvent !== false,
            shouldHaveEmitted: shouldHaveEmitted !== false
          };
          const obs = toObservable(this.asyncValidator(this));
          this._asyncValidationSubscription = obs.subscribe((errors) => {
            this._hasOwnPendingAsyncValidator = null;
            this.setErrors(errors, { emitEvent, shouldHaveEmitted });
          });
        }
      }
      _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
          this._asyncValidationSubscription.unsubscribe();
          const shouldHaveEmitted = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? false;
          this._hasOwnPendingAsyncValidator = null;
          return shouldHaveEmitted;
        }
        return false;
      }
      setErrors(errors, opts = {}) {
        this.errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
      }
      /**
       * Retrieves a child control given the control's name or path.
       *
       * @param path A dot-delimited string or array of string/number values that define the path to the
       * control. If a string is provided, passing it as a string literal will result in improved type
       * information. Likewise, if an array is provided, passing it `as const` will cause improved type
       * information to be available.
       *
       * @usageNotes
       * ### Retrieve a nested control
       *
       * For example, to get a `name` control nested within a `person` sub-group:
       *
       * * `this.form.get('person.name');`
       *
       * -OR-
       *
       * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
       *
       * ### Retrieve a control in a FormArray
       *
       * When accessing an element inside a FormArray, you can use an element index.
       * For example, to get a `price` control from the first element in an `items` array you can use:
       *
       * * `this.form.get('items.0.price');`
       *
       * -OR-
       *
       * * `this.form.get(['items', 0, 'price']);`
       */
      get(path) {
        let currPath = path;
        if (currPath == null)
          return null;
        if (!Array.isArray(currPath))
          currPath = currPath.split(".");
        if (currPath.length === 0)
          return null;
        return currPath.reduce((control, name) => control && control._find(name), this);
      }
      /**
       * @description
       * Reports error data for the control with the given path.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * @returns error data for that particular error. If the control or error is not present,
       * null is returned.
       */
      getError(errorCode, path) {
        const control = path ? this.get(path) : this;
        return control && control.errors ? control.errors[errorCode] : null;
      }
      /**
       * @description
       * Reports whether the control with the given path has the error specified.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * If no path is given, this method checks for the error on the current control.
       *
       * @returns whether the given error is present in the control at the given path.
       *
       * If the control is not present, false is returned.
       */
      hasError(errorCode, path) {
        return !!this.getError(errorCode, path);
      }
      /**
       * Retrieves the top-level ancestor of this control.
       */
      get root() {
        let x = this;
        while (x._parent) {
          x = x._parent;
        }
        return x;
      }
      /** @internal */
      _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
        this.status = this._calculateStatus();
        if (emitEvent) {
          this.statusChanges.emit(this.status);
        }
        if (emitEvent || shouldHaveEmitted) {
          this._events.next(new StatusChangeEvent(this.status, changedControl));
        }
        if (this._parent) {
          this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
        }
      }
      /** @internal */
      _initObservables() {
        this.valueChanges = new EventEmitter();
        this.statusChanges = new EventEmitter();
      }
      _calculateStatus() {
        if (this._allControlsDisabled())
          return DISABLED;
        if (this.errors)
          return INVALID;
        if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
          return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
          return INVALID;
        return VALID;
      }
      /** @internal */
      _anyControlsHaveStatus(status) {
        return this._anyControls((control) => control.status === status);
      }
      /** @internal */
      _anyControlsDirty() {
        return this._anyControls((control) => control.dirty);
      }
      /** @internal */
      _anyControlsTouched() {
        return this._anyControls((control) => control.touched);
      }
      /** @internal */
      _updatePristine(opts, changedControl) {
        const newPristine = !this._anyControlsDirty();
        const changed = this.pristine !== newPristine;
        this.pristine = newPristine;
        if (this._parent && !opts.onlySelf) {
          this._parent._updatePristine(opts, changedControl);
        }
        if (changed) {
          this._events.next(new PristineChangeEvent(this.pristine, changedControl));
        }
      }
      /** @internal */
      _updateTouched(opts = {}, changedControl) {
        this.touched = this._anyControlsTouched();
        this._events.next(new TouchedChangeEvent(this.touched, changedControl));
        if (this._parent && !opts.onlySelf) {
          this._parent._updateTouched(opts, changedControl);
        }
      }
      /** @internal */
      _onDisabledChange = [];
      /** @internal */
      _registerOnCollectionChange(fn) {
        this._onCollectionChange = fn;
      }
      /** @internal */
      _setUpdateStrategy(opts) {
        if (isOptionsObj(opts) && opts.updateOn != null) {
          this._updateOn = opts.updateOn;
        }
      }
      /**
       * Check to see if parent has been marked artificially dirty.
       *
       * @internal
       */
      _parentMarkedDirty(onlySelf) {
        const parentDirty = this._parent && this._parent.dirty;
        return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
      }
      /** @internal */
      _find(name) {
        return null;
      }
      /**
       * Internal implementation of the `setValidators` method. Needs to be separated out into a
       * different method, because it is called in the constructor and it can break cases where
       * a control is extended.
       */
      _assignValidators(validators) {
        this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
        this._composedValidatorFn = coerceToValidator(this._rawValidators);
      }
      /**
       * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
       * different method, because it is called in the constructor and it can break cases where
       * a control is extended.
       */
      _assignAsyncValidators(validators) {
        this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
        this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
      }
    };
    FormGroup = class extends AbstractControl {
      /**
       * Creates a new `FormGroup` instance.
       *
       * @param controls A collection of child controls. The key for each child is the name
       * under which it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions
       *
       */
      constructor(controls, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({
          onlySelf: true,
          // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
          // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
          // so we set `emitEvent` to `true` to allow that during the control creation process.
          emitEvent: !!this.asyncValidator
        });
      }
      controls;
      registerControl(name, control) {
        if (this.controls[name])
          return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
      }
      addControl(name, control, options = {}) {
        this.registerControl(name, control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      /**
       * Remove a control from this group. In a strongly-typed group, required controls cannot be
       * removed.
       *
       * This method also updates the value and validity of the control.
       *
       * @param name The control name to remove from the collection
       * @param options Specifies whether this FormGroup instance should emit events after a
       *     control is removed.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * removed. When false, no events are emitted.
       */
      removeControl(name, options = {}) {
        if (this.controls[name])
          this.controls[name]._registerOnCollectionChange(() => {
          });
        delete this.controls[name];
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      setControl(name, control, options = {}) {
        if (this.controls[name])
          this.controls[name]._registerOnCollectionChange(() => {
          });
        delete this.controls[name];
        if (control)
          this.registerControl(name, control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      contains(controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
      }
      /**
       * Sets the value of the `FormGroup`. It accepts an object that matches
       * the structure of the group, with control names as keys.
       *
       * @usageNotes
       * ### Set the complete value for the form group
       *
       * ```ts
       * const form = new FormGroup({
       *   first: new FormControl(),
       *   last: new FormControl()
       * });
       *
       * console.log(form.value);   // {first: null, last: null}
       *
       * form.setValue({first: 'Nancy', last: 'Drew'});
       * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
       * ```
       *
       * @throws When strict checks fail, such as setting the value of a control
       * that doesn't exist or if you exclude a value of a control that does exist.
       *
       * @param value The new value for the control that matches the structure of the group.
       * @param options Configuration options that determine how the control propagates changes
       * and emits events after the value changes.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
       * false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control value is updated.
       * When false, no events are emitted.
       */
      setValue(value, options = {}) {
        assertAllValuesPresent(this, true, value);
        Object.keys(value).forEach((name) => {
          assertControlPresent(this, true, name);
          this.controls[name].setValue(value[name], {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Patches the value of the `FormGroup`. It accepts an object with control
       * names as keys, and does its best to match the values to the correct controls
       * in the group.
       *
       * It accepts both super-sets and sub-sets of the group without throwing an error.
       *
       * @usageNotes
       * ### Patch the value for a form group
       *
       * ```ts
       * const form = new FormGroup({
       *    first: new FormControl(),
       *    last: new FormControl()
       * });
       * console.log(form.value);   // {first: null, last: null}
       *
       * form.patchValue({first: 'Nancy'});
       * console.log(form.value);   // {first: 'Nancy', last: null}
       * ```
       *
       * @param value The object that matches the structure of the group.
       * @param options Configuration options that determine how the control propagates changes and
       * emits events after the value is patched.
       * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
       * true.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control value
       * is updated. When false, no events are emitted. The configuration options are passed to
       * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
       */
      patchValue(value, options = {}) {
        if (value == null)
          return;
        Object.keys(value).forEach((name) => {
          const control = this.controls[name];
          if (control) {
            control.patchValue(
              /* Guaranteed to be present, due to the outer forEach. */
              value[name],
              { onlySelf: true, emitEvent: options.emitEvent }
            );
          }
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
       * the value of all descendants to their default values, or null if no defaults were provided.
       *
       * You reset to a specific form state by passing in a map of states
       * that matches the structure of your form, with control names as keys. The state
       * is a standalone value or a form state object with both a value and a disabled
       * status.
       *
       * @param value Resets the control with an initial value,
       * or an object that defines the initial value and disabled state.
       *
       * @param options Configuration options that determine how the control propagates changes
       * and emits events when the group is reset.
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
       * false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control is reset.
       * When false, no events are emitted.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       *
       * @usageNotes
       *
       * ### Reset the form group values
       *
       * ```ts
       * const form = new FormGroup({
       *   first: new FormControl('first name'),
       *   last: new FormControl('last name')
       * });
       *
       * console.log(form.value);  // {first: 'first name', last: 'last name'}
       *
       * form.reset({ first: 'name', last: 'last name' });
       *
       * console.log(form.value);  // {first: 'name', last: 'last name'}
       * ```
       *
       * ### Reset the form group values and disabled status
       *
       * ```ts
       * const form = new FormGroup({
       *   first: new FormControl('first name'),
       *   last: new FormControl('last name')
       * });
       *
       * form.reset({
       *   first: {value: 'name', disabled: true},
       *   last: 'last'
       * });
       *
       * console.log(form.value);  // {last: 'last'}
       * console.log(form.get('first').status);  // 'DISABLED'
       * ```
       */
      reset(value = {}, options = {}) {
        this._forEachChild((control, name) => {
          control.reset(value ? value[name] : null, {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        });
        this._updatePristine(options, this);
        this._updateTouched(options, this);
        this.updateValueAndValidity(options);
      }
      /**
       * The aggregate value of the `FormGroup`, including any disabled controls.
       *
       * Retrieves all values regardless of disabled status.
       */
      getRawValue() {
        return this._reduceChildren({}, (acc, control, name) => {
          acc[name] = control.getRawValue();
          return acc;
        });
      }
      /** @internal */
      _syncPendingControls() {
        let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
          return child._syncPendingControls() ? true : updated;
        });
        if (subtreeUpdated)
          this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
      }
      /** @internal */
      _forEachChild(cb) {
        Object.keys(this.controls).forEach((key) => {
          const control = this.controls[key];
          control && cb(control, key);
        });
      }
      /** @internal */
      _setUpControls() {
        this._forEachChild((control) => {
          control.setParent(this);
          control._registerOnCollectionChange(this._onCollectionChange);
        });
      }
      /** @internal */
      _updateValue() {
        this.value = this._reduceValue();
      }
      /** @internal */
      _anyControls(condition) {
        for (const [controlName, control] of Object.entries(this.controls)) {
          if (this.contains(controlName) && condition(control)) {
            return true;
          }
        }
        return false;
      }
      /** @internal */
      _reduceValue() {
        let acc = {};
        return this._reduceChildren(acc, (acc2, control, name) => {
          if (control.enabled || this.disabled) {
            acc2[name] = control.value;
          }
          return acc2;
        });
      }
      /** @internal */
      _reduceChildren(initValue, fn) {
        let res = initValue;
        this._forEachChild((control, name) => {
          res = fn(res, control, name);
        });
        return res;
      }
      /** @internal */
      _allControlsDisabled() {
        for (const controlName of Object.keys(this.controls)) {
          if (this.controls[controlName].enabled) {
            return false;
          }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
      }
      /** @internal */
      _find(name) {
        return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
      }
    };
    FormRecord = class extends FormGroup {
    };
    CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", {
      providedIn: "root",
      factory: () => setDisabledStateDefault
    });
    setDisabledStateDefault = "always";
    formDirectiveProvider$1 = {
      provide: ControlContainer,
      useExisting: forwardRef(() => NgForm)
    };
    resolvedPromise$1 = (() => Promise.resolve())();
    NgForm = class _NgForm extends ControlContainer {
      callSetDisabledState;
      /**
       * @description
       * Returns whether the form submission has been triggered.
       */
      get submitted() {
        return untracked(this.submittedReactive);
      }
      /** @internal */
      _submitted = computed(() => this.submittedReactive(), ...ngDevMode ? [{ debugName: "_submitted" }] : []);
      submittedReactive = signal(false, ...ngDevMode ? [{ debugName: "submittedReactive" }] : []);
      _directives = /* @__PURE__ */ new Set();
      /**
       * @description
       * The `FormGroup` instance created for this form.
       */
      form;
      /**
       * @description
       * Event emitter for the "ngSubmit" event
       */
      ngSubmit = new EventEmitter();
      /**
       * @description
       * Tracks options for the `NgForm` instance.
       *
       * **updateOn**: Sets the default `updateOn` value for all child `NgModels` below it
       * unless explicitly set by a child `NgModel` using `ngModelOptions`). Defaults to 'change'.
       * Possible values: `'change'` | `'blur'` | `'submit'`.
       *
       */
      options;
      constructor(validators, asyncValidators, callSetDisabledState) {
        super();
        this.callSetDisabledState = callSetDisabledState;
        this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
      }
      /** @docs-private */
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      /**
       * @description
       * The directive instance.
       */
      get formDirective() {
        return this;
      }
      /**
       * @description
       * The internal `FormGroup` instance.
       */
      get control() {
        return this.form;
      }
      /**
       * @description
       * Returns an array representing the path to this group. Because this directive
       * always lives at the top level of a form, it is always an empty array.
       */
      get path() {
        return [];
      }
      /**
       * @description
       * Returns a map of the controls in this group.
       */
      get controls() {
        return this.form.controls;
      }
      /**
       * @description
       * Method that sets up the control directive in this group, re-calculates its value
       * and validity, and adds the instance to the internal list of directives.
       *
       * @param dir The `NgModel` directive instance.
       */
      addControl(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          dir.control = container.registerControl(dir.name, dir.control);
          setUpControl(dir.control, dir, this.callSetDisabledState);
          dir.control.updateValueAndValidity({ emitEvent: false });
          this._directives.add(dir);
        });
      }
      /**
       * @description
       * Retrieves the `FormControl` instance from the provided `NgModel` directive.
       *
       * @param dir The `NgModel` directive instance.
       */
      getControl(dir) {
        return this.form.get(dir.path);
      }
      /**
       * @description
       * Removes the `NgModel` instance from the internal list of directives
       *
       * @param dir The `NgModel` directive instance.
       */
      removeControl(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          if (container) {
            container.removeControl(dir.name);
          }
          this._directives.delete(dir);
        });
      }
      /**
       * @description
       * Adds a new `NgModelGroup` directive instance to the form.
       *
       * @param dir The `NgModelGroup` directive instance.
       */
      addFormGroup(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          const group = new FormGroup({});
          setUpFormContainer(group, dir);
          container.registerControl(dir.name, group);
          group.updateValueAndValidity({ emitEvent: false });
        });
      }
      /**
       * @description
       * Removes the `NgModelGroup` directive instance from the form.
       *
       * @param dir The `NgModelGroup` directive instance.
       */
      removeFormGroup(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          if (container) {
            container.removeControl(dir.name);
          }
        });
      }
      /**
       * @description
       * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
       *
       * @param dir The `NgModelGroup` directive instance.
       */
      getFormGroup(dir) {
        return this.form.get(dir.path);
      }
      /**
       * Sets the new value for the provided `NgControl` directive.
       *
       * @param dir The `NgControl` directive instance.
       * @param value The new value for the directive's control.
       */
      updateModel(dir, value) {
        resolvedPromise$1.then(() => {
          const ctrl = this.form.get(dir.path);
          ctrl.setValue(value);
        });
      }
      /**
       * @description
       * Sets the value for this `FormGroup`.
       *
       * @param value The new value
       */
      setValue(value) {
        this.control.setValue(value);
      }
      /**
       * @description
       * Method called when the "submit" event is triggered on the form.
       * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
       *
       * @param $event The "submit" event object
       */
      onSubmit($event) {
        this.submittedReactive.set(true);
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        this.form._events.next(new FormSubmittedEvent(this.control));
        return $event?.target?.method === "dialog";
      }
      /**
       * @description
       * Method called when the "reset" event is triggered on the form.
       */
      onReset() {
        this.resetForm();
      }
      /**
       * @description
       * Resets the form to an initial value and resets its submitted status.
       *
       * @param value The new value for the form.
       */
      resetForm(value = void 0) {
        this.form.reset(value);
        this.submittedReactive.set(false);
        this.form._events.next(new FormResetEvent(this.form));
      }
      _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
          this.form._updateOn = this.options.updateOn;
        }
      }
      _findContainer(path) {
        path.pop();
        return path.length ? this.form.get(path) : this.form;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _NgForm, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _NgForm, isStandalone: false, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: { options: ["ngFormOptions", "options"] }, outputs: { ngSubmit: "ngSubmit" }, host: { listeners: { "submit": "onSubmit($event)", "reset": "onReset()" } }, providers: [formDirectiveProvider$1], exportAs: ["ngForm"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: NgForm, decorators: [{
      type: Directive,
      args: [{
        selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
        providers: [formDirectiveProvider$1],
        host: { "(submit)": "onSubmit($event)", "(reset)": "onReset()" },
        outputs: ["ngSubmit"],
        exportAs: "ngForm",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { options: [{
      type: Input,
      args: ["ngFormOptions"]
    }] } });
    FormControl = class FormControl2 extends AbstractControl {
      /** @publicApi */
      defaultValue = null;
      /** @internal */
      _onChange = [];
      /** @internal */
      _pendingValue;
      /** @internal */
      _pendingChange = false;
      constructor(formState = null, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        this._applyFormState(formState);
        this._setUpdateStrategy(validatorOrOpts);
        this._initObservables();
        this.updateValueAndValidity({
          onlySelf: true,
          // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
          // `VALID` or `INVALID`.
          // The status should be broadcasted via the `statusChanges` observable, so we set
          // `emitEvent` to `true` to allow that during the control creation process.
          emitEvent: !!this.asyncValidator
        });
        if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
          if (isFormControlState(formState)) {
            this.defaultValue = formState.value;
          } else {
            this.defaultValue = formState;
          }
        }
      }
      setValue(value, options = {}) {
        this.value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
          this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
        }
        this.updateValueAndValidity(options);
      }
      patchValue(value, options = {}) {
        this.setValue(value, options);
      }
      reset(formState = this.defaultValue, options = {}) {
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        this._pendingChange = false;
      }
      /**  @internal */
      _updateValue() {
      }
      /**  @internal */
      _anyControls(condition) {
        return false;
      }
      /**  @internal */
      _allControlsDisabled() {
        return this.disabled;
      }
      registerOnChange(fn) {
        this._onChange.push(fn);
      }
      /** @internal */
      _unregisterOnChange(fn) {
        removeListItem(this._onChange, fn);
      }
      registerOnDisabledChange(fn) {
        this._onDisabledChange.push(fn);
      }
      /** @internal */
      _unregisterOnDisabledChange(fn) {
        removeListItem(this._onDisabledChange, fn);
      }
      /** @internal */
      _forEachChild(cb) {
      }
      /** @internal */
      _syncPendingControls() {
        if (this.updateOn === "submit") {
          if (this._pendingDirty)
            this.markAsDirty();
          if (this._pendingTouched)
            this.markAsTouched();
          if (this._pendingChange) {
            this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
            return true;
          }
        }
        return false;
      }
      _applyFormState(formState) {
        if (isFormControlState(formState)) {
          this.value = this._pendingValue = formState.value;
          formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) : this.enable({ onlySelf: true, emitEvent: false });
        } else {
          this.value = this._pendingValue = formState;
        }
      }
    };
    isFormControl = (control) => control instanceof FormControl;
    AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
      /**
       * @description
       * The parent control for the group
       *
       * @internal
       */
      _parent;
      /** @docs-private */
      ngOnInit() {
        this._checkParentType();
        this.formDirective.addFormGroup(this);
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.formDirective) {
          this.formDirective.removeFormGroup(this);
        }
      }
      /**
       * @description
       * The `FormGroup` bound to this directive.
       */
      get control() {
        return this.formDirective.getFormGroup(this);
      }
      /**
       * @description
       * The path to this group from the top-level directive.
       */
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      /**
       * @description
       * The top-level directive for this group if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      /** @internal */
      _checkParentType() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _AbstractFormGroupDirective, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _AbstractFormGroupDirective, isStandalone: false, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: AbstractFormGroupDirective, decorators: [{
      type: Directive,
      args: [{
        standalone: false
      }]
    }] });
    modelGroupProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => NgModelGroup)
    };
    NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
      /**
       * @description
       * Tracks the name of the `NgModelGroup` bound to the directive. The name corresponds
       * to a key in the parent `NgForm`.
       */
      name = "";
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /** @internal */
      _checkParentType() {
        if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw modelGroupParentException();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _NgModelGroup, deps: [{ token: ControlContainer, host: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _NgModelGroup, isStandalone: false, selector: "[ngModelGroup]", inputs: { name: ["ngModelGroup", "name"] }, providers: [modelGroupProvider], exportAs: ["ngModelGroup"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: NgModelGroup, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngModelGroup]",
        providers: [modelGroupProvider],
        exportAs: "ngModelGroup",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["ngModelGroup"]
    }] } });
    formControlBinding$1 = {
      provide: NgControl,
      useExisting: forwardRef(() => NgModel)
    };
    resolvedPromise = (() => Promise.resolve())();
    NgModel = class _NgModel extends NgControl {
      _changeDetectorRef;
      callSetDisabledState;
      control = new FormControl();
      // At runtime we coerce arbitrary values assigned to the "disabled" input to a "boolean".
      // This is not reflected in the type of the property because outside of templates, consumers
      // should only deal with booleans. In templates, a string is allowed for convenience and to
      // match the native "disabled attribute" semantics which can be observed on input elements.
      // This static member tells the compiler that values of type "string" can also be assigned
      // to the input in a template.
      /** @docs-private */
      static ngAcceptInputType_isDisabled;
      /** @internal */
      _registered = false;
      /**
       * Internal reference to the view model value.
       * @docs-private
       */
      viewModel;
      /**
       * @description
       * Tracks the name bound to the directive. If a parent form exists, it
       * uses this name as a key to retrieve this control's value.
       */
      name = "";
      /**
       * @description
       * Tracks whether the control is disabled.
       */
      isDisabled;
      /**
       * @description
       * Tracks the value bound to this directive.
       */
      model;
      /**
       * @description
       * Tracks the configuration options for this `ngModel` instance.
       *
       * **name**: An alternative to setting the name attribute on the form control element. See
       * the [example](api/forms/NgModel#using-ngmodel-on-a-standalone-control) for using `NgModel`
       * as a standalone control.
       *
       * **standalone**: When set to true, the `ngModel` will not register itself with its parent form,
       * and acts as if it's not in the form. Defaults to false. If no parent form exists, this option
       * has no effect.
       *
       * **updateOn**: Defines the event upon which the form control value and validity update.
       * Defaults to 'change'. Possible values: `'change'` | `'blur'` | `'submit'`.
       *
       */
      options;
      /**
       * @description
       * Event emitter for producing the `ngModelChange` event after
       * the view model updates.
       */
      update = new EventEmitter();
      constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
        super();
        this._changeDetectorRef = _changeDetectorRef;
        this.callSetDisabledState = callSetDisabledState;
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        this._checkForErrors();
        if (!this._registered || "name" in changes) {
          if (this._registered) {
            this._checkName();
            if (this.formDirective) {
              const oldName = changes["name"].previousValue;
              this.formDirective.removeControl({ name: oldName, path: this._getPath(oldName) });
            }
          }
          this._setUpControl();
        }
        if ("isDisabled" in changes) {
          this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
          this._updateValue(this.model);
          this.viewModel = this.model;
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return this._getPath(this.name);
      }
      /**
       * @description
       * The top-level directive for this control if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      /**
       * @description
       * Sets the new value for the view model and emits an `ngModelChange` event.
       *
       * @param newValue The new value emitted by `ngModelChange`.
       */
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      _setUpControl() {
        this._setUpdateStrategy();
        this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
        this._registered = true;
      }
      _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
          this.control._updateOn = this.options.updateOn;
        }
      }
      _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
      }
      _setUpStandalone() {
        setUpControl(this.control, this, this.callSetDisabledState);
        this.control.updateValueAndValidity({ emitEvent: false });
      }
      _checkForErrors() {
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) {
          checkParentType$1(this._parent);
        }
        this._checkName();
      }
      _checkName() {
        if (this.options && this.options.name)
          this.name = this.options.name;
        if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw missingNameException();
        }
      }
      _updateValue(value) {
        resolvedPromise.then(() => {
          this.control.setValue(value, { emitViewToModelChange: false });
          this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(changes) {
        const disabledValue = changes["isDisabled"].currentValue;
        const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
        resolvedPromise.then(() => {
          if (isDisabled && !this.control.disabled) {
            this.control.disable();
          } else if (!isDisabled && this.control.disabled) {
            this.control.enable();
          }
          this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(controlName) {
        return this._parent ? controlPath(controlName, this._parent) : [controlName];
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _NgModel, deps: [{ token: ControlContainer, host: true, optional: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: ChangeDetectorRef, optional: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _NgModel, isStandalone: false, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: { name: "name", isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"], options: ["ngModelOptions", "options"] }, outputs: { update: "ngModelChange" }, providers: [formControlBinding$1], exportAs: ["ngModel"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: NgModel, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngModel]:not([formControlName]):not([formControl])",
        providers: [formControlBinding$1],
        exportAs: "ngModel",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }] }, { type: ChangeDetectorRef, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { name: [{
      type: Input
    }], isDisabled: [{
      type: Input,
      args: ["disabled"]
    }], model: [{
      type: Input,
      args: ["ngModel"]
    }], options: [{
      type: Input,
      args: ["ngModelOptions"]
    }], update: [{
      type: Output,
      args: ["ngModelChange"]
    }] } });
    \u0275NgNoValidate = class _\u0275NgNoValidate {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _\u0275NgNoValidate, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _\u0275NgNoValidate, isStandalone: false, selector: "form:not([ngNoForm]):not([ngNativeValidate])", host: { attributes: { "novalidate": "" } }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: \u0275NgNoValidate, decorators: [{
      type: Directive,
      args: [{
        selector: "form:not([ngNoForm]):not([ngNativeValidate])",
        host: { "novalidate": "" },
        standalone: false
      }]
    }] });
    NUMBER_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberValueAccessor),
      multi: true
    };
    NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
      /**
       * Sets the "value" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        const normalizedValue = value == null ? "" : value;
        this.setProperty("value", normalizedValue);
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (value) => {
          fn(value == "" ? null : parseFloat(value));
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _NumberValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _NumberValueAccessor, isStandalone: false, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]", host: { listeners: { "input": "onChange($any($event.target).value)", "blur": "onTouched()" } }, providers: [NUMBER_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: NumberValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
        host: { "(input)": "onChange($any($event.target).value)", "(blur)": "onTouched()" },
        providers: [NUMBER_VALUE_ACCESSOR],
        standalone: false
      }]
    }] });
    RADIO_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioControlValueAccessor),
      multi: true
    };
    RadioControlRegistry = class _RadioControlRegistry {
      _accessors = [];
      /**
       * @description
       * Adds a control to the internal registry. For internal use only.
       */
      add(control, accessor) {
        this._accessors.push([control, accessor]);
      }
      /**
       * @description
       * Removes a control from the internal registry. For internal use only.
       */
      remove(accessor) {
        for (let i = this._accessors.length - 1; i >= 0; --i) {
          if (this._accessors[i][1] === accessor) {
            this._accessors.splice(i, 1);
            return;
          }
        }
      }
      /**
       * @description
       * Selects a radio button. For internal use only.
       */
      select(accessor) {
        this._accessors.forEach((c) => {
          if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
            c[1].fireUncheck(accessor.value);
          }
        });
      }
      _isSameGroup(controlPair, accessor) {
        if (!controlPair[0].control)
          return false;
        return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _RadioControlRegistry, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _RadioControlRegistry, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: RadioControlRegistry, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
      _registry;
      _injector;
      /** @internal */
      _state;
      /** @internal */
      _control;
      /** @internal */
      _fn;
      setDisabledStateFired = false;
      /**
       * The registered callback function called when a change event occurs on the input element.
       * Note: we declare `onChange` here (also used as host listener) as a function with no arguments
       * to override the `onChange` function (which expects 1 argument) in the parent
       * `BaseControlValueAccessor` class.
       * @docs-private
       */
      onChange = () => {
      };
      /**
       * @description
       * Tracks the name of the radio input element.
       */
      name;
      /**
       * @description
       * Tracks the name of the `FormControl` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       */
      formControlName;
      /**
       * @description
       * Tracks the value of the radio input element
       */
      value;
      callSetDisabledState = inject(CALL_SET_DISABLED_STATE, { optional: true }) ?? setDisabledStateDefault;
      constructor(renderer, elementRef, _registry, _injector) {
        super(renderer, elementRef);
        this._registry = _registry;
        this._injector = _injector;
      }
      /** @docs-private */
      ngOnInit() {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
      }
      /** @docs-private */
      ngOnDestroy() {
        this._registry.remove(this);
      }
      /**
       * Sets the "checked" property value on the radio input element.
       * @docs-private
       */
      writeValue(value) {
        this._state = value === this.value;
        this.setProperty("checked", this._state);
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this._fn = fn;
        this.onChange = () => {
          fn(this.value);
          this._registry.select(this);
        };
      }
      /** @docs-private */
      setDisabledState(isDisabled) {
        if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
          this.setProperty("disabled", isDisabled);
        }
        this.setDisabledStateFired = true;
      }
      /**
       * Sets the "value" on the radio input element and unchecks it.
       *
       * @param value
       */
      fireUncheck(value) {
        this.writeValue(value);
      }
      _checkName() {
        if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwNameError();
        }
        if (!this.name && this.formControlName)
          this.name = this.formControlName;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _RadioControlValueAccessor, deps: [{ token: Renderer2 }, { token: ElementRef }, { token: RadioControlRegistry }, { token: Injector }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _RadioControlValueAccessor, isStandalone: false, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: { name: "name", formControlName: "formControlName", value: "value" }, host: { listeners: { "change": "onChange()", "blur": "onTouched()" } }, providers: [RADIO_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: RadioControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
        host: { "(change)": "onChange()", "(blur)": "onTouched()" },
        providers: [RADIO_VALUE_ACCESSOR],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: Renderer2 }, { type: ElementRef }, { type: RadioControlRegistry }, { type: Injector }], propDecorators: { name: [{
      type: Input
    }], formControlName: [{
      type: Input
    }], value: [{
      type: Input
    }] } });
    RANGE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeValueAccessor),
      multi: true
    };
    RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
      /**
       * Sets the "value" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        this.setProperty("value", parseFloat(value));
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (value) => {
          fn(value == "" ? null : parseFloat(value));
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _RangeValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _RangeValueAccessor, isStandalone: false, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]", host: { listeners: { "change": "onChange($any($event.target).value)", "input": "onChange($any($event.target).value)", "blur": "onTouched()" } }, providers: [RANGE_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: RangeValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
        host: {
          "(change)": "onChange($any($event.target).value)",
          "(input)": "onChange($any($event.target).value)",
          "(blur)": "onTouched()"
        },
        providers: [RANGE_VALUE_ACCESSOR],
        standalone: false
      }]
    }] });
    NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
    formControlBinding = {
      provide: NgControl,
      useExisting: forwardRef(() => FormControlDirective)
    };
    FormControlDirective = class _FormControlDirective extends NgControl {
      _ngModelWarningConfig;
      callSetDisabledState;
      /**
       * Internal reference to the view model value.
       * @docs-private
       */
      viewModel;
      /**
       * @description
       * Tracks the `FormControl` instance bound to the directive.
       */
      form;
      /**
       * @description
       * Triggers a warning in dev mode that this input should not be used with reactive forms.
       */
      set isDisabled(isDisabled) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(disabledAttrWarning);
        }
      }
      // TODO(kara): remove next 4 properties once deprecation period is over
      /** @deprecated as of v6 */
      model;
      /** @deprecated as of v6 */
      update = new EventEmitter();
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlDirective. Used to support warning config of "once".
       *
       * @internal
       */
      static _ngModelWarningSentOnce = false;
      /**
       * @description
       * Instance property used to track whether an ngModel warning has been sent out for this
       * particular `FormControlDirective` instance. Used to support warning config of "always".
       *
       * @internal
       */
      _ngModelWarningSent = false;
      constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this.callSetDisabledState = callSetDisabledState;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        if (this._isControlChanged(changes)) {
          const previousForm = changes["form"].previousValue;
          if (previousForm) {
            cleanUpControl(
              previousForm,
              this,
              /* validateControlPresenceOnChange */
              false
            );
          }
          setUpControl(this.form, this, this.callSetDisabledState);
          this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
          }
          this.form.setValue(this.model);
          this.viewModel = this.model;
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.form) {
          cleanUpControl(
            this.form,
            this,
            /* validateControlPresenceOnChange */
            false
          );
        }
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return [];
      }
      /**
       * @description
       * The `FormControl` bound to this directive.
       */
      get control() {
        return this.form;
      }
      /**
       * @description
       * Sets the new value for the view model and emits an `ngModelChange` event.
       *
       * @param newValue The new value for the view model.
       */
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      _isControlChanged(changes) {
        return changes.hasOwnProperty("form");
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _FormControlDirective, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: NG_MODEL_WITH_FORM_CONTROL_WARNING, optional: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _FormControlDirective, isStandalone: false, selector: "[formControl]", inputs: { form: ["formControl", "form"], isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"] }, outputs: { update: "ngModelChange" }, providers: [formControlBinding], exportAs: ["ngForm"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: FormControlDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[formControl]",
        providers: [formControlBinding],
        exportAs: "ngForm",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { form: [{
      type: Input,
      args: ["formControl"]
    }], isDisabled: [{
      type: Input,
      args: ["disabled"]
    }], model: [{
      type: Input,
      args: ["ngModel"]
    }], update: [{
      type: Output,
      args: ["ngModelChange"]
    }] } });
    formDirectiveProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormGroupDirective)
    };
    FormGroupDirective = class _FormGroupDirective extends ControlContainer {
      callSetDisabledState;
      /**
       * @description
       * Reports whether the form submission has been triggered.
       */
      get submitted() {
        return untracked(this._submittedReactive);
      }
      // TODO(atscott): Remove once invalid API usage is cleaned up internally
      set submitted(value) {
        this._submittedReactive.set(value);
      }
      /** @internal */
      _submitted = computed(() => this._submittedReactive(), ...ngDevMode ? [{ debugName: "_submitted" }] : []);
      _submittedReactive = signal(false, ...ngDevMode ? [{ debugName: "_submittedReactive" }] : []);
      /**
       * Reference to an old form group input value, which is needed to cleanup
       * old instance in case it was replaced with a new one.
       */
      _oldForm;
      /**
       * Callback that should be invoked when controls in FormGroup or FormArray collection change
       * (added or removed). This callback triggers corresponding DOM updates.
       */
      _onCollectionChange = () => this._updateDomValue();
      /**
       * @description
       * Tracks the list of added `FormControlName` instances
       */
      directives = [];
      /**
       * @description
       * Tracks the `FormGroup` bound to this directive.
       */
      form = null;
      /**
       * @description
       * Emits an event when the form submission has been triggered.
       */
      ngSubmit = new EventEmitter();
      constructor(validators, asyncValidators, callSetDisabledState) {
        super();
        this.callSetDisabledState = callSetDisabledState;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !this.form) {
          throw missingFormException();
        }
        if (changes.hasOwnProperty("form")) {
          this._updateValidators();
          this._updateDomValue();
          this._updateRegistrations();
          this._oldForm = this.form;
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.form) {
          cleanUpValidators(this.form, this);
          if (this.form._onCollectionChange === this._onCollectionChange) {
            this.form._registerOnCollectionChange(() => {
            });
          }
        }
      }
      /**
       * @description
       * Returns this directive's instance.
       */
      get formDirective() {
        return this;
      }
      /**
       * @description
       * Returns the `FormGroup` bound to this directive.
       */
      get control() {
        return this.form;
      }
      /**
       * @description
       * Returns an array representing the path to this group. Because this directive
       * always lives at the top level of a form, it always an empty array.
       */
      get path() {
        return [];
      }
      /**
       * @description
       * Method that sets up the control directive in this group, re-calculates its value
       * and validity, and adds the instance to the internal list of directives.
       *
       * @param dir The `FormControlName` directive instance.
       */
      addControl(dir) {
        const ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir, this.callSetDisabledState);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
      }
      /**
       * @description
       * Retrieves the `FormControl` instance from the provided `FormControlName` directive
       *
       * @param dir The `FormControlName` directive instance.
       */
      getControl(dir) {
        return this.form.get(dir.path);
      }
      /**
       * @description
       * Removes the `FormControlName` instance from the internal list of directives
       *
       * @param dir The `FormControlName` directive instance.
       */
      removeControl(dir) {
        cleanUpControl(
          dir.control || null,
          dir,
          /* validateControlPresenceOnChange */
          false
        );
        removeListItem$1(this.directives, dir);
      }
      /**
       * Adds a new `FormGroupName` directive instance to the form.
       *
       * @param dir The `FormGroupName` directive instance.
       */
      addFormGroup(dir) {
        this._setUpFormContainer(dir);
      }
      /**
       * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
       * view.
       *
       * @param dir The `FormGroupName` directive instance.
       */
      removeFormGroup(dir) {
        this._cleanUpFormContainer(dir);
      }
      /**
       * @description
       * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
       *
       * @param dir The `FormGroupName` directive instance.
       */
      getFormGroup(dir) {
        return this.form.get(dir.path);
      }
      /**
       * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
       *
       * @param dir The `FormArrayName` directive instance.
       */
      addFormArray(dir) {
        this._setUpFormContainer(dir);
      }
      /**
       * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
       * view.
       *
       * @param dir The `FormArrayName` directive instance.
       */
      removeFormArray(dir) {
        this._cleanUpFormContainer(dir);
      }
      /**
       * @description
       * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
       *
       * @param dir The `FormArrayName` directive instance.
       */
      getFormArray(dir) {
        return this.form.get(dir.path);
      }
      /**
       * Sets the new value for the provided `FormControlName` directive.
       *
       * @param dir The `FormControlName` directive instance.
       * @param value The new value for the directive's control.
       */
      updateModel(dir, value) {
        const ctrl = this.form.get(dir.path);
        ctrl.setValue(value);
      }
      /**
       * @description
       * Method called with the "submit" event is triggered on the form.
       * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
       *
       * @param $event The "submit" event object
       */
      onSubmit($event) {
        this._submittedReactive.set(true);
        syncPendingControls(this.form, this.directives);
        this.ngSubmit.emit($event);
        this.form._events.next(new FormSubmittedEvent(this.control));
        return $event?.target?.method === "dialog";
      }
      /**
       * @description
       * Method called when the "reset" event is triggered on the form.
       */
      onReset() {
        this.resetForm();
      }
      /**
       * @description
       * Resets the form to an initial value and resets its submitted status.
       *
       * @param value The new value for the form, `undefined` by default
       */
      resetForm(value = void 0, options = {}) {
        this.form.reset(value, options);
        this._submittedReactive.set(false);
        if (options?.emitEvent !== false) {
          this.form._events.next(new FormResetEvent(this.form));
        }
      }
      /** @internal */
      _updateDomValue() {
        this.directives.forEach((dir) => {
          const oldCtrl = dir.control;
          const newCtrl = this.form.get(dir.path);
          if (oldCtrl !== newCtrl) {
            cleanUpControl(oldCtrl || null, dir);
            if (isFormControl(newCtrl)) {
              setUpControl(newCtrl, dir, this.callSetDisabledState);
              dir.control = newCtrl;
            }
          }
        });
        this.form._updateTreeValidity({ emitEvent: false });
      }
      _setUpFormContainer(dir) {
        const ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
      }
      _cleanUpFormContainer(dir) {
        if (this.form) {
          const ctrl = this.form.get(dir.path);
          if (ctrl) {
            const isControlUpdated = cleanUpFormContainer(ctrl, dir);
            if (isControlUpdated) {
              ctrl.updateValueAndValidity({ emitEvent: false });
            }
          }
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange);
        if (this._oldForm) {
          this._oldForm._registerOnCollectionChange(() => {
          });
        }
      }
      _updateValidators() {
        setUpValidators(this.form, this);
        if (this._oldForm) {
          cleanUpValidators(this._oldForm, this);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _FormGroupDirective, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _FormGroupDirective, isStandalone: false, selector: "[formGroup]", inputs: { form: ["formGroup", "form"] }, outputs: { ngSubmit: "ngSubmit" }, host: { listeners: { "submit": "onSubmit($event)", "reset": "onReset()" } }, providers: [formDirectiveProvider], exportAs: ["ngForm"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: FormGroupDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[formGroup]",
        providers: [formDirectiveProvider],
        host: { "(submit)": "onSubmit($event)", "(reset)": "onReset()" },
        exportAs: "ngForm",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { form: [{
      type: Input,
      args: ["formGroup"]
    }], ngSubmit: [{
      type: Output
    }] } });
    formGroupNameProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormGroupName)
    };
    FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
      /**
       * @description
       * Tracks the name of the `FormGroup` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       * Accepts a name as a string or a number.
       * The name in the form of a string is useful for individual forms,
       * while the numerical form allows for form groups to be bound
       * to indices when iterating over groups in a `FormArray`.
       */
      name = null;
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /** @internal */
      _checkParentType() {
        if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw groupParentException();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _FormGroupName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _FormGroupName, isStandalone: false, selector: "[formGroupName]", inputs: { name: ["formGroupName", "name"] }, providers: [formGroupNameProvider], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: FormGroupName, decorators: [{
      type: Directive,
      args: [{
        selector: "[formGroupName]",
        providers: [formGroupNameProvider],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["formGroupName"]
    }] } });
    formArrayNameProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormArrayName)
    };
    FormArrayName = class _FormArrayName extends ControlContainer {
      /** @internal */
      _parent;
      /**
       * @description
       * Tracks the name of the `FormArray` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       * Accepts a name as a string or a number.
       * The name in the form of a string is useful for individual forms,
       * while the numerical form allows for form arrays to be bound
       * to indices when iterating over arrays in a `FormArray`.
       */
      name = null;
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /**
       * A lifecycle method called when the directive's inputs are initialized. For internal use only.
       * @throws If the directive does not have a valid parent.
       * @docs-private
       */
      ngOnInit() {
        if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw arrayParentException();
        }
        this.formDirective.addFormArray(this);
      }
      /**
       * A lifecycle method called before the directive's instance is destroyed. For internal use only.
       * @docs-private
       */
      ngOnDestroy() {
        this.formDirective?.removeFormArray(this);
      }
      /**
       * @description
       * The `FormArray` bound to this directive.
       */
      get control() {
        return this.formDirective.getFormArray(this);
      }
      /**
       * @description
       * The top-level directive for this group if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _FormArrayName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _FormArrayName, isStandalone: false, selector: "[formArrayName]", inputs: { name: ["formArrayName", "name"] }, providers: [formArrayNameProvider], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: FormArrayName, decorators: [{
      type: Directive,
      args: [{
        selector: "[formArrayName]",
        providers: [formArrayNameProvider],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["formArrayName"]
    }] } });
    controlNameBinding = {
      provide: NgControl,
      useExisting: forwardRef(() => FormControlName)
    };
    FormControlName = class _FormControlName extends NgControl {
      _ngModelWarningConfig;
      _added = false;
      /**
       * Internal reference to the view model value.
       * @internal
       */
      viewModel;
      /**
       * @description
       * Tracks the `FormControl` instance bound to the directive.
       */
      control;
      /**
       * @description
       * Tracks the name of the `FormControl` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       * Accepts a name as a string or a number.
       * The name in the form of a string is useful for individual forms,
       * while the numerical form allows for form controls to be bound
       * to indices when iterating over controls in a `FormArray`.
       */
      name = null;
      /**
       * @description
       * Triggers a warning in dev mode that this input should not be used with reactive forms.
       */
      set isDisabled(isDisabled) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(disabledAttrWarning);
        }
      }
      // TODO(kara): remove next 4 properties once deprecation period is over
      /** @deprecated as of v6 */
      model;
      /** @deprecated as of v6 */
      update = new EventEmitter();
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlName. Used to support warning config of "once".
       *
       * @internal
       */
      static _ngModelWarningSentOnce = false;
      /**
       * @description
       * Instance property used to track whether an ngModel warning has been sent out for this
       * particular FormControlName instance. Used to support warning config of "always".
       *
       * @internal
       */
      _ngModelWarningSent = false;
      constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        if (!this._added)
          this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
          }
          this.viewModel = this.model;
          this.formDirective.updateModel(this, this.model);
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.formDirective) {
          this.formDirective.removeControl(this);
        }
      }
      /**
       * @description
       * Sets the new value for the view model and emits an `ngModelChange` event.
       *
       * @param newValue The new value for the view model.
       */
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      /**
       * @description
       * The top-level directive for this group if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      _setUpControl() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          checkParentType(this._parent, this.name);
        }
        this.control = this.formDirective.addControl(this);
        this._added = true;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _FormControlName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: NG_MODEL_WITH_FORM_CONTROL_WARNING, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _FormControlName, isStandalone: false, selector: "[formControlName]", inputs: { name: ["formControlName", "name"], isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"] }, outputs: { update: "ngModelChange" }, providers: [controlNameBinding], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: FormControlName, decorators: [{
      type: Directive,
      args: [{
        selector: "[formControlName]",
        providers: [controlNameBinding],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["formControlName"]
    }], isDisabled: [{
      type: Input,
      args: ["disabled"]
    }], model: [{
      type: Input,
      args: ["ngModel"]
    }], update: [{
      type: Output,
      args: ["ngModelChange"]
    }] } });
    SELECT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectControlValueAccessor),
      multi: true
    };
    SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
      /** @docs-private */
      value;
      /** @internal */
      _optionMap = /* @__PURE__ */ new Map();
      /** @internal */
      _idCounter = 0;
      /**
       * @description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       */
      set compareWith(fn) {
        if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
      }
      _compareWith = Object.is;
      // We need this because we might be in the process of destroying the root
      // injector, which is marked as destroyed before running destroy hooks.
      // Attempting to use afterNextRender with the node injector would evntually
      // run into that already destroyed injector.
      appRefInjector = inject(ApplicationRef).injector;
      destroyRef = inject(DestroyRef);
      cdr = inject(ChangeDetectorRef);
      _queuedWrite = false;
      /**
       * This is needed to efficiently set the select value when adding/removing options. If
       * writeValue is instead called for every added/removed option, this results in exponentially
       * more _compareValue calls than the number of option elements (issue #41330).
       *
       * Secondly, calling writeValue when rendering individual option elements instead of after they
       * are all rendered caused an issue in Safari and IE 11 where the first option element failed
       * to be deselected when no option matched the select ngModel. This was because Angular would
       * set the select element's value property before appending the option's child text node to the
       * DOM (issue #14505).
       *
       * Finally, this approach is necessary to avoid an issue with delayed element removal when
       * using the animations module (in all browsers). Otherwise when a selected option is removed
       * (so no option matches the ngModel anymore), Angular would change the select element value
       * before actually removing the option from the DOM. Then when the option is finally removed
       * from the DOM, the browser would change the select value to that of the first option, even
       * though it doesn't match the ngModel (issue #18430).
       *
       * @internal
       */
      _writeValueAfterRender() {
        if (this._queuedWrite || this.appRefInjector.destroyed) {
          return;
        }
        this._queuedWrite = true;
        afterNextRender({
          write: () => {
            if (this.destroyRef.destroyed) {
              return;
            }
            this._queuedWrite = false;
            this.writeValue(this.value);
          }
        }, { injector: this.appRefInjector });
      }
      /**
       * Sets the "value" property on the select element.
       * @docs-private
       */
      writeValue(value) {
        this.cdr.markForCheck();
        this.value = value;
        const id = this._getOptionId(value);
        const valueString = _buildValueString$1(id, value);
        this.setProperty("value", valueString);
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (valueString) => {
          this.value = this._getOptionValue(valueString);
          fn(this.value);
        };
      }
      /** @internal */
      _registerOption() {
        return (this._idCounter++).toString();
      }
      /** @internal */
      _getOptionId(value) {
        for (const id of this._optionMap.keys()) {
          if (this._compareWith(this._optionMap.get(id), value))
            return id;
        }
        return null;
      }
      /** @internal */
      _getOptionValue(valueString) {
        const id = _extractId$1(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _SelectControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _SelectControlValueAccessor, isStandalone: false, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: { compareWith: "compareWith" }, host: { listeners: { "change": "onChange($any($event.target).value)", "blur": "onTouched()" } }, providers: [SELECT_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: SelectControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
        host: { "(change)": "onChange($any($event.target).value)", "(blur)": "onTouched()" },
        providers: [SELECT_VALUE_ACCESSOR],
        standalone: false
      }]
    }], propDecorators: { compareWith: [{
      type: Input
    }] } });
    NgSelectOption = class _NgSelectOption {
      _element;
      _renderer;
      _select;
      /**
       * @description
       * ID of the option element
       */
      id;
      constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
          this.id = this._select._registerOption();
      }
      /**
       * @description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       */
      set ngValue(value) {
        if (this._select == null)
          return;
        this._select._optionMap.set(this.id, value);
        this._setElementValue(_buildValueString$1(this.id, value));
        this._select._writeValueAfterRender();
      }
      /**
       * @description
       * Tracks simple string values bound to the option element.
       * For objects, use the `ngValue` input binding.
       */
      set value(value) {
        this._setElementValue(value);
        if (this._select)
          this._select._writeValueAfterRender();
      }
      /** @internal */
      _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, "value", value);
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this._select) {
          this._select._optionMap.delete(this.id);
          this._select._writeValueAfterRender();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _NgSelectOption, deps: [{ token: ElementRef }, { token: Renderer2 }, { token: SelectControlValueAccessor, host: true, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _NgSelectOption, isStandalone: false, selector: "option", inputs: { ngValue: "ngValue", value: "value" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: NgSelectOption, decorators: [{
      type: Directive,
      args: [{
        selector: "option",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ElementRef }, { type: Renderer2 }, { type: SelectControlValueAccessor, decorators: [{
      type: Optional
    }, {
      type: Host
    }] }], propDecorators: { ngValue: [{
      type: Input,
      args: ["ngValue"]
    }], value: [{
      type: Input,
      args: ["value"]
    }] } });
    SELECT_MULTIPLE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
      multi: true
    };
    SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
      /**
       * The current value.
       * @docs-private
       */
      value;
      /** @internal */
      _optionMap = /* @__PURE__ */ new Map();
      /** @internal */
      _idCounter = 0;
      /**
       * @description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       */
      set compareWith(fn) {
        if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
      }
      _compareWith = Object.is;
      /**
       * Sets the "value" property on one or of more of the select's options.
       * @docs-private
       */
      writeValue(value) {
        this.value = value;
        let optionSelectedStateSetter;
        if (Array.isArray(value)) {
          const ids = value.map((v) => this._getOptionId(v));
          optionSelectedStateSetter = (opt, o) => {
            opt._setSelected(ids.indexOf(o.toString()) > -1);
          };
        } else {
          optionSelectedStateSetter = (opt, o) => {
            opt._setSelected(false);
          };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
      }
      /**
       * Registers a function called when the control value changes
       * and writes an array of the selected options.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (element) => {
          const selected = [];
          const selectedOptions = element.selectedOptions;
          if (selectedOptions !== void 0) {
            const options = selectedOptions;
            for (let i = 0; i < options.length; i++) {
              const opt = options[i];
              const val = this._getOptionValue(opt.value);
              selected.push(val);
            }
          } else {
            const options = element.options;
            for (let i = 0; i < options.length; i++) {
              const opt = options[i];
              if (opt.selected) {
                const val = this._getOptionValue(opt.value);
                selected.push(val);
              }
            }
          }
          this.value = selected;
          fn(selected);
        };
      }
      /** @internal */
      _registerOption(value) {
        const id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
      }
      /** @internal */
      _getOptionId(value) {
        for (const id of this._optionMap.keys()) {
          if (this._compareWith(this._optionMap.get(id)._value, value))
            return id;
        }
        return null;
      }
      /** @internal */
      _getOptionValue(valueString) {
        const id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _SelectMultipleControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _SelectMultipleControlValueAccessor, isStandalone: false, selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]", inputs: { compareWith: "compareWith" }, host: { listeners: { "change": "onChange($event.target)", "blur": "onTouched()" } }, providers: [SELECT_MULTIPLE_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: SelectMultipleControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
        host: { "(change)": "onChange($event.target)", "(blur)": "onTouched()" },
        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
        standalone: false
      }]
    }], propDecorators: { compareWith: [{
      type: Input
    }] } });
    \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
      _element;
      _renderer;
      _select;
      id;
      /** @internal */
      _value;
      constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
          this.id = this._select._registerOption(this);
        }
      }
      /**
       * @description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       */
      set ngValue(value) {
        if (this._select == null)
          return;
        this._value = value;
        this._setElementValue(_buildValueString(this.id, value));
        this._select.writeValue(this._select.value);
      }
      /**
       * @description
       * Tracks simple string values bound to the option element.
       * For objects, use the `ngValue` input binding.
       */
      set value(value) {
        if (this._select) {
          this._value = value;
          this._setElementValue(_buildValueString(this.id, value));
          this._select.writeValue(this._select.value);
        } else {
          this._setElementValue(value);
        }
      }
      /** @internal */
      _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, "value", value);
      }
      /** @internal */
      _setSelected(selected) {
        this._renderer.setProperty(this._element.nativeElement, "selected", selected);
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this._select) {
          this._select._optionMap.delete(this.id);
          this._select.writeValue(this._select.value);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _\u0275NgSelectMultipleOption, deps: [{ token: ElementRef }, { token: Renderer2 }, { token: SelectMultipleControlValueAccessor, host: true, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _\u0275NgSelectMultipleOption, isStandalone: false, selector: "option", inputs: { ngValue: "ngValue", value: "value" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: \u0275NgSelectMultipleOption, decorators: [{
      type: Directive,
      args: [{
        selector: "option",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ElementRef }, { type: Renderer2 }, { type: SelectMultipleControlValueAccessor, decorators: [{
      type: Optional
    }, {
      type: Host
    }] }], propDecorators: { ngValue: [{
      type: Input,
      args: ["ngValue"]
    }], value: [{
      type: Input,
      args: ["value"]
    }] } });
    AbstractValidatorDirective = class _AbstractValidatorDirective {
      _validator = nullValidator;
      _onChange;
      /**
       * A flag that tracks whether this validator is enabled.
       *
       * Marking it `internal` (vs `protected`), so that this flag can be used in host bindings of
       * directive classes that extend this base class.
       * @internal
       */
      _enabled;
      /** @docs-private */
      ngOnChanges(changes) {
        if (this.inputName in changes) {
          const input = this.normalizeInput(changes[this.inputName].currentValue);
          this._enabled = this.enabled(input);
          this._validator = this._enabled ? this.createValidator(input) : nullValidator;
          if (this._onChange) {
            this._onChange();
          }
        }
      }
      /** @docs-private */
      validate(control) {
        return this._validator(control);
      }
      /** @docs-private */
      registerOnValidatorChange(fn) {
        this._onChange = fn;
      }
      /**
       * @description
       * Determines whether this validator should be active or not based on an input.
       * Base class implementation checks whether an input is defined (if the value is different from
       * `null` and `undefined`). Validator classes that extend this base class can override this
       * function with the logic specific to a particular validator directive.
       */
      enabled(input) {
        return input != null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _AbstractValidatorDirective, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _AbstractValidatorDirective, isStandalone: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: AbstractValidatorDirective, decorators: [{
      type: Directive
    }] });
    MAX_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxValidator),
      multi: true
    };
    MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the max bound to this directive.
       */
      max;
      /** @internal */
      inputName = "max";
      /** @internal */
      normalizeInput = (input) => toFloat(input);
      /** @internal */
      createValidator = (max) => maxValidator(max);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _MaxValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _MaxValidator, isStandalone: false, selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]", inputs: { max: "max" }, host: { properties: { "attr.max": "_enabled ? max : null" } }, providers: [MAX_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: MaxValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
        providers: [MAX_VALIDATOR],
        host: { "[attr.max]": "_enabled ? max : null" },
        standalone: false
      }]
    }], propDecorators: { max: [{
      type: Input
    }] } });
    MIN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinValidator),
      multi: true
    };
    MinValidator = class _MinValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the min bound to this directive.
       */
      min;
      /** @internal */
      inputName = "min";
      /** @internal */
      normalizeInput = (input) => toFloat(input);
      /** @internal */
      createValidator = (min) => minValidator(min);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _MinValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _MinValidator, isStandalone: false, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: { min: "min" }, host: { properties: { "attr.min": "_enabled ? min : null" } }, providers: [MIN_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: MinValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
        providers: [MIN_VALIDATOR],
        host: { "[attr.min]": "_enabled ? min : null" },
        standalone: false
      }]
    }], propDecorators: { min: [{
      type: Input
    }] } });
    REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RequiredValidator),
      multi: true
    };
    CHECKBOX_REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckboxRequiredValidator),
      multi: true
    };
    RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the required attribute bound to this directive.
       */
      required;
      /** @internal */
      inputName = "required";
      /** @internal */
      normalizeInput = booleanAttribute;
      /** @internal */
      createValidator = (input) => requiredValidator;
      /** @docs-private */
      enabled(input) {
        return input;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _RequiredValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _RequiredValidator, isStandalone: false, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: { required: "required" }, host: { properties: { "attr.required": '_enabled ? "" : null' } }, providers: [REQUIRED_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: RequiredValidator, decorators: [{
      type: Directive,
      args: [{
        selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
        providers: [REQUIRED_VALIDATOR],
        host: { "[attr.required]": '_enabled ? "" : null' },
        standalone: false
      }]
    }], propDecorators: { required: [{
      type: Input
    }] } });
    CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
      /** @internal */
      createValidator = (input) => requiredTrueValidator;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _CheckboxRequiredValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _CheckboxRequiredValidator, isStandalone: false, selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]", host: { properties: { "attr.required": '_enabled ? "" : null' } }, providers: [CHECKBOX_REQUIRED_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: CheckboxRequiredValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
        providers: [CHECKBOX_REQUIRED_VALIDATOR],
        host: { "[attr.required]": '_enabled ? "" : null' },
        standalone: false
      }]
    }] });
    EMAIL_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidator),
      multi: true
    };
    EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the email attribute bound to this directive.
       */
      email;
      /** @internal */
      inputName = "email";
      /** @internal */
      normalizeInput = booleanAttribute;
      /** @internal */
      createValidator = (input) => emailValidator;
      /** @docs-private */
      enabled(input) {
        return input;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _EmailValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _EmailValidator, isStandalone: false, selector: "[email][formControlName],[email][formControl],[email][ngModel]", inputs: { email: "email" }, providers: [EMAIL_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: EmailValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[email][formControlName],[email][formControl],[email][ngModel]",
        providers: [EMAIL_VALIDATOR],
        standalone: false
      }]
    }], propDecorators: { email: [{
      type: Input
    }] } });
    MIN_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinLengthValidator),
      multi: true
    };
    MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the minimum length bound to this directive.
       */
      minlength;
      /** @internal */
      inputName = "minlength";
      /** @internal */
      normalizeInput = (input) => toInteger(input);
      /** @internal */
      createValidator = (minlength) => minLengthValidator(minlength);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _MinLengthValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _MinLengthValidator, isStandalone: false, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: { minlength: "minlength" }, host: { properties: { "attr.minlength": "_enabled ? minlength : null" } }, providers: [MIN_LENGTH_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: MinLengthValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
        providers: [MIN_LENGTH_VALIDATOR],
        host: { "[attr.minlength]": "_enabled ? minlength : null" },
        standalone: false
      }]
    }], propDecorators: { minlength: [{
      type: Input
    }] } });
    MAX_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxLengthValidator),
      multi: true
    };
    MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the maximum length bound to this directive.
       */
      maxlength;
      /** @internal */
      inputName = "maxlength";
      /** @internal */
      normalizeInput = (input) => toInteger(input);
      /** @internal */
      createValidator = (maxlength) => maxLengthValidator(maxlength);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _MaxLengthValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _MaxLengthValidator, isStandalone: false, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: { maxlength: "maxlength" }, host: { properties: { "attr.maxlength": "_enabled ? maxlength : null" } }, providers: [MAX_LENGTH_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: MaxLengthValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
        providers: [MAX_LENGTH_VALIDATOR],
        host: { "[attr.maxlength]": "_enabled ? maxlength : null" },
        standalone: false
      }]
    }], propDecorators: { maxlength: [{
      type: Input
    }] } });
    PATTERN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PatternValidator),
      multi: true
    };
    PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the pattern bound to this directive.
       */
      pattern;
      // This input is always defined, since the name matches selector.
      /** @internal */
      inputName = "pattern";
      /** @internal */
      normalizeInput = (input) => input;
      /** @internal */
      createValidator = (input) => patternValidator(input);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _PatternValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.4", type: _PatternValidator, isStandalone: false, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: { pattern: "pattern" }, host: { properties: { "attr.pattern": "_enabled ? pattern : null" } }, providers: [PATTERN_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: PatternValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
        providers: [PATTERN_VALIDATOR],
        host: { "[attr.pattern]": "_enabled ? pattern : null" },
        standalone: false
      }]
    }], propDecorators: { pattern: [{
      type: Input
    }] } });
    SHARED_FORM_DIRECTIVES = [
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      RangeValueAccessor,
      CheckboxControlValueAccessor,
      SelectControlValueAccessor,
      SelectMultipleControlValueAccessor,
      RadioControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      MinLengthValidator,
      MaxLengthValidator,
      PatternValidator,
      CheckboxRequiredValidator,
      EmailValidator,
      MinValidator,
      MaxValidator
    ];
    TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
    REACTIVE_DRIVEN_DIRECTIVES = [
      FormControlDirective,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      FormArrayName
    ];
    \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _\u0275InternalFormsSharedModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.4", ngImport: core_exports, type: _\u0275InternalFormsSharedModule, declarations: [
        \u0275NgNoValidate,
        NgSelectOption,
        \u0275NgSelectMultipleOption,
        DefaultValueAccessor,
        NumberValueAccessor,
        RangeValueAccessor,
        CheckboxControlValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
        NgControlStatus,
        NgControlStatusGroup,
        RequiredValidator,
        MinLengthValidator,
        MaxLengthValidator,
        PatternValidator,
        CheckboxRequiredValidator,
        EmailValidator,
        MinValidator,
        MaxValidator
      ], exports: [
        \u0275NgNoValidate,
        NgSelectOption,
        \u0275NgSelectMultipleOption,
        DefaultValueAccessor,
        NumberValueAccessor,
        RangeValueAccessor,
        CheckboxControlValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
        NgControlStatus,
        NgControlStatusGroup,
        RequiredValidator,
        MinLengthValidator,
        MaxLengthValidator,
        PatternValidator,
        CheckboxRequiredValidator,
        EmailValidator,
        MinValidator,
        MaxValidator
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _\u0275InternalFormsSharedModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: \u0275InternalFormsSharedModule, decorators: [{
      type: NgModule,
      args: [{
        declarations: SHARED_FORM_DIRECTIVES,
        exports: SHARED_FORM_DIRECTIVES
      }]
    }] });
    FormArray = class extends AbstractControl {
      /**
       * Creates a new `FormArray` instance.
       *
       * @param controls An array of child controls. Each child control is given an index
       * where it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions
       *
       */
      constructor(controls, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({
          onlySelf: true,
          // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
          // `VALID` or `INVALID`.
          // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
          // to `true` to allow that during the control creation process.
          emitEvent: !!this.asyncValidator
        });
      }
      controls;
      /**
       * Get the `AbstractControl` at the given `index` in the array.
       *
       * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
       *     around from the back, and if index is greatly negative (less than `-length`), the result is
       * undefined. This behavior is the same as `Array.at(index)`.
       */
      at(index) {
        return this.controls[this._adjustIndex(index)];
      }
      /**
       * Insert a new `AbstractControl` at the end of the array.
       *
       * @param control Form control to be inserted
       * @param options Specifies whether this FormArray instance should emit events after a new
       *     control is added.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * inserted. When false, no events are emitted.
       */
      push(control, options = {}) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      /**
       * Insert a new `AbstractControl` at the given `index` in the array.
       *
       * @param index Index in the array to insert the control. If `index` is negative, wraps around
       *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
       * This behavior is the same as `Array.splice(index, 0, control)`.
       * @param control Form control to be inserted
       * @param options Specifies whether this FormArray instance should emit events after a new
       *     control is inserted.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * inserted. When false, no events are emitted.
       */
      insert(index, control, options = {}) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
      }
      /**
       * Remove the control at the given `index` in the array.
       *
       * @param index Index in the array to remove the control.  If `index` is negative, wraps around
       *     from the back. If `index` is greatly negative (less than `-length`), removes the first
       *     element. This behavior is the same as `Array.splice(index, 1)`.
       * @param options Specifies whether this FormArray instance should emit events after a
       *     control is removed.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * removed. When false, no events are emitted.
       */
      removeAt(index, options = {}) {
        let adjustedIndex = this._adjustIndex(index);
        if (adjustedIndex < 0)
          adjustedIndex = 0;
        if (this.controls[adjustedIndex])
          this.controls[adjustedIndex]._registerOnCollectionChange(() => {
          });
        this.controls.splice(adjustedIndex, 1);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
      }
      /**
       * Replace an existing control.
       *
       * @param index Index in the array to replace the control. If `index` is negative, wraps around
       *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
       *     element. This behavior is the same as `Array.splice(index, 1, control)`.
       * @param control The `AbstractControl` control to replace the existing control
       * @param options Specifies whether this FormArray instance should emit events after an
       *     existing control is replaced with a new one.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * replaced with a new one. When false, no events are emitted.
       */
      setControl(index, control, options = {}) {
        let adjustedIndex = this._adjustIndex(index);
        if (adjustedIndex < 0)
          adjustedIndex = 0;
        if (this.controls[adjustedIndex])
          this.controls[adjustedIndex]._registerOnCollectionChange(() => {
          });
        this.controls.splice(adjustedIndex, 1);
        if (control) {
          this.controls.splice(adjustedIndex, 0, control);
          this._registerControl(control);
        }
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      /**
       * Length of the control array.
       */
      get length() {
        return this.controls.length;
      }
      /**
       * Sets the value of the `FormArray`. It accepts an array that matches
       * the structure of the control.
       *
       * This method performs strict checks, and throws an error if you try
       * to set the value of a control that doesn't exist or if you exclude the
       * value of a control.
       *
       * @usageNotes
       * ### Set the values for the controls in the form array
       *
       * ```ts
       * const arr = new FormArray([
       *   new FormControl(),
       *   new FormControl()
       * ]);
       * console.log(arr.value);   // [null, null]
       *
       * arr.setValue(['Nancy', 'Drew']);
       * console.log(arr.value);   // ['Nancy', 'Drew']
       * ```
       *
       * @param value Array of values for the controls
       * @param options Configure options that determine how the control propagates changes and
       * emits events after the value changes
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
       * is false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control value is updated.
       * When false, no events are emitted.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       */
      setValue(value, options = {}) {
        assertAllValuesPresent(this, false, value);
        value.forEach((newValue, index) => {
          assertControlPresent(this, false, index);
          this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Patches the value of the `FormArray`. It accepts an array that matches the
       * structure of the control, and does its best to match the values to the correct
       * controls in the group.
       *
       * It accepts both super-sets and sub-sets of the array without throwing an error.
       *
       * @usageNotes
       * ### Patch the values for controls in a form array
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       * console.log(arr.value);   // [null, null]
       *
       * arr.patchValue(['Nancy']);
       * console.log(arr.value);   // ['Nancy', null]
       * ```
       *
       * @param value Array of latest values for the controls
       * @param options Configure options that determine how the control propagates changes and
       * emits events after the value changes
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
       * is false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control
       * value is updated. When false, no events are emitted. The configuration options are passed to
       * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
       */
      patchValue(value, options = {}) {
        if (value == null)
          return;
        value.forEach((newValue, index) => {
          if (this.at(index)) {
            this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
          }
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
       * value of all descendants to null or null maps.
       *
       * You reset to a specific form state by passing in an array of states
       * that matches the structure of the control. The state is a standalone value
       * or a form state object with both a value and a disabled status.
       *
       * @usageNotes
       * ### Reset the values in a form array
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       * arr.reset(['name', 'last name']);
       *
       * console.log(arr.value);  // ['name', 'last name']
       * ```
       *
       * ### Reset the values in a form array and the disabled status for the first control
       *
       * ```ts
       * arr.reset([
       *   {value: 'name', disabled: true},
       *   'last'
       * ]);
       *
       * console.log(arr.value);  // ['last']
       * console.log(arr.at(0).status);  // 'DISABLED'
       * ```
       *
       * @param value Array of values for the controls
       * @param options Configure options that determine how the control propagates changes and
       * emits events after the value changes
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
       * is false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control is reset.
       * When false, no events are emitted.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       */
      reset(value = [], options = {}) {
        this._forEachChild((control, index) => {
          control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this._updatePristine(options, this);
        this._updateTouched(options, this);
        this.updateValueAndValidity(options);
      }
      /**
       * The aggregate value of the array, including any disabled controls.
       *
       * Reports all values regardless of disabled status.
       */
      getRawValue() {
        return this.controls.map((control) => control.getRawValue());
      }
      /**
       * Remove all controls in the `FormArray`.
       *
       * @param options Specifies whether this FormArray instance should emit events after all
       *     controls are removed.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when all controls
       * in this FormArray instance are removed. When false, no events are emitted.
       *
       * @usageNotes
       * ### Remove all elements from a FormArray
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       * console.log(arr.length);  // 2
       *
       * arr.clear();
       * console.log(arr.length);  // 0
       * ```
       *
       * It's a simpler and more efficient alternative to removing all elements one by one:
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       *
       * while (arr.length) {
       *    arr.removeAt(0);
       * }
       * ```
       */
      clear(options = {}) {
        if (this.controls.length < 1)
          return;
        this._forEachChild((control) => control._registerOnCollectionChange(() => {
        }));
        this.controls.splice(0);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
      }
      /**
       * Adjusts a negative index by summing it with the length of the array. For very negative
       * indices, the result may remain negative.
       * @internal
       */
      _adjustIndex(index) {
        return index < 0 ? index + this.length : index;
      }
      /** @internal */
      _syncPendingControls() {
        let subtreeUpdated = this.controls.reduce((updated, child) => {
          return child._syncPendingControls() ? true : updated;
        }, false);
        if (subtreeUpdated)
          this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
      }
      /** @internal */
      _forEachChild(cb) {
        this.controls.forEach((control, index) => {
          cb(control, index);
        });
      }
      /** @internal */
      _updateValue() {
        this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
      }
      /** @internal */
      _anyControls(condition) {
        return this.controls.some((control) => control.enabled && condition(control));
      }
      /** @internal */
      _setUpControls() {
        this._forEachChild((control) => this._registerControl(control));
      }
      /** @internal */
      _allControlsDisabled() {
        for (const control of this.controls) {
          if (control.enabled)
            return false;
        }
        return this.controls.length > 0 || this.disabled;
      }
      _registerControl(control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
      }
      /** @internal */
      _find(name) {
        return this.at(name) ?? null;
      }
    };
    FormBuilder = class _FormBuilder {
      useNonNullable = false;
      /**
       * @description
       * Returns a FormBuilder in which automatically constructed `FormControl` elements
       * have `{nonNullable: true}` and are non-nullable.
       *
       * **Constructing non-nullable controls**
       *
       * When constructing a control, it will be non-nullable, and will reset to its initial value.
       *
       * ```ts
       * let nnfb = new FormBuilder().nonNullable;
       * let name = nnfb.control('Alex'); // FormControl<string>
       * name.reset();
       * console.log(name); // 'Alex'
       * ```
       *
       * **Constructing non-nullable groups or arrays**
       *
       * When constructing a group or array, all automatically created inner controls will be
       * non-nullable, and will reset to their initial values.
       *
       * ```ts
       * let nnfb = new FormBuilder().nonNullable;
       * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
       * name.reset();
       * console.log(name); // {who: 'Alex'}
       * ```
       * **Constructing *nullable* fields on groups or arrays**
       *
       * It is still possible to have a nullable field. In particular, any `FormControl` which is
       * *already* constructed will not be altered. For example:
       *
       * ```ts
       * let nnfb = new FormBuilder().nonNullable;
       * // FormGroup<{who: FormControl<string|null>}>
       * let name = nnfb.group({who: new FormControl('Alex')});
       * name.reset(); console.log(name); // {who: null}
       * ```
       *
       * Because the inner control is constructed explicitly by the caller, the builder has
       * no control over how it is created, and cannot exclude the `null`.
       */
      get nonNullable() {
        const nnfb = new _FormBuilder();
        nnfb.useNonNullable = true;
        return nnfb;
      }
      group(controls, options = null) {
        const reducedControls = this._reduceControls(controls);
        let newOptions = {};
        if (isAbstractControlOptions(options)) {
          newOptions = options;
        } else if (options !== null) {
          newOptions.validators = options.validator;
          newOptions.asyncValidators = options.asyncValidator;
        }
        return new FormGroup(reducedControls, newOptions);
      }
      /**
       * @description
       * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
       * containing all the keys and corresponding inner control types.
       *
       * @param controls A collection of child controls. The key for each child is the name
       * under which it is registered.
       *
       * @param options Configuration options object for the `FormRecord`. The object should have the
       * `AbstractControlOptions` type and might contain the following fields:
       * * `validators`: A synchronous validator function, or an array of validator functions.
       * * `asyncValidators`: A single async validator or array of async validator functions.
       * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
       * | submit').
       */
      record(controls, options = null) {
        const reducedControls = this._reduceControls(controls);
        return new FormRecord(reducedControls, options);
      }
      /**
       * @description
       * Constructs a new `FormControl` with the given state, validators and options. Sets
       * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
       * control will be nullable. Accepts a single generic argument, which is the type  of the
       * control's value.
       *
       * @param formState Initializes the control with an initial state value, or
       * with an object that contains both a value and a disabled status.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or a `FormControlOptions` object that contains
       * validation functions and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator
       * functions.
       *
       * @usageNotes
       *
       * ### Initialize a control as disabled
       *
       * The following example returns a control with an initial value in a disabled state.
       *
       * {@example forms/ts/formBuilder/form_builder_example.ts region='disabled-control'}
       */
      control(formState, validatorOrOpts, asyncValidator) {
        let newOptions = {};
        if (!this.useNonNullable) {
          return new FormControl(formState, validatorOrOpts, asyncValidator);
        }
        if (isAbstractControlOptions(validatorOrOpts)) {
          newOptions = validatorOrOpts;
        } else {
          newOptions.validators = validatorOrOpts;
          newOptions.asyncValidators = asyncValidator;
        }
        return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), { nonNullable: true }));
      }
      /**
       * Constructs a new `FormArray` from the given array of configurations,
       * validators and options. Accepts a single generic argument, which is the type of each control
       * inside the array.
       *
       * @param controls An array of child controls or control configs. Each child control is given an
       *     index when it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
       *     `AbstractControlOptions` object that contains
       * validation functions and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions.
       */
      array(controls, validatorOrOpts, asyncValidator) {
        const createdControls = controls.map((c) => this._createControl(c));
        return new FormArray(createdControls, validatorOrOpts, asyncValidator);
      }
      /** @internal */
      _reduceControls(controls) {
        const createdControls = {};
        Object.keys(controls).forEach((controlName) => {
          createdControls[controlName] = this._createControl(controls[controlName]);
        });
        return createdControls;
      }
      /** @internal */
      _createControl(controls) {
        if (controls instanceof FormControl) {
          return controls;
        } else if (controls instanceof AbstractControl) {
          return controls;
        } else if (Array.isArray(controls)) {
          const value = controls[0];
          const validator = controls.length > 1 ? controls[1] : null;
          const asyncValidator = controls.length > 2 ? controls[2] : null;
          return this.control(value, validator, asyncValidator);
        } else {
          return this.control(controls);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _FormBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _FormBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: FormBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    NonNullableFormBuilder = class _NonNullableFormBuilder {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _NonNullableFormBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _NonNullableFormBuilder, providedIn: "root", useFactory: () => inject(FormBuilder).nonNullable });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: NonNullableFormBuilder, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root",
        useFactory: () => inject(FormBuilder).nonNullable
      }]
    }] });
    UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
      group(controlsConfig, options = null) {
        return super.group(controlsConfig, options);
      }
      /**
       * Like `FormBuilder#control`, except the resulting control is untyped.
       */
      control(formState, validatorOrOpts, asyncValidator) {
        return super.control(formState, validatorOrOpts, asyncValidator);
      }
      /**
       * Like `FormBuilder#array`, except the resulting array is untyped.
       */
      array(controlsConfig, validatorOrOpts, asyncValidator) {
        return super.array(controlsConfig, validatorOrOpts, asyncValidator);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _UntypedFormBuilder, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _UntypedFormBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: UntypedFormBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    VERSION = new Version("20.1.4");
    FormsModule = class _FormsModule {
      /**
       * @description
       * Provides options for configuring the forms module.
       *
       * @param opts An object of configuration options
       * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
       * correct, or to only call it `whenDisabled`, which is the legacy behavior.
       */
      static withConfig(opts) {
        return {
          ngModule: _FormsModule,
          providers: [
            {
              provide: CALL_SET_DISABLED_STATE,
              useValue: opts.callSetDisabledState ?? setDisabledStateDefault
            }
          ]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _FormsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.4", ngImport: core_exports, type: _FormsModule, declarations: [NgModel, NgModelGroup, NgForm], exports: [\u0275InternalFormsSharedModule, NgModel, NgModelGroup, NgForm] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _FormsModule, imports: [\u0275InternalFormsSharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: FormsModule, decorators: [{
      type: NgModule,
      args: [{
        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
        exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
      }]
    }] });
    ReactiveFormsModule = class _ReactiveFormsModule {
      /**
       * @description
       * Provides options for configuring the reactive forms module.
       *
       * @param opts An object of configuration options
       * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
       * binding is used with reactive form directives.
       * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
       * correct, or to only call it `whenDisabled`, which is the legacy behavior.
       */
      static withConfig(opts) {
        return {
          ngModule: _ReactiveFormsModule,
          providers: [
            {
              provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
              useValue: opts.warnOnNgModelWithFormControl ?? "always"
            },
            {
              provide: CALL_SET_DISABLED_STATE,
              useValue: opts.callSetDisabledState ?? setDisabledStateDefault
            }
          ]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _ReactiveFormsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.4", ngImport: core_exports, type: _ReactiveFormsModule, declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], exports: [\u0275InternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _ReactiveFormsModule, imports: [\u0275InternalFormsSharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: ReactiveFormsModule, decorators: [{
      type: NgModule,
      args: [{
        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
        exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/text-field.mjs
var _CdkTextFieldStyleLoader, listenerOptions, AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule;
var init_text_field = __esm({
  "node_modules/@angular/cdk/fesm2022/text-field.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_platform_DNDzkVcI();
    init_style_loader_B2sGQXxD();
    init_element_x4z00URv();
    init_operators();
    _CdkTextFieldStyleLoader = class __CdkTextFieldStyleLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __CdkTextFieldStyleLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: __CdkTextFieldStyleLoader, isStandalone: true, selector: "ng-component", host: { attributes: { "cdk-text-field-style-loader": "" } }, ngImport: core_exports, template: "", isInline: true, styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTextFieldStyleLoader, decorators: [{
      type: Component,
      args: [{ template: "", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: { "cdk-text-field-style-loader": "" }, styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"] }]
    }] });
    listenerOptions = { passive: true };
    AutofillMonitor = class _AutofillMonitor {
      _platform = inject(Platform);
      _ngZone = inject(NgZone);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _styleLoader = inject(_CdkPrivateStyleLoader);
      _monitoredElements = /* @__PURE__ */ new Map();
      constructor() {
      }
      monitor(elementOrRef) {
        if (!this._platform.isBrowser) {
          return EMPTY;
        }
        this._styleLoader.load(_CdkTextFieldStyleLoader);
        const element = coerceElement(elementOrRef);
        const info = this._monitoredElements.get(element);
        if (info) {
          return info.subject;
        }
        const subject = new Subject();
        const cssClass = "cdk-text-field-autofilled";
        const listener = (event) => {
          if (event.animationName === "cdk-text-field-autofill-start" && !element.classList.contains(cssClass)) {
            element.classList.add(cssClass);
            this._ngZone.run(() => subject.next({ target: event.target, isAutofilled: true }));
          } else if (event.animationName === "cdk-text-field-autofill-end" && element.classList.contains(cssClass)) {
            element.classList.remove(cssClass);
            this._ngZone.run(() => subject.next({ target: event.target, isAutofilled: false }));
          }
        };
        const unlisten = this._ngZone.runOutsideAngular(() => {
          element.classList.add("cdk-text-field-autofill-monitored");
          return this._renderer.listen(element, "animationstart", listener, listenerOptions);
        });
        this._monitoredElements.set(element, { subject, unlisten });
        return subject;
      }
      stopMonitoring(elementOrRef) {
        const element = coerceElement(elementOrRef);
        const info = this._monitoredElements.get(element);
        if (info) {
          info.unlisten();
          info.subject.complete();
          element.classList.remove("cdk-text-field-autofill-monitored");
          element.classList.remove("cdk-text-field-autofilled");
          this._monitoredElements.delete(element);
        }
      }
      ngOnDestroy() {
        this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _AutofillMonitor, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _AutofillMonitor, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: AutofillMonitor, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkAutofill = class _CdkAutofill {
      _elementRef = inject(ElementRef);
      _autofillMonitor = inject(AutofillMonitor);
      /** Emits when the autofill state of the element changes. */
      cdkAutofill = new EventEmitter();
      constructor() {
      }
      ngOnInit() {
        this._autofillMonitor.monitor(this._elementRef).subscribe((event) => this.cdkAutofill.emit(event));
      }
      ngOnDestroy() {
        this._autofillMonitor.stopMonitoring(this._elementRef);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkAutofill, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkAutofill, isStandalone: true, selector: "[cdkAutofill]", outputs: { cdkAutofill: "cdkAutofill" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkAutofill, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkAutofill]"
      }]
    }], ctorParameters: () => [], propDecorators: { cdkAutofill: [{
      type: Output
    }] } });
    CdkTextareaAutosize = class _CdkTextareaAutosize {
      _elementRef = inject(ElementRef);
      _platform = inject(Platform);
      _ngZone = inject(NgZone);
      _renderer = inject(Renderer2);
      _resizeEvents = new Subject();
      /** Keep track of the previous textarea value to avoid resizing when the value hasn't changed. */
      _previousValue;
      _initialHeight;
      _destroyed = new Subject();
      _listenerCleanups;
      _minRows;
      _maxRows;
      _enabled = true;
      /**
       * Value of minRows as of last resize. If the minRows has decreased, the
       * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
       * does not have the same problem because it does not affect the textarea's scrollHeight.
       */
      _previousMinRows = -1;
      _textareaElement;
      /** Minimum amount of rows in the textarea. */
      get minRows() {
        return this._minRows;
      }
      set minRows(value) {
        this._minRows = coerceNumberProperty(value);
        this._setMinHeight();
      }
      /** Maximum amount of rows in the textarea. */
      get maxRows() {
        return this._maxRows;
      }
      set maxRows(value) {
        this._maxRows = coerceNumberProperty(value);
        this._setMaxHeight();
      }
      /** Whether autosizing is enabled or not */
      get enabled() {
        return this._enabled;
      }
      set enabled(value) {
        if (this._enabled !== value) {
          (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
        }
      }
      get placeholder() {
        return this._textareaElement.placeholder;
      }
      set placeholder(value) {
        this._cachedPlaceholderHeight = void 0;
        if (value) {
          this._textareaElement.setAttribute("placeholder", value);
        } else {
          this._textareaElement.removeAttribute("placeholder");
        }
        this._cacheTextareaPlaceholderHeight();
      }
      /** Cached height of a textarea with a single row. */
      _cachedLineHeight;
      /** Cached height of a textarea with only the placeholder. */
      _cachedPlaceholderHeight;
      /** Cached scroll top of a textarea */
      _cachedScrollTop;
      /** Used to reference correct document/window */
      _document = inject(DOCUMENT);
      _hasFocus;
      _isViewInited = false;
      constructor() {
        const styleLoader = inject(_CdkPrivateStyleLoader);
        styleLoader.load(_CdkTextFieldStyleLoader);
        this._textareaElement = this._elementRef.nativeElement;
      }
      /** Sets the minimum height of the textarea as determined by minRows. */
      _setMinHeight() {
        const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
        if (minHeight) {
          this._textareaElement.style.minHeight = minHeight;
        }
      }
      /** Sets the maximum height of the textarea as determined by maxRows. */
      _setMaxHeight() {
        const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
        if (maxHeight) {
          this._textareaElement.style.maxHeight = maxHeight;
        }
      }
      ngAfterViewInit() {
        if (this._platform.isBrowser) {
          this._initialHeight = this._textareaElement.style.height;
          this.resizeToFitContent();
          this._ngZone.runOutsideAngular(() => {
            this._listenerCleanups = [
              this._renderer.listen("window", "resize", () => this._resizeEvents.next()),
              this._renderer.listen(this._textareaElement, "focus", this._handleFocusEvent),
              this._renderer.listen(this._textareaElement, "blur", this._handleFocusEvent)
            ];
            this._resizeEvents.pipe(auditTime(16)).subscribe(() => {
              this._cachedLineHeight = this._cachedPlaceholderHeight = void 0;
              this.resizeToFitContent(true);
            });
          });
          this._isViewInited = true;
          this.resizeToFitContent(true);
        }
      }
      ngOnDestroy() {
        this._listenerCleanups?.forEach((cleanup) => cleanup());
        this._resizeEvents.complete();
        this._destroyed.next();
        this._destroyed.complete();
      }
      /**
       * Cache the height of a single-row textarea if it has not already been cached.
       *
       * We need to know how large a single "row" of a textarea is in order to apply minRows and
       * maxRows. For the initial version, we will assume that the height of a single line in the
       * textarea does not ever change.
       */
      _cacheTextareaLineHeight() {
        if (this._cachedLineHeight) {
          return;
        }
        const textareaClone = this._textareaElement.cloneNode(false);
        const cloneStyles = textareaClone.style;
        textareaClone.rows = 1;
        cloneStyles.position = "absolute";
        cloneStyles.visibility = "hidden";
        cloneStyles.border = "none";
        cloneStyles.padding = "0";
        cloneStyles.height = "";
        cloneStyles.minHeight = "";
        cloneStyles.maxHeight = "";
        cloneStyles.top = cloneStyles.bottom = cloneStyles.left = cloneStyles.right = "auto";
        cloneStyles.overflow = "hidden";
        this._textareaElement.parentNode.appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.clientHeight;
        textareaClone.remove();
        this._setMinHeight();
        this._setMaxHeight();
      }
      _measureScrollHeight() {
        const element = this._textareaElement;
        const previousMargin = element.style.marginBottom || "";
        const isFirefox = this._platform.FIREFOX;
        const needsMarginFiller = isFirefox && this._hasFocus;
        const measuringClass = isFirefox ? "cdk-textarea-autosize-measuring-firefox" : "cdk-textarea-autosize-measuring";
        if (needsMarginFiller) {
          element.style.marginBottom = `${element.clientHeight}px`;
        }
        element.classList.add(measuringClass);
        const scrollHeight = element.scrollHeight - 4;
        element.classList.remove(measuringClass);
        if (needsMarginFiller) {
          element.style.marginBottom = previousMargin;
        }
        return scrollHeight;
      }
      _cacheTextareaPlaceholderHeight() {
        if (!this._isViewInited || this._cachedPlaceholderHeight != void 0) {
          return;
        }
        if (!this.placeholder) {
          this._cachedPlaceholderHeight = 0;
          return;
        }
        const value = this._textareaElement.value;
        this._textareaElement.value = this._textareaElement.placeholder;
        this._cachedPlaceholderHeight = this._measureScrollHeight();
        this._textareaElement.value = value;
      }
      /** Handles `focus` and `blur` events. */
      _handleFocusEvent = (event) => {
        this._hasFocus = event.type === "focus";
      };
      ngDoCheck() {
        if (this._platform.isBrowser) {
          this.resizeToFitContent();
        }
      }
      /**
       * Resize the textarea to fit its content.
       * @param force Whether to force a height recalculation. By default the height will be
       *    recalculated only if the value changed since the last call.
       */
      resizeToFitContent(force = false) {
        if (!this._enabled) {
          return;
        }
        this._cacheTextareaLineHeight();
        this._cacheTextareaPlaceholderHeight();
        this._cachedScrollTop = this._textareaElement.scrollTop;
        if (!this._cachedLineHeight) {
          return;
        }
        const textarea = this._elementRef.nativeElement;
        const value = textarea.value;
        if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
          return;
        }
        const scrollHeight = this._measureScrollHeight();
        const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
        textarea.style.height = `${height}px`;
        this._ngZone.runOutsideAngular(() => {
          if (typeof requestAnimationFrame !== "undefined") {
            requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
          } else {
            setTimeout(() => this._scrollToCaretPosition(textarea));
          }
        });
        this._previousValue = value;
        this._previousMinRows = this._minRows;
      }
      /**
       * Resets the textarea to its original size
       */
      reset() {
        if (this._initialHeight !== void 0) {
          this._textareaElement.style.height = this._initialHeight;
        }
      }
      _noopInputHandler() {
      }
      /**
       * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
       * prevent it from scrolling to the caret position. We need to re-set the selection
       * in order for it to scroll to the proper position.
       */
      _scrollToCaretPosition(textarea) {
        const { selectionStart, selectionEnd } = textarea;
        if (!this._destroyed.isStopped && this._hasFocus) {
          textarea.setSelectionRange(selectionStart, selectionEnd);
          textarea.scrollTop = this._cachedScrollTop;
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTextareaAutosize, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkTextareaAutosize, isStandalone: true, selector: "textarea[cdkTextareaAutosize]", inputs: { minRows: ["cdkAutosizeMinRows", "minRows"], maxRows: ["cdkAutosizeMaxRows", "maxRows"], enabled: ["cdkTextareaAutosize", "enabled", booleanAttribute], placeholder: "placeholder" }, host: { attributes: { "rows": "1" }, listeners: { "input": "_noopInputHandler()" }, classAttribute: "cdk-textarea-autosize" }, exportAs: ["cdkTextareaAutosize"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkTextareaAutosize, decorators: [{
      type: Directive,
      args: [{
        selector: "textarea[cdkTextareaAutosize]",
        exportAs: "cdkTextareaAutosize",
        host: {
          "class": "cdk-textarea-autosize",
          // Textarea elements that have the directive applied should have a single row by default.
          // Browsers normally show two rows by default and therefore this limits the minRows binding.
          "rows": "1",
          "(input)": "_noopInputHandler()"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { minRows: [{
      type: Input,
      args: ["cdkAutosizeMinRows"]
    }], maxRows: [{
      type: Input,
      args: ["cdkAutosizeMaxRows"]
    }], enabled: [{
      type: Input,
      args: [{ alias: "cdkTextareaAutosize", transform: booleanAttribute }]
    }], placeholder: [{
      type: Input
    }] } });
    TextFieldModule = class _TextFieldModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _TextFieldModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _TextFieldModule, imports: [CdkAutofill, CdkTextareaAutosize], exports: [CdkAutofill, CdkTextareaAutosize] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _TextFieldModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: TextFieldModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CdkAutofill, CdkTextareaAutosize],
        exports: [CdkAutofill, CdkTextareaAutosize]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/input-value-accessor-D1GvPuqO.mjs
var MAT_INPUT_VALUE_ACCESSOR;
var init_input_value_accessor_D1GvPuqO = __esm({
  "node_modules/@angular/material/fesm2022/input-value-accessor-D1GvPuqO.mjs"() {
    "use strict";
    init_core();
    MAT_INPUT_VALUE_ACCESSOR = new InjectionToken("MAT_INPUT_VALUE_ACCESSOR");
  }
});

// node_modules/@angular/cdk/fesm2022/observers/private.mjs
var loopLimitExceededErrorHandler, SingleBoxSharedResizeObserver, SharedResizeObserver;
var init_private = __esm({
  "node_modules/@angular/cdk/fesm2022/observers/private.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    loopLimitExceededErrorHandler = (e) => {
      if (e instanceof ErrorEvent && e.message === "ResizeObserver loop limit exceeded") {
        console.error(`${e.message}. This could indicate a performance issue with your app. See https://github.com/WICG/resize-observer/blob/master/explainer.md#error-handling`);
      }
    };
    SingleBoxSharedResizeObserver = class {
      _box;
      /** Stream that emits when the shared observer is destroyed. */
      _destroyed = new Subject();
      /** Stream of all events from the ResizeObserver. */
      _resizeSubject = new Subject();
      /** ResizeObserver used to observe element resize events. */
      _resizeObserver;
      /** A map of elements to streams of their resize events. */
      _elementObservables = /* @__PURE__ */ new Map();
      constructor(_box) {
        this._box = _box;
        if (typeof ResizeObserver !== "undefined") {
          this._resizeObserver = new ResizeObserver((entries) => this._resizeSubject.next(entries));
        }
      }
      /**
       * Gets a stream of resize events for the given element.
       * @param target The element to observe.
       * @return The stream of resize events for the element.
       */
      observe(target) {
        if (!this._elementObservables.has(target)) {
          this._elementObservables.set(target, new Observable((observer) => {
            const subscription = this._resizeSubject.subscribe(observer);
            this._resizeObserver?.observe(target, { box: this._box });
            return () => {
              this._resizeObserver?.unobserve(target);
              subscription.unsubscribe();
              this._elementObservables.delete(target);
            };
          }).pipe(
            filter((entries) => entries.some((entry) => entry.target === target)),
            // Share a replay of the last event so that subsequent calls to observe the same element
            // receive initial sizing info like the first one. Also enable ref counting so the
            // element will be automatically unobserved when there are no more subscriptions.
            shareReplay({ bufferSize: 1, refCount: true }),
            takeUntil(this._destroyed)
          ));
        }
        return this._elementObservables.get(target);
      }
      /** Destroys this instance. */
      destroy() {
        this._destroyed.next();
        this._destroyed.complete();
        this._resizeSubject.complete();
        this._elementObservables.clear();
      }
    };
    SharedResizeObserver = class _SharedResizeObserver {
      _cleanupErrorListener;
      /** Map of box type to shared resize observer. */
      _observers = /* @__PURE__ */ new Map();
      /** The Angular zone. */
      _ngZone = inject(NgZone);
      constructor() {
        if (typeof ResizeObserver !== "undefined" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          this._ngZone.runOutsideAngular(() => {
            const renderer = inject(RendererFactory2).createRenderer(null, null);
            this._cleanupErrorListener = renderer.listen("window", "error", loopLimitExceededErrorHandler);
          });
        }
      }
      ngOnDestroy() {
        for (const [, observer] of this._observers) {
          observer.destroy();
        }
        this._observers.clear();
        this._cleanupErrorListener?.();
      }
      /**
       * Gets a stream of resize events for the given target element and box type.
       * @param target The element to observe for resizes.
       * @param options Options to pass to the `ResizeObserver`
       * @return The stream of resize events for the element.
       */
      observe(target, options) {
        const box = options?.box || "content-box";
        if (!this._observers.has(box)) {
          this._observers.set(box, new SingleBoxSharedResizeObserver(box));
        }
        return this._observers.get(box).observe(target);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _SharedResizeObserver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _SharedResizeObserver, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: SharedResizeObserver, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/material/fesm2022/form-field-D9B5IUZf.mjs
function estimateScrollWidth(element) {
  const htmlEl = element;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  const clone = htmlEl.cloneNode(true);
  clone.style.setProperty("position", "absolute");
  clone.style.setProperty("transform", "translate(-9999px, -9999px)");
  document.documentElement.appendChild(clone);
  const scrollWidth = clone.scrollWidth;
  clone.remove();
  return scrollWidth;
}
function getMatFormFieldDuplicatedHintError(align) {
  return Error(`A hint was already declared for 'align="${align}"'.`);
}
function getMatFormFieldMissingControlError() {
  return Error("mat-form-field must contain a MatFormFieldControl.");
}
var MatLabel, MAT_ERROR, MatError, MatHint, MAT_PREFIX, MatPrefix, MAT_SUFFIX, MatSuffix, FLOATING_LABEL_PARENT, MatFormFieldFloatingLabel, ACTIVATE_CLASS, DEACTIVATING_CLASS, MatFormFieldLineRipple, MatFormFieldNotchedOutline, MatFormFieldControl, MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, DEFAULT_APPEARANCE, DEFAULT_FLOAT_LABEL, DEFAULT_SUBSCRIPT_SIZING, FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM, MatFormField;
var init_form_field_D9B5IUZf = __esm({
  "node_modules/@angular/material/fesm2022/form-field-D9B5IUZf.mjs"() {
    "use strict";
    init_a11y();
    init_bidi();
    init_coercion();
    init_platform();
    init_common();
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_private();
    init_animation_ChQ1vjiF();
    MatLabel = class _MatLabel {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatLabel, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatLabel, isStandalone: true, selector: "mat-label", ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatLabel, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-label"
      }]
    }] });
    MAT_ERROR = new InjectionToken("MatError");
    MatError = class _MatError {
      id = inject(_IdGenerator).getId("mat-mdc-error-");
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatError, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatError, isStandalone: true, selector: "mat-error, [matError]", inputs: { id: "id" }, host: { properties: { "id": "id" }, classAttribute: "mat-mdc-form-field-error mat-mdc-form-field-bottom-align" }, providers: [{ provide: MAT_ERROR, useExisting: _MatError }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatError, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-error, [matError]",
        host: {
          "class": "mat-mdc-form-field-error mat-mdc-form-field-bottom-align",
          "[id]": "id"
        },
        providers: [{ provide: MAT_ERROR, useExisting: MatError }]
      }]
    }], ctorParameters: () => [], propDecorators: { id: [{
      type: Input
    }] } });
    MatHint = class _MatHint {
      /** Whether to align the hint label at the start or end of the line. */
      align = "start";
      /** Unique ID for the hint. Used for the aria-describedby on the form field control. */
      id = inject(_IdGenerator).getId("mat-mdc-hint-");
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatHint, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatHint, isStandalone: true, selector: "mat-hint", inputs: { align: "align", id: "id" }, host: { properties: { "class.mat-mdc-form-field-hint-end": 'align === "end"', "id": "id", "attr.align": "null" }, classAttribute: "mat-mdc-form-field-hint mat-mdc-form-field-bottom-align" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatHint, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-hint",
        host: {
          "class": "mat-mdc-form-field-hint mat-mdc-form-field-bottom-align",
          "[class.mat-mdc-form-field-hint-end]": 'align === "end"',
          "[id]": "id",
          // Remove align attribute to prevent it from interfering with layout.
          "[attr.align]": "null"
        }
      }]
    }], propDecorators: { align: [{
      type: Input
    }], id: [{
      type: Input
    }] } });
    MAT_PREFIX = new InjectionToken("MatPrefix");
    MatPrefix = class _MatPrefix {
      set _isTextSelector(value) {
        this._isText = true;
      }
      _isText = false;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPrefix, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatPrefix, isStandalone: true, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: { _isTextSelector: ["matTextPrefix", "_isTextSelector"] }, providers: [{ provide: MAT_PREFIX, useExisting: _MatPrefix }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatPrefix, decorators: [{
      type: Directive,
      args: [{
        selector: "[matPrefix], [matIconPrefix], [matTextPrefix]",
        providers: [{ provide: MAT_PREFIX, useExisting: MatPrefix }]
      }]
    }], propDecorators: { _isTextSelector: [{
      type: Input,
      args: ["matTextPrefix"]
    }] } });
    MAT_SUFFIX = new InjectionToken("MatSuffix");
    MatSuffix = class _MatSuffix {
      set _isTextSelector(value) {
        this._isText = true;
      }
      _isText = false;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSuffix, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatSuffix, isStandalone: true, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: { _isTextSelector: ["matTextSuffix", "_isTextSelector"] }, providers: [{ provide: MAT_SUFFIX, useExisting: _MatSuffix }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSuffix, decorators: [{
      type: Directive,
      args: [{
        selector: "[matSuffix], [matIconSuffix], [matTextSuffix]",
        providers: [{ provide: MAT_SUFFIX, useExisting: MatSuffix }]
      }]
    }], propDecorators: { _isTextSelector: [{
      type: Input,
      args: ["matTextSuffix"]
    }] } });
    FLOATING_LABEL_PARENT = new InjectionToken("FloatingLabelParent");
    MatFormFieldFloatingLabel = class _MatFormFieldFloatingLabel {
      _elementRef = inject(ElementRef);
      /** Whether the label is floating. */
      get floating() {
        return this._floating;
      }
      set floating(value) {
        this._floating = value;
        if (this.monitorResize) {
          this._handleResize();
        }
      }
      _floating = false;
      /** Whether to monitor for resize events on the floating label. */
      get monitorResize() {
        return this._monitorResize;
      }
      set monitorResize(value) {
        this._monitorResize = value;
        if (this._monitorResize) {
          this._subscribeToResize();
        } else {
          this._resizeSubscription.unsubscribe();
        }
      }
      _monitorResize = false;
      /** The shared ResizeObserver. */
      _resizeObserver = inject(SharedResizeObserver);
      /** The Angular zone. */
      _ngZone = inject(NgZone);
      /** The parent form-field. */
      _parent = inject(FLOATING_LABEL_PARENT);
      /** The current resize event subscription. */
      _resizeSubscription = new Subscription();
      constructor() {
      }
      ngOnDestroy() {
        this._resizeSubscription.unsubscribe();
      }
      /** Gets the width of the label. Used for the outline notch. */
      getWidth() {
        return estimateScrollWidth(this._elementRef.nativeElement);
      }
      /** Gets the HTML element for the floating label. */
      get element() {
        return this._elementRef.nativeElement;
      }
      /** Handles resize events from the ResizeObserver. */
      _handleResize() {
        setTimeout(() => this._parent._handleLabelResized());
      }
      /** Subscribes to resize events. */
      _subscribeToResize() {
        this._resizeSubscription.unsubscribe();
        this._ngZone.runOutsideAngular(() => {
          this._resizeSubscription = this._resizeObserver.observe(this._elementRef.nativeElement, { box: "border-box" }).subscribe(() => this._handleResize());
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatFormFieldFloatingLabel, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatFormFieldFloatingLabel, isStandalone: true, selector: "label[matFormFieldFloatingLabel]", inputs: { floating: "floating", monitorResize: "monitorResize" }, host: { properties: { "class.mdc-floating-label--float-above": "floating" }, classAttribute: "mdc-floating-label mat-mdc-floating-label" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatFormFieldFloatingLabel, decorators: [{
      type: Directive,
      args: [{
        selector: "label[matFormFieldFloatingLabel]",
        host: {
          "class": "mdc-floating-label mat-mdc-floating-label",
          "[class.mdc-floating-label--float-above]": "floating"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { floating: [{
      type: Input
    }], monitorResize: [{
      type: Input
    }] } });
    ACTIVATE_CLASS = "mdc-line-ripple--active";
    DEACTIVATING_CLASS = "mdc-line-ripple--deactivating";
    MatFormFieldLineRipple = class _MatFormFieldLineRipple {
      _elementRef = inject(ElementRef);
      _cleanupTransitionEnd;
      constructor() {
        const ngZone = inject(NgZone);
        const renderer = inject(Renderer2);
        ngZone.runOutsideAngular(() => {
          this._cleanupTransitionEnd = renderer.listen(this._elementRef.nativeElement, "transitionend", this._handleTransitionEnd);
        });
      }
      activate() {
        const classList = this._elementRef.nativeElement.classList;
        classList.remove(DEACTIVATING_CLASS);
        classList.add(ACTIVATE_CLASS);
      }
      deactivate() {
        this._elementRef.nativeElement.classList.add(DEACTIVATING_CLASS);
      }
      _handleTransitionEnd = (event) => {
        const classList = this._elementRef.nativeElement.classList;
        const isDeactivating = classList.contains(DEACTIVATING_CLASS);
        if (event.propertyName === "opacity" && isDeactivating) {
          classList.remove(ACTIVATE_CLASS, DEACTIVATING_CLASS);
        }
      };
      ngOnDestroy() {
        this._cleanupTransitionEnd();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatFormFieldLineRipple, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatFormFieldLineRipple, isStandalone: true, selector: "div[matFormFieldLineRipple]", host: { classAttribute: "mdc-line-ripple" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatFormFieldLineRipple, decorators: [{
      type: Directive,
      args: [{
        selector: "div[matFormFieldLineRipple]",
        host: {
          "class": "mdc-line-ripple"
        }
      }]
    }], ctorParameters: () => [] });
    MatFormFieldNotchedOutline = class _MatFormFieldNotchedOutline {
      _elementRef = inject(ElementRef);
      _ngZone = inject(NgZone);
      /** Whether the notch should be opened. */
      open = false;
      _notch;
      ngAfterViewInit() {
        const element = this._elementRef.nativeElement;
        const label = element.querySelector(".mdc-floating-label");
        if (label) {
          element.classList.add("mdc-notched-outline--upgraded");
          if (typeof requestAnimationFrame === "function") {
            label.style.transitionDuration = "0s";
            this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() => label.style.transitionDuration = "");
            });
          }
        } else {
          element.classList.add("mdc-notched-outline--no-label");
        }
      }
      _setNotchWidth(labelWidth) {
        const notch = this._notch.nativeElement;
        if (!this.open || !labelWidth) {
          notch.style.width = "";
        } else {
          const NOTCH_ELEMENT_PADDING = 8;
          const NOTCH_ELEMENT_BORDER = 1;
          notch.style.width = `calc(${labelWidth}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + ${NOTCH_ELEMENT_PADDING + NOTCH_ELEMENT_BORDER}px)`;
        }
      }
      _setMaxWidth(prefixAndSuffixWidth) {
        this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width", `calc(100% - ${prefixAndSuffixWidth}px)`);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatFormFieldNotchedOutline, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatFormFieldNotchedOutline, isStandalone: true, selector: "div[matFormFieldNotchedOutline]", inputs: { open: ["matFormFieldNotchedOutlineOpen", "open"] }, host: { properties: { "class.mdc-notched-outline--notched": "open" }, classAttribute: "mdc-notched-outline" }, viewQueries: [{ propertyName: "_notch", first: true, predicate: ["notch"], descendants: true }], ngImport: core_exports, template: '<div class="mat-mdc-notch-piece mdc-notched-outline__leading"></div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__notch" #notch>\n  <ng-content></ng-content>\n</div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__trailing"></div>\n', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatFormFieldNotchedOutline, decorators: [{
      type: Component,
      args: [{ selector: "div[matFormFieldNotchedOutline]", host: {
        "class": "mdc-notched-outline",
        // Besides updating the notch state through the MDC component, we toggle this class through
        // a host binding in order to ensure that the notched-outline renders correctly on the server.
        "[class.mdc-notched-outline--notched]": "open"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: '<div class="mat-mdc-notch-piece mdc-notched-outline__leading"></div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__notch" #notch>\n  <ng-content></ng-content>\n</div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__trailing"></div>\n' }]
    }], propDecorators: { open: [{
      type: Input,
      args: ["matFormFieldNotchedOutlineOpen"]
    }], _notch: [{
      type: ViewChild,
      args: ["notch"]
    }] } });
    MatFormFieldControl = class _MatFormFieldControl {
      /** The value of the control. */
      value;
      /**
       * Stream that emits whenever the state of the control changes such that the parent `MatFormField`
       * needs to run change detection.
       */
      stateChanges;
      /** The element ID for this control. */
      id;
      /** The placeholder for this control. */
      placeholder;
      /** Gets the AbstractControlDirective for this control. */
      ngControl;
      /** Whether the control is focused. */
      focused;
      /** Whether the control is empty. */
      empty;
      /** Whether the `MatFormField` label should try to float. */
      shouldLabelFloat;
      /** Whether the control is required. */
      required;
      /** Whether the control is disabled. */
      disabled;
      /** Whether the control is in an error state. */
      errorState;
      /**
       * An optional name for the control type that can be used to distinguish `mat-form-field` elements
       * based on their control type. The form field will add a class,
       * `mat-form-field-type-{{controlType}}` to its root element.
       */
      controlType;
      /**
       * Whether the input is currently in an autofilled state. If property is not present on the
       * control it is assumed to be false.
       */
      autofilled;
      /**
       * Value of `aria-describedby` that should be merged with the described-by ids
       * which are set by the form-field.
       */
      userAriaDescribedBy;
      /**
       * Whether to automatically assign the ID of the form field as the `for` attribute
       * on the `<label>` inside the form field. Set this to true to prevent the form
       * field from associating the label with non-native elements.
       */
      disableAutomaticLabeling;
      /** Gets the list of element IDs that currently describe this control. */
      describedByIds;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatFormFieldControl, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatFormFieldControl, isStandalone: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatFormFieldControl, decorators: [{
      type: Directive
    }] });
    MAT_FORM_FIELD = new InjectionToken("MatFormField");
    MAT_FORM_FIELD_DEFAULT_OPTIONS = new InjectionToken("MAT_FORM_FIELD_DEFAULT_OPTIONS");
    DEFAULT_APPEARANCE = "fill";
    DEFAULT_FLOAT_LABEL = "auto";
    DEFAULT_SUBSCRIPT_SIZING = "fixed";
    FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM = `translateY(-50%)`;
    MatFormField = class _MatFormField {
      _elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _dir = inject(Directionality);
      _platform = inject(Platform);
      _idGenerator = inject(_IdGenerator);
      _ngZone = inject(NgZone);
      _defaults = inject(MAT_FORM_FIELD_DEFAULT_OPTIONS, {
        optional: true
      });
      _textField;
      _iconPrefixContainer;
      _textPrefixContainer;
      _iconSuffixContainer;
      _textSuffixContainer;
      _floatingLabel;
      _notchedOutline;
      _lineRipple;
      _iconPrefixContainerSignal = viewChild("iconPrefixContainer");
      _textPrefixContainerSignal = viewChild("textPrefixContainer");
      _iconSuffixContainerSignal = viewChild("iconSuffixContainer");
      _textSuffixContainerSignal = viewChild("textSuffixContainer");
      _prefixSuffixContainers = computed(() => {
        return [
          this._iconPrefixContainerSignal(),
          this._textPrefixContainerSignal(),
          this._iconSuffixContainerSignal(),
          this._textSuffixContainerSignal()
        ].map((container) => container?.nativeElement).filter((e) => e !== void 0);
      });
      _formFieldControl;
      _prefixChildren;
      _suffixChildren;
      _errorChildren;
      _hintChildren;
      _labelChild = contentChild(MatLabel);
      /** Whether the required marker should be hidden. */
      get hideRequiredMarker() {
        return this._hideRequiredMarker;
      }
      set hideRequiredMarker(value) {
        this._hideRequiredMarker = coerceBooleanProperty(value);
      }
      _hideRequiredMarker = false;
      /**
       * Theme color of the form field. This API is supported in M2 themes only, it
       * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/form-field/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color = "primary";
      /** Whether the label should always float or float as the user types. */
      get floatLabel() {
        return this._floatLabel || this._defaults?.floatLabel || DEFAULT_FLOAT_LABEL;
      }
      set floatLabel(value) {
        if (value !== this._floatLabel) {
          this._floatLabel = value;
          this._changeDetectorRef.markForCheck();
        }
      }
      _floatLabel;
      /** The form field appearance style. */
      get appearance() {
        return this._appearanceSignal();
      }
      set appearance(value) {
        const newAppearance = value || this._defaults?.appearance || DEFAULT_APPEARANCE;
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (newAppearance !== "fill" && newAppearance !== "outline") {
            throw new Error(`MatFormField: Invalid appearance "${newAppearance}", valid values are "fill" or "outline".`);
          }
        }
        this._appearanceSignal.set(newAppearance);
      }
      _appearanceSignal = signal(DEFAULT_APPEARANCE);
      /**
       * Whether the form field should reserve space for one line of hint/error text (default)
       * or to have the spacing grow from 0px as needed based on the size of the hint/error content.
       * Note that when using dynamic sizing, layout shifts will occur when hint/error text changes.
       */
      get subscriptSizing() {
        return this._subscriptSizing || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
      }
      set subscriptSizing(value) {
        this._subscriptSizing = value || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
      }
      _subscriptSizing = null;
      /** Text for the form field hint. */
      get hintLabel() {
        return this._hintLabel;
      }
      set hintLabel(value) {
        this._hintLabel = value;
        this._processHints();
      }
      _hintLabel = "";
      _hasIconPrefix = false;
      _hasTextPrefix = false;
      _hasIconSuffix = false;
      _hasTextSuffix = false;
      // Unique id for the internal form field label.
      _labelId = this._idGenerator.getId("mat-mdc-form-field-label-");
      // Unique id for the hint label.
      _hintLabelId = this._idGenerator.getId("mat-mdc-hint-");
      // Ids obtained from the error and hint fields
      _describedByIds;
      /** Gets the current form field control */
      get _control() {
        return this._explicitFormFieldControl || this._formFieldControl;
      }
      set _control(value) {
        this._explicitFormFieldControl = value;
      }
      _destroyed = new Subject();
      _isFocused = null;
      _explicitFormFieldControl;
      _previousControl = null;
      _previousControlValidatorFn = null;
      _stateChanges;
      _valueChanges;
      _describedByChanges;
      _outlineLabelOffsetResizeObserver = null;
      _animationsDisabled = _animationsDisabled();
      constructor() {
        const defaults = this._defaults;
        if (defaults) {
          if (defaults.appearance) {
            this.appearance = defaults.appearance;
          }
          this._hideRequiredMarker = Boolean(defaults?.hideRequiredMarker);
          if (defaults.color) {
            this.color = defaults.color;
          }
        }
        this._syncOutlineLabelOffset();
      }
      ngAfterViewInit() {
        this._updateFocusState();
        if (!this._animationsDisabled) {
          this._ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled");
            }, 300);
          });
        }
        this._changeDetectorRef.detectChanges();
      }
      ngAfterContentInit() {
        this._assertFormFieldControl();
        this._initializeSubscript();
        this._initializePrefixAndSuffix();
      }
      ngAfterContentChecked() {
        this._assertFormFieldControl();
        if (this._control !== this._previousControl) {
          this._initializeControl(this._previousControl);
          if (this._control.ngControl && this._control.ngControl.control) {
            this._previousControlValidatorFn = this._control.ngControl.control.validator;
          }
          this._previousControl = this._control;
        }
        if (this._control.ngControl && this._control.ngControl.control) {
          const validatorFn = this._control.ngControl.control.validator;
          if (validatorFn !== this._previousControlValidatorFn) {
            this._changeDetectorRef.markForCheck();
          }
        }
      }
      ngOnDestroy() {
        this._outlineLabelOffsetResizeObserver?.disconnect();
        this._stateChanges?.unsubscribe();
        this._valueChanges?.unsubscribe();
        this._describedByChanges?.unsubscribe();
        this._destroyed.next();
        this._destroyed.complete();
      }
      /**
       * Gets the id of the label element. If no label is present, returns `null`.
       */
      getLabelId = computed(() => this._hasFloatingLabel() ? this._labelId : null);
      /**
       * Gets an ElementRef for the element that a overlay attached to the form field
       * should be positioned relative to.
       */
      getConnectedOverlayOrigin() {
        return this._textField || this._elementRef;
      }
      /** Animates the placeholder up and locks it in position. */
      _animateAndLockLabel() {
        if (this._hasFloatingLabel()) {
          this.floatLabel = "always";
        }
      }
      /** Initializes the registered form field control. */
      _initializeControl(previousControl) {
        const control = this._control;
        const classPrefix = "mat-mdc-form-field-type-";
        if (previousControl) {
          this._elementRef.nativeElement.classList.remove(classPrefix + previousControl.controlType);
        }
        if (control.controlType) {
          this._elementRef.nativeElement.classList.add(classPrefix + control.controlType);
        }
        this._stateChanges?.unsubscribe();
        this._stateChanges = control.stateChanges.subscribe(() => {
          this._updateFocusState();
          this._changeDetectorRef.markForCheck();
        });
        this._describedByChanges?.unsubscribe();
        this._describedByChanges = control.stateChanges.pipe(startWith([void 0, void 0]), map(() => [control.errorState, control.userAriaDescribedBy]), pairwise(), filter(([[prevErrorState, prevDescribedBy], [currentErrorState, currentDescribedBy]]) => {
          return prevErrorState !== currentErrorState || prevDescribedBy !== currentDescribedBy;
        })).subscribe(() => this._syncDescribedByIds());
        this._valueChanges?.unsubscribe();
        if (control.ngControl && control.ngControl.valueChanges) {
          this._valueChanges = control.ngControl.valueChanges.pipe(takeUntil(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
        }
      }
      _checkPrefixAndSuffixTypes() {
        this._hasIconPrefix = !!this._prefixChildren.find((p) => !p._isText);
        this._hasTextPrefix = !!this._prefixChildren.find((p) => p._isText);
        this._hasIconSuffix = !!this._suffixChildren.find((s) => !s._isText);
        this._hasTextSuffix = !!this._suffixChildren.find((s) => s._isText);
      }
      /** Initializes the prefix and suffix containers. */
      _initializePrefixAndSuffix() {
        this._checkPrefixAndSuffixTypes();
        merge(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
          this._checkPrefixAndSuffixTypes();
          this._changeDetectorRef.markForCheck();
        });
      }
      /**
       * Initializes the subscript by validating hints and synchronizing "aria-describedby" ids
       * with the custom form field control. Also subscribes to hint and error changes in order
       * to be able to validate and synchronize ids on change.
       */
      _initializeSubscript() {
        this._hintChildren.changes.subscribe(() => {
          this._processHints();
          this._changeDetectorRef.markForCheck();
        });
        this._errorChildren.changes.subscribe(() => {
          this._syncDescribedByIds();
          this._changeDetectorRef.markForCheck();
        });
        this._validateHints();
        this._syncDescribedByIds();
      }
      /** Throws an error if the form field's control is missing. */
      _assertFormFieldControl() {
        if (!this._control && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatFormFieldMissingControlError();
        }
      }
      _updateFocusState() {
        const controlFocused = this._control.focused;
        if (controlFocused && !this._isFocused) {
          this._isFocused = true;
          this._lineRipple?.activate();
        } else if (!controlFocused && (this._isFocused || this._isFocused === null)) {
          this._isFocused = false;
          this._lineRipple?.deactivate();
        }
        this._elementRef.nativeElement.classList.toggle("mat-focused", controlFocused);
        this._textField?.nativeElement.classList.toggle("mdc-text-field--focused", controlFocused);
      }
      /**
       * The floating label in the docked state needs to account for prefixes. The horizontal offset
       * is calculated whenever the appearance changes to `outline`, the prefixes change, or when the
       * form field is added to the DOM. This method sets up all subscriptions which are needed to
       * trigger the label offset update.
       */
      _syncOutlineLabelOffset() {
        afterRenderEffect({
          earlyRead: () => {
            if (this._appearanceSignal() !== "outline") {
              this._outlineLabelOffsetResizeObserver?.disconnect();
              return null;
            }
            if (globalThis.ResizeObserver) {
              this._outlineLabelOffsetResizeObserver ||= new globalThis.ResizeObserver(() => {
                this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset());
              });
              for (const el of this._prefixSuffixContainers()) {
                this._outlineLabelOffsetResizeObserver.observe(el, { box: "border-box" });
              }
            }
            return this._getOutlinedLabelOffset();
          },
          write: (labelStyles) => this._writeOutlinedLabelStyles(labelStyles())
        });
      }
      /** Whether the floating label should always float or not. */
      _shouldAlwaysFloat() {
        return this.floatLabel === "always";
      }
      _hasOutline() {
        return this.appearance === "outline";
      }
      /**
       * Whether the label should display in the infix. Labels in the outline appearance are
       * displayed as part of the notched-outline and are horizontally offset to account for
       * form field prefix content. This won't work in server side rendering since we cannot
       * measure the width of the prefix container. To make the docked label appear as if the
       * right offset has been calculated, we forcibly render the label inside the infix. Since
       * the label is part of the infix, the label cannot overflow the prefix content.
       */
      _forceDisplayInfixLabel() {
        return !this._platform.isBrowser && this._prefixChildren.length && !this._shouldLabelFloat();
      }
      _hasFloatingLabel = computed(() => !!this._labelChild());
      _shouldLabelFloat() {
        if (!this._hasFloatingLabel()) {
          return false;
        }
        return this._control.shouldLabelFloat || this._shouldAlwaysFloat();
      }
      /**
       * Determines whether a class from the AbstractControlDirective
       * should be forwarded to the host element.
       */
      _shouldForward(prop) {
        const control = this._control ? this._control.ngControl : null;
        return control && control[prop];
      }
      /** Gets the type of subscript message to render (error or hint). */
      _getSubscriptMessageType() {
        return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? "error" : "hint";
      }
      /** Handle label resize events. */
      _handleLabelResized() {
        this._refreshOutlineNotchWidth();
      }
      /** Refreshes the width of the outline-notch, if present. */
      _refreshOutlineNotchWidth() {
        if (!this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()) {
          this._notchedOutline?._setNotchWidth(0);
        } else {
          this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());
        }
      }
      /** Does any extra processing that is required when handling the hints. */
      _processHints() {
        this._validateHints();
        this._syncDescribedByIds();
      }
      /**
       * Ensure that there is a maximum of one of each "mat-hint" alignment specified. The hint
       * label specified set through the input is being considered as "start" aligned.
       *
       * This method is a noop if Angular runs in production mode.
       */
      _validateHints() {
        if (this._hintChildren && (typeof ngDevMode === "undefined" || ngDevMode)) {
          let startHint;
          let endHint;
          this._hintChildren.forEach((hint) => {
            if (hint.align === "start") {
              if (startHint || this.hintLabel) {
                throw getMatFormFieldDuplicatedHintError("start");
              }
              startHint = hint;
            } else if (hint.align === "end") {
              if (endHint) {
                throw getMatFormFieldDuplicatedHintError("end");
              }
              endHint = hint;
            }
          });
        }
      }
      /**
       * Sets the list of element IDs that describe the child control. This allows the control to update
       * its `aria-describedby` attribute accordingly.
       */
      _syncDescribedByIds() {
        if (this._control) {
          let ids = [];
          if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === "string") {
            ids.push(...this._control.userAriaDescribedBy.split(" "));
          }
          if (this._getSubscriptMessageType() === "hint") {
            const startHint = this._hintChildren ? this._hintChildren.find((hint) => hint.align === "start") : null;
            const endHint = this._hintChildren ? this._hintChildren.find((hint) => hint.align === "end") : null;
            if (startHint) {
              ids.push(startHint.id);
            } else if (this._hintLabel) {
              ids.push(this._hintLabelId);
            }
            if (endHint) {
              ids.push(endHint.id);
            }
          } else if (this._errorChildren) {
            ids.push(...this._errorChildren.map((error) => error.id));
          }
          const existingDescribedBy = this._control.describedByIds;
          let toAssign;
          if (existingDescribedBy) {
            const exclude = this._describedByIds || ids;
            toAssign = ids.concat(existingDescribedBy.filter((id) => id && !exclude.includes(id)));
          } else {
            toAssign = ids;
          }
          this._control.setDescribedByIds(toAssign);
          this._describedByIds = ids;
        }
      }
      /**
       * Calculates the horizontal offset of the label in the outline appearance. In the outline
       * appearance, the notched-outline and label are not relative to the infix container because
       * the outline intends to surround prefixes, suffixes and the infix. This means that the
       * floating label by default overlaps prefixes in the docked state. To avoid this, we need to
       * horizontally offset the label by the width of the prefix container. The MDC text-field does
       * not need to do this because they use a fixed width for prefixes. Hence, they can simply
       * incorporate the horizontal offset into their default text-field styles.
       */
      _getOutlinedLabelOffset() {
        const dir = this._dir.valueSignal();
        if (!this._hasOutline() || !this._floatingLabel) {
          return null;
        }
        if (!this._iconPrefixContainer && !this._textPrefixContainer) {
          return ["", null];
        }
        if (!this._isAttachedToDom()) {
          return null;
        }
        const iconPrefixContainer = this._iconPrefixContainer?.nativeElement;
        const textPrefixContainer = this._textPrefixContainer?.nativeElement;
        const iconSuffixContainer = this._iconSuffixContainer?.nativeElement;
        const textSuffixContainer = this._textSuffixContainer?.nativeElement;
        const iconPrefixContainerWidth = iconPrefixContainer?.getBoundingClientRect().width ?? 0;
        const textPrefixContainerWidth = textPrefixContainer?.getBoundingClientRect().width ?? 0;
        const iconSuffixContainerWidth = iconSuffixContainer?.getBoundingClientRect().width ?? 0;
        const textSuffixContainerWidth = textSuffixContainer?.getBoundingClientRect().width ?? 0;
        const negate = dir === "rtl" ? "-1" : "1";
        const prefixWidth = `${iconPrefixContainerWidth + textPrefixContainerWidth}px`;
        const labelOffset = `var(--mat-mdc-form-field-label-offset-x, 0px)`;
        const labelHorizontalOffset = `calc(${negate} * (${prefixWidth} + ${labelOffset}))`;
        const floatingLabelTransform = `var(--mat-mdc-form-field-label-transform, ${FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM} translateX(${labelHorizontalOffset}))`;
        const notchedOutlineWidth = iconPrefixContainerWidth + textPrefixContainerWidth + iconSuffixContainerWidth + textSuffixContainerWidth;
        return [floatingLabelTransform, notchedOutlineWidth];
      }
      /** Writes the styles produced by `_getOutlineLabelOffset` synchronously to the DOM. */
      _writeOutlinedLabelStyles(styles) {
        if (styles !== null) {
          const [floatingLabelTransform, notchedOutlineWidth] = styles;
          if (this._floatingLabel) {
            this._floatingLabel.element.style.transform = floatingLabelTransform;
          }
          if (notchedOutlineWidth !== null) {
            this._notchedOutline?._setMaxWidth(notchedOutlineWidth);
          }
        }
      }
      /** Checks whether the form field is attached to the DOM. */
      _isAttachedToDom() {
        const element = this._elementRef.nativeElement;
        if (element.getRootNode) {
          const rootNode = element.getRootNode();
          return rootNode && rootNode !== element;
        }
        return document.documentElement.contains(element);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatFormField, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatFormField, isStandalone: true, selector: "mat-form-field", inputs: { hideRequiredMarker: "hideRequiredMarker", color: "color", floatLabel: "floatLabel", appearance: "appearance", subscriptSizing: "subscriptSizing", hintLabel: "hintLabel" }, host: { properties: { "class.mat-mdc-form-field-label-always-float": "_shouldAlwaysFloat()", "class.mat-mdc-form-field-has-icon-prefix": "_hasIconPrefix", "class.mat-mdc-form-field-has-icon-suffix": "_hasIconSuffix", "class.mat-form-field-invalid": "_control.errorState", "class.mat-form-field-disabled": "_control.disabled", "class.mat-form-field-autofilled": "_control.autofilled", "class.mat-form-field-appearance-fill": 'appearance == "fill"', "class.mat-form-field-appearance-outline": 'appearance == "outline"', "class.mat-form-field-hide-placeholder": "_hasFloatingLabel() && !_shouldLabelFloat()", "class.mat-primary": 'color !== "accent" && color !== "warn"', "class.mat-accent": 'color === "accent"', "class.mat-warn": 'color === "warn"', "class.ng-untouched": '_shouldForward("untouched")', "class.ng-touched": '_shouldForward("touched")', "class.ng-pristine": '_shouldForward("pristine")', "class.ng-dirty": '_shouldForward("dirty")', "class.ng-valid": '_shouldForward("valid")', "class.ng-invalid": '_shouldForward("invalid")', "class.ng-pending": '_shouldForward("pending")' }, classAttribute: "mat-mdc-form-field" }, providers: [
        { provide: MAT_FORM_FIELD, useExisting: _MatFormField },
        { provide: FLOATING_LABEL_PARENT, useExisting: _MatFormField }
      ], queries: [{ propertyName: "_labelChild", first: true, predicate: MatLabel, descendants: true, isSignal: true }, { propertyName: "_formFieldControl", first: true, predicate: MatFormFieldControl, descendants: true }, { propertyName: "_prefixChildren", predicate: MAT_PREFIX, descendants: true }, { propertyName: "_suffixChildren", predicate: MAT_SUFFIX, descendants: true }, { propertyName: "_errorChildren", predicate: MAT_ERROR, descendants: true }, { propertyName: "_hintChildren", predicate: MatHint, descendants: true }], viewQueries: [{ propertyName: "_iconPrefixContainerSignal", first: true, predicate: ["iconPrefixContainer"], descendants: true, isSignal: true }, { propertyName: "_textPrefixContainerSignal", first: true, predicate: ["textPrefixContainer"], descendants: true, isSignal: true }, { propertyName: "_iconSuffixContainerSignal", first: true, predicate: ["iconSuffixContainer"], descendants: true, isSignal: true }, { propertyName: "_textSuffixContainerSignal", first: true, predicate: ["textSuffixContainer"], descendants: true, isSignal: true }, { propertyName: "_textField", first: true, predicate: ["textField"], descendants: true }, { propertyName: "_iconPrefixContainer", first: true, predicate: ["iconPrefixContainer"], descendants: true }, { propertyName: "_textPrefixContainer", first: true, predicate: ["textPrefixContainer"], descendants: true }, { propertyName: "_iconSuffixContainer", first: true, predicate: ["iconSuffixContainer"], descendants: true }, { propertyName: "_textSuffixContainer", first: true, predicate: ["textSuffixContainer"], descendants: true }, { propertyName: "_floatingLabel", first: true, predicate: MatFormFieldFloatingLabel, descendants: true }, { propertyName: "_notchedOutline", first: true, predicate: MatFormFieldNotchedOutline, descendants: true }, { propertyName: "_lineRipple", first: true, predicate: MatFormFieldLineRipple, descendants: true }], exportAs: ["matFormField"], ngImport: core_exports, template: '<ng-template #labelTemplate>\n  <!--\n    MDC recommends that the text-field is a `<label>` element. This rather complicates the\n    setup because it would require every form-field control to explicitly set `aria-labelledby`.\n    This is because the `<label>` itself contains more than the actual label (e.g. prefix, suffix\n    or other projected content), and screen readers could potentially read out undesired content.\n    Excluding elements from being printed out requires them to be marked with `aria-hidden`, or\n    the form control is set to a scoped element for the label (using `aria-labelledby`). Both of\n    these options seem to complicate the setup because we know exactly what content is rendered\n    as part of the label, and we don\'t want to spend resources on walking through projected content\n    to set `aria-hidden`. Nor do we want to set `aria-labelledby` on every form control if we could\n    simply link the label to the control using the label `for` attribute.\n  -->\n  @if (_hasFloatingLabel()) {\n    <label\n      matFormFieldFloatingLabel\n      [floating]="_shouldLabelFloat()"\n      [monitorResize]="_hasOutline()"\n      [id]="_labelId"\n      [attr.for]="_control.disableAutomaticLabeling ? null : _control.id"\n    >\n      <ng-content select="mat-label"></ng-content>\n      <!--\n        We set the required marker as a separate element, in order to make it easier to target if\n        apps want to override it and to be able to set `aria-hidden` so that screen readers don\'t\n        pick it up.\n       -->\n      @if (!hideRequiredMarker && _control.required) {\n        <span\n          aria-hidden="true"\n          class="mat-mdc-form-field-required-marker mdc-floating-label--required"\n        ></span>\n      }\n    </label>\n  }\n</ng-template>\n\n<div\n  class="mat-mdc-text-field-wrapper mdc-text-field"\n  #textField\n  [class.mdc-text-field--filled]="!_hasOutline()"\n  [class.mdc-text-field--outlined]="_hasOutline()"\n  [class.mdc-text-field--no-label]="!_hasFloatingLabel()"\n  [class.mdc-text-field--disabled]="_control.disabled"\n  [class.mdc-text-field--invalid]="_control.errorState"\n  (click)="_control.onContainerClick($event)"\n>\n  @if (!_hasOutline() && !_control.disabled) {\n    <div class="mat-mdc-form-field-focus-overlay"></div>\n  }\n  <div class="mat-mdc-form-field-flex">\n    @if (_hasOutline()) {\n      <div matFormFieldNotchedOutline [matFormFieldNotchedOutlineOpen]="_shouldLabelFloat()">\n        @if (!_forceDisplayInfixLabel()) {\n          <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n        }\n      </div>\n    }\n\n    @if (_hasIconPrefix) {\n      <div class="mat-mdc-form-field-icon-prefix" #iconPrefixContainer>\n        <ng-content select="[matPrefix], [matIconPrefix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasTextPrefix) {\n      <div class="mat-mdc-form-field-text-prefix" #textPrefixContainer>\n        <ng-content select="[matTextPrefix]"></ng-content>\n      </div>\n    }\n\n    <div class="mat-mdc-form-field-infix">\n      @if (!_hasOutline() || _forceDisplayInfixLabel()) {\n        <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n      }\n\n      <ng-content></ng-content>\n    </div>\n\n    @if (_hasTextSuffix) {\n      <div class="mat-mdc-form-field-text-suffix" #textSuffixContainer>\n        <ng-content select="[matTextSuffix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasIconSuffix) {\n      <div class="mat-mdc-form-field-icon-suffix" #iconSuffixContainer>\n        <ng-content select="[matSuffix], [matIconSuffix]"></ng-content>\n      </div>\n    }\n  </div>\n\n  @if (!_hasOutline()) {\n    <div matFormFieldLineRipple></div>\n  }\n</div>\n\n<div\n    class="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align"\n    [class.mat-mdc-form-field-subscript-dynamic-size]="subscriptSizing === \'dynamic\'"\n>\n  @let subscriptMessageType = _getSubscriptMessageType();\n\n  <!-- \n    Use a single permanent wrapper for both hints and errors so aria-live works correctly,\n    as having it appear post render will not consistently work. We also do not want to add\n    additional divs as it causes styling regressions.\n    -->\n  <div aria-atomic="true" aria-live="polite" \n      [class.mat-mdc-form-field-error-wrapper]="subscriptMessageType === \'error\'"\n      [class.mat-mdc-form-field-hint-wrapper]="subscriptMessageType === \'hint\'"\n    >\n    @switch (subscriptMessageType) {\n      @case (\'error\') {\n        <ng-content select="mat-error, [matError]"></ng-content>\n      }\n\n      @case (\'hint\') {\n        @if (hintLabel) {\n          <mat-hint [id]="_hintLabelId">{{hintLabel}}</mat-hint>\n        }\n        <ng-content select="mat-hint:not([align=\'end\'])"></ng-content>\n        <div class="mat-mdc-form-field-hint-spacer"></div>\n        <ng-content select="mat-hint[align=\'end\']"></ng-content>\n      }\n    }\n  </div>\n</div>\n', styles: ['.mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator,.mdc-text-field__input::-webkit-search-cancel-button{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder{opacity:0}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-filled-caret-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent))}.mdc-text-field--outlined{height:56px;overflow:visible;padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}@media(forced-colors: active){.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));border-width:var(--mat-form-field-outlined-outline-width, 1px)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mat-form-field-outlined-focus-outline-width, 2px)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:min(var(--mat-form-field-notch-max-width, 100%),calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{max-width:min(100%,calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mat-form-field-filled-active-indicator-height, 1px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mat-form-field-filled-focus-active-indicator-height, 2px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height, 56px);padding-top:var(--mat-form-field-filled-with-label-container-padding-top, 24px);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom, 8px)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding, 16px);padding-bottom:var(--mat-form-field-container-vertical-padding, 16px)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height, 56px)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}@keyframes _mat-form-field-subscript-animation{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px;opacity:1;transform:translateY(0);animation:_mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-sys-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity, 0)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10))}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}@media(forced-colors: active){.mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}}@media(forced-colors: active){.mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field-infix:has(textarea[cols]){width:auto}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper{animation-duration:300ms}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}\n'], dependencies: [{ kind: "directive", type: MatFormFieldFloatingLabel, selector: "label[matFormFieldFloatingLabel]", inputs: ["floating", "monitorResize"] }, { kind: "component", type: MatFormFieldNotchedOutline, selector: "div[matFormFieldNotchedOutline]", inputs: ["matFormFieldNotchedOutlineOpen"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: MatFormFieldLineRipple, selector: "div[matFormFieldLineRipple]" }, { kind: "directive", type: MatHint, selector: "mat-hint", inputs: ["align", "id"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatFormField, decorators: [{
      type: Component,
      args: [{ selector: "mat-form-field", exportAs: "matFormField", host: {
        "class": "mat-mdc-form-field",
        "[class.mat-mdc-form-field-label-always-float]": "_shouldAlwaysFloat()",
        "[class.mat-mdc-form-field-has-icon-prefix]": "_hasIconPrefix",
        "[class.mat-mdc-form-field-has-icon-suffix]": "_hasIconSuffix",
        // Note that these classes reuse the same names as the non-MDC version, because they can be
        // considered a public API since custom form controls may use them to style themselves.
        // See https://github.com/angular/components/pull/20502#discussion_r486124901.
        "[class.mat-form-field-invalid]": "_control.errorState",
        "[class.mat-form-field-disabled]": "_control.disabled",
        "[class.mat-form-field-autofilled]": "_control.autofilled",
        "[class.mat-form-field-appearance-fill]": 'appearance == "fill"',
        "[class.mat-form-field-appearance-outline]": 'appearance == "outline"',
        "[class.mat-form-field-hide-placeholder]": "_hasFloatingLabel() && !_shouldLabelFloat()",
        "[class.mat-primary]": 'color !== "accent" && color !== "warn"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.ng-untouched]": '_shouldForward("untouched")',
        "[class.ng-touched]": '_shouldForward("touched")',
        "[class.ng-pristine]": '_shouldForward("pristine")',
        "[class.ng-dirty]": '_shouldForward("dirty")',
        "[class.ng-valid]": '_shouldForward("valid")',
        "[class.ng-invalid]": '_shouldForward("invalid")',
        "[class.ng-pending]": '_shouldForward("pending")'
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
        { provide: MAT_FORM_FIELD, useExisting: MatFormField },
        { provide: FLOATING_LABEL_PARENT, useExisting: MatFormField }
      ], imports: [
        MatFormFieldFloatingLabel,
        MatFormFieldNotchedOutline,
        NgTemplateOutlet,
        MatFormFieldLineRipple,
        MatHint
      ], template: '<ng-template #labelTemplate>\n  <!--\n    MDC recommends that the text-field is a `<label>` element. This rather complicates the\n    setup because it would require every form-field control to explicitly set `aria-labelledby`.\n    This is because the `<label>` itself contains more than the actual label (e.g. prefix, suffix\n    or other projected content), and screen readers could potentially read out undesired content.\n    Excluding elements from being printed out requires them to be marked with `aria-hidden`, or\n    the form control is set to a scoped element for the label (using `aria-labelledby`). Both of\n    these options seem to complicate the setup because we know exactly what content is rendered\n    as part of the label, and we don\'t want to spend resources on walking through projected content\n    to set `aria-hidden`. Nor do we want to set `aria-labelledby` on every form control if we could\n    simply link the label to the control using the label `for` attribute.\n  -->\n  @if (_hasFloatingLabel()) {\n    <label\n      matFormFieldFloatingLabel\n      [floating]="_shouldLabelFloat()"\n      [monitorResize]="_hasOutline()"\n      [id]="_labelId"\n      [attr.for]="_control.disableAutomaticLabeling ? null : _control.id"\n    >\n      <ng-content select="mat-label"></ng-content>\n      <!--\n        We set the required marker as a separate element, in order to make it easier to target if\n        apps want to override it and to be able to set `aria-hidden` so that screen readers don\'t\n        pick it up.\n       -->\n      @if (!hideRequiredMarker && _control.required) {\n        <span\n          aria-hidden="true"\n          class="mat-mdc-form-field-required-marker mdc-floating-label--required"\n        ></span>\n      }\n    </label>\n  }\n</ng-template>\n\n<div\n  class="mat-mdc-text-field-wrapper mdc-text-field"\n  #textField\n  [class.mdc-text-field--filled]="!_hasOutline()"\n  [class.mdc-text-field--outlined]="_hasOutline()"\n  [class.mdc-text-field--no-label]="!_hasFloatingLabel()"\n  [class.mdc-text-field--disabled]="_control.disabled"\n  [class.mdc-text-field--invalid]="_control.errorState"\n  (click)="_control.onContainerClick($event)"\n>\n  @if (!_hasOutline() && !_control.disabled) {\n    <div class="mat-mdc-form-field-focus-overlay"></div>\n  }\n  <div class="mat-mdc-form-field-flex">\n    @if (_hasOutline()) {\n      <div matFormFieldNotchedOutline [matFormFieldNotchedOutlineOpen]="_shouldLabelFloat()">\n        @if (!_forceDisplayInfixLabel()) {\n          <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n        }\n      </div>\n    }\n\n    @if (_hasIconPrefix) {\n      <div class="mat-mdc-form-field-icon-prefix" #iconPrefixContainer>\n        <ng-content select="[matPrefix], [matIconPrefix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasTextPrefix) {\n      <div class="mat-mdc-form-field-text-prefix" #textPrefixContainer>\n        <ng-content select="[matTextPrefix]"></ng-content>\n      </div>\n    }\n\n    <div class="mat-mdc-form-field-infix">\n      @if (!_hasOutline() || _forceDisplayInfixLabel()) {\n        <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n      }\n\n      <ng-content></ng-content>\n    </div>\n\n    @if (_hasTextSuffix) {\n      <div class="mat-mdc-form-field-text-suffix" #textSuffixContainer>\n        <ng-content select="[matTextSuffix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasIconSuffix) {\n      <div class="mat-mdc-form-field-icon-suffix" #iconSuffixContainer>\n        <ng-content select="[matSuffix], [matIconSuffix]"></ng-content>\n      </div>\n    }\n  </div>\n\n  @if (!_hasOutline()) {\n    <div matFormFieldLineRipple></div>\n  }\n</div>\n\n<div\n    class="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align"\n    [class.mat-mdc-form-field-subscript-dynamic-size]="subscriptSizing === \'dynamic\'"\n>\n  @let subscriptMessageType = _getSubscriptMessageType();\n\n  <!-- \n    Use a single permanent wrapper for both hints and errors so aria-live works correctly,\n    as having it appear post render will not consistently work. We also do not want to add\n    additional divs as it causes styling regressions.\n    -->\n  <div aria-atomic="true" aria-live="polite" \n      [class.mat-mdc-form-field-error-wrapper]="subscriptMessageType === \'error\'"\n      [class.mat-mdc-form-field-hint-wrapper]="subscriptMessageType === \'hint\'"\n    >\n    @switch (subscriptMessageType) {\n      @case (\'error\') {\n        <ng-content select="mat-error, [matError]"></ng-content>\n      }\n\n      @case (\'hint\') {\n        @if (hintLabel) {\n          <mat-hint [id]="_hintLabelId">{{hintLabel}}</mat-hint>\n        }\n        <ng-content select="mat-hint:not([align=\'end\'])"></ng-content>\n        <div class="mat-mdc-form-field-hint-spacer"></div>\n        <ng-content select="mat-hint[align=\'end\']"></ng-content>\n      }\n    }\n  </div>\n</div>\n', styles: ['.mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator,.mdc-text-field__input::-webkit-search-cancel-button{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder{opacity:0}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-filled-caret-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent))}.mdc-text-field--outlined{height:56px;overflow:visible;padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}@media(forced-colors: active){.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));border-width:var(--mat-form-field-outlined-outline-width, 1px)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mat-form-field-outlined-focus-outline-width, 2px)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:min(var(--mat-form-field-notch-max-width, 100%),calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{max-width:min(100%,calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mat-form-field-filled-active-indicator-height, 1px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mat-form-field-filled-focus-active-indicator-height, 2px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height, 56px);padding-top:var(--mat-form-field-filled-with-label-container-padding-top, 24px);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom, 8px)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding, 16px);padding-bottom:var(--mat-form-field-container-vertical-padding, 16px)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height, 56px)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}@keyframes _mat-form-field-subscript-animation{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px;opacity:1;transform:translateY(0);animation:_mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-sys-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity, 0)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10))}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}@media(forced-colors: active){.mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}}@media(forced-colors: active){.mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field-infix:has(textarea[cols]){width:auto}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper{animation-duration:300ms}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}\n'] }]
    }], ctorParameters: () => [], propDecorators: { _textField: [{
      type: ViewChild,
      args: ["textField"]
    }], _iconPrefixContainer: [{
      type: ViewChild,
      args: ["iconPrefixContainer"]
    }], _textPrefixContainer: [{
      type: ViewChild,
      args: ["textPrefixContainer"]
    }], _iconSuffixContainer: [{
      type: ViewChild,
      args: ["iconSuffixContainer"]
    }], _textSuffixContainer: [{
      type: ViewChild,
      args: ["textSuffixContainer"]
    }], _floatingLabel: [{
      type: ViewChild,
      args: [MatFormFieldFloatingLabel]
    }], _notchedOutline: [{
      type: ViewChild,
      args: [MatFormFieldNotchedOutline]
    }], _lineRipple: [{
      type: ViewChild,
      args: [MatFormFieldLineRipple]
    }], _formFieldControl: [{
      type: ContentChild,
      args: [MatFormFieldControl]
    }], _prefixChildren: [{
      type: ContentChildren,
      args: [MAT_PREFIX, { descendants: true }]
    }], _suffixChildren: [{
      type: ContentChildren,
      args: [MAT_SUFFIX, { descendants: true }]
    }], _errorChildren: [{
      type: ContentChildren,
      args: [MAT_ERROR, { descendants: true }]
    }], _hintChildren: [{
      type: ContentChildren,
      args: [MatHint, { descendants: true }]
    }], hideRequiredMarker: [{
      type: Input
    }], color: [{
      type: Input
    }], floatLabel: [{
      type: Input
    }], appearance: [{
      type: Input
    }], subscriptSizing: [{
      type: Input
    }], hintLabel: [{
      type: Input
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/error-options-DCNQlTOA.mjs
var ShowOnDirtyErrorStateMatcher, ErrorStateMatcher;
var init_error_options_DCNQlTOA = __esm({
  "node_modules/@angular/material/fesm2022/error-options-DCNQlTOA.mjs"() {
    "use strict";
    init_core();
    init_core();
    ShowOnDirtyErrorStateMatcher = class _ShowOnDirtyErrorStateMatcher {
      isErrorState(control, form) {
        return !!(control && control.invalid && (control.dirty || form && form.submitted));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ShowOnDirtyErrorStateMatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ShowOnDirtyErrorStateMatcher });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ShowOnDirtyErrorStateMatcher, decorators: [{
      type: Injectable
    }] });
    ErrorStateMatcher = class _ErrorStateMatcher {
      isErrorState(control, form) {
        return !!(control && control.invalid && (control.touched || form && form.submitted));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ErrorStateMatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ErrorStateMatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ErrorStateMatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/error-state-Dtb1IHM-.mjs
var _ErrorStateTracker;
var init_error_state_Dtb1IHM = __esm({
  "node_modules/@angular/material/fesm2022/error-state-Dtb1IHM-.mjs"() {
    "use strict";
    _ErrorStateTracker = class {
      _defaultMatcher;
      ngControl;
      _parentFormGroup;
      _parentForm;
      _stateChanges;
      /** Whether the tracker is currently in an error state. */
      errorState = false;
      /** User-defined matcher for the error state. */
      matcher;
      constructor(_defaultMatcher, ngControl, _parentFormGroup, _parentForm, _stateChanges) {
        this._defaultMatcher = _defaultMatcher;
        this.ngControl = ngControl;
        this._parentFormGroup = _parentFormGroup;
        this._parentForm = _parentForm;
        this._stateChanges = _stateChanges;
      }
      /** Updates the error state based on the provided error state matcher. */
      updateErrorState() {
        const oldState = this.errorState;
        const parent = this._parentFormGroup || this._parentForm;
        const matcher = this.matcher || this._defaultMatcher;
        const control = this.ngControl ? this.ngControl.control : null;
        const newState = matcher?.isErrorState(control, parent) ?? false;
        if (newState !== oldState) {
          this.errorState = newState;
          this._stateChanges.next();
        }
      }
    };
  }
});

// node_modules/@angular/material/fesm2022/module-Dj5gfeAg.mjs
var MatFormFieldModule;
var init_module_Dj5gfeAg = __esm({
  "node_modules/@angular/material/fesm2022/module-Dj5gfeAg.mjs"() {
    "use strict";
    init_observers();
    init_core();
    init_core();
    init_form_field_D9B5IUZf();
    init_common_module_cKSwHniA();
    MatFormFieldModule = class _MatFormFieldModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatFormFieldModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatFormFieldModule, imports: [
        MatCommonModule,
        ObserversModule,
        MatFormField,
        MatLabel,
        MatError,
        MatHint,
        MatPrefix,
        MatSuffix
      ], exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatFormFieldModule, imports: [
        MatCommonModule,
        ObserversModule,
        MatFormField,
        MatCommonModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatFormFieldModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          MatCommonModule,
          ObserversModule,
          MatFormField,
          MatLabel,
          MatError,
          MatHint,
          MatPrefix,
          MatSuffix
        ],
        exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/input.mjs
function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
var MAT_INPUT_INVALID_TYPES, MAT_INPUT_CONFIG, MatInput, MatInputModule;
var init_input = __esm({
  "node_modules/@angular/material/fesm2022/input.mjs"() {
    "use strict";
    init_coercion();
    init_platform();
    init_text_field();
    init_core();
    init_core();
    init_a11y();
    init_forms();
    init_esm();
    init_input_value_accessor_D1GvPuqO();
    init_form_field_D9B5IUZf();
    init_error_options_DCNQlTOA();
    init_error_state_Dtb1IHM();
    init_module_Dj5gfeAg();
    init_common_module_cKSwHniA();
    MAT_INPUT_INVALID_TYPES = [
      "button",
      "checkbox",
      "file",
      "hidden",
      "image",
      "radio",
      "range",
      "reset",
      "submit"
    ];
    MAT_INPUT_CONFIG = new InjectionToken("MAT_INPUT_CONFIG");
    MatInput = class _MatInput {
      _elementRef = inject(ElementRef);
      _platform = inject(Platform);
      ngControl = inject(NgControl, { optional: true, self: true });
      _autofillMonitor = inject(AutofillMonitor);
      _ngZone = inject(NgZone);
      _formField = inject(MAT_FORM_FIELD, { optional: true });
      _renderer = inject(Renderer2);
      _uid = inject(_IdGenerator).getId("mat-input-");
      _previousNativeValue;
      _inputValueAccessor;
      _signalBasedValueAccessor;
      _previousPlaceholder;
      _errorStateTracker;
      _config = inject(MAT_INPUT_CONFIG, { optional: true });
      _cleanupIosKeyup;
      _cleanupWebkitWheel;
      /** Whether the component is being rendered on the server. */
      _isServer;
      /** Whether the component is a native html select. */
      _isNativeSelect;
      /** Whether the component is a textarea. */
      _isTextarea;
      /** Whether the input is inside of a form field. */
      _isInFormField;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      focused = false;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      stateChanges = new Subject();
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      controlType = "mat-input";
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      autofilled = false;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        if (this.focused) {
          this.focused = false;
          this.stateChanges.next();
        }
      }
      _disabled = false;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get id() {
        return this._id;
      }
      set id(value) {
        this._id = value || this._uid;
      }
      _id;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      placeholder;
      /**
       * Name of the input.
       * @docs-private
       */
      name;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get required() {
        return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
      }
      set required(value) {
        this._required = coerceBooleanProperty(value);
      }
      _required;
      /** Input type of the element. */
      get type() {
        return this._type;
      }
      set type(value) {
        this._type = value || "text";
        this._validateType();
        if (!this._isTextarea && getSupportedInputTypes().has(this._type)) {
          this._elementRef.nativeElement.type = this._type;
        }
      }
      _type = "text";
      /** An object used to control when error messages are shown. */
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(value) {
        this._errorStateTracker.matcher = value;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      userAriaDescribedBy;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get value() {
        return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value;
      }
      set value(value) {
        if (value !== this.value) {
          if (this._signalBasedValueAccessor) {
            this._signalBasedValueAccessor.value.set(value);
          } else {
            this._inputValueAccessor.value = value;
          }
          this.stateChanges.next();
        }
      }
      /** Whether the element is readonly. */
      get readonly() {
        return this._readonly;
      }
      set readonly(value) {
        this._readonly = coerceBooleanProperty(value);
      }
      _readonly = false;
      /** Whether the input should remain interactive when it is disabled. */
      disabledInteractive;
      /** Whether the input is in an error state. */
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(value) {
        this._errorStateTracker.errorState = value;
      }
      _neverEmptyInputTypes = [
        "date",
        "datetime",
        "datetime-local",
        "month",
        "time",
        "week"
      ].filter((t) => getSupportedInputTypes().has(t));
      constructor() {
        const parentForm = inject(NgForm, { optional: true });
        const parentFormGroup = inject(FormGroupDirective, { optional: true });
        const defaultErrorStateMatcher = inject(ErrorStateMatcher);
        const accessor = inject(MAT_INPUT_VALUE_ACCESSOR, { optional: true, self: true });
        const element = this._elementRef.nativeElement;
        const nodeName = element.nodeName.toLowerCase();
        if (accessor) {
          if (isSignal(accessor.value)) {
            this._signalBasedValueAccessor = accessor;
          } else {
            this._inputValueAccessor = accessor;
          }
        } else {
          this._inputValueAccessor = element;
        }
        this._previousNativeValue = this.value;
        this.id = this.id;
        if (this._platform.IOS) {
          this._ngZone.runOutsideAngular(() => {
            this._cleanupIosKeyup = this._renderer.listen(element, "keyup", this._iOSKeyupListener);
          });
        }
        this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
        this._isServer = !this._platform.isBrowser;
        this._isNativeSelect = nodeName === "select";
        this._isTextarea = nodeName === "textarea";
        this._isInFormField = !!this._formField;
        this.disabledInteractive = this._config?.disabledInteractive || false;
        if (this._isNativeSelect) {
          this.controlType = element.multiple ? "mat-native-select-multiple" : "mat-native-select";
        }
        if (this._signalBasedValueAccessor) {
          effect(() => {
            this._signalBasedValueAccessor.value();
            this.stateChanges.next();
          });
        }
      }
      ngAfterViewInit() {
        if (this._platform.isBrowser) {
          this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((event) => {
            this.autofilled = event.isAutofilled;
            this.stateChanges.next();
          });
        }
      }
      ngOnChanges() {
        this.stateChanges.next();
      }
      ngOnDestroy() {
        this.stateChanges.complete();
        if (this._platform.isBrowser) {
          this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
        }
        this._cleanupIosKeyup?.();
        this._cleanupWebkitWheel?.();
      }
      ngDoCheck() {
        if (this.ngControl) {
          this.updateErrorState();
          if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
            this.disabled = this.ngControl.disabled;
            this.stateChanges.next();
          }
        }
        this._dirtyCheckNativeValue();
        this._dirtyCheckPlaceholder();
      }
      /** Focuses the input. */
      focus(options) {
        this._elementRef.nativeElement.focus(options);
      }
      /** Refreshes the error state of the input. */
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      /** Callback for the cases where the focused state of the input changes. */
      _focusChanged(isFocused) {
        if (isFocused === this.focused) {
          return;
        }
        if (!this._isNativeSelect && isFocused && this.disabled && this.disabledInteractive) {
          const element = this._elementRef.nativeElement;
          if (element.type === "number") {
            element.type = "text";
            element.setSelectionRange(0, 0);
            element.type = "number";
          } else {
            element.setSelectionRange(0, 0);
          }
        }
        this.focused = isFocused;
        this.stateChanges.next();
      }
      _onInput() {
      }
      /** Does some manual dirty checking on the native input `value` property. */
      _dirtyCheckNativeValue() {
        const newValue = this._elementRef.nativeElement.value;
        if (this._previousNativeValue !== newValue) {
          this._previousNativeValue = newValue;
          this.stateChanges.next();
        }
      }
      /** Does some manual dirty checking on the native input `placeholder` attribute. */
      _dirtyCheckPlaceholder() {
        const placeholder = this._getPlaceholder();
        if (placeholder !== this._previousPlaceholder) {
          const element = this._elementRef.nativeElement;
          this._previousPlaceholder = placeholder;
          placeholder ? element.setAttribute("placeholder", placeholder) : element.removeAttribute("placeholder");
        }
      }
      /** Gets the current placeholder of the form field. */
      _getPlaceholder() {
        return this.placeholder || null;
      }
      /** Make sure the input is a supported type. */
      _validateType() {
        if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatInputUnsupportedTypeError(this._type);
        }
      }
      /** Checks whether the input type is one of the types that are never empty. */
      _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
      }
      /** Checks whether the input is invalid based on the native validation. */
      _isBadInput() {
        let validity = this._elementRef.nativeElement.validity;
        return validity && validity.badInput;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get empty() {
        return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get shouldLabelFloat() {
        if (this._isNativeSelect) {
          const selectElement = this._elementRef.nativeElement;
          const firstOption = selectElement.options[0];
          return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
        } else {
          return this.focused && !this.disabled || !this.empty;
        }
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get describedByIds() {
        const element = this._elementRef.nativeElement;
        const existingDescribedBy = element.getAttribute("aria-describedby");
        return existingDescribedBy?.split(" ") || [];
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      setDescribedByIds(ids) {
        const element = this._elementRef.nativeElement;
        if (ids.length) {
          element.setAttribute("aria-describedby", ids.join(" "));
        } else {
          element.removeAttribute("aria-describedby");
        }
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      onContainerClick() {
        if (!this.focused) {
          this.focus();
        }
      }
      /** Whether the form control is a native select that is displayed inline. */
      _isInlineSelect() {
        const element = this._elementRef.nativeElement;
        return this._isNativeSelect && (element.multiple || element.size > 1);
      }
      _iOSKeyupListener = (event) => {
        const el = event.target;
        if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
          el.setSelectionRange(1, 1);
          el.setSelectionRange(0, 0);
        }
      };
      /** Gets the value to set on the `readonly` attribute. */
      _getReadonlyAttribute() {
        if (this._isNativeSelect) {
          return null;
        }
        if (this.readonly || this.disabled && this.disabledInteractive) {
          return "true";
        }
        return null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatInput, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _MatInput, isStandalone: true, selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]", inputs: { disabled: "disabled", id: "id", placeholder: "placeholder", name: "name", required: "required", type: "type", errorStateMatcher: "errorStateMatcher", userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], value: "value", readonly: "readonly", disabledInteractive: ["disabledInteractive", "disabledInteractive", booleanAttribute] }, host: { listeners: { "focus": "_focusChanged(true)", "blur": "_focusChanged(false)", "input": "_onInput()" }, properties: { "class.mat-input-server": "_isServer", "class.mat-mdc-form-field-textarea-control": "_isInFormField && _isTextarea", "class.mat-mdc-form-field-input-control": "_isInFormField", "class.mat-mdc-input-disabled-interactive": "disabledInteractive", "class.mdc-text-field__input": "_isInFormField", "class.mat-mdc-native-select-inline": "_isInlineSelect()", "id": "id", "disabled": "disabled && !disabledInteractive", "required": "required", "attr.name": "name || null", "attr.readonly": "_getReadonlyAttribute()", "attr.aria-disabled": 'disabled && disabledInteractive ? "true" : null', "attr.aria-invalid": "(empty && required) ? null : errorState", "attr.aria-required": "required", "attr.id": "id" }, classAttribute: "mat-mdc-input-element" }, providers: [{ provide: MatFormFieldControl, useExisting: _MatInput }], exportAs: ["matInput"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatInput, decorators: [{
      type: Directive,
      args: [{
        selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
        exportAs: "matInput",
        host: {
          "class": "mat-mdc-input-element",
          // The BaseMatInput parent class adds `mat-input-element`, `mat-form-field-control` and
          // `mat-form-field-autofill-control` to the CSS class list, but this should not be added for
          // this MDC equivalent input.
          "[class.mat-input-server]": "_isServer",
          "[class.mat-mdc-form-field-textarea-control]": "_isInFormField && _isTextarea",
          "[class.mat-mdc-form-field-input-control]": "_isInFormField",
          "[class.mat-mdc-input-disabled-interactive]": "disabledInteractive",
          "[class.mdc-text-field__input]": "_isInFormField",
          "[class.mat-mdc-native-select-inline]": "_isInlineSelect()",
          // Native input properties that are overwritten by Angular inputs need to be synced with
          // the native input element. Otherwise property bindings for those don't work.
          "[id]": "id",
          "[disabled]": "disabled && !disabledInteractive",
          "[required]": "required",
          "[attr.name]": "name || null",
          "[attr.readonly]": "_getReadonlyAttribute()",
          "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
          // Only mark the input as invalid for assistive technology if it has a value since the
          // state usually overlaps with `aria-required` when the input is empty and can be redundant.
          "[attr.aria-invalid]": "(empty && required) ? null : errorState",
          "[attr.aria-required]": "required",
          // Native input properties that are overwritten by Angular inputs need to be synced with
          // the native input element. Otherwise property bindings for those don't work.
          "[attr.id]": "id",
          "(focus)": "_focusChanged(true)",
          "(blur)": "_focusChanged(false)",
          "(input)": "_onInput()"
        },
        providers: [{ provide: MatFormFieldControl, useExisting: MatInput }]
      }]
    }], ctorParameters: () => [], propDecorators: { disabled: [{
      type: Input
    }], id: [{
      type: Input
    }], placeholder: [{
      type: Input
    }], name: [{
      type: Input
    }], required: [{
      type: Input
    }], type: [{
      type: Input
    }], errorStateMatcher: [{
      type: Input
    }], userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }], value: [{
      type: Input
    }], readonly: [{
      type: Input
    }], disabledInteractive: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    MatInputModule = class _MatInputModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatInputModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatInputModule, imports: [MatCommonModule, MatFormFieldModule, MatInput], exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatInputModule, imports: [MatCommonModule, MatFormFieldModule, MatFormFieldModule, TextFieldModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatInputModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatFormFieldModule, MatInput],
        exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/form-field.mjs
var init_form_field = __esm({
  "node_modules/@angular/material/fesm2022/form-field.mjs"() {
    "use strict";
    init_module_Dj5gfeAg();
  }
});

// node_modules/@angular/material/fesm2022/snack-bar.mjs
function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
  return new MatSnackBarConfig();
}
var MAX_TIMEOUT, MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBarConfig, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction, SimpleSnackBar, ENTER_ANIMATION, EXIT_ANIMATION, MatSnackBarContainer, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar, DIRECTIVES, MatSnackBarModule;
var init_snack_bar = __esm({
  "node_modules/@angular/material/fesm2022/snack-bar.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_button();
    init_a11y();
    init_platform();
    init_portal();
    init_animation_ChQ1vjiF();
    init_layout();
    init_overlay();
    init_operators();
    init_common_module_cKSwHniA();
    MAX_TIMEOUT = Math.pow(2, 31) - 1;
    MatSnackBarRef = class {
      _overlayRef;
      /** The instance of the component making up the content of the snack bar. */
      instance;
      /**
       * The instance of the component making up the content of the snack bar.
       * @docs-private
       */
      containerInstance;
      /** Subject for notifying the user that the snack bar has been dismissed. */
      _afterDismissed = new Subject();
      /** Subject for notifying the user that the snack bar has opened and appeared. */
      _afterOpened = new Subject();
      /** Subject for notifying the user that the snack bar action was called. */
      _onAction = new Subject();
      /**
       * Timeout ID for the duration setTimeout call. Used to clear the timeout if the snackbar is
       * dismissed before the duration passes.
       */
      _durationTimeoutId;
      /** Whether the snack bar was dismissed using the action button. */
      _dismissedByAction = false;
      constructor(containerInstance, _overlayRef) {
        this._overlayRef = _overlayRef;
        this.containerInstance = containerInstance;
        containerInstance._onExit.subscribe(() => this._finishDismiss());
      }
      /** Dismisses the snack bar. */
      dismiss() {
        if (!this._afterDismissed.closed) {
          this.containerInstance.exit();
        }
        clearTimeout(this._durationTimeoutId);
      }
      /** Marks the snackbar action clicked. */
      dismissWithAction() {
        if (!this._onAction.closed) {
          this._dismissedByAction = true;
          this._onAction.next();
          this._onAction.complete();
          this.dismiss();
        }
        clearTimeout(this._durationTimeoutId);
      }
      /**
       * Marks the snackbar action clicked.
       * @deprecated Use `dismissWithAction` instead.
       * @breaking-change 8.0.0
       */
      closeWithAction() {
        this.dismissWithAction();
      }
      /** Dismisses the snack bar after some duration */
      _dismissAfter(duration) {
        this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(duration, MAX_TIMEOUT));
      }
      /** Marks the snackbar as opened */
      _open() {
        if (!this._afterOpened.closed) {
          this._afterOpened.next();
          this._afterOpened.complete();
        }
      }
      /** Cleans up the DOM after closing. */
      _finishDismiss() {
        this._overlayRef.dispose();
        if (!this._onAction.closed) {
          this._onAction.complete();
        }
        this._afterDismissed.next({ dismissedByAction: this._dismissedByAction });
        this._afterDismissed.complete();
        this._dismissedByAction = false;
      }
      /** Gets an observable that is notified when the snack bar is finished closing. */
      afterDismissed() {
        return this._afterDismissed;
      }
      /** Gets an observable that is notified when the snack bar has opened and appeared. */
      afterOpened() {
        return this.containerInstance._onEnter;
      }
      /** Gets an observable that is notified when the snack bar action is called. */
      onAction() {
        return this._onAction;
      }
    };
    MAT_SNACK_BAR_DATA = new InjectionToken("MatSnackBarData");
    MatSnackBarConfig = class {
      /** The politeness level for the MatAriaLiveAnnouncer announcement. */
      politeness = "polite";
      /**
       * Message to be announced by the LiveAnnouncer. When opening a snackbar without a custom
       * component or template, the announcement message will default to the specified message.
       */
      announcementMessage = "";
      /**
       * The view container that serves as the parent for the snackbar for the purposes of dependency
       * injection. Note: this does not affect where the snackbar is inserted in the DOM.
       */
      viewContainerRef;
      /** The length of time in milliseconds to wait before automatically dismissing the snack bar. */
      duration = 0;
      /** Extra CSS classes to be added to the snack bar container. */
      panelClass;
      /** Text layout direction for the snack bar. */
      direction;
      /** Data being injected into the child component. */
      data = null;
      /** The horizontal position to place the snack bar. */
      horizontalPosition = "center";
      /** The vertical position to place the snack bar. */
      verticalPosition = "bottom";
    };
    MatSnackBarLabel = class _MatSnackBarLabel {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBarLabel, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatSnackBarLabel, isStandalone: true, selector: "[matSnackBarLabel]", host: { classAttribute: "mat-mdc-snack-bar-label mdc-snackbar__label" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSnackBarLabel, decorators: [{
      type: Directive,
      args: [{
        selector: `[matSnackBarLabel]`,
        host: {
          "class": "mat-mdc-snack-bar-label mdc-snackbar__label"
        }
      }]
    }] });
    MatSnackBarActions = class _MatSnackBarActions {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBarActions, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatSnackBarActions, isStandalone: true, selector: "[matSnackBarActions]", host: { classAttribute: "mat-mdc-snack-bar-actions mdc-snackbar__actions" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSnackBarActions, decorators: [{
      type: Directive,
      args: [{
        selector: `[matSnackBarActions]`,
        host: {
          "class": "mat-mdc-snack-bar-actions mdc-snackbar__actions"
        }
      }]
    }] });
    MatSnackBarAction = class _MatSnackBarAction {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBarAction, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatSnackBarAction, isStandalone: true, selector: "[matSnackBarAction]", host: { classAttribute: "mat-mdc-snack-bar-action mdc-snackbar__action" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSnackBarAction, decorators: [{
      type: Directive,
      args: [{
        selector: `[matSnackBarAction]`,
        host: {
          "class": "mat-mdc-snack-bar-action mdc-snackbar__action"
        }
      }]
    }] });
    SimpleSnackBar = class _SimpleSnackBar {
      snackBarRef = inject(MatSnackBarRef);
      data = inject(MAT_SNACK_BAR_DATA);
      constructor() {
      }
      /** Performs the action on the snack bar. */
      action() {
        this.snackBarRef.dismissWithAction();
      }
      /** If the action button should be shown. */
      get hasAction() {
        return !!this.data.action;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _SimpleSnackBar, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _SimpleSnackBar, isStandalone: true, selector: "simple-snack-bar", host: { classAttribute: "mat-mdc-simple-snack-bar" }, exportAs: ["matSnackBar"], ngImport: core_exports, template: '<div matSnackBarLabel>\n  {{data.message}}\n</div>\n\n@if (hasAction) {\n  <div matSnackBarActions>\n    <button matButton matSnackBarAction (click)="action()">\n      {{data.action}}\n    </button>\n  </div>\n}\n', styles: [".mat-mdc-simple-snack-bar{display:flex}\n"], dependencies: [{ kind: "component", type: MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "directive", type: MatSnackBarLabel, selector: "[matSnackBarLabel]" }, { kind: "directive", type: MatSnackBarActions, selector: "[matSnackBarActions]" }, { kind: "directive", type: MatSnackBarAction, selector: "[matSnackBarAction]" }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: SimpleSnackBar, decorators: [{
      type: Component,
      args: [{ selector: "simple-snack-bar", exportAs: "matSnackBar", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction], host: {
        "class": "mat-mdc-simple-snack-bar"
      }, template: '<div matSnackBarLabel>\n  {{data.message}}\n</div>\n\n@if (hasAction) {\n  <div matSnackBarActions>\n    <button matButton matSnackBarAction (click)="action()">\n      {{data.action}}\n    </button>\n  </div>\n}\n', styles: [".mat-mdc-simple-snack-bar{display:flex}\n"] }]
    }], ctorParameters: () => [] });
    ENTER_ANIMATION = "_mat-snack-bar-enter";
    EXIT_ANIMATION = "_mat-snack-bar-exit";
    MatSnackBarContainer = class _MatSnackBarContainer extends BasePortalOutlet {
      _ngZone = inject(NgZone);
      _elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _platform = inject(Platform);
      _animationsDisabled = _animationsDisabled();
      snackBarConfig = inject(MatSnackBarConfig);
      _document = inject(DOCUMENT);
      _trackedModals = /* @__PURE__ */ new Set();
      _enterFallback;
      _exitFallback;
      _injector = inject(Injector);
      /** The number of milliseconds to wait before announcing the snack bar's content. */
      _announceDelay = 150;
      /** The timeout for announcing the snack bar's content. */
      _announceTimeoutId;
      /** Whether the component has been destroyed. */
      _destroyed = false;
      /** The portal outlet inside of this container into which the snack bar content will be loaded. */
      _portalOutlet;
      /** Subject for notifying that the snack bar has announced to screen readers. */
      _onAnnounce = new Subject();
      /** Subject for notifying that the snack bar has exited from view. */
      _onExit = new Subject();
      /** Subject for notifying that the snack bar has finished entering the view. */
      _onEnter = new Subject();
      /** The state of the snack bar animations. */
      _animationState = "void";
      /** aria-live value for the live region. */
      _live;
      /**
       * Element that will have the `mdc-snackbar__label` class applied if the attached component
       * or template does not have it. This ensures that the appropriate structure, typography, and
       * color is applied to the attached view.
       */
      _label;
      /**
       * Role of the live region. This is only for Firefox as there is a known issue where Firefox +
       * JAWS does not read out aria-live message.
       */
      _role;
      /** Unique ID of the aria-live element. */
      _liveElementId = inject(_IdGenerator).getId("mat-snack-bar-container-live-");
      constructor() {
        super();
        const config = this.snackBarConfig;
        if (config.politeness === "assertive" && !config.announcementMessage) {
          this._live = "assertive";
        } else if (config.politeness === "off") {
          this._live = "off";
        } else {
          this._live = "polite";
        }
        if (this._platform.FIREFOX) {
          if (this._live === "polite") {
            this._role = "status";
          }
          if (this._live === "assertive") {
            this._role = "alert";
          }
        }
      }
      /** Attach a component portal as content to this snack bar container. */
      attachComponentPortal(portal) {
        this._assertNotAttached();
        const result = this._portalOutlet.attachComponentPortal(portal);
        this._afterPortalAttached();
        return result;
      }
      /** Attach a template portal as content to this snack bar container. */
      attachTemplatePortal(portal) {
        this._assertNotAttached();
        const result = this._portalOutlet.attachTemplatePortal(portal);
        this._afterPortalAttached();
        return result;
      }
      /**
       * Attaches a DOM portal to the snack bar container.
       * @deprecated To be turned into a method.
       * @breaking-change 10.0.0
       */
      attachDomPortal = (portal) => {
        this._assertNotAttached();
        const result = this._portalOutlet.attachDomPortal(portal);
        this._afterPortalAttached();
        return result;
      };
      /** Handle end of animations, updating the state of the snackbar. */
      onAnimationEnd(animationName) {
        if (animationName === EXIT_ANIMATION) {
          this._completeExit();
        } else if (animationName === ENTER_ANIMATION) {
          clearTimeout(this._enterFallback);
          this._ngZone.run(() => {
            this._onEnter.next();
            this._onEnter.complete();
          });
        }
      }
      /** Begin animation of snack bar entrance into view. */
      enter() {
        if (!this._destroyed) {
          this._animationState = "visible";
          this._changeDetectorRef.markForCheck();
          this._changeDetectorRef.detectChanges();
          this._screenReaderAnnounce();
          if (this._animationsDisabled) {
            afterNextRender(() => {
              this._ngZone.run(() => queueMicrotask(() => this.onAnimationEnd(ENTER_ANIMATION)));
            }, { injector: this._injector });
          } else {
            clearTimeout(this._enterFallback);
            this._enterFallback = setTimeout(() => {
              this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible");
              this.onAnimationEnd(ENTER_ANIMATION);
            }, 200);
          }
        }
      }
      /** Begin animation of the snack bar exiting from view. */
      exit() {
        if (this._destroyed) {
          return of(void 0);
        }
        this._ngZone.run(() => {
          this._animationState = "hidden";
          this._changeDetectorRef.markForCheck();
          this._elementRef.nativeElement.setAttribute("mat-exit", "");
          clearTimeout(this._announceTimeoutId);
          if (this._animationsDisabled) {
            afterNextRender(() => {
              this._ngZone.run(() => queueMicrotask(() => this.onAnimationEnd(EXIT_ANIMATION)));
            }, { injector: this._injector });
          } else {
            clearTimeout(this._exitFallback);
            this._exitFallback = setTimeout(() => this.onAnimationEnd(EXIT_ANIMATION), 200);
          }
        });
        return this._onExit;
      }
      /** Makes sure the exit callbacks have been invoked when the element is destroyed. */
      ngOnDestroy() {
        this._destroyed = true;
        this._clearFromModals();
        this._completeExit();
      }
      _completeExit() {
        clearTimeout(this._exitFallback);
        queueMicrotask(() => {
          this._onExit.next();
          this._onExit.complete();
        });
      }
      /**
       * Called after the portal contents have been attached. Can be
       * used to modify the DOM once it's guaranteed to be in place.
       */
      _afterPortalAttached() {
        const element = this._elementRef.nativeElement;
        const panelClasses = this.snackBarConfig.panelClass;
        if (panelClasses) {
          if (Array.isArray(panelClasses)) {
            panelClasses.forEach((cssClass) => element.classList.add(cssClass));
          } else {
            element.classList.add(panelClasses);
          }
        }
        this._exposeToModals();
        const label = this._label.nativeElement;
        const labelClass = "mdc-snackbar__label";
        label.classList.toggle(labelClass, !label.querySelector(`.${labelClass}`));
      }
      /**
       * Some browsers won't expose the accessibility node of the live element if there is an
       * `aria-modal` and the live element is outside of it. This method works around the issue by
       * pointing the `aria-owns` of all modals to the live element.
       */
      _exposeToModals() {
        const id = this._liveElementId;
        const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
        for (let i = 0; i < modals.length; i++) {
          const modal = modals[i];
          const ariaOwns = modal.getAttribute("aria-owns");
          this._trackedModals.add(modal);
          if (!ariaOwns) {
            modal.setAttribute("aria-owns", id);
          } else if (ariaOwns.indexOf(id) === -1) {
            modal.setAttribute("aria-owns", ariaOwns + " " + id);
          }
        }
      }
      /** Clears the references to the live element from any modals it was added to. */
      _clearFromModals() {
        this._trackedModals.forEach((modal) => {
          const ariaOwns = modal.getAttribute("aria-owns");
          if (ariaOwns) {
            const newValue = ariaOwns.replace(this._liveElementId, "").trim();
            if (newValue.length > 0) {
              modal.setAttribute("aria-owns", newValue);
            } else {
              modal.removeAttribute("aria-owns");
            }
          }
        });
        this._trackedModals.clear();
      }
      /** Asserts that no content is already attached to the container. */
      _assertNotAttached() {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("Attempting to attach snack bar content after content is already attached");
        }
      }
      /**
       * Starts a timeout to move the snack bar content to the live region so screen readers will
       * announce it.
       */
      _screenReaderAnnounce() {
        if (this._announceTimeoutId) {
          return;
        }
        this._ngZone.runOutsideAngular(() => {
          this._announceTimeoutId = setTimeout(() => {
            if (this._destroyed) {
              return;
            }
            const element = this._elementRef.nativeElement;
            const inertElement = element.querySelector("[aria-hidden]");
            const liveElement = element.querySelector("[aria-live]");
            if (inertElement && liveElement) {
              let focusedElement = null;
              if (this._platform.isBrowser && document.activeElement instanceof HTMLElement && inertElement.contains(document.activeElement)) {
                focusedElement = document.activeElement;
              }
              inertElement.removeAttribute("aria-hidden");
              liveElement.appendChild(inertElement);
              focusedElement?.focus();
              this._onAnnounce.next();
              this._onAnnounce.complete();
            }
          }, this._announceDelay);
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBarContainer, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatSnackBarContainer, isStandalone: true, selector: "mat-snack-bar-container", host: { listeners: { "animationend": "onAnimationEnd($event.animationName)", "animationcancel": "onAnimationEnd($event.animationName)" }, properties: { "class.mat-snack-bar-container-enter": '_animationState === "visible"', "class.mat-snack-bar-container-exit": '_animationState === "hidden"', "class.mat-snack-bar-container-animations-enabled": "!_animationsDisabled" }, classAttribute: "mdc-snackbar mat-mdc-snack-bar-container" }, viewQueries: [{ propertyName: "_portalOutlet", first: true, predicate: CdkPortalOutlet, descendants: true, static: true }, { propertyName: "_label", first: true, predicate: ["label"], descendants: true, static: true }], usesInheritance: true, ngImport: core_exports, template: '<div class="mdc-snackbar__surface mat-mdc-snackbar-surface">\n  <!--\n    This outer label wrapper will have the class `mdc-snackbar__label` applied if\n    the attached template/component does not contain it.\n  -->\n  <div class="mat-mdc-snack-bar-label" #label>\n    <!-- Initialy holds the snack bar content, will be empty after announcing to screen readers. -->\n    <div aria-hidden="true">\n      <ng-template cdkPortalOutlet />\n    </div>\n\n    <!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->\n    <div [attr.aria-live]="_live" [attr.role]="_role" [attr.id]="_liveElementId"></div>\n  </div>\n</div>\n', styles: ["@keyframes _mat-snack-bar-enter{from{transform:scale(0.8);opacity:0}to{transform:scale(1);opacity:1}}@keyframes _mat-snack-bar-exit{from{opacity:1}to{opacity:0}}.mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-snack-bar-container-animations-enabled{opacity:0}.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible{opacity:1}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter{animation:_mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit{animation:_mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-button-text-state-layer-color: currentColor;--mat-button-text-ripple-color: currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}\n"], dependencies: [{ kind: "directive", type: CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSnackBarContainer, decorators: [{
      type: Component,
      args: [{ selector: "mat-snack-bar-container", changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None, imports: [CdkPortalOutlet], host: {
        "class": "mdc-snackbar mat-mdc-snack-bar-container",
        "[class.mat-snack-bar-container-enter]": '_animationState === "visible"',
        "[class.mat-snack-bar-container-exit]": '_animationState === "hidden"',
        "[class.mat-snack-bar-container-animations-enabled]": "!_animationsDisabled",
        "(animationend)": "onAnimationEnd($event.animationName)",
        "(animationcancel)": "onAnimationEnd($event.animationName)"
      }, template: '<div class="mdc-snackbar__surface mat-mdc-snackbar-surface">\n  <!--\n    This outer label wrapper will have the class `mdc-snackbar__label` applied if\n    the attached template/component does not contain it.\n  -->\n  <div class="mat-mdc-snack-bar-label" #label>\n    <!-- Initialy holds the snack bar content, will be empty after announcing to screen readers. -->\n    <div aria-hidden="true">\n      <ng-template cdkPortalOutlet />\n    </div>\n\n    <!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->\n    <div [attr.aria-live]="_live" [attr.role]="_role" [attr.id]="_liveElementId"></div>\n  </div>\n</div>\n', styles: ["@keyframes _mat-snack-bar-enter{from{transform:scale(0.8);opacity:0}to{transform:scale(1);opacity:1}}@keyframes _mat-snack-bar-exit{from{opacity:1}to{opacity:0}}.mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-snack-bar-container-animations-enabled{opacity:0}.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible{opacity:1}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter{animation:_mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit{animation:_mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-button-text-state-layer-color: currentColor;--mat-button-text-ripple-color: currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}\n"] }]
    }], ctorParameters: () => [], propDecorators: { _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, { static: true }]
    }], _label: [{
      type: ViewChild,
      args: ["label", { static: true }]
    }] } });
    MAT_SNACK_BAR_DEFAULT_OPTIONS = new InjectionToken("mat-snack-bar-default-options", {
      providedIn: "root",
      factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY
    });
    MatSnackBar = class _MatSnackBar {
      _live = inject(LiveAnnouncer);
      _injector = inject(Injector);
      _breakpointObserver = inject(BreakpointObserver);
      _parentSnackBar = inject(_MatSnackBar, { optional: true, skipSelf: true });
      _defaultConfig = inject(MAT_SNACK_BAR_DEFAULT_OPTIONS);
      _animationsDisabled = _animationsDisabled();
      /**
       * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
       * If there is a parent snack-bar service, all operations should delegate to that parent
       * via `_openedSnackBarRef`.
       */
      _snackBarRefAtThisLevel = null;
      /** The component that should be rendered as the snack bar's simple component. */
      simpleSnackBarComponent = SimpleSnackBar;
      /** The container component that attaches the provided template or component. */
      snackBarContainerComponent = MatSnackBarContainer;
      /** The CSS class to apply for handset mode. */
      handsetCssClass = "mat-mdc-snack-bar-handset";
      /** Reference to the currently opened snackbar at *any* level. */
      get _openedSnackBarRef() {
        const parent = this._parentSnackBar;
        return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
      }
      set _openedSnackBarRef(value) {
        if (this._parentSnackBar) {
          this._parentSnackBar._openedSnackBarRef = value;
        } else {
          this._snackBarRefAtThisLevel = value;
        }
      }
      constructor() {
      }
      /**
       * Creates and dispatches a snack bar with a custom component for the content, removing any
       * currently opened snack bars.
       *
       * @param component Component to be instantiated.
       * @param config Extra configuration for the snack bar.
       */
      openFromComponent(component, config) {
        return this._attach(component, config);
      }
      /**
       * Creates and dispatches a snack bar with a custom template for the content, removing any
       * currently opened snack bars.
       *
       * @param template Template to be instantiated.
       * @param config Extra configuration for the snack bar.
       */
      openFromTemplate(template, config) {
        return this._attach(template, config);
      }
      /**
       * Opens a snackbar with a message and an optional action.
       * @param message The message to show in the snackbar.
       * @param action The label for the snackbar action.
       * @param config Additional configuration options for the snackbar.
       */
      open(message, action = "", config) {
        const _config = __spreadValues(__spreadValues({}, this._defaultConfig), config);
        _config.data = { message, action };
        if (_config.announcementMessage === message) {
          _config.announcementMessage = void 0;
        }
        return this.openFromComponent(this.simpleSnackBarComponent, _config);
      }
      /**
       * Dismisses the currently-visible snack bar.
       */
      dismiss() {
        if (this._openedSnackBarRef) {
          this._openedSnackBarRef.dismiss();
        }
      }
      ngOnDestroy() {
        if (this._snackBarRefAtThisLevel) {
          this._snackBarRefAtThisLevel.dismiss();
        }
      }
      /**
       * Attaches the snack bar container component to the overlay.
       */
      _attachSnackBarContainer(overlayRef, config) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injector = Injector.create({
          parent: userInjector || this._injector,
          providers: [{ provide: MatSnackBarConfig, useValue: config }]
        });
        const containerPortal = new ComponentPortal(this.snackBarContainerComponent, config.viewContainerRef, injector);
        const containerRef = overlayRef.attach(containerPortal);
        containerRef.instance.snackBarConfig = config;
        return containerRef.instance;
      }
      /**
       * Places a new component or a template as the content of the snack bar container.
       */
      _attach(content, userConfig) {
        const config = __spreadValues(__spreadValues(__spreadValues({}, new MatSnackBarConfig()), this._defaultConfig), userConfig);
        const overlayRef = this._createOverlay(config);
        const container = this._attachSnackBarContainer(overlayRef, config);
        const snackBarRef = new MatSnackBarRef(container, overlayRef);
        if (content instanceof TemplateRef) {
          const portal = new TemplatePortal(content, null, {
            $implicit: config.data,
            snackBarRef
          });
          snackBarRef.instance = container.attachTemplatePortal(portal);
        } else {
          const injector = this._createInjector(config, snackBarRef);
          const portal = new ComponentPortal(content, void 0, injector);
          const contentRef = container.attachComponentPortal(portal);
          snackBarRef.instance = contentRef.instance;
        }
        this._breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(takeUntil(overlayRef.detachments())).subscribe((state) => {
          overlayRef.overlayElement.classList.toggle(this.handsetCssClass, state.matches);
        });
        if (config.announcementMessage) {
          container._onAnnounce.subscribe(() => {
            this._live.announce(config.announcementMessage, config.politeness);
          });
        }
        this._animateSnackBar(snackBarRef, config);
        this._openedSnackBarRef = snackBarRef;
        return this._openedSnackBarRef;
      }
      /** Animates the old snack bar out and the new one in. */
      _animateSnackBar(snackBarRef, config) {
        snackBarRef.afterDismissed().subscribe(() => {
          if (this._openedSnackBarRef == snackBarRef) {
            this._openedSnackBarRef = null;
          }
          if (config.announcementMessage) {
            this._live.clear();
          }
        });
        if (config.duration && config.duration > 0) {
          snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration));
        }
        if (this._openedSnackBarRef) {
          this._openedSnackBarRef.afterDismissed().subscribe(() => {
            snackBarRef.containerInstance.enter();
          });
          this._openedSnackBarRef.dismiss();
        } else {
          snackBarRef.containerInstance.enter();
        }
      }
      /**
       * Creates a new overlay and places it in the correct location.
       * @param config The user-specified snack bar config.
       */
      _createOverlay(config) {
        const overlayConfig = new OverlayConfig();
        overlayConfig.direction = config.direction;
        const positionStrategy = createGlobalPositionStrategy(this._injector);
        const isRtl = config.direction === "rtl";
        const isLeft = config.horizontalPosition === "left" || config.horizontalPosition === "start" && !isRtl || config.horizontalPosition === "end" && isRtl;
        const isRight = !isLeft && config.horizontalPosition !== "center";
        if (isLeft) {
          positionStrategy.left("0");
        } else if (isRight) {
          positionStrategy.right("0");
        } else {
          positionStrategy.centerHorizontally();
        }
        if (config.verticalPosition === "top") {
          positionStrategy.top("0");
        } else {
          positionStrategy.bottom("0");
        }
        overlayConfig.positionStrategy = positionStrategy;
        overlayConfig.disableAnimations = this._animationsDisabled;
        return createOverlayRef(this._injector, overlayConfig);
      }
      /**
       * Creates an injector to be used inside of a snack bar component.
       * @param config Config that was used to create the snack bar.
       * @param snackBarRef Reference to the snack bar.
       */
      _createInjector(config, snackBarRef) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        return Injector.create({
          parent: userInjector || this._injector,
          providers: [
            { provide: MatSnackBarRef, useValue: snackBarRef },
            { provide: MAT_SNACK_BAR_DATA, useValue: config.data }
          ]
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBar, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBar, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSnackBar, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    DIRECTIVES = [MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction];
    MatSnackBarModule = class _MatSnackBarModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBarModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBarModule, imports: [
        OverlayModule,
        PortalModule,
        MatButtonModule,
        MatCommonModule,
        SimpleSnackBar,
        MatSnackBarContainer,
        MatSnackBarLabel,
        MatSnackBarActions,
        MatSnackBarAction
      ], exports: [MatCommonModule, MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBarModule, providers: [MatSnackBar], imports: [
        OverlayModule,
        PortalModule,
        MatButtonModule,
        MatCommonModule,
        SimpleSnackBar,
        MatCommonModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSnackBarModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          OverlayModule,
          PortalModule,
          MatButtonModule,
          MatCommonModule,
          SimpleSnackBar,
          ...DIRECTIVES
        ],
        exports: [MatCommonModule, ...DIRECTIVES],
        providers: [MatSnackBar]
      }]
    }] });
  }
});

// src/app/services/todo.service.ts
var TodoService;
var init_todo_service = __esm({
  "src/app/services/todo.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    TodoService = class TodoService2 {
      http;
      apiUrl = "https://localhost:7036/api/todo";
      constructor(http) {
        this.http = http;
      }
      getTodos() {
        return this.http.get(this.apiUrl);
      }
      addTodo(todo) {
        return this.http.post(this.apiUrl, todo);
      }
      updateTodo(todo) {
        return this.http.put(`${this.apiUrl}/${todo.id}`, todo);
      }
      deleteTodo(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    TodoService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], TodoService);
  }
});

// src/app/components/todo-list/todo-list.ts
var TodoList;
var init_todo_list3 = __esm({
  "src/app/components/todo-list/todo-list.ts"() {
    "use strict";
    init_tslib_es6();
    init_todo_list();
    init_todo_list2();
    init_core();
    init_common();
    init_forms();
    init_icon();
    init_button();
    init_input();
    init_form_field();
    init_dialog();
    init_snack_bar();
    init_todo_service();
    init_confirm_delete_dialog();
    TodoList = class TodoList2 {
      todoService;
      dialog;
      snackBar;
      todos = [];
      newTaskTitle = "";
      editingTodoId = null;
      updatedTitle = "";
      constructor(todoService, dialog, snackBar) {
        this.todoService = todoService;
        this.dialog = dialog;
        this.snackBar = snackBar;
      }
      ngOnInit() {
        this.todoService.getTodos().subscribe((data) => {
          this.todos = data;
        });
      }
      // Add New Todo Item
      addTodoItem() {
        const title = this.newTaskTitle.trim();
        if (!title)
          return;
        const newTodo = { title };
        this.todoService.addTodo(newTodo).subscribe((addedTodo) => {
          this.todos.push(addedTodo);
          this.newTaskTitle = "";
        });
      }
      // Editing Todo Item
      startEdit(todo) {
        this.editingTodoId = todo.id;
        this.updatedTitle = todo.title;
      }
      // Updating Todo Item
      saveEdit(todo) {
        const updatedTodo = __spreadProps(__spreadValues({}, todo), { title: this.updatedTitle });
        this.todoService.updateTodo(updatedTodo).subscribe((updated) => {
          const index = this.todos.findIndex((t) => t.id === updated.id);
          if (index > -1)
            this.todos[index] = updated;
          this.cancelEdit();
        });
      }
      // Cancel Todo Item Updation
      cancelEdit() {
        this.editingTodoId = null;
        this.updatedTitle = "";
      }
      // Confirm Delete Dialog
      confirmAndDelete(todo) {
        if (!todo.id)
          return;
        const dialogRef = this.dialog.open(ConfirmDeleteDialog);
        dialogRef.afterClosed().subscribe((confirmed) => {
          if (confirmed) {
            this.deleteTodoItem(todo);
          }
        });
      }
      // Delete Todo Item
      deleteTodoItem(todo) {
        this.todoService.deleteTodo(todo.id).subscribe(() => {
          this.todos = this.todos.filter((t) => t.id !== todo.id);
          this.snackBar.open(`Task "${todo.title}" deleted`, "Close", {
            duration: 3e3
          });
        });
      }
      static ctorParameters = () => [
        { type: TodoService },
        { type: MatDialog },
        { type: MatSnackBar }
      ];
    };
    TodoList = __decorate([
      Component({
        selector: "app-todo-list",
        standalone: true,
        imports: [
          CommonModule,
          FormsModule,
          MatIconModule,
          MatButtonModule,
          MatInputModule,
          MatFormFieldModule,
          MatDialogModule
        ],
        template: todo_list_default,
        styles: [todo_list_default2]
      })
    ], TodoList);
  }
});

// src/app/components/todo-list/todo-list.spec.ts
var require_todo_list_spec = __commonJS({
  "src/app/components/todo-list/todo-list.spec.ts"(exports) {
    init_testing();
    init_todo_list3();
    describe("TodoList", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [TodoList]
        }).compileComponents();
        fixture = TestBed.createComponent(TodoList);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_todo_list_spec();
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v20.1.4
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=spec-todo-list.spec.js.map
