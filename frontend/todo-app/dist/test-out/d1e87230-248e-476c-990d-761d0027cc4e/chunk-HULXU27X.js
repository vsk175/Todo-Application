import {
  MatCommonModule,
  init_common_module_cKSwHniA
} from "./chunk-KDOZXXMP.js";
import {
  EVENT_MANAGER_PLUGINS,
  EventManagerPlugin,
  init_dom_renderer
} from "./chunk-USWOFTV7.js";
import {
  ChangeDetectionStrategy,
  Component,
  Console,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  EnvironmentInjector,
  ErrorHandler,
  FactoryTarget,
  HostAttributeToken,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  PendingTasks,
  ResourceImpl,
  RuntimeError,
  SecurityContext,
  SkipSelf,
  Subscription,
  Version,
  ViewEncapsulation,
  XSS_SECURITY_URL,
  XhrFactory,
  _sanitizeHtml,
  _sanitizeUrl,
  allowSanitizationBypassAndThrow,
  assertInInjectionContext,
  booleanAttribute,
  bypassSanitizationTrustHtml,
  bypassSanitizationTrustResourceUrl,
  bypassSanitizationTrustScript,
  bypassSanitizationTrustStyle,
  bypassSanitizationTrustUrl,
  catchError,
  computed,
  concatMap,
  core_exports,
  encapsulateResourceError,
  filter,
  finalize,
  forkJoin,
  formatRuntimeError,
  forwardRef,
  getDOM,
  init_common,
  init_core,
  init_esm,
  init_operators,
  init_xhr,
  inject,
  linkedSignal,
  makeEnvironmentProviders,
  map,
  of,
  parseCookieValue,
  runInInjectionContext,
  share,
  signal,
  switchMap,
  take,
  tap,
  throwError,
  unwrapSafeValue,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-XNL2DVBY.js";
import {
  __async,
  __esm,
  __spreadValues
} from "./chunk-TTULUY32.js";

// node_modules/@angular/common/fesm2022/module.mjs
function assertValidHeaders(headers) {
  for (const [key, value] of Object.entries(headers)) {
    if (!(typeof value === "string" || typeof value === "number") && !Array.isArray(value)) {
      throw new Error(`Unexpected value of the \`${key}\` header provided. Expecting either a string, a number or an array, but got: \`${value}\`.`);
    }
  }
}
function paramParser(rawParams, codec) {
  const map2 = /* @__PURE__ */ new Map();
  if (rawParams.length > 0) {
    const params = rawParams.replace(/^\?/, "").split("&");
    params.forEach((param) => {
      const eqIdx = param.indexOf("=");
      const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ""] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
      const list = map2.get(key) || [];
      list.push(val);
      map2.set(key, list);
    });
  }
  return map2;
}
function standardEncoding(v) {
  return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => STANDARD_ENCODING_REPLACEMENTS[t] ?? s);
}
function valueToString(value) {
  return `${value}`;
}
function mightHaveBody(method) {
  switch (method) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return false;
    default:
      return true;
  }
}
function isArrayBuffer(value) {
  return typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer;
}
function isBlob(value) {
  return typeof Blob !== "undefined" && value instanceof Blob;
}
function isFormData(value) {
  return typeof FormData !== "undefined" && value instanceof FormData;
}
function isUrlSearchParams(value) {
  return typeof URLSearchParams !== "undefined" && value instanceof URLSearchParams;
}
function addBody(options, body) {
  return {
    body,
    headers: options.headers,
    context: options.context,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials,
    transferCache: options.transferCache,
    keepalive: options.keepalive,
    priority: options.priority,
    cache: options.cache,
    mode: options.mode,
    redirect: options.redirect
  };
}
function getResponseUrl$1(response) {
  if (response.url) {
    return response.url;
  }
  const xRequestUrl = X_REQUEST_URL_HEADER.toLocaleLowerCase();
  return response.headers.get(xRequestUrl);
}
function noop() {
}
function warningOptionsMessage(req) {
  if (req.credentials && req.withCredentials) {
    console.warn(formatRuntimeError(2819, `Angular detected that a \`HttpClient\` request has both \`withCredentials: true\` and \`credentials: '${req.credentials}'\` options. The \`withCredentials\` option is overriding the explicit \`credentials\` setting to 'include'. Consider removing \`withCredentials\` and using \`credentials: '${req.credentials}'\` directly for clarity.`));
  }
}
function silenceSuperfluousUnhandledPromiseRejection(promise) {
  promise.then(noop, noop);
}
function interceptorChainEndFn(req, finalHandlerFn) {
  return finalHandlerFn(req);
}
function adaptLegacyInterceptorToChain(chainTailFn, interceptor) {
  return (initialRequest, finalHandlerFn) => interceptor.intercept(initialRequest, {
    handle: (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)
  });
}
function chainedInterceptorFn(chainTailFn, interceptorFn, injector) {
  return (initialRequest, finalHandlerFn) => runInInjectionContext(injector, () => interceptorFn(initialRequest, (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)));
}
function legacyInterceptorFnFactory() {
  let chain = null;
  return (req, handler) => {
    if (chain === null) {
      const interceptors = inject(HTTP_INTERCEPTORS, { optional: true }) ?? [];
      chain = interceptors.reduceRight(adaptLegacyInterceptorToChain, interceptorChainEndFn);
    }
    const pendingTasks = inject(PendingTasks);
    const contributeToStability = inject(REQUESTS_CONTRIBUTE_TO_STABILITY);
    if (contributeToStability) {
      const removeTask = pendingTasks.add();
      return chain(req, handler).pipe(finalize(removeTask));
    } else {
      return chain(req, handler);
    }
  };
}
function jsonpCallbackContext() {
  if (typeof window === "object") {
    return window;
  }
  return {};
}
function jsonpInterceptorFn(req, next) {
  if (req.method === "JSONP") {
    return inject(JsonpClientBackend).handle(req);
  }
  return next(req);
}
function getResponseUrl(xhr) {
  if ("responseURL" in xhr && xhr.responseURL) {
    return xhr.responseURL;
  }
  if (X_REQUEST_URL_REGEXP.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader(X_REQUEST_URL_HEADER);
  }
  return null;
}
function validateXhrCompatibility(req) {
  const unsupportedOptions = [
    {
      property: "keepalive",
      errorCode: 2813
    },
    {
      property: "cache",
      errorCode: 2814
    },
    {
      property: "priority",
      errorCode: 2815
    },
    {
      property: "mode",
      errorCode: 2816
    },
    {
      property: "redirect",
      errorCode: 2817
    },
    {
      property: "credentials",
      errorCode: 2818
    }
  ];
  for (const { property, errorCode } of unsupportedOptions) {
    if (req[property]) {
      console.warn(formatRuntimeError(errorCode, `Angular detected that a \`HttpClient\` request with the \`${property}\` option was sent using XHR, which does not support it. To use the \`${property}\` option, enable Fetch API support by passing \`withFetch()\` as an argument to \`provideHttpClient()\`.`));
    }
  }
}
function xsrfInterceptorFn(req, next) {
  const lcUrl = req.url.toLowerCase();
  if (!inject(XSRF_ENABLED) || req.method === "GET" || req.method === "HEAD" || lcUrl.startsWith("http://") || lcUrl.startsWith("https://")) {
    return next(req);
  }
  const token = inject(HttpXsrfTokenExtractor).getToken();
  const headerName = inject(XSRF_HEADER_NAME);
  if (token != null && !req.headers.has(headerName)) {
    req = req.clone({ headers: req.headers.set(headerName, token) });
  }
  return next(req);
}
function makeHttpFeature(kind, providers) {
  return {
    \u0275kind: kind,
    \u0275providers: providers
  };
}
function provideHttpClient(...features) {
  if (ngDevMode) {
    const featureKinds = new Set(features.map((f) => f.\u0275kind));
    if (featureKinds.has(HttpFeatureKind.NoXsrfProtection) && featureKinds.has(HttpFeatureKind.CustomXsrfConfiguration)) {
      throw new Error(ngDevMode ? `Configuration error: found both withXsrfConfiguration() and withNoXsrfProtection() in the same call to provideHttpClient(), which is a contradiction.` : "");
    }
  }
  const providers = [
    HttpClient,
    HttpXhrBackend,
    HttpInterceptorHandler,
    { provide: HttpHandler, useExisting: HttpInterceptorHandler },
    {
      provide: HttpBackend,
      useFactory: () => {
        return inject(FETCH_BACKEND, { optional: true }) ?? inject(HttpXhrBackend);
      }
    },
    {
      provide: HTTP_INTERCEPTOR_FNS,
      useValue: xsrfInterceptorFn,
      multi: true
    },
    { provide: XSRF_ENABLED, useValue: true },
    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor }
  ];
  for (const feature of features) {
    providers.push(...feature.\u0275providers);
  }
  return makeEnvironmentProviders(providers);
}
function withInterceptorsFromDi() {
  return makeHttpFeature(HttpFeatureKind.LegacyInterceptors, [
    {
      provide: LEGACY_INTERCEPTOR_FN,
      useFactory: legacyInterceptorFnFactory
    },
    {
      provide: HTTP_INTERCEPTOR_FNS,
      useExisting: LEGACY_INTERCEPTOR_FN,
      multi: true
    }
  ]);
}
function withXsrfConfiguration({ cookieName, headerName }) {
  const providers = [];
  if (cookieName !== void 0) {
    providers.push({ provide: XSRF_COOKIE_NAME, useValue: cookieName });
  }
  if (headerName !== void 0) {
    providers.push({ provide: XSRF_HEADER_NAME, useValue: headerName });
  }
  return makeHttpFeature(HttpFeatureKind.CustomXsrfConfiguration, providers);
}
function withNoXsrfProtection() {
  return makeHttpFeature(HttpFeatureKind.NoXsrfProtection, [
    {
      provide: XSRF_ENABLED,
      useValue: false
    }
  ]);
}
function withJsonpSupport() {
  return makeHttpFeature(HttpFeatureKind.JsonpSupport, [
    JsonpClientBackend,
    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
    { provide: HTTP_INTERCEPTOR_FNS, useValue: jsonpInterceptorFn, multi: true }
  ]);
}
var HttpHandler, HttpBackend, HttpHeaders, HttpUrlEncodingCodec, STANDARD_ENCODING_REGEX, STANDARD_ENCODING_REPLACEMENTS, HttpParams, HttpContext, CONTENT_TYPE_HEADER, ACCEPT_HEADER, X_REQUEST_URL_HEADER, TEXT_CONTENT_TYPE, JSON_CONTENT_TYPE, ACCEPT_HEADER_VALUE, HttpRequest, HttpEventType, HttpResponseBase, HttpHeaderResponse, HttpResponse, HttpErrorResponse, HTTP_STATUS_CODE_OK, HTTP_STATUS_CODE_NO_CONTENT, HttpStatusCode, HttpClient, XSSI_PREFIX$1, FETCH_BACKEND, FetchBackend, FetchFactory, HTTP_INTERCEPTORS, HTTP_INTERCEPTOR_FNS, HTTP_ROOT_INTERCEPTOR_FNS, REQUESTS_CONTRIBUTE_TO_STABILITY, fetchBackendWarningDisplayed, HttpInterceptorHandler, nextRequestId, foreignDocument, JSONP_ERR_NO_CALLBACK, JSONP_ERR_WRONG_METHOD, JSONP_ERR_WRONG_RESPONSE_TYPE, JSONP_ERR_HEADERS_NOT_SUPPORTED, JsonpCallbackContext, JsonpClientBackend, JsonpInterceptor, XSSI_PREFIX, X_REQUEST_URL_REGEXP, HttpXhrBackend, XSRF_ENABLED, XSRF_DEFAULT_COOKIE_NAME, XSRF_COOKIE_NAME, XSRF_DEFAULT_HEADER_NAME, XSRF_HEADER_NAME, HttpXsrfTokenExtractor, HttpXsrfCookieExtractor, HttpXsrfInterceptor, HttpFeatureKind, LEGACY_INTERCEPTOR_FN, HttpClientXsrfModule, HttpClientModule, HttpClientJsonpModule;
var init_module = __esm({
  "node_modules/@angular/common/fesm2022/module.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_operators();
    init_esm();
    init_xhr();
    HttpHandler = class {
    };
    HttpBackend = class {
    };
    HttpHeaders = class _HttpHeaders {
      /**
       * Internal map of lowercase header names to values.
       */
      headers;
      /**
       * Internal map of lowercased header names to the normalized
       * form of the name (the form seen first).
       */
      normalizedNames = /* @__PURE__ */ new Map();
      /**
       * Complete the lazy initialization of this object (needed before reading).
       */
      lazyInit;
      /**
       * Queued updates to be materialized the next initialization.
       */
      lazyUpdate = null;
      /**  Constructs a new HTTP header object with the given values.*/
      constructor(headers) {
        if (!headers) {
          this.headers = /* @__PURE__ */ new Map();
        } else if (typeof headers === "string") {
          this.lazyInit = () => {
            this.headers = /* @__PURE__ */ new Map();
            headers.split("\n").forEach((line) => {
              const index = line.indexOf(":");
              if (index > 0) {
                const name = line.slice(0, index);
                const value = line.slice(index + 1).trim();
                this.addHeaderEntry(name, value);
              }
            });
          };
        } else if (typeof Headers !== "undefined" && headers instanceof Headers) {
          this.headers = /* @__PURE__ */ new Map();
          headers.forEach((value, name) => {
            this.addHeaderEntry(name, value);
          });
        } else {
          this.lazyInit = () => {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              assertValidHeaders(headers);
            }
            this.headers = /* @__PURE__ */ new Map();
            Object.entries(headers).forEach(([name, values]) => {
              this.setHeaderEntries(name, values);
            });
          };
        }
      }
      /**
       * Checks for existence of a given header.
       *
       * @param name The header name to check for existence.
       *
       * @returns True if the header exists, false otherwise.
       */
      has(name) {
        this.init();
        return this.headers.has(name.toLowerCase());
      }
      /**
       * Retrieves the first value of a given header.
       *
       * @param name The header name.
       *
       * @returns The value string if the header exists, null otherwise
       */
      get(name) {
        this.init();
        const values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
      }
      /**
       * Retrieves the names of the headers.
       *
       * @returns A list of header names.
       */
      keys() {
        this.init();
        return Array.from(this.normalizedNames.values());
      }
      /**
       * Retrieves a list of values for a given header.
       *
       * @param name The header name from which to retrieve values.
       *
       * @returns A string of values if the header exists, null otherwise.
       */
      getAll(name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
      }
      /**
       * Appends a new value to the existing set of values for a header
       * and returns them in a clone of the original instance.
       *
       * @param name The header name for which to append the values.
       * @param value The value to append.
       *
       * @returns A clone of the HTTP headers object with the value appended to the given header.
       */
      append(name, value) {
        return this.clone({ name, value, op: "a" });
      }
      /**
       * Sets or modifies a value for a given header in a clone of the original instance.
       * If the header already exists, its value is replaced with the given value
       * in the returned object.
       *
       * @param name The header name.
       * @param value The value or values to set or override for the given header.
       *
       * @returns A clone of the HTTP headers object with the newly set header value.
       */
      set(name, value) {
        return this.clone({ name, value, op: "s" });
      }
      /**
       * Deletes values for a given header in a clone of the original instance.
       *
       * @param name The header name.
       * @param value The value or values to delete for the given header.
       *
       * @returns A clone of the HTTP headers object with the given value deleted.
       */
      delete(name, value) {
        return this.clone({ name, value, op: "d" });
      }
      maybeSetNormalizedName(name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
          this.normalizedNames.set(lcName, name);
        }
      }
      init() {
        if (!!this.lazyInit) {
          if (this.lazyInit instanceof _HttpHeaders) {
            this.copyFrom(this.lazyInit);
          } else {
            this.lazyInit();
          }
          this.lazyInit = null;
          if (!!this.lazyUpdate) {
            this.lazyUpdate.forEach((update) => this.applyUpdate(update));
            this.lazyUpdate = null;
          }
        }
      }
      copyFrom(other) {
        other.init();
        Array.from(other.headers.keys()).forEach((key) => {
          this.headers.set(key, other.headers.get(key));
          this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
      }
      clone(update) {
        const clone = new _HttpHeaders();
        clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof _HttpHeaders ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
      }
      applyUpdate(update) {
        const key = update.name.toLowerCase();
        switch (update.op) {
          case "a":
          case "s":
            let value = update.value;
            if (typeof value === "string") {
              value = [value];
            }
            if (value.length === 0) {
              return;
            }
            this.maybeSetNormalizedName(update.name, key);
            const base = (update.op === "a" ? this.headers.get(key) : void 0) || [];
            base.push(...value);
            this.headers.set(key, base);
            break;
          case "d":
            const toDelete = update.value;
            if (!toDelete) {
              this.headers.delete(key);
              this.normalizedNames.delete(key);
            } else {
              let existing = this.headers.get(key);
              if (!existing) {
                return;
              }
              existing = existing.filter((value2) => toDelete.indexOf(value2) === -1);
              if (existing.length === 0) {
                this.headers.delete(key);
                this.normalizedNames.delete(key);
              } else {
                this.headers.set(key, existing);
              }
            }
            break;
        }
      }
      addHeaderEntry(name, value) {
        const key = name.toLowerCase();
        this.maybeSetNormalizedName(name, key);
        if (this.headers.has(key)) {
          this.headers.get(key).push(value);
        } else {
          this.headers.set(key, [value]);
        }
      }
      setHeaderEntries(name, values) {
        const headerValues = (Array.isArray(values) ? values : [values]).map((value) => value.toString());
        const key = name.toLowerCase();
        this.headers.set(key, headerValues);
        this.maybeSetNormalizedName(name, key);
      }
      /**
       * @internal
       */
      forEach(fn) {
        this.init();
        Array.from(this.normalizedNames.keys()).forEach((key) => fn(this.normalizedNames.get(key), this.headers.get(key)));
      }
    };
    HttpUrlEncodingCodec = class {
      /**
       * Encodes a key name for a URL parameter or query-string.
       * @param key The key name.
       * @returns The encoded key name.
       */
      encodeKey(key) {
        return standardEncoding(key);
      }
      /**
       * Encodes the value of a URL parameter or query-string.
       * @param value The value.
       * @returns The encoded value.
       */
      encodeValue(value) {
        return standardEncoding(value);
      }
      /**
       * Decodes an encoded URL parameter or query-string key.
       * @param key The encoded key name.
       * @returns The decoded key name.
       */
      decodeKey(key) {
        return decodeURIComponent(key);
      }
      /**
       * Decodes an encoded URL parameter or query-string value.
       * @param value The encoded value.
       * @returns The decoded value.
       */
      decodeValue(value) {
        return decodeURIComponent(value);
      }
    };
    STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
    STANDARD_ENCODING_REPLACEMENTS = {
      "40": "@",
      "3A": ":",
      "24": "$",
      "2C": ",",
      "3B": ";",
      "3D": "=",
      "3F": "?",
      "2F": "/"
    };
    HttpParams = class _HttpParams {
      map;
      encoder;
      updates = null;
      cloneFrom = null;
      constructor(options = {}) {
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (options.fromString) {
          if (options.fromObject) {
            throw new RuntimeError(2805, ngDevMode && "Cannot specify both fromString and fromObject.");
          }
          this.map = paramParser(options.fromString, this.encoder);
        } else if (!!options.fromObject) {
          this.map = /* @__PURE__ */ new Map();
          Object.keys(options.fromObject).forEach((key) => {
            const value = options.fromObject[key];
            const values = Array.isArray(value) ? value.map(valueToString) : [valueToString(value)];
            this.map.set(key, values);
          });
        } else {
          this.map = null;
        }
      }
      /**
       * Reports whether the body includes one or more values for a given parameter.
       * @param param The parameter name.
       * @returns True if the parameter has one or more values,
       * false if it has no value or is not present.
       */
      has(param) {
        this.init();
        return this.map.has(param);
      }
      /**
       * Retrieves the first value for a parameter.
       * @param param The parameter name.
       * @returns The first value of the given parameter,
       * or `null` if the parameter is not present.
       */
      get(param) {
        this.init();
        const res = this.map.get(param);
        return !!res ? res[0] : null;
      }
      /**
       * Retrieves all values for a  parameter.
       * @param param The parameter name.
       * @returns All values in a string array,
       * or `null` if the parameter not present.
       */
      getAll(param) {
        this.init();
        return this.map.get(param) || null;
      }
      /**
       * Retrieves all the parameters for this body.
       * @returns The parameter names in a string array.
       */
      keys() {
        this.init();
        return Array.from(this.map.keys());
      }
      /**
       * Appends a new value to existing values for a parameter.
       * @param param The parameter name.
       * @param value The new value to add.
       * @return A new body with the appended value.
       */
      append(param, value) {
        return this.clone({ param, value, op: "a" });
      }
      /**
       * Constructs a new body with appended values for the given parameter name.
       * @param params parameters and values
       * @return A new body with the new value.
       */
      appendAll(params) {
        const updates = [];
        Object.keys(params).forEach((param) => {
          const value = params[param];
          if (Array.isArray(value)) {
            value.forEach((_value) => {
              updates.push({ param, value: _value, op: "a" });
            });
          } else {
            updates.push({ param, value, op: "a" });
          }
        });
        return this.clone(updates);
      }
      /**
       * Replaces the value for a parameter.
       * @param param The parameter name.
       * @param value The new value.
       * @return A new body with the new value.
       */
      set(param, value) {
        return this.clone({ param, value, op: "s" });
      }
      /**
       * Removes a given value or all values from a parameter.
       * @param param The parameter name.
       * @param value The value to remove, if provided.
       * @return A new body with the given value removed, or with all values
       * removed if no value is specified.
       */
      delete(param, value) {
        return this.clone({ param, value, op: "d" });
      }
      /**
       * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
       * separated by `&`s.
       */
      toString() {
        this.init();
        return this.keys().map((key) => {
          const eKey = this.encoder.encodeKey(key);
          return this.map.get(key).map((value) => eKey + "=" + this.encoder.encodeValue(value)).join("&");
        }).filter((param) => param !== "").join("&");
      }
      clone(update) {
        const clone = new _HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat(update);
        return clone;
      }
      init() {
        if (this.map === null) {
          this.map = /* @__PURE__ */ new Map();
        }
        if (this.cloneFrom !== null) {
          this.cloneFrom.init();
          this.cloneFrom.keys().forEach((key) => this.map.set(key, this.cloneFrom.map.get(key)));
          this.updates.forEach((update) => {
            switch (update.op) {
              case "a":
              case "s":
                const base = (update.op === "a" ? this.map.get(update.param) : void 0) || [];
                base.push(valueToString(update.value));
                this.map.set(update.param, base);
                break;
              case "d":
                if (update.value !== void 0) {
                  let base2 = this.map.get(update.param) || [];
                  const idx = base2.indexOf(valueToString(update.value));
                  if (idx !== -1) {
                    base2.splice(idx, 1);
                  }
                  if (base2.length > 0) {
                    this.map.set(update.param, base2);
                  } else {
                    this.map.delete(update.param);
                  }
                } else {
                  this.map.delete(update.param);
                  break;
                }
            }
          });
          this.cloneFrom = this.updates = null;
        }
      }
    };
    HttpContext = class {
      map = /* @__PURE__ */ new Map();
      /**
       * Store a value in the context. If a value is already present it will be overwritten.
       *
       * @param token The reference to an instance of `HttpContextToken`.
       * @param value The value to store.
       *
       * @returns A reference to itself for easy chaining.
       */
      set(token, value) {
        this.map.set(token, value);
        return this;
      }
      /**
       * Retrieve the value associated with the given token.
       *
       * @param token The reference to an instance of `HttpContextToken`.
       *
       * @returns The stored value or default if one is defined.
       */
      get(token) {
        if (!this.map.has(token)) {
          this.map.set(token, token.defaultValue());
        }
        return this.map.get(token);
      }
      /**
       * Delete the value associated with the given token.
       *
       * @param token The reference to an instance of `HttpContextToken`.
       *
       * @returns A reference to itself for easy chaining.
       */
      delete(token) {
        this.map.delete(token);
        return this;
      }
      /**
       * Checks for existence of a given token.
       *
       * @param token The reference to an instance of `HttpContextToken`.
       *
       * @returns True if the token exists, false otherwise.
       */
      has(token) {
        return this.map.has(token);
      }
      /**
       * @returns a list of tokens currently stored in the context.
       */
      keys() {
        return this.map.keys();
      }
    };
    CONTENT_TYPE_HEADER = "Content-Type";
    ACCEPT_HEADER = "Accept";
    X_REQUEST_URL_HEADER = "X-Request-URL";
    TEXT_CONTENT_TYPE = "text/plain";
    JSON_CONTENT_TYPE = "application/json";
    ACCEPT_HEADER_VALUE = `${JSON_CONTENT_TYPE}, ${TEXT_CONTENT_TYPE}, */*`;
    HttpRequest = class _HttpRequest {
      url;
      /**
       * The request body, or `null` if one isn't set.
       *
       * Bodies are not enforced to be immutable, as they can include a reference to any
       * user-defined data type. However, interceptors should take care to preserve
       * idempotence by treating them as such.
       */
      body = null;
      /**
       * Outgoing headers for this request.
       */
      headers;
      /**
       * Shared and mutable context that can be used by interceptors
       */
      context;
      /**
       * Whether this request should be made in a way that exposes progress events.
       *
       * Progress events are expensive (change detection runs on each event) and so
       * they should only be requested if the consumer intends to monitor them.
       *
       * Note: The `FetchBackend` doesn't support progress report on uploads.
       */
      reportProgress = false;
      /**
       * Whether this request should be sent with outgoing credentials (cookies).
       */
      withCredentials = false;
      /**
       *  The credentials mode of the request, which determines how cookies and HTTP authentication are handled.
       *  This can affect whether cookies are sent with the request, and how authentication is handled.
       */
      credentials;
      /**
       * When using the fetch implementation and set to `true`, the browser will not abort the associated request if the page that initiated it is unloaded before the request is complete.
       */
      keepalive = false;
      /**
       * Controls how the request will interact with the browser's HTTP cache.
       * This affects whether a response is retrieved from the cache, how it is stored, or if it bypasses the cache altogether.
       */
      cache;
      /**
       * Indicates the relative priority of the request. This may be used by the browser to decide the order in which requests are dispatched and resources fetched.
       */
      priority;
      /**
       * The mode of the request, which determines how the request will interact with the browser's security model.
       * This can affect things like CORS (Cross-Origin Resource Sharing) and same-origin policies.
       */
      mode;
      /**
       * The redirect mode of the request, which determines how redirects are handled.
       * This can affect whether the request follows redirects automatically, or if it fails when a redirect occurs.
       */
      redirect;
      /**
       * The expected response type of the server.
       *
       * This is used to parse the response appropriately before returning it to
       * the requestee.
       */
      responseType = "json";
      /**
       * The outgoing HTTP request method.
       */
      method;
      /**
       * Outgoing URL parameters.
       *
       * To pass a string representation of HTTP parameters in the URL-query-string format,
       * the `HttpParamsOptions`' `fromString` may be used. For example:
       *
       * ```ts
       * new HttpParams({fromString: 'angular=awesome'})
       * ```
       */
      params;
      /**
       * The outgoing URL with all URL parameters set.
       */
      urlWithParams;
      /**
       * The HttpTransferCache option for the request
       */
      transferCache;
      /**
       * The timeout for the backend HTTP request in ms.
       */
      timeout;
      constructor(method, url, third, fourth) {
        this.url = url;
        this.method = method.toUpperCase();
        let options;
        if (mightHaveBody(this.method) || !!fourth) {
          this.body = third !== void 0 ? third : null;
          options = fourth;
        } else {
          options = third;
        }
        if (options) {
          this.reportProgress = !!options.reportProgress;
          this.withCredentials = !!options.withCredentials;
          this.keepalive = !!options.keepalive;
          if (!!options.responseType) {
            this.responseType = options.responseType;
          }
          if (options.headers) {
            this.headers = options.headers;
          }
          if (options.context) {
            this.context = options.context;
          }
          if (options.params) {
            this.params = options.params;
          }
          if (options.priority) {
            this.priority = options.priority;
          }
          if (options.cache) {
            this.cache = options.cache;
          }
          if (options.credentials) {
            this.credentials = options.credentials;
          }
          if (typeof options.timeout === "number") {
            if (options.timeout < 1 || !Number.isInteger(options.timeout)) {
              throw new Error(ngDevMode ? "`timeout` must be a positive integer value" : "");
            }
            this.timeout = options.timeout;
          }
          if (options.mode) {
            this.mode = options.mode;
          }
          if (options.redirect) {
            this.redirect = options.redirect;
          }
          this.transferCache = options.transferCache;
        }
        this.headers ??= new HttpHeaders();
        this.context ??= new HttpContext();
        if (!this.params) {
          this.params = new HttpParams();
          this.urlWithParams = url;
        } else {
          const params = this.params.toString();
          if (params.length === 0) {
            this.urlWithParams = url;
          } else {
            const qIdx = url.indexOf("?");
            const sep = qIdx === -1 ? "?" : qIdx < url.length - 1 ? "&" : "";
            this.urlWithParams = url + sep + params;
          }
        }
      }
      /**
       * Transform the free-form body into a serialized format suitable for
       * transmission to the server.
       */
      serializeBody() {
        if (this.body === null) {
          return null;
        }
        if (typeof this.body === "string" || isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body)) {
          return this.body;
        }
        if (this.body instanceof HttpParams) {
          return this.body.toString();
        }
        if (typeof this.body === "object" || typeof this.body === "boolean" || Array.isArray(this.body)) {
          return JSON.stringify(this.body);
        }
        return this.body.toString();
      }
      /**
       * Examine the body and attempt to infer an appropriate MIME type
       * for it.
       *
       * If no such type can be inferred, this method will return `null`.
       */
      detectContentTypeHeader() {
        if (this.body === null) {
          return null;
        }
        if (isFormData(this.body)) {
          return null;
        }
        if (isBlob(this.body)) {
          return this.body.type || null;
        }
        if (isArrayBuffer(this.body)) {
          return null;
        }
        if (typeof this.body === "string") {
          return TEXT_CONTENT_TYPE;
        }
        if (this.body instanceof HttpParams) {
          return "application/x-www-form-urlencoded;charset=UTF-8";
        }
        if (typeof this.body === "object" || typeof this.body === "number" || typeof this.body === "boolean") {
          return JSON_CONTENT_TYPE;
        }
        return null;
      }
      clone(update = {}) {
        const method = update.method || this.method;
        const url = update.url || this.url;
        const responseType = update.responseType || this.responseType;
        const keepalive = update.keepalive ?? this.keepalive;
        const priority = update.priority || this.priority;
        const cache = update.cache || this.cache;
        const mode = update.mode || this.mode;
        const redirect = update.redirect || this.redirect;
        const credentials = update.credentials || this.credentials;
        const transferCache = update.transferCache ?? this.transferCache;
        const timeout = update.timeout ?? this.timeout;
        const body = update.body !== void 0 ? update.body : this.body;
        const withCredentials = update.withCredentials ?? this.withCredentials;
        const reportProgress = update.reportProgress ?? this.reportProgress;
        let headers = update.headers || this.headers;
        let params = update.params || this.params;
        const context = update.context ?? this.context;
        if (update.setHeaders !== void 0) {
          headers = Object.keys(update.setHeaders).reduce((headers2, name) => headers2.set(name, update.setHeaders[name]), headers);
        }
        if (update.setParams) {
          params = Object.keys(update.setParams).reduce((params2, param) => params2.set(param, update.setParams[param]), params);
        }
        return new _HttpRequest(method, url, body, {
          params,
          headers,
          context,
          reportProgress,
          responseType,
          withCredentials,
          transferCache,
          keepalive,
          cache,
          priority,
          timeout,
          mode,
          redirect,
          credentials
        });
      }
    };
    (function(HttpEventType2) {
      HttpEventType2[HttpEventType2["Sent"] = 0] = "Sent";
      HttpEventType2[HttpEventType2["UploadProgress"] = 1] = "UploadProgress";
      HttpEventType2[HttpEventType2["ResponseHeader"] = 2] = "ResponseHeader";
      HttpEventType2[HttpEventType2["DownloadProgress"] = 3] = "DownloadProgress";
      HttpEventType2[HttpEventType2["Response"] = 4] = "Response";
      HttpEventType2[HttpEventType2["User"] = 5] = "User";
    })(HttpEventType || (HttpEventType = {}));
    HttpResponseBase = class {
      /**
       * All response headers.
       */
      headers;
      /**
       * Response status code.
       */
      status;
      /**
       * Textual description of response status code, defaults to OK.
       *
       * Do not depend on this.
       */
      statusText;
      /**
       * URL of the resource retrieved, or null if not available.
       */
      url;
      /**
       * Whether the status code falls in the 2xx range.
       */
      ok;
      /**
       * Type of the response, narrowed to either the full response or the header.
       */
      type;
      /**
       * Super-constructor for all responses.
       *
       * The single parameter accepted is an initialization hash. Any properties
       * of the response passed there will override the default values.
       */
      constructor(init, defaultStatus = 200, defaultStatusText = "OK") {
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== void 0 ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        this.ok = this.status >= 200 && this.status < 300;
      }
    };
    HttpHeaderResponse = class _HttpHeaderResponse extends HttpResponseBase {
      /**
       * Create a new `HttpHeaderResponse` with the given parameters.
       */
      constructor(init = {}) {
        super(init);
      }
      type = HttpEventType.ResponseHeader;
      /**
       * Copy this `HttpHeaderResponse`, overriding its contents with the
       * given parameter hash.
       */
      clone(update = {}) {
        return new _HttpHeaderResponse({
          headers: update.headers || this.headers,
          status: update.status !== void 0 ? update.status : this.status,
          statusText: update.statusText || this.statusText,
          url: update.url || this.url || void 0
        });
      }
    };
    HttpResponse = class _HttpResponse extends HttpResponseBase {
      /**
       * The response body, or `null` if one was not returned.
       */
      body;
      /**
       * Construct a new `HttpResponse`.
       */
      constructor(init = {}) {
        super(init);
        this.body = init.body !== void 0 ? init.body : null;
      }
      type = HttpEventType.Response;
      clone(update = {}) {
        return new _HttpResponse({
          body: update.body !== void 0 ? update.body : this.body,
          headers: update.headers || this.headers,
          status: update.status !== void 0 ? update.status : this.status,
          statusText: update.statusText || this.statusText,
          url: update.url || this.url || void 0
        });
      }
    };
    HttpErrorResponse = class extends HttpResponseBase {
      name = "HttpErrorResponse";
      message;
      error;
      /**
       * Errors are never okay, even when the status code is in the 2xx success range.
       */
      ok = false;
      constructor(init) {
        super(init, 0, "Unknown Error");
        if (this.status >= 200 && this.status < 300) {
          this.message = `Http failure during parsing for ${init.url || "(unknown url)"}`;
        } else {
          this.message = `Http failure response for ${init.url || "(unknown url)"}: ${init.status} ${init.statusText}`;
        }
        this.error = init.error || null;
      }
    };
    HTTP_STATUS_CODE_OK = 200;
    HTTP_STATUS_CODE_NO_CONTENT = 204;
    (function(HttpStatusCode2) {
      HttpStatusCode2[HttpStatusCode2["Continue"] = 100] = "Continue";
      HttpStatusCode2[HttpStatusCode2["SwitchingProtocols"] = 101] = "SwitchingProtocols";
      HttpStatusCode2[HttpStatusCode2["Processing"] = 102] = "Processing";
      HttpStatusCode2[HttpStatusCode2["EarlyHints"] = 103] = "EarlyHints";
      HttpStatusCode2[HttpStatusCode2["Ok"] = 200] = "Ok";
      HttpStatusCode2[HttpStatusCode2["Created"] = 201] = "Created";
      HttpStatusCode2[HttpStatusCode2["Accepted"] = 202] = "Accepted";
      HttpStatusCode2[HttpStatusCode2["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
      HttpStatusCode2[HttpStatusCode2["NoContent"] = 204] = "NoContent";
      HttpStatusCode2[HttpStatusCode2["ResetContent"] = 205] = "ResetContent";
      HttpStatusCode2[HttpStatusCode2["PartialContent"] = 206] = "PartialContent";
      HttpStatusCode2[HttpStatusCode2["MultiStatus"] = 207] = "MultiStatus";
      HttpStatusCode2[HttpStatusCode2["AlreadyReported"] = 208] = "AlreadyReported";
      HttpStatusCode2[HttpStatusCode2["ImUsed"] = 226] = "ImUsed";
      HttpStatusCode2[HttpStatusCode2["MultipleChoices"] = 300] = "MultipleChoices";
      HttpStatusCode2[HttpStatusCode2["MovedPermanently"] = 301] = "MovedPermanently";
      HttpStatusCode2[HttpStatusCode2["Found"] = 302] = "Found";
      HttpStatusCode2[HttpStatusCode2["SeeOther"] = 303] = "SeeOther";
      HttpStatusCode2[HttpStatusCode2["NotModified"] = 304] = "NotModified";
      HttpStatusCode2[HttpStatusCode2["UseProxy"] = 305] = "UseProxy";
      HttpStatusCode2[HttpStatusCode2["Unused"] = 306] = "Unused";
      HttpStatusCode2[HttpStatusCode2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
      HttpStatusCode2[HttpStatusCode2["PermanentRedirect"] = 308] = "PermanentRedirect";
      HttpStatusCode2[HttpStatusCode2["BadRequest"] = 400] = "BadRequest";
      HttpStatusCode2[HttpStatusCode2["Unauthorized"] = 401] = "Unauthorized";
      HttpStatusCode2[HttpStatusCode2["PaymentRequired"] = 402] = "PaymentRequired";
      HttpStatusCode2[HttpStatusCode2["Forbidden"] = 403] = "Forbidden";
      HttpStatusCode2[HttpStatusCode2["NotFound"] = 404] = "NotFound";
      HttpStatusCode2[HttpStatusCode2["MethodNotAllowed"] = 405] = "MethodNotAllowed";
      HttpStatusCode2[HttpStatusCode2["NotAcceptable"] = 406] = "NotAcceptable";
      HttpStatusCode2[HttpStatusCode2["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
      HttpStatusCode2[HttpStatusCode2["RequestTimeout"] = 408] = "RequestTimeout";
      HttpStatusCode2[HttpStatusCode2["Conflict"] = 409] = "Conflict";
      HttpStatusCode2[HttpStatusCode2["Gone"] = 410] = "Gone";
      HttpStatusCode2[HttpStatusCode2["LengthRequired"] = 411] = "LengthRequired";
      HttpStatusCode2[HttpStatusCode2["PreconditionFailed"] = 412] = "PreconditionFailed";
      HttpStatusCode2[HttpStatusCode2["PayloadTooLarge"] = 413] = "PayloadTooLarge";
      HttpStatusCode2[HttpStatusCode2["UriTooLong"] = 414] = "UriTooLong";
      HttpStatusCode2[HttpStatusCode2["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
      HttpStatusCode2[HttpStatusCode2["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
      HttpStatusCode2[HttpStatusCode2["ExpectationFailed"] = 417] = "ExpectationFailed";
      HttpStatusCode2[HttpStatusCode2["ImATeapot"] = 418] = "ImATeapot";
      HttpStatusCode2[HttpStatusCode2["MisdirectedRequest"] = 421] = "MisdirectedRequest";
      HttpStatusCode2[HttpStatusCode2["UnprocessableEntity"] = 422] = "UnprocessableEntity";
      HttpStatusCode2[HttpStatusCode2["Locked"] = 423] = "Locked";
      HttpStatusCode2[HttpStatusCode2["FailedDependency"] = 424] = "FailedDependency";
      HttpStatusCode2[HttpStatusCode2["TooEarly"] = 425] = "TooEarly";
      HttpStatusCode2[HttpStatusCode2["UpgradeRequired"] = 426] = "UpgradeRequired";
      HttpStatusCode2[HttpStatusCode2["PreconditionRequired"] = 428] = "PreconditionRequired";
      HttpStatusCode2[HttpStatusCode2["TooManyRequests"] = 429] = "TooManyRequests";
      HttpStatusCode2[HttpStatusCode2["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
      HttpStatusCode2[HttpStatusCode2["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
      HttpStatusCode2[HttpStatusCode2["InternalServerError"] = 500] = "InternalServerError";
      HttpStatusCode2[HttpStatusCode2["NotImplemented"] = 501] = "NotImplemented";
      HttpStatusCode2[HttpStatusCode2["BadGateway"] = 502] = "BadGateway";
      HttpStatusCode2[HttpStatusCode2["ServiceUnavailable"] = 503] = "ServiceUnavailable";
      HttpStatusCode2[HttpStatusCode2["GatewayTimeout"] = 504] = "GatewayTimeout";
      HttpStatusCode2[HttpStatusCode2["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
      HttpStatusCode2[HttpStatusCode2["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
      HttpStatusCode2[HttpStatusCode2["InsufficientStorage"] = 507] = "InsufficientStorage";
      HttpStatusCode2[HttpStatusCode2["LoopDetected"] = 508] = "LoopDetected";
      HttpStatusCode2[HttpStatusCode2["NotExtended"] = 510] = "NotExtended";
      HttpStatusCode2[HttpStatusCode2["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
    })(HttpStatusCode || (HttpStatusCode = {}));
    HttpClient = class _HttpClient {
      handler;
      constructor(handler) {
        this.handler = handler;
      }
      /**
       * Constructs an observable for a generic HTTP request that, when subscribed,
       * fires the request through the chain of registered interceptors and on to the
       * server.
       *
       * You can pass an `HttpRequest` directly as the only parameter. In this case,
       * the call returns an observable of the raw `HttpEvent` stream.
       *
       * Alternatively you can pass an HTTP method as the first parameter,
       * a URL string as the second, and an options hash containing the request body as the third.
       * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
       * type of returned observable.
       *   * The `responseType` value determines how a successful response body is parsed.
       *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
       * object as a type parameter to the call.
       *
       * The `observe` value determines the return type, according to what you are interested in
       * observing.
       *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
       * progress events by default.
       *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
       * where the `T` parameter depends on the `responseType` and any optionally provided type
       * parameter.
       *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
       *
       */
      request(first, url, options = {}) {
        let req;
        if (first instanceof HttpRequest) {
          req = first;
        } else {
          let headers = void 0;
          if (options.headers instanceof HttpHeaders) {
            headers = options.headers;
          } else {
            headers = new HttpHeaders(options.headers);
          }
          let params = void 0;
          if (!!options.params) {
            if (options.params instanceof HttpParams) {
              params = options.params;
            } else {
              params = new HttpParams({ fromObject: options.params });
            }
          }
          req = new HttpRequest(first, url, options.body !== void 0 ? options.body : null, {
            headers,
            context: options.context,
            params,
            reportProgress: options.reportProgress,
            // By default, JSON is assumed to be returned for all calls.
            responseType: options.responseType || "json",
            withCredentials: options.withCredentials,
            transferCache: options.transferCache,
            keepalive: options.keepalive,
            priority: options.priority,
            cache: options.cache,
            mode: options.mode,
            redirect: options.redirect,
            credentials: options.credentials
          });
        }
        const events$ = of(req).pipe(concatMap((req2) => this.handler.handle(req2)));
        if (first instanceof HttpRequest || options.observe === "events") {
          return events$;
        }
        const res$ = events$.pipe(filter((event) => event instanceof HttpResponse));
        switch (options.observe || "body") {
          case "body":
            switch (req.responseType) {
              case "arraybuffer":
                return res$.pipe(map((res) => {
                  if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                    throw new RuntimeError(2806, ngDevMode && "Response is not an ArrayBuffer.");
                  }
                  return res.body;
                }));
              case "blob":
                return res$.pipe(map((res) => {
                  if (res.body !== null && !(res.body instanceof Blob)) {
                    throw new RuntimeError(2807, ngDevMode && "Response is not a Blob.");
                  }
                  return res.body;
                }));
              case "text":
                return res$.pipe(map((res) => {
                  if (res.body !== null && typeof res.body !== "string") {
                    throw new RuntimeError(2808, ngDevMode && "Response is not a string.");
                  }
                  return res.body;
                }));
              case "json":
              default:
                return res$.pipe(map((res) => res.body));
            }
          case "response":
            return res$;
          default:
            throw new RuntimeError(2809, ngDevMode && `Unreachable: unhandled observe type ${options.observe}}`);
        }
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `DELETE` request to execute on the server. See the individual overloads for
       * details on the return type.
       *
       * @param url     The endpoint URL.
       * @param options The HTTP options to send with the request.
       *
       */
      delete(url, options = {}) {
        return this.request("DELETE", url, options);
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `GET` request to execute on the server. See the individual overloads for
       * details on the return type.
       */
      get(url, options = {}) {
        return this.request("GET", url, options);
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `HEAD` request to execute on the server. The `HEAD` method returns
       * meta information about the resource without transferring the
       * resource itself. See the individual overloads for
       * details on the return type.
       */
      head(url, options = {}) {
        return this.request("HEAD", url, options);
      }
      /**
       * Constructs an `Observable` that, when subscribed, causes a request with the special method
       * `JSONP` to be dispatched via the interceptor pipeline.
       * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
       * API endpoints that don't support newer,
       * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
       * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
       * requests even if the API endpoint is not located on the same domain (origin) as the client-side
       * application making the request.
       * The endpoint API must support JSONP callback for JSONP requests to work.
       * The resource API returns the JSON response wrapped in a callback function.
       * You can pass the callback function name as one of the query parameters.
       * Note that JSONP requests can only be used with `GET` requests.
       *
       * @param url The resource URL.
       * @param callbackParam The callback function name.
       *
       */
      jsonp(url, callbackParam) {
        return this.request("JSONP", url, {
          params: new HttpParams().append(callbackParam, "JSONP_CALLBACK"),
          observe: "body",
          responseType: "json"
        });
      }
      /**
       * Constructs an `Observable` that, when subscribed, causes the configured
       * `OPTIONS` request to execute on the server. This method allows the client
       * to determine the supported HTTP methods and other capabilities of an endpoint,
       * without implying a resource action. See the individual overloads for
       * details on the return type.
       */
      options(url, options = {}) {
        return this.request("OPTIONS", url, options);
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `PATCH` request to execute on the server. See the individual overloads for
       * details on the return type.
       */
      patch(url, body, options = {}) {
        return this.request("PATCH", url, addBody(options, body));
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `POST` request to execute on the server. The server responds with the location of
       * the replaced resource. See the individual overloads for
       * details on the return type.
       */
      post(url, body, options = {}) {
        return this.request("POST", url, addBody(options, body));
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
       * with a new set of values.
       * See the individual overloads for details on the return type.
       */
      put(url, body, options = {}) {
        return this.request("PUT", url, addBody(options, body));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpClient, deps: [{ token: HttpHandler }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpClient });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: HttpClient, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: HttpHandler }] });
    XSSI_PREFIX$1 = /^\)\]\}',?\n/;
    FETCH_BACKEND = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "FETCH_BACKEND" : "");
    FetchBackend = class _FetchBackend {
      // We use an arrow function to always reference the current global implementation of `fetch`.
      // This is helpful for cases when the global `fetch` implementation is modified by external code,
      // see https://github.com/angular/angular/issues/57527.
      fetchImpl = inject(FetchFactory, { optional: true })?.fetch ?? ((...args) => globalThis.fetch(...args));
      ngZone = inject(NgZone);
      destroyRef = inject(DestroyRef);
      destroyed = false;
      constructor() {
        this.destroyRef.onDestroy(() => {
          this.destroyed = true;
        });
      }
      handle(request) {
        return new Observable((observer) => {
          const aborter = new AbortController();
          this.doRequest(request, aborter.signal, observer).then(noop, (error) => observer.error(new HttpErrorResponse({ error })));
          let timeoutId;
          if (request.timeout) {
            timeoutId = this.ngZone.runOutsideAngular(() => setTimeout(() => {
              if (!aborter.signal.aborted) {
                aborter.abort(new DOMException("signal timed out", "TimeoutError"));
              }
            }, request.timeout));
          }
          return () => {
            if (timeoutId !== void 0) {
              clearTimeout(timeoutId);
            }
            aborter.abort();
          };
        });
      }
      doRequest(request, signal2, observer) {
        return __async(this, null, function* () {
          const init = this.createRequestInit(request);
          let response;
          try {
            const fetchPromise = this.ngZone.runOutsideAngular(() => this.fetchImpl(request.urlWithParams, __spreadValues({ signal: signal2 }, init)));
            silenceSuperfluousUnhandledPromiseRejection(fetchPromise);
            observer.next({ type: HttpEventType.Sent });
            response = yield fetchPromise;
          } catch (error) {
            observer.error(new HttpErrorResponse({
              error,
              status: error.status ?? 0,
              statusText: error.statusText,
              url: request.urlWithParams,
              headers: error.headers
            }));
            return;
          }
          const headers = new HttpHeaders(response.headers);
          const statusText = response.statusText;
          const url = getResponseUrl$1(response) ?? request.urlWithParams;
          let status = response.status;
          let body = null;
          if (request.reportProgress) {
            observer.next(new HttpHeaderResponse({ headers, status, statusText, url }));
          }
          if (response.body) {
            const contentLength = response.headers.get("content-length");
            const chunks = [];
            const reader = response.body.getReader();
            let receivedLength = 0;
            let decoder;
            let partialText;
            const reqZone = typeof Zone !== "undefined" && Zone.current;
            let canceled = false;
            yield this.ngZone.runOutsideAngular(() => __async(this, null, function* () {
              while (true) {
                if (this.destroyed) {
                  yield reader.cancel();
                  canceled = true;
                  break;
                }
                const { done, value } = yield reader.read();
                if (done) {
                  break;
                }
                chunks.push(value);
                receivedLength += value.length;
                if (request.reportProgress) {
                  partialText = request.responseType === "text" ? (partialText ?? "") + (decoder ??= new TextDecoder()).decode(value, { stream: true }) : void 0;
                  const reportProgress = () => observer.next({
                    type: HttpEventType.DownloadProgress,
                    total: contentLength ? +contentLength : void 0,
                    loaded: receivedLength,
                    partialText
                  });
                  reqZone ? reqZone.run(reportProgress) : reportProgress();
                }
              }
            }));
            if (canceled) {
              observer.complete();
              return;
            }
            const chunksAll = this.concatChunks(chunks, receivedLength);
            try {
              const contentType = response.headers.get(CONTENT_TYPE_HEADER) ?? "";
              body = this.parseBody(request, chunksAll, contentType, status);
            } catch (error) {
              observer.error(new HttpErrorResponse({
                error,
                headers: new HttpHeaders(response.headers),
                status: response.status,
                statusText: response.statusText,
                url: getResponseUrl$1(response) ?? request.urlWithParams
              }));
              return;
            }
          }
          if (status === 0) {
            status = body ? HTTP_STATUS_CODE_OK : 0;
          }
          const ok = status >= 200 && status < 300;
          if (ok) {
            observer.next(new HttpResponse({
              body,
              headers,
              status,
              statusText,
              url
            }));
            observer.complete();
          } else {
            observer.error(new HttpErrorResponse({
              error: body,
              headers,
              status,
              statusText,
              url
            }));
          }
        });
      }
      parseBody(request, binContent, contentType, status) {
        switch (request.responseType) {
          case "json":
            const text = new TextDecoder().decode(binContent).replace(XSSI_PREFIX$1, "");
            if (text === "") {
              return null;
            }
            try {
              return JSON.parse(text);
            } catch (e) {
              if (status < 200 || status >= 300) {
                return text;
              }
              throw e;
            }
          case "text":
            return new TextDecoder().decode(binContent);
          case "blob":
            return new Blob([binContent], { type: contentType });
          case "arraybuffer":
            return binContent.buffer;
        }
      }
      createRequestInit(req) {
        const headers = {};
        let credentials;
        credentials = req.credentials;
        if (req.withCredentials) {
          (typeof ngDevMode === "undefined" || ngDevMode) && warningOptionsMessage(req);
          credentials = "include";
        }
        req.headers.forEach((name, values) => headers[name] = values.join(","));
        if (!req.headers.has(ACCEPT_HEADER)) {
          headers[ACCEPT_HEADER] = ACCEPT_HEADER_VALUE;
        }
        if (!req.headers.has(CONTENT_TYPE_HEADER)) {
          const detectedType = req.detectContentTypeHeader();
          if (detectedType !== null) {
            headers[CONTENT_TYPE_HEADER] = detectedType;
          }
        }
        return {
          body: req.serializeBody(),
          method: req.method,
          headers,
          credentials,
          keepalive: req.keepalive,
          cache: req.cache,
          priority: req.priority,
          mode: req.mode,
          redirect: req.redirect
        };
      }
      concatChunks(chunks, totalLength) {
        const chunksAll = new Uint8Array(totalLength);
        let position = 0;
        for (const chunk of chunks) {
          chunksAll.set(chunk, position);
          position += chunk.length;
        }
        return chunksAll;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _FetchBackend, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _FetchBackend });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: FetchBackend, decorators: [{
      type: Injectable
    }], ctorParameters: () => [] });
    FetchFactory = class {
    };
    HTTP_INTERCEPTORS = new InjectionToken(ngDevMode ? "HTTP_INTERCEPTORS" : "");
    HTTP_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? "HTTP_INTERCEPTOR_FNS" : "");
    HTTP_ROOT_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? "HTTP_ROOT_INTERCEPTOR_FNS" : "");
    REQUESTS_CONTRIBUTE_TO_STABILITY = new InjectionToken(ngDevMode ? "REQUESTS_CONTRIBUTE_TO_STABILITY" : "", { providedIn: "root", factory: () => true });
    fetchBackendWarningDisplayed = false;
    HttpInterceptorHandler = class _HttpInterceptorHandler extends HttpHandler {
      backend;
      injector;
      chain = null;
      pendingTasks = inject(PendingTasks);
      contributeToStability = inject(REQUESTS_CONTRIBUTE_TO_STABILITY);
      constructor(backend, injector) {
        super();
        this.backend = backend;
        this.injector = injector;
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !fetchBackendWarningDisplayed) {
          const isTestingBackend = this.backend.isTestingBackend;
          if (false) {
            fetchBackendWarningDisplayed = true;
            injector.get(Console).warn(formatRuntimeError(2801, "Angular detected that `HttpClient` is not configured to use `fetch` APIs. It's strongly recommended to enable `fetch` for applications that use Server-Side Rendering for better performance and compatibility. To enable `fetch`, add the `withFetch()` to the `provideHttpClient()` call at the root of the application."));
          }
        }
      }
      handle(initialRequest) {
        if (this.chain === null) {
          const dedupedInterceptorFns = Array.from(/* @__PURE__ */ new Set([
            ...this.injector.get(HTTP_INTERCEPTOR_FNS),
            ...this.injector.get(HTTP_ROOT_INTERCEPTOR_FNS, [])
          ]));
          this.chain = dedupedInterceptorFns.reduceRight((nextSequencedFn, interceptorFn) => chainedInterceptorFn(nextSequencedFn, interceptorFn, this.injector), interceptorChainEndFn);
        }
        if (this.contributeToStability) {
          const removeTask = this.pendingTasks.add();
          return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest)).pipe(finalize(removeTask));
        } else {
          return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest));
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpInterceptorHandler, deps: [{ token: HttpBackend }, { token: EnvironmentInjector }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpInterceptorHandler });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: HttpInterceptorHandler, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: HttpBackend }, { type: EnvironmentInjector }] });
    nextRequestId = 0;
    JSONP_ERR_NO_CALLBACK = "JSONP injected script did not invoke callback.";
    JSONP_ERR_WRONG_METHOD = "JSONP requests must use JSONP request method.";
    JSONP_ERR_WRONG_RESPONSE_TYPE = "JSONP requests must use Json response type.";
    JSONP_ERR_HEADERS_NOT_SUPPORTED = "JSONP requests do not support headers.";
    JsonpCallbackContext = class {
    };
    JsonpClientBackend = class _JsonpClientBackend {
      callbackMap;
      document;
      /**
       * A resolved promise that can be used to schedule microtasks in the event handlers.
       */
      resolvedPromise = Promise.resolve();
      constructor(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
      }
      /**
       * Get the name of the next callback method, by incrementing the global `nextRequestId`.
       */
      nextCallback() {
        return `ng_jsonp_callback_${nextRequestId++}`;
      }
      /**
       * Processes a JSONP request and returns an event stream of the results.
       * @param req The request object.
       * @returns An observable of the response events.
       *
       */
      handle(req) {
        if (req.method !== "JSONP") {
          throw new RuntimeError(2810, ngDevMode && JSONP_ERR_WRONG_METHOD);
        } else if (req.responseType !== "json") {
          throw new RuntimeError(2811, ngDevMode && JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        if (req.headers.keys().length > 0) {
          throw new RuntimeError(2812, ngDevMode && JSONP_ERR_HEADERS_NOT_SUPPORTED);
        }
        return new Observable((observer) => {
          const callback = this.nextCallback();
          const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
          const node = this.document.createElement("script");
          node.src = url;
          let body = null;
          let finished = false;
          this.callbackMap[callback] = (data) => {
            delete this.callbackMap[callback];
            body = data;
            finished = true;
          };
          const cleanup = () => {
            node.removeEventListener("load", onLoad);
            node.removeEventListener("error", onError);
            node.remove();
            delete this.callbackMap[callback];
          };
          const onLoad = () => {
            this.resolvedPromise.then(() => {
              cleanup();
              if (!finished) {
                observer.error(new HttpErrorResponse({
                  url,
                  status: 0,
                  statusText: "JSONP Error",
                  error: new Error(JSONP_ERR_NO_CALLBACK)
                }));
                return;
              }
              observer.next(new HttpResponse({
                body,
                status: HTTP_STATUS_CODE_OK,
                statusText: "OK",
                url
              }));
              observer.complete();
            });
          };
          const onError = (error) => {
            cleanup();
            observer.error(new HttpErrorResponse({
              error,
              status: 0,
              statusText: "JSONP Error",
              url
            }));
          };
          node.addEventListener("load", onLoad);
          node.addEventListener("error", onError);
          this.document.body.appendChild(node);
          observer.next({ type: HttpEventType.Sent });
          return () => {
            if (!finished) {
              this.removeListeners(node);
            }
            cleanup();
          };
        });
      }
      removeListeners(script) {
        foreignDocument ??= this.document.implementation.createHTMLDocument();
        foreignDocument.adoptNode(script);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _JsonpClientBackend, deps: [{ token: JsonpCallbackContext }, { token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _JsonpClientBackend });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: JsonpClientBackend, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: JsonpCallbackContext }, { type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    JsonpInterceptor = class _JsonpInterceptor {
      injector;
      constructor(injector) {
        this.injector = injector;
      }
      /**
       * Identifies and handles a given JSONP request.
       * @param initialRequest The outgoing request object to handle.
       * @param next The next interceptor in the chain, or the backend
       * if no interceptors remain in the chain.
       * @returns An observable of the event stream.
       */
      intercept(initialRequest, next) {
        return runInInjectionContext(this.injector, () => jsonpInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _JsonpInterceptor, deps: [{ token: EnvironmentInjector }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _JsonpInterceptor });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: JsonpInterceptor, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: EnvironmentInjector }] });
    XSSI_PREFIX = /^\)\]\}',?\n/;
    X_REQUEST_URL_REGEXP = RegExp(`^${X_REQUEST_URL_HEADER}:`, "m");
    HttpXhrBackend = class _HttpXhrBackend {
      xhrFactory;
      constructor(xhrFactory) {
        this.xhrFactory = xhrFactory;
      }
      /**
       * Processes a request and returns a stream of response events.
       * @param req The request object.
       * @returns An observable of the response events.
       */
      handle(req) {
        if (req.method === "JSONP") {
          throw new RuntimeError(-2800, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot make a JSONP request without JSONP support. To fix the problem, either add the \`withJsonpSupport()\` call (if \`provideHttpClient()\` is used) or import the \`HttpClientJsonpModule\` in the root NgModule.`);
        }
        ngDevMode && validateXhrCompatibility(req);
        const xhrFactory = this.xhrFactory;
        const source = (
          // Note that `ɵloadImpl` is never defined in client bundles and can be
          // safely dropped whenever we're running in the browser.
          // This branching is redundant.
          // The `ngServerMode` guard also enables tree-shaking of the `from()`
          // function from the common bundle, as it's only used in server code.
          false ? from(xhrFactory.\u0275loadImpl()) : of(null)
        );
        return source.pipe(switchMap(() => {
          return new Observable((observer) => {
            const xhr = xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (req.withCredentials) {
              xhr.withCredentials = true;
            }
            req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(",")));
            if (!req.headers.has(ACCEPT_HEADER)) {
              xhr.setRequestHeader(ACCEPT_HEADER, ACCEPT_HEADER_VALUE);
            }
            if (!req.headers.has(CONTENT_TYPE_HEADER)) {
              const detectedType = req.detectContentTypeHeader();
              if (detectedType !== null) {
                xhr.setRequestHeader(CONTENT_TYPE_HEADER, detectedType);
              }
            }
            if (req.timeout) {
              xhr.timeout = req.timeout;
            }
            if (req.responseType) {
              const responseType = req.responseType.toLowerCase();
              xhr.responseType = responseType !== "json" ? responseType : "text";
            }
            const reqBody = req.serializeBody();
            let headerResponse = null;
            const partialFromXhr = () => {
              if (headerResponse !== null) {
                return headerResponse;
              }
              const statusText = xhr.statusText || "OK";
              const headers = new HttpHeaders(xhr.getAllResponseHeaders());
              const url = getResponseUrl(xhr) || req.url;
              headerResponse = new HttpHeaderResponse({ headers, status: xhr.status, statusText, url });
              return headerResponse;
            };
            const onLoad = () => {
              let { headers, status, statusText, url } = partialFromXhr();
              let body = null;
              if (status !== HTTP_STATUS_CODE_NO_CONTENT) {
                body = typeof xhr.response === "undefined" ? xhr.responseText : xhr.response;
              }
              if (status === 0) {
                status = !!body ? HTTP_STATUS_CODE_OK : 0;
              }
              let ok = status >= 200 && status < 300;
              if (req.responseType === "json" && typeof body === "string") {
                const originalBody = body;
                body = body.replace(XSSI_PREFIX, "");
                try {
                  body = body !== "" ? JSON.parse(body) : null;
                } catch (error) {
                  body = originalBody;
                  if (ok) {
                    ok = false;
                    body = { error, text: body };
                  }
                }
              }
              if (ok) {
                observer.next(new HttpResponse({
                  body,
                  headers,
                  status,
                  statusText,
                  url: url || void 0
                }));
                observer.complete();
              } else {
                observer.error(new HttpErrorResponse({
                  // The error in this case is the response body (error from the server).
                  error: body,
                  headers,
                  status,
                  statusText,
                  url: url || void 0
                }));
              }
            };
            const onError = (error) => {
              const { url } = partialFromXhr();
              const res = new HttpErrorResponse({
                error,
                status: xhr.status || 0,
                statusText: xhr.statusText || "Unknown Error",
                url: url || void 0
              });
              observer.error(res);
            };
            let onTimeout = onError;
            if (req.timeout) {
              onTimeout = (_) => {
                const { url } = partialFromXhr();
                const res = new HttpErrorResponse({
                  error: new DOMException("Request timed out", "TimeoutError"),
                  status: xhr.status || 0,
                  statusText: xhr.statusText || "Request timeout",
                  url: url || void 0
                });
                observer.error(res);
              };
            }
            let sentHeaders = false;
            const onDownProgress = (event) => {
              if (!sentHeaders) {
                observer.next(partialFromXhr());
                sentHeaders = true;
              }
              let progressEvent = {
                type: HttpEventType.DownloadProgress,
                loaded: event.loaded
              };
              if (event.lengthComputable) {
                progressEvent.total = event.total;
              }
              if (req.responseType === "text" && !!xhr.responseText) {
                progressEvent.partialText = xhr.responseText;
              }
              observer.next(progressEvent);
            };
            const onUpProgress = (event) => {
              let progress = {
                type: HttpEventType.UploadProgress,
                loaded: event.loaded
              };
              if (event.lengthComputable) {
                progress.total = event.total;
              }
              observer.next(progress);
            };
            xhr.addEventListener("load", onLoad);
            xhr.addEventListener("error", onError);
            xhr.addEventListener("timeout", onTimeout);
            xhr.addEventListener("abort", onError);
            if (req.reportProgress) {
              xhr.addEventListener("progress", onDownProgress);
              if (reqBody !== null && xhr.upload) {
                xhr.upload.addEventListener("progress", onUpProgress);
              }
            }
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            return () => {
              xhr.removeEventListener("error", onError);
              xhr.removeEventListener("abort", onError);
              xhr.removeEventListener("load", onLoad);
              xhr.removeEventListener("timeout", onTimeout);
              if (req.reportProgress) {
                xhr.removeEventListener("progress", onDownProgress);
                if (reqBody !== null && xhr.upload) {
                  xhr.upload.removeEventListener("progress", onUpProgress);
                }
              }
              if (xhr.readyState !== xhr.DONE) {
                xhr.abort();
              }
            };
          });
        }));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpXhrBackend, deps: [{ token: XhrFactory }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpXhrBackend });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: HttpXhrBackend, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: XhrFactory }] });
    XSRF_ENABLED = new InjectionToken(ngDevMode ? "XSRF_ENABLED" : "");
    XSRF_DEFAULT_COOKIE_NAME = "XSRF-TOKEN";
    XSRF_COOKIE_NAME = new InjectionToken(ngDevMode ? "XSRF_COOKIE_NAME" : "", {
      providedIn: "root",
      factory: () => XSRF_DEFAULT_COOKIE_NAME
    });
    XSRF_DEFAULT_HEADER_NAME = "X-XSRF-TOKEN";
    XSRF_HEADER_NAME = new InjectionToken(ngDevMode ? "XSRF_HEADER_NAME" : "", {
      providedIn: "root",
      factory: () => XSRF_DEFAULT_HEADER_NAME
    });
    HttpXsrfTokenExtractor = class {
    };
    HttpXsrfCookieExtractor = class _HttpXsrfCookieExtractor {
      doc;
      cookieName;
      lastCookieString = "";
      lastToken = null;
      /**
       * @internal for testing
       */
      parseCount = 0;
      constructor(doc, cookieName) {
        this.doc = doc;
        this.cookieName = cookieName;
      }
      getToken() {
        if (false) {
          return null;
        }
        const cookieString = this.doc.cookie || "";
        if (cookieString !== this.lastCookieString) {
          this.parseCount++;
          this.lastToken = parseCookieValue(cookieString, this.cookieName);
          this.lastCookieString = cookieString;
        }
        return this.lastToken;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpXsrfCookieExtractor, deps: [{ token: DOCUMENT }, { token: XSRF_COOKIE_NAME }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpXsrfCookieExtractor });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: HttpXsrfCookieExtractor, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }, { type: void 0, decorators: [{
      type: Inject,
      args: [XSRF_COOKIE_NAME]
    }] }] });
    HttpXsrfInterceptor = class _HttpXsrfInterceptor {
      injector;
      constructor(injector) {
        this.injector = injector;
      }
      intercept(initialRequest, next) {
        return runInInjectionContext(this.injector, () => xsrfInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpXsrfInterceptor, deps: [{ token: EnvironmentInjector }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpXsrfInterceptor });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: HttpXsrfInterceptor, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: EnvironmentInjector }] });
    (function(HttpFeatureKind2) {
      HttpFeatureKind2[HttpFeatureKind2["Interceptors"] = 0] = "Interceptors";
      HttpFeatureKind2[HttpFeatureKind2["LegacyInterceptors"] = 1] = "LegacyInterceptors";
      HttpFeatureKind2[HttpFeatureKind2["CustomXsrfConfiguration"] = 2] = "CustomXsrfConfiguration";
      HttpFeatureKind2[HttpFeatureKind2["NoXsrfProtection"] = 3] = "NoXsrfProtection";
      HttpFeatureKind2[HttpFeatureKind2["JsonpSupport"] = 4] = "JsonpSupport";
      HttpFeatureKind2[HttpFeatureKind2["RequestsMadeViaParent"] = 5] = "RequestsMadeViaParent";
      HttpFeatureKind2[HttpFeatureKind2["Fetch"] = 6] = "Fetch";
    })(HttpFeatureKind || (HttpFeatureKind = {}));
    LEGACY_INTERCEPTOR_FN = new InjectionToken(ngDevMode ? "LEGACY_INTERCEPTOR_FN" : "");
    HttpClientXsrfModule = class _HttpClientXsrfModule {
      /**
       * Disable the default XSRF protection.
       */
      static disable() {
        return {
          ngModule: _HttpClientXsrfModule,
          providers: [withNoXsrfProtection().\u0275providers]
        };
      }
      /**
       * Configure XSRF protection.
       * @param options An object that can specify either or both
       * cookie name or header name.
       * - Cookie name default is `XSRF-TOKEN`.
       * - Header name default is `X-XSRF-TOKEN`.
       *
       */
      static withOptions(options = {}) {
        return {
          ngModule: _HttpClientXsrfModule,
          providers: withXsrfConfiguration(options).\u0275providers
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpClientXsrfModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpClientXsrfModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpClientXsrfModule, providers: [
        HttpXsrfInterceptor,
        { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
        { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
        withXsrfConfiguration({
          cookieName: XSRF_DEFAULT_COOKIE_NAME,
          headerName: XSRF_DEFAULT_HEADER_NAME
        }).\u0275providers,
        { provide: XSRF_ENABLED, useValue: true }
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: HttpClientXsrfModule, decorators: [{
      type: NgModule,
      args: [{
        providers: [
          HttpXsrfInterceptor,
          { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
          { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
          withXsrfConfiguration({
            cookieName: XSRF_DEFAULT_COOKIE_NAME,
            headerName: XSRF_DEFAULT_HEADER_NAME
          }).\u0275providers,
          { provide: XSRF_ENABLED, useValue: true }
        ]
      }]
    }] });
    HttpClientModule = class _HttpClientModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpClientModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpClientModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpClientModule, providers: [provideHttpClient(withInterceptorsFromDi())] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: HttpClientModule, decorators: [{
      type: NgModule,
      args: [{
        /**
         * Configures the dependency injector where it is imported
         * with supporting services for HTTP communications.
         */
        providers: [provideHttpClient(withInterceptorsFromDi())]
      }]
    }] });
    HttpClientJsonpModule = class _HttpClientJsonpModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpClientJsonpModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpClientJsonpModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HttpClientJsonpModule, providers: [withJsonpSupport().\u0275providers] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: HttpClientJsonpModule, decorators: [{
      type: NgModule,
      args: [{
        providers: [withJsonpSupport().\u0275providers]
      }]
    }] });
  }
});

// node_modules/@angular/common/fesm2022/http.mjs
function makeHttpResourceFn(responseType) {
  return function httpResource2(request, options) {
    if (ngDevMode && !options?.injector) {
      assertInInjectionContext(httpResource2);
    }
    const injector = options?.injector ?? inject(Injector);
    return new HttpResourceImpl(injector, () => normalizeRequest(request, responseType), options?.defaultValue, options?.parse, options?.equal);
  };
}
function normalizeRequest(request, responseType) {
  let unwrappedRequest = typeof request === "function" ? request() : request;
  if (unwrappedRequest === void 0) {
    return void 0;
  } else if (typeof unwrappedRequest === "string") {
    unwrappedRequest = { url: unwrappedRequest };
  }
  const headers = unwrappedRequest.headers instanceof HttpHeaders ? unwrappedRequest.headers : new HttpHeaders(unwrappedRequest.headers);
  const params = unwrappedRequest.params instanceof HttpParams ? unwrappedRequest.params : new HttpParams({ fromObject: unwrappedRequest.params });
  return new HttpRequest(unwrappedRequest.method ?? "GET", unwrappedRequest.url, unwrappedRequest.body ?? null, {
    headers,
    params,
    reportProgress: unwrappedRequest.reportProgress,
    withCredentials: unwrappedRequest.withCredentials,
    keepalive: unwrappedRequest.keepalive,
    cache: unwrappedRequest.cache,
    priority: unwrappedRequest.priority,
    mode: unwrappedRequest.mode,
    redirect: unwrappedRequest.redirect,
    responseType,
    context: unwrappedRequest.context,
    transferCache: unwrappedRequest.transferCache,
    credentials: unwrappedRequest.credentials,
    timeout: unwrappedRequest.timeout
  });
}
var httpResource, HttpResourceImpl, HTTP_TRANSFER_CACHE_ORIGIN_MAP, CACHE_OPTIONS;
var init_http = __esm({
  "node_modules/@angular/common/fesm2022/http.mjs"() {
    "use strict";
    init_module();
    init_core();
    httpResource = (() => {
      const jsonFn = makeHttpResourceFn("json");
      jsonFn.arrayBuffer = makeHttpResourceFn("arraybuffer");
      jsonFn.blob = makeHttpResourceFn("blob");
      jsonFn.text = makeHttpResourceFn("text");
      return jsonFn;
    })();
    HttpResourceImpl = class extends ResourceImpl {
      client;
      _headers = linkedSignal({
        source: this.extRequest,
        computation: () => void 0
      });
      _progress = linkedSignal({
        source: this.extRequest,
        computation: () => void 0
      });
      _statusCode = linkedSignal({
        source: this.extRequest,
        computation: () => void 0
      });
      headers = computed(() => this.status() === "resolved" || this.status() === "error" ? this._headers() : void 0, ...ngDevMode ? [{ debugName: "headers" }] : []);
      progress = this._progress.asReadonly();
      statusCode = this._statusCode.asReadonly();
      constructor(injector, request, defaultValue, parse, equal) {
        super(request, ({ params: request2, abortSignal }) => {
          let sub;
          const onAbort = () => sub.unsubscribe();
          abortSignal.addEventListener("abort", onAbort);
          const stream = signal({ value: void 0 }, ...ngDevMode ? [{ debugName: "stream" }] : []);
          let resolve;
          const promise = new Promise((r) => resolve = r);
          const send = (value) => {
            stream.set(value);
            resolve?.(stream);
            resolve = void 0;
          };
          sub = this.client.request(request2).subscribe({
            next: (event) => {
              switch (event.type) {
                case HttpEventType.Response:
                  this._headers.set(event.headers);
                  this._statusCode.set(event.status);
                  try {
                    send({ value: parse ? parse(event.body) : event.body });
                  } catch (error) {
                    send({ error: encapsulateResourceError(error) });
                  }
                  break;
                case HttpEventType.DownloadProgress:
                  this._progress.set(event);
                  break;
              }
            },
            error: (error) => {
              if (error instanceof HttpErrorResponse) {
                this._headers.set(error.headers);
                this._statusCode.set(error.status);
              }
              send({ error });
              abortSignal.removeEventListener("abort", onAbort);
            },
            complete: () => {
              if (resolve) {
                send({
                  error: new RuntimeError(991, ngDevMode && "Resource completed before producing a value")
                });
              }
              abortSignal.removeEventListener("abort", onAbort);
            }
          });
          return promise;
        }, defaultValue, equal, injector);
        this.client = injector.get(HttpClient);
      }
    };
    HTTP_TRANSFER_CACHE_ORIGIN_MAP = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_CACHE_ORIGIN_MAP" : "");
    CACHE_OPTIONS = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_STATE_CACHE_OPTIONS" : "");
  }
});

// node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
var Meta, META_KEYS_MAP, Title, EVENT_NAMES, HAMMER_GESTURE_CONFIG, HAMMER_LOADER, HammerGestureConfig, HammerGesturesPlugin, HammerModule, DomSanitizer, DomSanitizerImpl, HydrationFeatureKind, VERSION;
var init_platform_browser = __esm({
  "node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_dom_renderer();
    Meta = class _Meta {
      _doc;
      _dom;
      constructor(_doc) {
        this._doc = _doc;
        this._dom = getDOM();
      }
      /**
       * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
       * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
       * values in the provided tag definition, and verifies that all other attribute values are equal.
       * If an existing element is found, it is returned and is not modified in any way.
       * @param tag The definition of a `<meta>` element to match or create.
       * @param forceCreation True to create a new element without checking whether one already exists.
       * @returns The existing element with the same attributes and values if found,
       * the new element if no match is found, or `null` if the tag parameter is not defined.
       */
      addTag(tag, forceCreation = false) {
        if (!tag)
          return null;
        return this._getOrCreateElement(tag, forceCreation);
      }
      /**
       * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
       * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
       * values in the provided tag definition, and verifies that all other attribute values are equal.
       * @param tags An array of tag definitions to match or create.
       * @param forceCreation True to create new elements without checking whether they already exist.
       * @returns The matching elements if found, or the new elements.
       */
      addTags(tags, forceCreation = false) {
        if (!tags)
          return [];
        return tags.reduce((result, tag) => {
          if (tag) {
            result.push(this._getOrCreateElement(tag, forceCreation));
          }
          return result;
        }, []);
      }
      /**
       * Retrieves a `<meta>` tag element in the current HTML document.
       * @param attrSelector The tag attribute and value to match against, in the format
       * `"tag_attribute='value string'"`.
       * @returns The matching element, if any.
       */
      getTag(attrSelector) {
        if (!attrSelector)
          return null;
        return this._doc.querySelector(`meta[${attrSelector}]`) || null;
      }
      /**
       * Retrieves a set of `<meta>` tag elements in the current HTML document.
       * @param attrSelector The tag attribute and value to match against, in the format
       * `"tag_attribute='value string'"`.
       * @returns The matching elements, if any.
       */
      getTags(attrSelector) {
        if (!attrSelector)
          return [];
        const list = this._doc.querySelectorAll(`meta[${attrSelector}]`);
        return list ? [].slice.call(list) : [];
      }
      /**
       * Modifies an existing `<meta>` tag element in the current HTML document.
       * @param tag The tag description with which to replace the existing tag content.
       * @param selector A tag attribute and value to match against, to identify
       * an existing tag. A string in the format `"tag_attribute=`value string`"`.
       * If not supplied, matches a tag with the same `name` or `property` attribute value as the
       * replacement tag.
       * @return The modified element.
       */
      updateTag(tag, selector) {
        if (!tag)
          return null;
        selector = selector || this._parseSelector(tag);
        const meta = this.getTag(selector);
        if (meta) {
          return this._setMetaElementAttributes(tag, meta);
        }
        return this._getOrCreateElement(tag, true);
      }
      /**
       * Removes an existing `<meta>` tag element from the current HTML document.
       * @param attrSelector A tag attribute and value to match against, to identify
       * an existing tag. A string in the format `"tag_attribute=`value string`"`.
       */
      removeTag(attrSelector) {
        this.removeTagElement(this.getTag(attrSelector));
      }
      /**
       * Removes an existing `<meta>` tag element from the current HTML document.
       * @param meta The tag definition to match against to identify an existing tag.
       */
      removeTagElement(meta) {
        if (meta) {
          this._dom.remove(meta);
        }
      }
      _getOrCreateElement(meta, forceCreation = false) {
        if (!forceCreation) {
          const selector = this._parseSelector(meta);
          const elem = this.getTags(selector).filter((elem2) => this._containsAttributes(meta, elem2))[0];
          if (elem !== void 0)
            return elem;
        }
        const element = this._dom.createElement("meta");
        this._setMetaElementAttributes(meta, element);
        const head = this._doc.getElementsByTagName("head")[0];
        head.appendChild(element);
        return element;
      }
      _setMetaElementAttributes(tag, el) {
        Object.keys(tag).forEach((prop) => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
        return el;
      }
      _parseSelector(tag) {
        const attr = tag.name ? "name" : "property";
        return `${attr}="${tag[attr]}"`;
      }
      _containsAttributes(tag, elem) {
        return Object.keys(tag).every((key) => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
      }
      _getMetaKeyMap(prop) {
        return META_KEYS_MAP[prop] || prop;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _Meta, deps: [{ token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _Meta, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: Meta, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    META_KEYS_MAP = {
      httpEquiv: "http-equiv"
    };
    Title = class _Title {
      _doc;
      constructor(_doc) {
        this._doc = _doc;
      }
      /**
       * Get the title of the current HTML document.
       */
      getTitle() {
        return this._doc.title;
      }
      /**
       * Set the title of the current HTML document.
       * @param newTitle
       */
      setTitle(newTitle) {
        this._doc.title = newTitle || "";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _Title, deps: [{ token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _Title, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: Title, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    EVENT_NAMES = {
      // pan
      "pan": true,
      "panstart": true,
      "panmove": true,
      "panend": true,
      "pancancel": true,
      "panleft": true,
      "panright": true,
      "panup": true,
      "pandown": true,
      // pinch
      "pinch": true,
      "pinchstart": true,
      "pinchmove": true,
      "pinchend": true,
      "pinchcancel": true,
      "pinchin": true,
      "pinchout": true,
      // press
      "press": true,
      "pressup": true,
      // rotate
      "rotate": true,
      "rotatestart": true,
      "rotatemove": true,
      "rotateend": true,
      "rotatecancel": true,
      // swipe
      "swipe": true,
      "swipeleft": true,
      "swiperight": true,
      "swipeup": true,
      "swipedown": true,
      // tap
      "tap": true,
      "doubletap": true
    };
    HAMMER_GESTURE_CONFIG = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerGestureConfig" : "");
    HAMMER_LOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerLoader" : "");
    HammerGestureConfig = class _HammerGestureConfig {
      /**
       * A set of supported event names for gestures to be used in Angular.
       * Angular supports all built-in recognizers, as listed in
       * [HammerJS documentation](https://hammerjs.github.io/).
       */
      events = [];
      /**
       * Maps gesture event names to a set of configuration options
       * that specify overrides to the default values for specific properties.
       *
       * The key is a supported event name to be configured,
       * and the options object contains a set of properties, with override values
       * to be applied to the named recognizer event.
       * For example, to disable recognition of the rotate event, specify
       *  `{"rotate": {"enable": false}}`.
       *
       * Properties that are not present take the HammerJS default values.
       * For information about which properties are supported for which events,
       * and their allowed and default values, see
       * [HammerJS documentation](https://hammerjs.github.io/).
       *
       */
      overrides = {};
      /**
       * Properties whose default values can be overridden for a given event.
       * Different sets of properties apply to different events.
       * For information about which properties are supported for which events,
       * and their allowed and default values, see
       * [HammerJS documentation](https://hammerjs.github.io/).
       */
      options;
      /**
       * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
       * and attaches it to a given HTML element.
       * @param element The element that will recognize gestures.
       * @returns A HammerJS event-manager object.
       */
      buildHammer(element) {
        const mc = new Hammer(element, this.options);
        mc.get("pinch").set({ enable: true });
        mc.get("rotate").set({ enable: true });
        for (const eventName in this.overrides) {
          mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HammerGestureConfig, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HammerGestureConfig });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: HammerGestureConfig, decorators: [{
      type: Injectable
    }] });
    HammerGesturesPlugin = class _HammerGesturesPlugin extends EventManagerPlugin {
      _config;
      _injector;
      loader;
      _loaderPromise = null;
      constructor(doc, _config, _injector, loader) {
        super(doc);
        this._config = _config;
        this._injector = _injector;
        this.loader = loader;
      }
      supports(eventName) {
        if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
          return false;
        }
        if (!window.Hammer && !this.loader) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            const _console = this._injector.get(Console);
            _console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`);
          }
          return false;
        }
        return true;
      }
      addEventListener(element, eventName, handler) {
        const zone = this.manager.getZone();
        eventName = eventName.toLowerCase();
        if (!window.Hammer && this.loader) {
          this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
          let cancelRegistration = false;
          let deregister = () => {
            cancelRegistration = true;
          };
          zone.runOutsideAngular(() => this._loaderPromise.then(() => {
            if (!window.Hammer) {
              if (typeof ngDevMode === "undefined" || ngDevMode) {
                const _console = this._injector.get(Console);
                _console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
              }
              deregister = () => {
              };
              return;
            }
            if (!cancelRegistration) {
              deregister = this.addEventListener(element, eventName, handler);
            }
          }).catch(() => {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              const _console = this._injector.get(Console);
              _console.warn(`The "${eventName}" event cannot be bound because the custom Hammer.JS loader failed.`);
            }
            deregister = () => {
            };
          }));
          return () => {
            deregister();
          };
        }
        return zone.runOutsideAngular(() => {
          const mc = this._config.buildHammer(element);
          const callback = function(eventObj) {
            zone.runGuarded(function() {
              handler(eventObj);
            });
          };
          mc.on(eventName, callback);
          return () => {
            mc.off(eventName, callback);
            if (typeof mc.destroy === "function") {
              mc.destroy();
            }
          };
        });
      }
      isCustomEvent(eventName) {
        return this._config.events.indexOf(eventName) > -1;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HammerGesturesPlugin, deps: [{ token: DOCUMENT }, { token: HAMMER_GESTURE_CONFIG }, { token: Injector }, { token: HAMMER_LOADER, optional: true }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HammerGesturesPlugin });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: HammerGesturesPlugin, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }, { type: HammerGestureConfig, decorators: [{
      type: Inject,
      args: [HAMMER_GESTURE_CONFIG]
    }] }, { type: Injector }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [HAMMER_LOADER]
    }] }] });
    HammerModule = class _HammerModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HammerModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.4", ngImport: core_exports, type: _HammerModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _HammerModule, providers: [
        {
          provide: EVENT_MANAGER_PLUGINS,
          useClass: HammerGesturesPlugin,
          multi: true,
          deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
        },
        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig }
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: HammerModule, decorators: [{
      type: NgModule,
      args: [{
        providers: [
          {
            provide: EVENT_MANAGER_PLUGINS,
            useClass: HammerGesturesPlugin,
            multi: true,
            deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
          },
          { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig }
        ]
      }]
    }] });
    DomSanitizer = class _DomSanitizer {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _DomSanitizer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _DomSanitizer, providedIn: "root", useExisting: forwardRef(() => DomSanitizerImpl) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: DomSanitizer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useExisting: forwardRef(() => DomSanitizerImpl) }]
    }] });
    DomSanitizerImpl = class _DomSanitizerImpl extends DomSanitizer {
      _doc;
      constructor(_doc) {
        super();
        this._doc = _doc;
      }
      sanitize(ctx, value) {
        if (value == null)
          return null;
        switch (ctx) {
          case SecurityContext.NONE:
            return value;
          case SecurityContext.HTML:
            if (allowSanitizationBypassAndThrow(
              value,
              "HTML"
              /* BypassType.Html */
            )) {
              return unwrapSafeValue(value);
            }
            return _sanitizeHtml(this._doc, String(value)).toString();
          case SecurityContext.STYLE:
            if (allowSanitizationBypassAndThrow(
              value,
              "Style"
              /* BypassType.Style */
            )) {
              return unwrapSafeValue(value);
            }
            return value;
          case SecurityContext.SCRIPT:
            if (allowSanitizationBypassAndThrow(
              value,
              "Script"
              /* BypassType.Script */
            )) {
              return unwrapSafeValue(value);
            }
            throw new RuntimeError(5200, (typeof ngDevMode === "undefined" || ngDevMode) && "unsafe value used in a script context");
          case SecurityContext.URL:
            if (allowSanitizationBypassAndThrow(
              value,
              "URL"
              /* BypassType.Url */
            )) {
              return unwrapSafeValue(value);
            }
            return _sanitizeUrl(String(value));
          case SecurityContext.RESOURCE_URL:
            if (allowSanitizationBypassAndThrow(
              value,
              "ResourceURL"
              /* BypassType.ResourceUrl */
            )) {
              return unwrapSafeValue(value);
            }
            throw new RuntimeError(5201, (typeof ngDevMode === "undefined" || ngDevMode) && `unsafe value used in a resource URL context (see ${XSS_SECURITY_URL})`);
          default:
            throw new RuntimeError(5202, (typeof ngDevMode === "undefined" || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${XSS_SECURITY_URL})`);
        }
      }
      bypassSecurityTrustHtml(value) {
        return bypassSanitizationTrustHtml(value);
      }
      bypassSecurityTrustStyle(value) {
        return bypassSanitizationTrustStyle(value);
      }
      bypassSecurityTrustScript(value) {
        return bypassSanitizationTrustScript(value);
      }
      bypassSecurityTrustUrl(value) {
        return bypassSanitizationTrustUrl(value);
      }
      bypassSecurityTrustResourceUrl(value) {
        return bypassSanitizationTrustResourceUrl(value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _DomSanitizerImpl, deps: [{ token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: _DomSanitizerImpl, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.4", ngImport: core_exports, type: DomSanitizerImpl, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    (function(HydrationFeatureKind2) {
      HydrationFeatureKind2[HydrationFeatureKind2["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
      HydrationFeatureKind2[HydrationFeatureKind2["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
      HydrationFeatureKind2[HydrationFeatureKind2["I18nSupport"] = 2] = "I18nSupport";
      HydrationFeatureKind2[HydrationFeatureKind2["EventReplay"] = 3] = "EventReplay";
      HydrationFeatureKind2[HydrationFeatureKind2["IncrementalHydration"] = 4] = "IncrementalHydration";
    })(HydrationFeatureKind || (HydrationFeatureKind = {}));
    VERSION = new Version("20.1.4");
  }
});

// node_modules/@angular/material/fesm2022/icon-registry-CwOTJ7YM.mjs
function getPolicy() {
  if (policy === void 0) {
    policy = null;
    if (typeof window !== "undefined") {
      const ttWindow = window;
      if (ttWindow.trustedTypes !== void 0) {
        policy = ttWindow.trustedTypes.createPolicy("angular#components", {
          createHTML: (s) => s
        });
      }
    }
  }
  return policy;
}
function trustedHTMLFromString(html) {
  return getPolicy()?.createHTML(html) || html;
}
function getMatIconNameNotFoundError(iconName) {
  return Error(`Unable to find icon with the name "${iconName}"`);
}
function getMatIconNoHttpProviderError() {
  return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.");
}
function getMatIconFailedToSanitizeUrlError(url) {
  return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
function getMatIconFailedToSanitizeLiteralError(literal) {
  return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
  return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
}
function cloneSvg(svg) {
  return svg.cloneNode(true);
}
function iconKey(namespace, name) {
  return namespace + ":" + name;
}
function isSafeUrlWithOptions(value) {
  return !!(value.url && value.options);
}
var policy, SvgIconConfig, MatIconRegistry, ICON_REGISTRY_PROVIDER;
var init_icon_registry_CwOTJ7YM = __esm({
  "node_modules/@angular/material/fesm2022/icon-registry-CwOTJ7YM.mjs"() {
    "use strict";
    init_http();
    init_http();
    init_core();
    init_core();
    init_platform_browser();
    init_platform_browser();
    init_esm();
    init_operators();
    SvgIconConfig = class {
      url;
      svgText;
      options;
      svgElement;
      constructor(url, svgText, options) {
        this.url = url;
        this.svgText = svgText;
        this.options = options;
      }
    };
    MatIconRegistry = class _MatIconRegistry {
      _httpClient;
      _sanitizer;
      _errorHandler;
      _document;
      /**
       * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
       */
      _svgIconConfigs = /* @__PURE__ */ new Map();
      /**
       * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
       * Multiple icon sets can be registered under the same namespace.
       */
      _iconSetConfigs = /* @__PURE__ */ new Map();
      /** Cache for icons loaded by direct URLs. */
      _cachedIconsByUrl = /* @__PURE__ */ new Map();
      /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
      _inProgressUrlFetches = /* @__PURE__ */ new Map();
      /** Map from font identifiers to their CSS class names. Used for icon fonts. */
      _fontCssClassesByAlias = /* @__PURE__ */ new Map();
      /** Registered icon resolver functions. */
      _resolvers = [];
      /**
       * The CSS classes to apply when an `<mat-icon>` component has no icon name, url, or font
       * specified. The default 'material-icons' value assumes that the material icon font has been
       * loaded as described at https://google.github.io/material-design-icons/#icon-font-for-the-web
       */
      _defaultFontSetClass = ["material-icons", "mat-ligature-font"];
      constructor(_httpClient, _sanitizer, document, _errorHandler) {
        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        this._document = document;
      }
      /**
       * Registers an icon by URL in the default namespace.
       * @param iconName Name under which the icon should be registered.
       * @param url
       */
      addSvgIcon(iconName, url, options) {
        return this.addSvgIconInNamespace("", iconName, url, options);
      }
      /**
       * Registers an icon using an HTML string in the default namespace.
       * @param iconName Name under which the icon should be registered.
       * @param literal SVG source of the icon.
       */
      addSvgIconLiteral(iconName, literal, options) {
        return this.addSvgIconLiteralInNamespace("", iconName, literal, options);
      }
      /**
       * Registers an icon by URL in the specified namespace.
       * @param namespace Namespace in which the icon should be registered.
       * @param iconName Name under which the icon should be registered.
       * @param url
       */
      addSvgIconInNamespace(namespace, iconName, url, options) {
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
      }
      /**
       * Registers an icon resolver function with the registry. The function will be invoked with the
       * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
       * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
       * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
       * will be invoked in the order in which they have been registered.
       * @param resolver Resolver function to be registered.
       */
      addSvgIconResolver(resolver) {
        this._resolvers.push(resolver);
        return this;
      }
      /**
       * Registers an icon using an HTML string in the specified namespace.
       * @param namespace Namespace in which the icon should be registered.
       * @param iconName Name under which the icon should be registered.
       * @param literal SVG source of the icon.
       */
      addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
        const cleanLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
        if (!cleanLiteral) {
          throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        const trustedLiteral = trustedHTMLFromString(cleanLiteral);
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig("", trustedLiteral, options));
      }
      /**
       * Registers an icon set by URL in the default namespace.
       * @param url
       */
      addSvgIconSet(url, options) {
        return this.addSvgIconSetInNamespace("", url, options);
      }
      /**
       * Registers an icon set using an HTML string in the default namespace.
       * @param literal SVG source of the icon set.
       */
      addSvgIconSetLiteral(literal, options) {
        return this.addSvgIconSetLiteralInNamespace("", literal, options);
      }
      /**
       * Registers an icon set by URL in the specified namespace.
       * @param namespace Namespace in which to register the icon set.
       * @param url
       */
      addSvgIconSetInNamespace(namespace, url, options) {
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
      }
      /**
       * Registers an icon set using an HTML string in the specified namespace.
       * @param namespace Namespace in which to register the icon set.
       * @param literal SVG source of the icon set.
       */
      addSvgIconSetLiteralInNamespace(namespace, literal, options) {
        const cleanLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
        if (!cleanLiteral) {
          throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        const trustedLiteral = trustedHTMLFromString(cleanLiteral);
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig("", trustedLiteral, options));
      }
      /**
       * Defines an alias for CSS class names to be used for icon fonts. Creating an matIcon
       * component with the alias as the fontSet input will cause the class name to be applied
       * to the `<mat-icon>` element.
       *
       * If the registered font is a ligature font, then don't forget to also include the special
       * class `mat-ligature-font` to allow the usage via attribute. So register like this:
       *
       * ```ts
       * iconRegistry.registerFontClassAlias('f1', 'font1 mat-ligature-font');
       * ```
       *
       * And use like this:
       *
       * ```html
       * <mat-icon fontSet="f1" fontIcon="home"></mat-icon>
       * ```
       *
       * @param alias Alias for the font.
       * @param classNames Class names override to be used instead of the alias.
       */
      registerFontClassAlias(alias, classNames = alias) {
        this._fontCssClassesByAlias.set(alias, classNames);
        return this;
      }
      /**
       * Returns the CSS class name associated with the alias by a previous call to
       * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
       */
      classNameForFontAlias(alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
      }
      /**
       * Sets the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
       * have a fontSet input value, and is not loading an icon by name or URL.
       */
      setDefaultFontSetClass(...classNames) {
        this._defaultFontSetClass = classNames;
        return this;
      }
      /**
       * Returns the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
       * have a fontSet input value, and is not loading an icon by name or URL.
       */
      getDefaultFontSetClass() {
        return this._defaultFontSetClass;
      }
      /**
       * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
       * The response from the URL may be cached so this will not always cause an HTTP request, but
       * the produced element will always be a new copy of the originally fetched icon. (That is,
       * it will not contain any modifications made to elements previously returned).
       *
       * @param safeUrl URL from which to fetch the SVG icon.
       */
      getSvgIconFromUrl(safeUrl) {
        const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
        if (!url) {
          throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        const cachedIcon = this._cachedIconsByUrl.get(url);
        if (cachedIcon) {
          return of(cloneSvg(cachedIcon));
        }
        return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe(tap((svg) => this._cachedIconsByUrl.set(url, svg)), map((svg) => cloneSvg(svg)));
      }
      /**
       * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
       * and namespace. The icon must have been previously registered with addIcon or addIconSet;
       * if not, the Observable will throw an error.
       *
       * @param name Name of the icon to be retrieved.
       * @param namespace Namespace in which to look for the icon.
       */
      getNamedSvgIcon(name, namespace = "") {
        const key = iconKey(namespace, name);
        let config = this._svgIconConfigs.get(key);
        if (config) {
          return this._getSvgFromConfig(config);
        }
        config = this._getIconConfigFromResolvers(namespace, name);
        if (config) {
          this._svgIconConfigs.set(key, config);
          return this._getSvgFromConfig(config);
        }
        const iconSetConfigs = this._iconSetConfigs.get(namespace);
        if (iconSetConfigs) {
          return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }
        return throwError(getMatIconNameNotFoundError(key));
      }
      ngOnDestroy() {
        this._resolvers = [];
        this._svgIconConfigs.clear();
        this._iconSetConfigs.clear();
        this._cachedIconsByUrl.clear();
      }
      /**
       * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
       */
      _getSvgFromConfig(config) {
        if (config.svgText) {
          return of(cloneSvg(this._svgElementFromConfig(config)));
        } else {
          return this._loadSvgIconFromConfig(config).pipe(map((svg) => cloneSvg(svg)));
        }
      }
      /**
       * Attempts to find an icon with the specified name in any of the SVG icon sets.
       * First searches the available cached icons for a nested element with a matching name, and
       * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
       * that have not been cached, and searches again after all fetches are completed.
       * The returned Observable produces the SVG element if possible, and throws
       * an error if no icon with the specified name can be found.
       */
      _getSvgFromIconSetConfigs(name, iconSetConfigs) {
        const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (namedIcon) {
          return of(namedIcon);
        }
        const iconSetFetchRequests = iconSetConfigs.filter((iconSetConfig) => !iconSetConfig.svgText).map((iconSetConfig) => {
          return this._loadSvgIconSetFromConfig(iconSetConfig).pipe(catchError((err) => {
            const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, iconSetConfig.url);
            const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;
            this._errorHandler.handleError(new Error(errorMessage));
            return of(null);
          }));
        });
        return forkJoin(iconSetFetchRequests).pipe(map(() => {
          const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
          if (!foundIcon) {
            throw getMatIconNameNotFoundError(name);
          }
          return foundIcon;
        }));
      }
      /**
       * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
       * tag matches the specified name. If found, copies the nested element to a new SVG element and
       * returns it. Returns null if no matching element is found.
       */
      _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
        for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
          const config = iconSetConfigs[i];
          if (config.svgText && config.svgText.toString().indexOf(iconName) > -1) {
            const svg = this._svgElementFromConfig(config);
            const foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);
            if (foundIcon) {
              return foundIcon;
            }
          }
        }
        return null;
      }
      /**
       * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
       * from it.
       */
      _loadSvgIconFromConfig(config) {
        return this._fetchIcon(config).pipe(tap((svgText) => config.svgText = svgText), map(() => this._svgElementFromConfig(config)));
      }
      /**
       * Loads the content of the icon set URL specified in the
       * SvgIconConfig and attaches it to the config.
       */
      _loadSvgIconSetFromConfig(config) {
        if (config.svgText) {
          return of(null);
        }
        return this._fetchIcon(config).pipe(tap((svgText) => config.svgText = svgText));
      }
      /**
       * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
       * tag matches the specified name. If found, copies the nested element to a new SVG element and
       * returns it. Returns null if no matching element is found.
       */
      _extractSvgIconFromSet(iconSet, iconName, options) {
        const iconSource = iconSet.querySelector(`[id="${iconName}"]`);
        if (!iconSource) {
          return null;
        }
        const iconElement = iconSource.cloneNode(true);
        iconElement.removeAttribute("id");
        if (iconElement.nodeName.toLowerCase() === "svg") {
          return this._setSvgAttributes(iconElement, options);
        }
        if (iconElement.nodeName.toLowerCase() === "symbol") {
          return this._setSvgAttributes(this._toSvgElement(iconElement), options);
        }
        const svg = this._svgElementFromString(trustedHTMLFromString("<svg></svg>"));
        svg.appendChild(iconElement);
        return this._setSvgAttributes(svg, options);
      }
      /**
       * Creates a DOM element from the given SVG string.
       */
      _svgElementFromString(str) {
        const div = this._document.createElement("DIV");
        div.innerHTML = str;
        const svg = div.querySelector("svg");
        if (!svg) {
          throw Error("<svg> tag not found");
        }
        return svg;
      }
      /**
       * Converts an element into an SVG node by cloning all of its children.
       */
      _toSvgElement(element) {
        const svg = this._svgElementFromString(trustedHTMLFromString("<svg></svg>"));
        const attributes = element.attributes;
        for (let i = 0; i < attributes.length; i++) {
          const { name, value } = attributes[i];
          if (name !== "id") {
            svg.setAttribute(name, value);
          }
        }
        for (let i = 0; i < element.childNodes.length; i++) {
          if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
            svg.appendChild(element.childNodes[i].cloneNode(true));
          }
        }
        return svg;
      }
      /**
       * Sets the default attributes for an SVG element to be used as an icon.
       */
      _setSvgAttributes(svg, options) {
        svg.setAttribute("fit", "");
        svg.setAttribute("height", "100%");
        svg.setAttribute("width", "100%");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svg.setAttribute("focusable", "false");
        if (options && options.viewBox) {
          svg.setAttribute("viewBox", options.viewBox);
        }
        return svg;
      }
      /**
       * Returns an Observable which produces the string contents of the given icon. Results may be
       * cached, so future calls with the same URL may not cause another HTTP request.
       */
      _fetchIcon(iconConfig) {
        const { url: safeUrl, options } = iconConfig;
        const withCredentials = options?.withCredentials ?? false;
        if (!this._httpClient) {
          throw getMatIconNoHttpProviderError();
        }
        if (safeUrl == null) {
          throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
        }
        const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
        if (!url) {
          throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        const inProgressFetch = this._inProgressUrlFetches.get(url);
        if (inProgressFetch) {
          return inProgressFetch;
        }
        const req = this._httpClient.get(url, { responseType: "text", withCredentials }).pipe(map((svg) => {
          return trustedHTMLFromString(svg);
        }), finalize(() => this._inProgressUrlFetches.delete(url)), share());
        this._inProgressUrlFetches.set(url, req);
        return req;
      }
      /**
       * Registers an icon config by name in the specified namespace.
       * @param namespace Namespace in which to register the icon config.
       * @param iconName Name under which to register the config.
       * @param config Config to be registered.
       */
      _addSvgIconConfig(namespace, iconName, config) {
        this._svgIconConfigs.set(iconKey(namespace, iconName), config);
        return this;
      }
      /**
       * Registers an icon set config in the specified namespace.
       * @param namespace Namespace in which to register the icon config.
       * @param config Config to be registered.
       */
      _addSvgIconSetConfig(namespace, config) {
        const configNamespace = this._iconSetConfigs.get(namespace);
        if (configNamespace) {
          configNamespace.push(config);
        } else {
          this._iconSetConfigs.set(namespace, [config]);
        }
        return this;
      }
      /** Parses a config's text into an SVG element. */
      _svgElementFromConfig(config) {
        if (!config.svgElement) {
          const svg = this._svgElementFromString(config.svgText);
          this._setSvgAttributes(svg, config.options);
          config.svgElement = svg;
        }
        return config.svgElement;
      }
      /** Tries to create an icon config through the registered resolver functions. */
      _getIconConfigFromResolvers(namespace, name) {
        for (let i = 0; i < this._resolvers.length; i++) {
          const result = this._resolvers[i](name, namespace);
          if (result) {
            return isSafeUrlWithOptions(result) ? new SvgIconConfig(result.url, null, result.options) : new SvgIconConfig(result, null);
          }
        }
        return void 0;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatIconRegistry, deps: [{ token: HttpClient, optional: true }, { token: DomSanitizer }, { token: DOCUMENT, optional: true }, { token: ErrorHandler }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatIconRegistry, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatIconRegistry, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: HttpClient, decorators: [{
      type: Optional
    }] }, { type: DomSanitizer }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }] }, { type: ErrorHandler }] });
    ICON_REGISTRY_PROVIDER = {
      // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
      provide: MatIconRegistry,
      deps: [
        [new Optional(), new SkipSelf(), MatIconRegistry],
        [new Optional(), HttpClient],
        DomSanitizer,
        ErrorHandler,
        [new Optional(), DOCUMENT]
      ],
      useFactory: ICON_REGISTRY_PROVIDER_FACTORY
    };
  }
});

// node_modules/@angular/material/fesm2022/icon.mjs
function MAT_ICON_LOCATION_FACTORY() {
  const _document = inject(DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ""
  };
}
var MAT_ICON_DEFAULT_OPTIONS, MAT_ICON_LOCATION, funcIriAttributes, funcIriAttributeSelector, funcIriPattern, MatIcon, MatIconModule;
var init_icon = __esm({
  "node_modules/@angular/material/fesm2022/icon.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_icon_registry_CwOTJ7YM();
    init_common_module_cKSwHniA();
    MAT_ICON_DEFAULT_OPTIONS = new InjectionToken("MAT_ICON_DEFAULT_OPTIONS");
    MAT_ICON_LOCATION = new InjectionToken("mat-icon-location", {
      providedIn: "root",
      factory: MAT_ICON_LOCATION_FACTORY
    });
    funcIriAttributes = [
      "clip-path",
      "color-profile",
      "src",
      "cursor",
      "fill",
      "filter",
      "marker",
      "marker-start",
      "marker-mid",
      "marker-end",
      "mask",
      "stroke"
    ];
    funcIriAttributeSelector = funcIriAttributes.map((attr) => `[${attr}]`).join(", ");
    funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
    MatIcon = class _MatIcon {
      _elementRef = inject(ElementRef);
      _iconRegistry = inject(MatIconRegistry);
      _location = inject(MAT_ICON_LOCATION);
      _errorHandler = inject(ErrorHandler);
      _defaultColor;
      /**
       * Theme color of the icon. This API is supported in M2 themes only, it
       * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/icon/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      get color() {
        return this._color || this._defaultColor;
      }
      set color(value) {
        this._color = value;
      }
      _color;
      /**
       * Whether the icon should be inlined, automatically sizing the icon to match the font size of
       * the element the icon is contained in.
       */
      inline = false;
      /** Name of the icon in the SVG icon set. */
      get svgIcon() {
        return this._svgIcon;
      }
      set svgIcon(value) {
        if (value !== this._svgIcon) {
          if (value) {
            this._updateSvgIcon(value);
          } else if (this._svgIcon) {
            this._clearSvgElement();
          }
          this._svgIcon = value;
        }
      }
      _svgIcon;
      /** Font set that the icon is a part of. */
      get fontSet() {
        return this._fontSet;
      }
      set fontSet(value) {
        const newValue = this._cleanupFontValue(value);
        if (newValue !== this._fontSet) {
          this._fontSet = newValue;
          this._updateFontIconClasses();
        }
      }
      _fontSet;
      /** Name of an icon within a font set. */
      get fontIcon() {
        return this._fontIcon;
      }
      set fontIcon(value) {
        const newValue = this._cleanupFontValue(value);
        if (newValue !== this._fontIcon) {
          this._fontIcon = newValue;
          this._updateFontIconClasses();
        }
      }
      _fontIcon;
      _previousFontSetClass = [];
      _previousFontIconClass;
      _svgName;
      _svgNamespace;
      /** Keeps track of the current page path. */
      _previousPath;
      /** Keeps track of the elements and attributes that we've prefixed with the current path. */
      _elementsWithExternalReferences;
      /** Subscription to the current in-progress SVG icon request. */
      _currentIconFetch = Subscription.EMPTY;
      constructor() {
        const ariaHidden = inject(new HostAttributeToken("aria-hidden"), { optional: true });
        const defaults = inject(MAT_ICON_DEFAULT_OPTIONS, { optional: true });
        if (defaults) {
          if (defaults.color) {
            this.color = this._defaultColor = defaults.color;
          }
          if (defaults.fontSet) {
            this.fontSet = defaults.fontSet;
          }
        }
        if (!ariaHidden) {
          this._elementRef.nativeElement.setAttribute("aria-hidden", "true");
        }
      }
      /**
       * Splits an svgIcon binding value into its icon set and icon name components.
       * Returns a 2-element array of [(icon set), (icon name)].
       * The separator for the two fields is ':'. If there is no separator, an empty
       * string is returned for the icon set and the entire value is returned for
       * the icon name. If the argument is falsy, returns an array of two empty strings.
       * Throws an error if the name contains two or more ':' separators.
       * Examples:
       *   `'social:cake' -> ['social', 'cake']
       *   'penguin' -> ['', 'penguin']
       *   null -> ['', '']
       *   'a:b:c' -> (throws Error)`
       */
      _splitIconName(iconName) {
        if (!iconName) {
          return ["", ""];
        }
        const parts = iconName.split(":");
        switch (parts.length) {
          case 1:
            return ["", parts[0]];
          // Use default namespace.
          case 2:
            return parts;
          default:
            throw Error(`Invalid icon name: "${iconName}"`);
        }
      }
      ngOnInit() {
        this._updateFontIconClasses();
      }
      ngAfterViewChecked() {
        const cachedElements = this._elementsWithExternalReferences;
        if (cachedElements && cachedElements.size) {
          const newPath = this._location.getPathname();
          if (newPath !== this._previousPath) {
            this._previousPath = newPath;
            this._prependPathToReferences(newPath);
          }
        }
      }
      ngOnDestroy() {
        this._currentIconFetch.unsubscribe();
        if (this._elementsWithExternalReferences) {
          this._elementsWithExternalReferences.clear();
        }
      }
      _usingFontIcon() {
        return !this.svgIcon;
      }
      _setSvgElement(svg) {
        this._clearSvgElement();
        const path = this._location.getPathname();
        this._previousPath = path;
        this._cacheChildrenWithExternalReferences(svg);
        this._prependPathToReferences(path);
        this._elementRef.nativeElement.appendChild(svg);
      }
      _clearSvgElement() {
        const layoutElement = this._elementRef.nativeElement;
        let childCount = layoutElement.childNodes.length;
        if (this._elementsWithExternalReferences) {
          this._elementsWithExternalReferences.clear();
        }
        while (childCount--) {
          const child = layoutElement.childNodes[childCount];
          if (child.nodeType !== 1 || child.nodeName.toLowerCase() === "svg") {
            child.remove();
          }
        }
      }
      _updateFontIconClasses() {
        if (!this._usingFontIcon()) {
          return;
        }
        const elem = this._elementRef.nativeElement;
        const fontSetClasses = (this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/) : this._iconRegistry.getDefaultFontSetClass()).filter((className) => className.length > 0);
        this._previousFontSetClass.forEach((className) => elem.classList.remove(className));
        fontSetClasses.forEach((className) => elem.classList.add(className));
        this._previousFontSetClass = fontSetClasses;
        if (this.fontIcon !== this._previousFontIconClass && !fontSetClasses.includes("mat-ligature-font")) {
          if (this._previousFontIconClass) {
            elem.classList.remove(this._previousFontIconClass);
          }
          if (this.fontIcon) {
            elem.classList.add(this.fontIcon);
          }
          this._previousFontIconClass = this.fontIcon;
        }
      }
      /**
       * Cleans up a value to be used as a fontIcon or fontSet.
       * Since the value ends up being assigned as a CSS class, we
       * have to trim the value and omit space-separated values.
       */
      _cleanupFontValue(value) {
        return typeof value === "string" ? value.trim().split(" ")[0] : value;
      }
      /**
       * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
       * reference. This is required because WebKit browsers require references to be prefixed with
       * the current path, if the page has a `base` tag.
       */
      _prependPathToReferences(path) {
        const elements = this._elementsWithExternalReferences;
        if (elements) {
          elements.forEach((attrs, element) => {
            attrs.forEach((attr) => {
              element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
            });
          });
        }
      }
      /**
       * Caches the children of an SVG element that have `url()`
       * references that we need to prefix with the current path.
       */
      _cacheChildrenWithExternalReferences(element) {
        const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
        const elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || /* @__PURE__ */ new Map();
        for (let i = 0; i < elementsWithFuncIri.length; i++) {
          funcIriAttributes.forEach((attr) => {
            const elementWithReference = elementsWithFuncIri[i];
            const value = elementWithReference.getAttribute(attr);
            const match = value ? value.match(funcIriPattern) : null;
            if (match) {
              let attributes = elements.get(elementWithReference);
              if (!attributes) {
                attributes = [];
                elements.set(elementWithReference, attributes);
              }
              attributes.push({ name: attr, value: match[1] });
            }
          });
        }
      }
      /** Sets a new SVG icon with a particular name. */
      _updateSvgIcon(rawName) {
        this._svgNamespace = null;
        this._svgName = null;
        this._currentIconFetch.unsubscribe();
        if (rawName) {
          const [namespace, iconName] = this._splitIconName(rawName);
          if (namespace) {
            this._svgNamespace = namespace;
          }
          if (iconName) {
            this._svgName = iconName;
          }
          this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(take(1)).subscribe((svg) => this._setSvgElement(svg), (err) => {
            const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
            this._errorHandler.handleError(new Error(errorMessage));
          });
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatIcon, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatIcon, isStandalone: true, selector: "mat-icon", inputs: { color: "color", inline: ["inline", "inline", booleanAttribute], svgIcon: "svgIcon", fontSet: "fontSet", fontIcon: "fontIcon" }, host: { attributes: { "role": "img" }, properties: { "class": 'color ? "mat-" + color : ""', "attr.data-mat-icon-type": '_usingFontIcon() ? "font" : "svg"', "attr.data-mat-icon-name": "_svgName || fontIcon", "attr.data-mat-icon-namespace": "_svgNamespace || fontSet", "attr.fontIcon": "_usingFontIcon() ? fontIcon : null", "class.mat-icon-inline": "inline", "class.mat-icon-no-color": 'color !== "primary" && color !== "accent" && color !== "warn"' }, classAttribute: "mat-icon notranslate" }, exportAs: ["matIcon"], ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatIcon, decorators: [{
      type: Component,
      args: [{ template: "<ng-content></ng-content>", selector: "mat-icon", exportAs: "matIcon", host: {
        "role": "img",
        "class": "mat-icon notranslate",
        "[class]": 'color ? "mat-" + color : ""',
        "[attr.data-mat-icon-type]": '_usingFontIcon() ? "font" : "svg"',
        "[attr.data-mat-icon-name]": "_svgName || fontIcon",
        "[attr.data-mat-icon-namespace]": "_svgNamespace || fontSet",
        "[attr.fontIcon]": "_usingFontIcon() ? fontIcon : null",
        "[class.mat-icon-inline]": "inline",
        "[class.mat-icon-no-color]": 'color !== "primary" && color !== "accent" && color !== "warn"'
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"] }]
    }], ctorParameters: () => [], propDecorators: { color: [{
      type: Input
    }], inline: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], svgIcon: [{
      type: Input
    }], fontSet: [{
      type: Input
    }], fontIcon: [{
      type: Input
    }] } });
    MatIconModule = class _MatIconModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatIconModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatIconModule, imports: [MatCommonModule, MatIcon], exports: [MatIcon, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatIconModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatIconModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatIcon],
        exports: [MatIcon, MatCommonModule]
      }]
    }] });
  }
});

export {
  HttpClient,
  init_http,
  Title,
  init_platform_browser,
  MatIconModule,
  init_icon
};
/*! Bundled license information:

@angular/common/fesm2022/module.mjs:
@angular/common/fesm2022/http.mjs:
@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v20.1.4
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-HULXU27X.js.map
