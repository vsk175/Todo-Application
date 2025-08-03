import {
  __spreadProps,
  __spreadValues
} from "./chunk-TTULUY32.js";

// node_modules/zone.js/fesm2015/zone-testing.js
function patchJasmine(Zone2) {
  Zone2.__load_patch("jasmine", (global2, Zone3, api) => {
    const __extends = function(d, b) {
      for (const p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    if (!Zone3)
      throw new Error("Missing: zone.js");
    if (typeof jest !== "undefined") {
      return;
    }
    if (typeof jasmine == "undefined" || jasmine["__zone_patch__"]) {
      return;
    }
    jasmine["__zone_patch__"] = true;
    const SyncTestZoneSpec = Zone3["SyncTestZoneSpec"];
    const ProxyZoneSpec2 = Zone3["ProxyZoneSpec"];
    if (!SyncTestZoneSpec)
      throw new Error("Missing: SyncTestZoneSpec");
    if (!ProxyZoneSpec2)
      throw new Error("Missing: ProxyZoneSpec");
    const ambientZone = Zone3.current;
    const symbol = Zone3.__symbol__;
    const disablePatchingJasmineClock = global2[symbol("fakeAsyncDisablePatchingClock")] === true;
    const enableAutoFakeAsyncWhenClockPatched = !disablePatchingJasmineClock && (global2[symbol("fakeAsyncPatchLock")] === true || global2[symbol("fakeAsyncAutoFakeAsyncWhenClockPatched")] === true);
    const ignoreUnhandledRejection = global2[symbol("ignoreUnhandledRejection")] === true;
    if (!ignoreUnhandledRejection) {
      const globalErrors = jasmine.GlobalErrors;
      if (globalErrors && !jasmine[symbol("GlobalErrors")]) {
        jasmine[symbol("GlobalErrors")] = globalErrors;
        jasmine.GlobalErrors = function() {
          const instance = new globalErrors();
          const originalInstall = instance.install;
          if (originalInstall && !instance[symbol("install")]) {
            instance[symbol("install")] = originalInstall;
            instance.install = function() {
              const isNode = typeof process !== "undefined" && !!process.on;
              const originalHandlers = isNode ? process.listeners("unhandledRejection") : global2.eventListeners("unhandledrejection");
              const result = originalInstall.apply(this, arguments);
              isNode ? process.removeAllListeners("unhandledRejection") : global2.removeAllListeners("unhandledrejection");
              if (originalHandlers) {
                originalHandlers.forEach((handler) => {
                  if (isNode) {
                    process.on("unhandledRejection", handler);
                  } else {
                    global2.addEventListener("unhandledrejection", handler);
                  }
                });
              }
              return result;
            };
          }
          return instance;
        };
      }
    }
    const jasmineEnv = jasmine.getEnv();
    ["describe", "xdescribe", "fdescribe"].forEach((methodName) => {
      let originalJasmineFn = jasmineEnv[methodName];
      jasmineEnv[methodName] = function(description, specDefinitions) {
        return originalJasmineFn.call(this, description, wrapDescribeInZone(description, specDefinitions));
      };
    });
    ["it", "xit", "fit"].forEach((methodName) => {
      let originalJasmineFn = jasmineEnv[methodName];
      jasmineEnv[symbol(methodName)] = originalJasmineFn;
      jasmineEnv[methodName] = function(description, specDefinitions, timeout) {
        arguments[1] = wrapTestInZone(specDefinitions);
        return originalJasmineFn.apply(this, arguments);
      };
    });
    ["beforeEach", "afterEach", "beforeAll", "afterAll"].forEach((methodName) => {
      let originalJasmineFn = jasmineEnv[methodName];
      jasmineEnv[symbol(methodName)] = originalJasmineFn;
      jasmineEnv[methodName] = function(specDefinitions, timeout) {
        arguments[0] = wrapTestInZone(specDefinitions);
        return originalJasmineFn.apply(this, arguments);
      };
    });
    if (!disablePatchingJasmineClock) {
      const originalClockFn = jasmine[symbol("clock")] = jasmine["clock"];
      jasmine["clock"] = function() {
        const clock = originalClockFn.apply(this, arguments);
        if (!clock[symbol("patched")]) {
          clock[symbol("patched")] = symbol("patched");
          const originalTick = clock[symbol("tick")] = clock.tick;
          clock.tick = function() {
            const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
            if (fakeAsyncZoneSpec) {
              return fakeAsyncZoneSpec.tick.apply(fakeAsyncZoneSpec, arguments);
            }
            return originalTick.apply(this, arguments);
          };
          const originalMockDate = clock[symbol("mockDate")] = clock.mockDate;
          clock.mockDate = function() {
            const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
            if (fakeAsyncZoneSpec) {
              const dateTime = arguments.length > 0 ? arguments[0] : /* @__PURE__ */ new Date();
              return fakeAsyncZoneSpec.setFakeBaseSystemTime.apply(fakeAsyncZoneSpec, dateTime && typeof dateTime.getTime === "function" ? [dateTime.getTime()] : arguments);
            }
            return originalMockDate.apply(this, arguments);
          };
          if (enableAutoFakeAsyncWhenClockPatched) {
            ["install", "uninstall"].forEach((methodName) => {
              const originalClockFn2 = clock[symbol(methodName)] = clock[methodName];
              clock[methodName] = function() {
                const FakeAsyncTestZoneSpec2 = Zone3["FakeAsyncTestZoneSpec"];
                if (FakeAsyncTestZoneSpec2) {
                  jasmine[symbol("clockInstalled")] = "install" === methodName;
                  return;
                }
                return originalClockFn2.apply(this, arguments);
              };
            });
          }
        }
        return clock;
      };
    }
    if (!jasmine[Zone3.__symbol__("createSpyObj")]) {
      const originalCreateSpyObj = jasmine.createSpyObj;
      jasmine[Zone3.__symbol__("createSpyObj")] = originalCreateSpyObj;
      jasmine.createSpyObj = function() {
        const args = Array.prototype.slice.call(arguments);
        const propertyNames = args.length >= 3 ? args[2] : null;
        let spyObj;
        if (propertyNames) {
          const defineProperty = Object.defineProperty;
          Object.defineProperty = function(obj, p, attributes) {
            return defineProperty.call(this, obj, p, __spreadProps(__spreadValues({}, attributes), {
              configurable: true,
              enumerable: true
            }));
          };
          try {
            spyObj = originalCreateSpyObj.apply(this, args);
          } finally {
            Object.defineProperty = defineProperty;
          }
        } else {
          spyObj = originalCreateSpyObj.apply(this, args);
        }
        return spyObj;
      };
    }
    function wrapDescribeInZone(description, describeBody) {
      return function() {
        const syncZone = ambientZone.fork(new SyncTestZoneSpec(`jasmine.describe#${description}`));
        return syncZone.run(describeBody, this, arguments);
      };
    }
    function runInTestZone(testBody, applyThis, queueRunner, done) {
      const isClockInstalled = !!jasmine[symbol("clockInstalled")];
      queueRunner.testProxyZoneSpec;
      const testProxyZone = queueRunner.testProxyZone;
      if (isClockInstalled && enableAutoFakeAsyncWhenClockPatched) {
        const fakeAsyncModule = Zone3[Zone3.__symbol__("fakeAsyncTest")];
        if (fakeAsyncModule && typeof fakeAsyncModule.fakeAsync === "function") {
          testBody = fakeAsyncModule.fakeAsync(testBody);
        }
      }
      if (done) {
        return testProxyZone.run(testBody, applyThis, [done]);
      } else {
        return testProxyZone.run(testBody, applyThis);
      }
    }
    function wrapTestInZone(testBody) {
      return testBody && (testBody.length ? function(done) {
        return runInTestZone(testBody, this, this.queueRunner, done);
      } : function() {
        return runInTestZone(testBody, this, this.queueRunner);
      });
    }
    const QueueRunner = jasmine.QueueRunner;
    jasmine.QueueRunner = function(_super) {
      __extends(ZoneQueueRunner, _super);
      function ZoneQueueRunner(attrs) {
        if (attrs.onComplete) {
          attrs.onComplete = /* @__PURE__ */ ((fn) => () => {
            this.testProxyZone = null;
            this.testProxyZoneSpec = null;
            ambientZone.scheduleMicroTask("jasmine.onComplete", fn);
          })(attrs.onComplete);
        }
        const nativeSetTimeout = global2[Zone3.__symbol__("setTimeout")];
        const nativeClearTimeout = global2[Zone3.__symbol__("clearTimeout")];
        if (nativeSetTimeout) {
          attrs.timeout = {
            setTimeout: nativeSetTimeout ? nativeSetTimeout : global2.setTimeout,
            clearTimeout: nativeClearTimeout ? nativeClearTimeout : global2.clearTimeout
          };
        }
        if (jasmine.UserContext) {
          if (!attrs.userContext) {
            attrs.userContext = new jasmine.UserContext();
          }
          attrs.userContext.queueRunner = this;
        } else {
          if (!attrs.userContext) {
            attrs.userContext = {};
          }
          attrs.userContext.queueRunner = this;
        }
        const onException = attrs.onException;
        attrs.onException = function(error) {
          if (error && error.message === "Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.") {
            const proxyZoneSpec = this && this.testProxyZoneSpec;
            if (proxyZoneSpec) {
              const pendingTasksInfo = proxyZoneSpec.getAndClearPendingTasksInfo();
              try {
                error.message += pendingTasksInfo;
              } catch (err) {
              }
            }
          }
          if (onException) {
            onException.call(this, error);
          }
        };
        _super.call(this, attrs);
      }
      ZoneQueueRunner.prototype.execute = function() {
        let zone = Zone3.current;
        let isChildOfAmbientZone = false;
        while (zone) {
          if (zone === ambientZone) {
            isChildOfAmbientZone = true;
            break;
          }
          zone = zone.parent;
        }
        if (!isChildOfAmbientZone)
          throw new Error("Unexpected Zone: " + Zone3.current.name);
        this.testProxyZoneSpec = new ProxyZoneSpec2();
        this.testProxyZone = ambientZone.fork(this.testProxyZoneSpec);
        if (!Zone3.currentTask) {
          Zone3.current.scheduleMicroTask("jasmine.execute().forceTask", () => QueueRunner.prototype.execute.call(this));
        } else {
          _super.prototype.execute.call(this);
        }
      };
      return ZoneQueueRunner;
    }(QueueRunner);
  });
}
function patchJest(Zone2) {
  Zone2.__load_patch("jest", (context, Zone3, api) => {
    if (typeof jest === "undefined" || jest["__zone_patch__"]) {
      return;
    }
    Zone3[api.symbol("ignoreConsoleErrorUncaughtError")] = true;
    jest["__zone_patch__"] = true;
    const ProxyZoneSpec2 = Zone3["ProxyZoneSpec"];
    const SyncTestZoneSpec = Zone3["SyncTestZoneSpec"];
    if (!ProxyZoneSpec2) {
      throw new Error("Missing ProxyZoneSpec");
    }
    const rootZone = Zone3.current;
    const syncZone = rootZone.fork(new SyncTestZoneSpec("jest.describe"));
    const proxyZoneSpec = new ProxyZoneSpec2();
    const proxyZone = rootZone.fork(proxyZoneSpec);
    function wrapDescribeFactoryInZone(originalJestFn) {
      return function(...tableArgs) {
        const originalDescribeFn = originalJestFn.apply(this, tableArgs);
        return function(...args) {
          args[1] = wrapDescribeInZone(args[1]);
          return originalDescribeFn.apply(this, args);
        };
      };
    }
    function wrapTestFactoryInZone(originalJestFn) {
      return function(...tableArgs) {
        return function(...args) {
          args[1] = wrapTestInZone(args[1]);
          return originalJestFn.apply(this, tableArgs).apply(this, args);
        };
      };
    }
    function wrapDescribeInZone(describeBody) {
      return function(...args) {
        return syncZone.run(describeBody, this, args);
      };
    }
    function wrapTestInZone(testBody, isTestFunc = false) {
      if (typeof testBody !== "function") {
        return testBody;
      }
      const wrappedFunc = function() {
        if (Zone3[api.symbol("useFakeTimersCalled")] === true && testBody && !testBody.isFakeAsync) {
          const fakeAsyncModule = Zone3[Zone3.__symbol__("fakeAsyncTest")];
          if (fakeAsyncModule && typeof fakeAsyncModule.fakeAsync === "function") {
            testBody = fakeAsyncModule.fakeAsync(testBody);
          }
        }
        proxyZoneSpec.isTestFunc = isTestFunc;
        return proxyZone.run(testBody, null, arguments);
      };
      Object.defineProperty(wrappedFunc, "length", {
        configurable: true,
        writable: true,
        enumerable: false
      });
      wrappedFunc.length = testBody.length;
      return wrappedFunc;
    }
    ["describe", "xdescribe", "fdescribe"].forEach((methodName) => {
      let originalJestFn = context[methodName];
      if (context[Zone3.__symbol__(methodName)]) {
        return;
      }
      context[Zone3.__symbol__(methodName)] = originalJestFn;
      context[methodName] = function(...args) {
        args[1] = wrapDescribeInZone(args[1]);
        return originalJestFn.apply(this, args);
      };
      context[methodName].each = wrapDescribeFactoryInZone(originalJestFn.each);
    });
    context.describe.only = context.fdescribe;
    context.describe.skip = context.xdescribe;
    ["it", "xit", "fit", "test", "xtest"].forEach((methodName) => {
      let originalJestFn = context[methodName];
      if (context[Zone3.__symbol__(methodName)]) {
        return;
      }
      context[Zone3.__symbol__(methodName)] = originalJestFn;
      context[methodName] = function(...args) {
        args[1] = wrapTestInZone(args[1], true);
        return originalJestFn.apply(this, args);
      };
      context[methodName].each = wrapTestFactoryInZone(originalJestFn.each);
      context[methodName].todo = originalJestFn.todo;
      context[methodName].failing = originalJestFn.failing;
    });
    context.it.only = context.fit;
    context.it.skip = context.xit;
    context.test.only = context.fit;
    context.test.skip = context.xit;
    ["beforeEach", "afterEach", "beforeAll", "afterAll"].forEach((methodName) => {
      let originalJestFn = context[methodName];
      if (context[Zone3.__symbol__(methodName)]) {
        return;
      }
      context[Zone3.__symbol__(methodName)] = originalJestFn;
      context[methodName] = function(...args) {
        args[0] = wrapTestInZone(args[0]);
        return originalJestFn.apply(this, args);
      };
    });
    Zone3.patchJestObject = function patchJestObject(Timer, isModern = false) {
      function isPatchingFakeTimer() {
        const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
        return !!fakeAsyncZoneSpec;
      }
      function isInTestFunc() {
        const proxyZoneSpec2 = Zone3.current.get("ProxyZoneSpec");
        return proxyZoneSpec2 && proxyZoneSpec2.isTestFunc;
      }
      if (Timer[api.symbol("fakeTimers")]) {
        return;
      }
      Timer[api.symbol("fakeTimers")] = true;
      api.patchMethod(Timer, "_checkFakeTimers", (delegate) => {
        return function(self2, args) {
          if (isPatchingFakeTimer()) {
            return true;
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "useFakeTimers", (delegate) => {
        return function(self2, args) {
          Zone3[api.symbol("useFakeTimersCalled")] = true;
          if (isModern || isInTestFunc()) {
            return delegate.apply(self2, args);
          }
          return self2;
        };
      });
      api.patchMethod(Timer, "useRealTimers", (delegate) => {
        return function(self2, args) {
          Zone3[api.symbol("useFakeTimersCalled")] = false;
          if (isModern || isInTestFunc()) {
            return delegate.apply(self2, args);
          }
          return self2;
        };
      });
      api.patchMethod(Timer, "setSystemTime", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec && isPatchingFakeTimer()) {
            fakeAsyncZoneSpec.setFakeBaseSystemTime(args[0]);
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "getRealSystemTime", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec && isPatchingFakeTimer()) {
            return fakeAsyncZoneSpec.getRealSystemTime();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "runAllTicks", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.flushMicrotasks();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "runAllTimers", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.flush(100, true);
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "advanceTimersByTime", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.tick(args[0]);
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "runOnlyPendingTimers", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.flushOnlyPendingTimers();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "advanceTimersToNextTimer", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.tickToNext(args[0]);
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "clearAllTimers", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            fakeAsyncZoneSpec.removeAllTimers();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
      api.patchMethod(Timer, "getTimerCount", (delegate) => {
        return function(self2, args) {
          const fakeAsyncZoneSpec = Zone3.current.get("FakeAsyncTestZoneSpec");
          if (fakeAsyncZoneSpec) {
            return fakeAsyncZoneSpec.getTimerCount();
          } else {
            return delegate.apply(self2, args);
          }
        };
      });
    };
  });
}
function patchMocha(Zone2) {
  Zone2.__load_patch("mocha", (global2, Zone3) => {
    const Mocha = global2.Mocha;
    if (typeof Mocha === "undefined") {
      return;
    }
    if (typeof Zone3 === "undefined") {
      throw new Error("Missing Zone.js");
    }
    const ProxyZoneSpec2 = Zone3["ProxyZoneSpec"];
    const SyncTestZoneSpec = Zone3["SyncTestZoneSpec"];
    if (!ProxyZoneSpec2) {
      throw new Error("Missing ProxyZoneSpec");
    }
    if (Mocha["__zone_patch__"]) {
      throw new Error('"Mocha" has already been patched with "Zone".');
    }
    Mocha["__zone_patch__"] = true;
    const rootZone = Zone3.current;
    const syncZone = rootZone.fork(new SyncTestZoneSpec("Mocha.describe"));
    let testZone = null;
    const suiteZone = rootZone.fork(new ProxyZoneSpec2());
    const mochaOriginal = {
      after: global2.after,
      afterEach: global2.afterEach,
      before: global2.before,
      beforeEach: global2.beforeEach,
      describe: global2.describe,
      it: global2.it
    };
    function modifyArguments(args, syncTest, asyncTest) {
      for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        if (typeof arg === "function") {
          args[i] = arg.length === 0 ? syncTest(arg) : asyncTest(arg);
          args[i].toString = function() {
            return arg.toString();
          };
        }
      }
      return args;
    }
    function wrapDescribeInZone(args) {
      const syncTest = function(fn) {
        return function() {
          return syncZone.run(fn, this, arguments);
        };
      };
      return modifyArguments(args, syncTest);
    }
    function wrapTestInZone(args) {
      const asyncTest = function(fn) {
        return function(done) {
          return testZone.run(fn, this, [done]);
        };
      };
      const syncTest = function(fn) {
        return function() {
          return testZone.run(fn, this);
        };
      };
      return modifyArguments(args, syncTest, asyncTest);
    }
    function wrapSuiteInZone(args) {
      const asyncTest = function(fn) {
        return function(done) {
          return suiteZone.run(fn, this, [done]);
        };
      };
      const syncTest = function(fn) {
        return function() {
          return suiteZone.run(fn, this);
        };
      };
      return modifyArguments(args, syncTest, asyncTest);
    }
    global2.describe = global2.suite = function() {
      return mochaOriginal.describe.apply(this, wrapDescribeInZone(arguments));
    };
    global2.xdescribe = global2.suite.skip = global2.describe.skip = function() {
      return mochaOriginal.describe.skip.apply(this, wrapDescribeInZone(arguments));
    };
    global2.describe.only = global2.suite.only = function() {
      return mochaOriginal.describe.only.apply(this, wrapDescribeInZone(arguments));
    };
    global2.it = global2.specify = global2.test = function() {
      return mochaOriginal.it.apply(this, wrapTestInZone(arguments));
    };
    global2.xit = global2.xspecify = global2.it.skip = function() {
      return mochaOriginal.it.skip.apply(this, wrapTestInZone(arguments));
    };
    global2.it.only = global2.test.only = function() {
      return mochaOriginal.it.only.apply(this, wrapTestInZone(arguments));
    };
    global2.after = global2.suiteTeardown = function() {
      return mochaOriginal.after.apply(this, wrapSuiteInZone(arguments));
    };
    global2.afterEach = global2.teardown = function() {
      return mochaOriginal.afterEach.apply(this, wrapTestInZone(arguments));
    };
    global2.before = global2.suiteSetup = function() {
      return mochaOriginal.before.apply(this, wrapSuiteInZone(arguments));
    };
    global2.beforeEach = global2.setup = function() {
      return mochaOriginal.beforeEach.apply(this, wrapTestInZone(arguments));
    };
    ((originalRunTest, originalRun) => {
      Mocha.Runner.prototype.runTest = function(fn) {
        Zone3.current.scheduleMicroTask("mocha.forceTask", () => {
          originalRunTest.call(this, fn);
        });
      };
      Mocha.Runner.prototype.run = function(fn) {
        this.on("test", (e) => {
          testZone = rootZone.fork(new ProxyZoneSpec2());
        });
        this.on("fail", (test, err) => {
          const proxyZoneSpec = testZone && testZone.get("ProxyZoneSpec");
          if (proxyZoneSpec && err) {
            try {
              err.message += proxyZoneSpec.getAndClearPendingTasksInfo();
            } catch (error) {
            }
          }
        });
        return originalRun.call(this, fn);
      };
    })(Mocha.Runner.prototype.runTest, Mocha.Runner.prototype.run);
  });
}
var global$2 = globalThis;
function __symbol__(name) {
  const symbolPrefix = global$2["__Zone_symbol_prefix"] || "__zone_symbol__";
  return symbolPrefix + name;
}
var __global = typeof window !== "undefined" && window || typeof self !== "undefined" && self || global;
var AsyncTestZoneSpec = class _AsyncTestZoneSpec {
  finishCallback;
  failCallback;
  // Needs to be a getter and not a plain property in order run this just-in-time. Otherwise
  // `__symbol__` would be evaluated during top-level execution prior to the Zone prefix being
  // changed for tests.
  static get symbolParentUnresolved() {
    return __symbol__("parentUnresolved");
  }
  _pendingMicroTasks = false;
  _pendingMacroTasks = false;
  _alreadyErrored = false;
  _isSync = false;
  _existingFinishTimer = null;
  entryFunction = null;
  runZone = Zone.current;
  unresolvedChainedPromiseCount = 0;
  supportWaitUnresolvedChainedPromise = false;
  constructor(finishCallback, failCallback, namePrefix) {
    this.finishCallback = finishCallback;
    this.failCallback = failCallback;
    this.name = "asyncTestZone for " + namePrefix;
    this.properties = { "AsyncTestZoneSpec": this };
    this.supportWaitUnresolvedChainedPromise = __global[__symbol__("supportWaitUnResolvedChainedPromise")] === true;
  }
  isUnresolvedChainedPromisePending() {
    return this.unresolvedChainedPromiseCount > 0;
  }
  _finishCallbackIfDone() {
    if (this._existingFinishTimer !== null) {
      clearTimeout(this._existingFinishTimer);
      this._existingFinishTimer = null;
    }
    if (!(this._pendingMicroTasks || this._pendingMacroTasks || this.supportWaitUnresolvedChainedPromise && this.isUnresolvedChainedPromisePending())) {
      this.runZone.run(() => {
        this._existingFinishTimer = setTimeout(() => {
          if (!this._alreadyErrored && !(this._pendingMicroTasks || this._pendingMacroTasks)) {
            this.finishCallback();
          }
        }, 0);
      });
    }
  }
  patchPromiseForTest() {
    if (!this.supportWaitUnresolvedChainedPromise) {
      return;
    }
    const patchPromiseForTest = Promise[Zone.__symbol__("patchPromiseForTest")];
    if (patchPromiseForTest) {
      patchPromiseForTest();
    }
  }
  unPatchPromiseForTest() {
    if (!this.supportWaitUnresolvedChainedPromise) {
      return;
    }
    const unPatchPromiseForTest = Promise[Zone.__symbol__("unPatchPromiseForTest")];
    if (unPatchPromiseForTest) {
      unPatchPromiseForTest();
    }
  }
  // ZoneSpec implementation below.
  name;
  properties;
  onScheduleTask(delegate, current, target, task) {
    if (task.type !== "eventTask") {
      this._isSync = false;
    }
    if (task.type === "microTask" && task.data && task.data instanceof Promise) {
      if (task.data[_AsyncTestZoneSpec.symbolParentUnresolved] === true) {
        this.unresolvedChainedPromiseCount--;
      }
    }
    return delegate.scheduleTask(target, task);
  }
  onInvokeTask(delegate, current, target, task, applyThis, applyArgs) {
    if (task.type !== "eventTask") {
      this._isSync = false;
    }
    return delegate.invokeTask(target, task, applyThis, applyArgs);
  }
  onCancelTask(delegate, current, target, task) {
    if (task.type !== "eventTask") {
      this._isSync = false;
    }
    return delegate.cancelTask(target, task);
  }
  // Note - we need to use onInvoke at the moment to call finish when a test is
  // fully synchronous. TODO(juliemr): remove this when the logic for
  // onHasTask changes and it calls whenever the task queues are dirty.
  // updated by(JiaLiPassion), only call finish callback when no task
  // was scheduled/invoked/canceled.
  onInvoke(parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) {
    if (!this.entryFunction) {
      this.entryFunction = delegate;
    }
    try {
      this._isSync = true;
      return parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
    } finally {
      if (this._isSync && this.entryFunction === delegate) {
        this._finishCallbackIfDone();
      }
    }
  }
  onHandleError(parentZoneDelegate, currentZone, targetZone, error) {
    const result = parentZoneDelegate.handleError(targetZone, error);
    if (result) {
      this.failCallback(error);
      this._alreadyErrored = true;
    }
    return false;
  }
  onHasTask(delegate, current, target, hasTaskState) {
    delegate.hasTask(target, hasTaskState);
    if (current !== target) {
      return;
    }
    if (hasTaskState.change == "microTask") {
      this._pendingMicroTasks = hasTaskState.microTask;
      this._finishCallbackIfDone();
    } else if (hasTaskState.change == "macroTask") {
      this._pendingMacroTasks = hasTaskState.macroTask;
      this._finishCallbackIfDone();
    }
  }
};
function patchAsyncTest(Zone2) {
  Zone2["AsyncTestZoneSpec"] = AsyncTestZoneSpec;
  Zone2.__load_patch("asynctest", (global2, Zone3, api) => {
    Zone3[api.symbol("asyncTest")] = function asyncTest(fn) {
      if (global2.jasmine) {
        return function(done) {
          if (!done) {
            done = function() {
            };
            done.fail = function(e) {
              throw e;
            };
          }
          runInTestZone(fn, this, done, (err) => {
            if (typeof err === "string") {
              return done.fail(new Error(err));
            } else {
              done.fail(err);
            }
          });
        };
      }
      return function() {
        return new Promise((finishCallback, failCallback) => {
          runInTestZone(fn, this, finishCallback, failCallback);
        });
      };
    };
    function runInTestZone(fn, context, finishCallback, failCallback) {
      const currentZone = Zone3.current;
      const AsyncTestZoneSpec2 = Zone3["AsyncTestZoneSpec"];
      if (AsyncTestZoneSpec2 === void 0) {
        throw new Error("AsyncTestZoneSpec is needed for the async() test helper but could not be found. Please make sure that your environment includes zone.js/plugins/async-test");
      }
      const ProxyZoneSpec2 = Zone3["ProxyZoneSpec"];
      if (!ProxyZoneSpec2) {
        throw new Error("ProxyZoneSpec is needed for the async() test helper but could not be found. Please make sure that your environment includes zone.js/plugins/proxy");
      }
      const proxyZoneSpec = ProxyZoneSpec2.get();
      ProxyZoneSpec2.assertPresent();
      const proxyZone = Zone3.current.getZoneWith("ProxyZoneSpec");
      const previousDelegate = proxyZoneSpec.getDelegate();
      proxyZone.parent.run(() => {
        const testZoneSpec = new AsyncTestZoneSpec2(() => {
          if (proxyZoneSpec.getDelegate() == testZoneSpec) {
            proxyZoneSpec.setDelegate(previousDelegate);
          }
          testZoneSpec.unPatchPromiseForTest();
          currentZone.run(() => {
            finishCallback();
          });
        }, (error) => {
          if (proxyZoneSpec.getDelegate() == testZoneSpec) {
            proxyZoneSpec.setDelegate(previousDelegate);
          }
          testZoneSpec.unPatchPromiseForTest();
          currentZone.run(() => {
            failCallback(error);
          });
        }, "test");
        proxyZoneSpec.setDelegate(testZoneSpec);
        testZoneSpec.patchPromiseForTest();
      });
      return Zone3.current.runGuarded(fn, context);
    }
  });
}
var global$1 = typeof window === "object" && window || typeof self === "object" && self || globalThis.global;
var OriginalDate = global$1.Date;
function FakeDate() {
  if (arguments.length === 0) {
    const d = new OriginalDate();
    d.setTime(FakeDate.now());
    return d;
  } else {
    const args = Array.prototype.slice.call(arguments);
    return new OriginalDate(...args);
  }
}
FakeDate.now = function() {
  const fakeAsyncTestZoneSpec = Zone.current.get("FakeAsyncTestZoneSpec");
  if (fakeAsyncTestZoneSpec) {
    return fakeAsyncTestZoneSpec.getFakeSystemTime();
  }
  return OriginalDate.now.apply(this, arguments);
};
FakeDate.UTC = OriginalDate.UTC;
FakeDate.parse = OriginalDate.parse;
var patchedTimers;
var timeoutCallback = function() {
};
var Scheduler = class _Scheduler {
  // Next scheduler id.
  static nextNodeJSId = 1;
  static nextId = -1;
  // Scheduler queue with the tuple of end time and callback function - sorted by end time.
  _schedulerQueue = [];
  // Current simulated time in millis.
  _currentTickTime = 0;
  // Current fake system base time in millis.
  _currentFakeBaseSystemTime = OriginalDate.now();
  // track requeuePeriodicTimer
  _currentTickRequeuePeriodicEntries = [];
  constructor() {
  }
  static getNextId() {
    const id = patchedTimers.nativeSetTimeout.call(global$1, timeoutCallback, 0);
    patchedTimers.nativeClearTimeout.call(global$1, id);
    if (typeof id === "number") {
      return id;
    }
    return _Scheduler.nextNodeJSId++;
  }
  getCurrentTickTime() {
    return this._currentTickTime;
  }
  getFakeSystemTime() {
    return this._currentFakeBaseSystemTime + this._currentTickTime;
  }
  setFakeBaseSystemTime(fakeBaseSystemTime) {
    this._currentFakeBaseSystemTime = fakeBaseSystemTime;
  }
  getRealSystemTime() {
    return OriginalDate.now();
  }
  scheduleFunction(cb, delay, options) {
    options = __spreadValues(__spreadValues({}, {
      args: [],
      isPeriodic: false,
      isRequestAnimationFrame: false,
      id: -1,
      isRequeuePeriodic: false
    }), options);
    let currentId = options.id < 0 ? _Scheduler.nextId : options.id;
    _Scheduler.nextId = _Scheduler.getNextId();
    let endTime = this._currentTickTime + delay;
    let newEntry = {
      endTime,
      id: currentId,
      func: cb,
      args: options.args,
      delay,
      isPeriodic: options.isPeriodic,
      isRequestAnimationFrame: options.isRequestAnimationFrame
    };
    if (options.isRequeuePeriodic) {
      this._currentTickRequeuePeriodicEntries.push(newEntry);
    }
    let i = 0;
    for (; i < this._schedulerQueue.length; i++) {
      let currentEntry = this._schedulerQueue[i];
      if (newEntry.endTime < currentEntry.endTime) {
        break;
      }
    }
    this._schedulerQueue.splice(i, 0, newEntry);
    return currentId;
  }
  removeScheduledFunctionWithId(id) {
    for (let i = 0; i < this._schedulerQueue.length; i++) {
      if (this._schedulerQueue[i].id == id) {
        this._schedulerQueue.splice(i, 1);
        break;
      }
    }
  }
  removeAll() {
    this._schedulerQueue = [];
  }
  getTimerCount() {
    return this._schedulerQueue.length;
  }
  tickToNext(step = 1, doTick, tickOptions) {
    if (this._schedulerQueue.length < step) {
      return;
    }
    const startTime = this._currentTickTime;
    const targetTask = this._schedulerQueue[step - 1];
    this.tick(targetTask.endTime - startTime, doTick, tickOptions);
  }
  tick(millis = 0, doTick, tickOptions) {
    let finalTime = this._currentTickTime + millis;
    let lastCurrentTime = 0;
    tickOptions = Object.assign({ processNewMacroTasksSynchronously: true }, tickOptions);
    const schedulerQueue = tickOptions.processNewMacroTasksSynchronously ? this._schedulerQueue : this._schedulerQueue.slice();
    if (schedulerQueue.length === 0 && doTick) {
      doTick(millis);
      return;
    }
    while (schedulerQueue.length > 0) {
      this._currentTickRequeuePeriodicEntries = [];
      let current = schedulerQueue[0];
      if (finalTime < current.endTime) {
        break;
      } else {
        let current2 = schedulerQueue.shift();
        if (!tickOptions.processNewMacroTasksSynchronously) {
          const idx = this._schedulerQueue.indexOf(current2);
          if (idx >= 0) {
            this._schedulerQueue.splice(idx, 1);
          }
        }
        lastCurrentTime = this._currentTickTime;
        this._currentTickTime = current2.endTime;
        if (doTick) {
          doTick(this._currentTickTime - lastCurrentTime);
        }
        let retval = current2.func.apply(global$1, current2.isRequestAnimationFrame ? [this._currentTickTime] : current2.args);
        if (!retval) {
          break;
        }
        if (!tickOptions.processNewMacroTasksSynchronously) {
          this._currentTickRequeuePeriodicEntries.forEach((newEntry) => {
            let i = 0;
            for (; i < schedulerQueue.length; i++) {
              const currentEntry = schedulerQueue[i];
              if (newEntry.endTime < currentEntry.endTime) {
                break;
              }
            }
            schedulerQueue.splice(i, 0, newEntry);
          });
        }
      }
    }
    lastCurrentTime = this._currentTickTime;
    this._currentTickTime = finalTime;
    if (doTick) {
      doTick(this._currentTickTime - lastCurrentTime);
    }
  }
  flushOnlyPendingTimers(doTick) {
    if (this._schedulerQueue.length === 0) {
      return 0;
    }
    const startTime = this._currentTickTime;
    const lastTask = this._schedulerQueue[this._schedulerQueue.length - 1];
    this.tick(lastTask.endTime - startTime, doTick, { processNewMacroTasksSynchronously: false });
    return this._currentTickTime - startTime;
  }
  flush(limit = 20, flushPeriodic = false, doTick) {
    if (flushPeriodic) {
      return this.flushPeriodic(doTick);
    } else {
      return this.flushNonPeriodic(limit, doTick);
    }
  }
  flushPeriodic(doTick) {
    if (this._schedulerQueue.length === 0) {
      return 0;
    }
    const startTime = this._currentTickTime;
    const lastTask = this._schedulerQueue[this._schedulerQueue.length - 1];
    this.tick(lastTask.endTime - startTime, doTick);
    return this._currentTickTime - startTime;
  }
  flushNonPeriodic(limit, doTick) {
    const startTime = this._currentTickTime;
    let lastCurrentTime = 0;
    let count = 0;
    while (this._schedulerQueue.length > 0) {
      count++;
      if (count > limit) {
        throw new Error("flush failed after reaching the limit of " + limit + " tasks. Does your code use a polling timeout?");
      }
      if (this._schedulerQueue.filter((task) => !task.isPeriodic && !task.isRequestAnimationFrame).length === 0) {
        break;
      }
      const current = this._schedulerQueue.shift();
      lastCurrentTime = this._currentTickTime;
      this._currentTickTime = current.endTime;
      if (doTick) {
        doTick(this._currentTickTime - lastCurrentTime);
      }
      const retval = current.func.apply(global$1, current.args);
      if (!retval) {
        break;
      }
    }
    return this._currentTickTime - startTime;
  }
};
var FakeAsyncTestZoneSpec = class _FakeAsyncTestZoneSpec {
  trackPendingRequestAnimationFrame;
  macroTaskOptions;
  static assertInZone() {
    if (Zone.current.get("FakeAsyncTestZoneSpec") == null) {
      throw new Error("The code should be running in the fakeAsync zone to call this function");
    }
  }
  _scheduler = new Scheduler();
  _microtasks = [];
  _lastError = null;
  _uncaughtPromiseErrors = Promise[Zone.__symbol__("uncaughtPromiseErrors")];
  pendingPeriodicTimers = [];
  pendingTimers = [];
  patchDateLocked = false;
  constructor(namePrefix, trackPendingRequestAnimationFrame = false, macroTaskOptions) {
    this.trackPendingRequestAnimationFrame = trackPendingRequestAnimationFrame;
    this.macroTaskOptions = macroTaskOptions;
    this.name = "fakeAsyncTestZone for " + namePrefix;
    if (!this.macroTaskOptions) {
      this.macroTaskOptions = global$1[Zone.__symbol__("FakeAsyncTestMacroTask")];
    }
  }
  _fnAndFlush(fn, completers) {
    return (...args) => {
      fn.apply(global$1, args);
      if (this._lastError === null) {
        if (completers.onSuccess != null) {
          completers.onSuccess.apply(global$1);
        }
        this.flushMicrotasks();
      } else {
        if (completers.onError != null) {
          completers.onError.apply(global$1);
        }
      }
      return this._lastError === null;
    };
  }
  static _removeTimer(timers, id) {
    let index = timers.indexOf(id);
    if (index > -1) {
      timers.splice(index, 1);
    }
  }
  _dequeueTimer(id) {
    return () => {
      _FakeAsyncTestZoneSpec._removeTimer(this.pendingTimers, id);
    };
  }
  _requeuePeriodicTimer(fn, interval, args, id) {
    return () => {
      if (this.pendingPeriodicTimers.indexOf(id) !== -1) {
        this._scheduler.scheduleFunction(fn, interval, {
          args,
          isPeriodic: true,
          id,
          isRequeuePeriodic: true
        });
      }
    };
  }
  _dequeuePeriodicTimer(id) {
    return () => {
      _FakeAsyncTestZoneSpec._removeTimer(this.pendingPeriodicTimers, id);
    };
  }
  _setTimeout(fn, delay, args, isTimer = true) {
    let removeTimerFn = this._dequeueTimer(Scheduler.nextId);
    let cb = this._fnAndFlush(fn, { onSuccess: removeTimerFn, onError: removeTimerFn });
    let id = this._scheduler.scheduleFunction(cb, delay, { args, isRequestAnimationFrame: !isTimer });
    if (isTimer) {
      this.pendingTimers.push(id);
    }
    return id;
  }
  _clearTimeout(id) {
    _FakeAsyncTestZoneSpec._removeTimer(this.pendingTimers, id);
    this._scheduler.removeScheduledFunctionWithId(id);
  }
  _setInterval(fn, interval, args) {
    let id = Scheduler.nextId;
    let completers = { onSuccess: null, onError: this._dequeuePeriodicTimer(id) };
    let cb = this._fnAndFlush(fn, completers);
    completers.onSuccess = this._requeuePeriodicTimer(cb, interval, args, id);
    this._scheduler.scheduleFunction(cb, interval, { args, isPeriodic: true });
    this.pendingPeriodicTimers.push(id);
    return id;
  }
  _clearInterval(id) {
    _FakeAsyncTestZoneSpec._removeTimer(this.pendingPeriodicTimers, id);
    this._scheduler.removeScheduledFunctionWithId(id);
  }
  _resetLastErrorAndThrow() {
    let error = this._lastError || this._uncaughtPromiseErrors[0];
    this._uncaughtPromiseErrors.length = 0;
    this._lastError = null;
    throw error;
  }
  getCurrentTickTime() {
    return this._scheduler.getCurrentTickTime();
  }
  getFakeSystemTime() {
    return this._scheduler.getFakeSystemTime();
  }
  setFakeBaseSystemTime(realTime) {
    this._scheduler.setFakeBaseSystemTime(realTime);
  }
  getRealSystemTime() {
    return this._scheduler.getRealSystemTime();
  }
  static patchDate() {
    if (!!global$1[Zone.__symbol__("disableDatePatching")]) {
      return;
    }
    if (global$1["Date"] === FakeDate) {
      return;
    }
    global$1["Date"] = FakeDate;
    FakeDate.prototype = OriginalDate.prototype;
    _FakeAsyncTestZoneSpec.checkTimerPatch();
  }
  static resetDate() {
    if (global$1["Date"] === FakeDate) {
      global$1["Date"] = OriginalDate;
    }
  }
  static checkTimerPatch() {
    if (!patchedTimers) {
      throw new Error("Expected timers to have been patched.");
    }
    if (global$1.setTimeout !== patchedTimers.setTimeout) {
      global$1.setTimeout = patchedTimers.setTimeout;
      global$1.clearTimeout = patchedTimers.clearTimeout;
    }
    if (global$1.setInterval !== patchedTimers.setInterval) {
      global$1.setInterval = patchedTimers.setInterval;
      global$1.clearInterval = patchedTimers.clearInterval;
    }
  }
  lockDatePatch() {
    this.patchDateLocked = true;
    _FakeAsyncTestZoneSpec.patchDate();
  }
  unlockDatePatch() {
    this.patchDateLocked = false;
    _FakeAsyncTestZoneSpec.resetDate();
  }
  tickToNext(steps = 1, doTick, tickOptions = { processNewMacroTasksSynchronously: true }) {
    if (steps <= 0) {
      return;
    }
    _FakeAsyncTestZoneSpec.assertInZone();
    this.flushMicrotasks();
    this._scheduler.tickToNext(steps, doTick, tickOptions);
    if (this._lastError !== null) {
      this._resetLastErrorAndThrow();
    }
  }
  tick(millis = 0, doTick, tickOptions = { processNewMacroTasksSynchronously: true }) {
    _FakeAsyncTestZoneSpec.assertInZone();
    this.flushMicrotasks();
    this._scheduler.tick(millis, doTick, tickOptions);
    if (this._lastError !== null) {
      this._resetLastErrorAndThrow();
    }
  }
  flushMicrotasks() {
    _FakeAsyncTestZoneSpec.assertInZone();
    const flushErrors = () => {
      if (this._lastError !== null || this._uncaughtPromiseErrors.length) {
        this._resetLastErrorAndThrow();
      }
    };
    while (this._microtasks.length > 0) {
      let microtask = this._microtasks.shift();
      microtask.func.apply(microtask.target, microtask.args);
    }
    flushErrors();
  }
  flush(limit, flushPeriodic, doTick) {
    _FakeAsyncTestZoneSpec.assertInZone();
    this.flushMicrotasks();
    const elapsed = this._scheduler.flush(limit, flushPeriodic, doTick);
    if (this._lastError !== null) {
      this._resetLastErrorAndThrow();
    }
    return elapsed;
  }
  flushOnlyPendingTimers(doTick) {
    _FakeAsyncTestZoneSpec.assertInZone();
    this.flushMicrotasks();
    const elapsed = this._scheduler.flushOnlyPendingTimers(doTick);
    if (this._lastError !== null) {
      this._resetLastErrorAndThrow();
    }
    return elapsed;
  }
  removeAllTimers() {
    _FakeAsyncTestZoneSpec.assertInZone();
    this._scheduler.removeAll();
    this.pendingPeriodicTimers = [];
    this.pendingTimers = [];
  }
  getTimerCount() {
    return this._scheduler.getTimerCount() + this._microtasks.length;
  }
  // ZoneSpec implementation below.
  name;
  properties = { "FakeAsyncTestZoneSpec": this };
  onScheduleTask(delegate, current, target, task) {
    switch (task.type) {
      case "microTask":
        let args = task.data && task.data.args;
        let additionalArgs;
        if (args) {
          let callbackIndex = task.data.cbIdx;
          if (typeof args.length === "number" && args.length > callbackIndex + 1) {
            additionalArgs = Array.prototype.slice.call(args, callbackIndex + 1);
          }
        }
        this._microtasks.push({
          func: task.invoke,
          args: additionalArgs,
          target: task.data && task.data.target
        });
        break;
      case "macroTask":
        switch (task.source) {
          case "setTimeout":
            task.data["handleId"] = this._setTimeout(task.invoke, task.data["delay"], Array.prototype.slice.call(task.data["args"], 2));
            break;
          case "setImmediate":
            task.data["handleId"] = this._setTimeout(task.invoke, 0, Array.prototype.slice.call(task.data["args"], 1));
            break;
          case "setInterval":
            task.data["handleId"] = this._setInterval(task.invoke, task.data["delay"], Array.prototype.slice.call(task.data["args"], 2));
            break;
          case "XMLHttpRequest.send":
            throw new Error("Cannot make XHRs from within a fake async test. Request URL: " + task.data["url"]);
          case "requestAnimationFrame":
          case "webkitRequestAnimationFrame":
          case "mozRequestAnimationFrame":
            task.data["handleId"] = this._setTimeout(task.invoke, 16, task.data["args"], this.trackPendingRequestAnimationFrame);
            break;
          default:
            const macroTaskOption = this.findMacroTaskOption(task);
            if (macroTaskOption) {
              const args2 = task.data && task.data["args"];
              const delay = args2 && args2.length > 1 ? args2[1] : 0;
              let callbackArgs = macroTaskOption.callbackArgs ? macroTaskOption.callbackArgs : args2;
              if (!!macroTaskOption.isPeriodic) {
                task.data["handleId"] = this._setInterval(task.invoke, delay, callbackArgs);
                task.data.isPeriodic = true;
              } else {
                task.data["handleId"] = this._setTimeout(task.invoke, delay, callbackArgs);
              }
              break;
            }
            throw new Error("Unknown macroTask scheduled in fake async test: " + task.source);
        }
        break;
      case "eventTask":
        task = delegate.scheduleTask(target, task);
        break;
    }
    return task;
  }
  onCancelTask(delegate, current, target, task) {
    switch (task.source) {
      case "setTimeout":
      case "requestAnimationFrame":
      case "webkitRequestAnimationFrame":
      case "mozRequestAnimationFrame":
        return this._clearTimeout(task.data["handleId"]);
      case "setInterval":
        return this._clearInterval(task.data["handleId"]);
      default:
        const macroTaskOption = this.findMacroTaskOption(task);
        if (macroTaskOption) {
          const handleId = task.data["handleId"];
          return macroTaskOption.isPeriodic ? this._clearInterval(handleId) : this._clearTimeout(handleId);
        }
        return delegate.cancelTask(target, task);
    }
  }
  onInvoke(delegate, current, target, callback, applyThis, applyArgs, source) {
    try {
      _FakeAsyncTestZoneSpec.patchDate();
      return delegate.invoke(target, callback, applyThis, applyArgs, source);
    } finally {
      if (!this.patchDateLocked) {
        _FakeAsyncTestZoneSpec.resetDate();
      }
    }
  }
  findMacroTaskOption(task) {
    if (!this.macroTaskOptions) {
      return null;
    }
    for (let i = 0; i < this.macroTaskOptions.length; i++) {
      const macroTaskOption = this.macroTaskOptions[i];
      if (macroTaskOption.source === task.source) {
        return macroTaskOption;
      }
    }
    return null;
  }
  onHandleError(parentZoneDelegate, currentZone, targetZone, error) {
    this._lastError = error;
    return false;
  }
};
var _fakeAsyncTestZoneSpec = null;
function getProxyZoneSpec() {
  return Zone && Zone["ProxyZoneSpec"];
}
var _sharedProxyZoneSpec = null;
var _sharedProxyZone = null;
function resetFakeAsyncZone() {
  if (_fakeAsyncTestZoneSpec) {
    _fakeAsyncTestZoneSpec.unlockDatePatch();
  }
  _fakeAsyncTestZoneSpec = null;
  getProxyZoneSpec()?.get()?.resetDelegate();
  _sharedProxyZoneSpec?.resetDelegate();
}
function fakeAsync(fn, options = {}) {
  const { flush: flush2 = true } = options;
  const fakeAsyncFn = function(...args) {
    const ProxyZoneSpec2 = getProxyZoneSpec();
    if (!ProxyZoneSpec2) {
      throw new Error("ProxyZoneSpec is needed for the fakeAsync() test helper but could not be found. Make sure that your environment includes zone-testing.js");
    }
    const proxyZoneSpec = ProxyZoneSpec2.assertPresent();
    if (Zone.current.get("FakeAsyncTestZoneSpec")) {
      throw new Error("fakeAsync() calls can not be nested");
    }
    try {
      if (!_fakeAsyncTestZoneSpec) {
        const FakeAsyncTestZoneSpec2 = Zone && Zone["FakeAsyncTestZoneSpec"];
        if (proxyZoneSpec.getDelegate() instanceof FakeAsyncTestZoneSpec2) {
          throw new Error("fakeAsync() calls can not be nested");
        }
        _fakeAsyncTestZoneSpec = new FakeAsyncTestZoneSpec2();
      }
      let res;
      const lastProxyZoneSpec = proxyZoneSpec.getDelegate();
      proxyZoneSpec.setDelegate(_fakeAsyncTestZoneSpec);
      _fakeAsyncTestZoneSpec.lockDatePatch();
      try {
        res = fn.apply(this, args);
        if (flush2) {
          _fakeAsyncTestZoneSpec.flush(20, true);
        } else {
          flushMicrotasks();
        }
      } finally {
        proxyZoneSpec.setDelegate(lastProxyZoneSpec);
      }
      if (!flush2) {
        if (_fakeAsyncTestZoneSpec.pendingPeriodicTimers.length > 0) {
          throw new Error(`${_fakeAsyncTestZoneSpec.pendingPeriodicTimers.length} periodic timer(s) still in the queue.`);
        }
        if (_fakeAsyncTestZoneSpec.pendingTimers.length > 0) {
          throw new Error(`${_fakeAsyncTestZoneSpec.pendingTimers.length} timer(s) still in the queue.`);
        }
      }
      return res;
    } finally {
      resetFakeAsyncZone();
    }
  };
  fakeAsyncFn.isFakeAsync = true;
  return fakeAsyncFn;
}
function _getFakeAsyncZoneSpec() {
  if (_fakeAsyncTestZoneSpec == null) {
    _fakeAsyncTestZoneSpec = Zone.current.get("FakeAsyncTestZoneSpec");
    if (_fakeAsyncTestZoneSpec == null) {
      throw new Error("The code should be running in the fakeAsync zone to call this function");
    }
  }
  return _fakeAsyncTestZoneSpec;
}
function tick(millis = 0, ignoreNestedTimeout = false) {
  _getFakeAsyncZoneSpec().tick(millis, null, ignoreNestedTimeout);
}
function flush(maxTurns) {
  return _getFakeAsyncZoneSpec().flush(maxTurns);
}
function discardPeriodicTasks() {
  const zoneSpec = _getFakeAsyncZoneSpec();
  zoneSpec.pendingPeriodicTimers;
  zoneSpec.pendingPeriodicTimers.length = 0;
}
function withProxyZone(fn) {
  const autoProxyFn = function(...args) {
    const proxyZoneSpec = getProxyZoneSpec();
    if (proxyZoneSpec === void 0) {
      throw new Error("ProxyZoneSpec is needed for the withProxyZone() test helper but could not be found. Make sure that your environment includes zone-testing.js");
    }
    const proxyZone = proxyZoneSpec.get() !== void 0 ? Zone.current : getOrCreateRootProxy();
    return proxyZone.run(fn, this, args);
  };
  return autoProxyFn;
}
function getOrCreateRootProxy() {
  const ProxyZoneSpec2 = getProxyZoneSpec();
  if (ProxyZoneSpec2 === void 0) {
    throw new Error("ProxyZoneSpec is needed for withProxyZone but could not be found. Make sure that your environment includes zone-testing.js");
  }
  if (_sharedProxyZoneSpec === null) {
    _sharedProxyZoneSpec = new ProxyZoneSpec2();
  }
  _sharedProxyZone = Zone.root.fork(_sharedProxyZoneSpec);
  return _sharedProxyZone;
}
function flushMicrotasks() {
  _getFakeAsyncZoneSpec().flushMicrotasks();
}
function patchFakeAsyncTest(Zone2) {
  Zone2["FakeAsyncTestZoneSpec"] = FakeAsyncTestZoneSpec;
  Zone2.__load_patch("fakeasync", (global2, Zone3, api) => {
    Zone3[api.symbol("fakeAsyncTest")] = {
      resetFakeAsyncZone,
      flushMicrotasks,
      discardPeriodicTasks,
      tick,
      flush,
      fakeAsync,
      withProxyZone
    };
  }, true);
  patchedTimers = {
    setTimeout: global$1.setTimeout,
    setInterval: global$1.setInterval,
    clearTimeout: global$1.clearTimeout,
    clearInterval: global$1.clearInterval,
    nativeSetTimeout: global$1[Zone2.__symbol__("setTimeout")],
    nativeClearTimeout: global$1[Zone2.__symbol__("clearTimeout")]
  };
  Scheduler.nextId = Scheduler.getNextId();
}
function patchLongStackTrace(Zone2) {
  const NEWLINE = "\n";
  const IGNORE_FRAMES = {};
  const creationTrace = "__creationTrace__";
  const ERROR_TAG = "STACKTRACE TRACKING";
  const SEP_TAG = "__SEP_TAG__";
  let sepTemplate = SEP_TAG + "@[native]";
  class LongStackTrace {
    error = getStacktrace();
    timestamp = /* @__PURE__ */ new Date();
  }
  function getStacktraceWithUncaughtError() {
    return new Error(ERROR_TAG);
  }
  function getStacktraceWithCaughtError() {
    try {
      throw getStacktraceWithUncaughtError();
    } catch (err) {
      return err;
    }
  }
  const error = getStacktraceWithUncaughtError();
  const caughtError = getStacktraceWithCaughtError();
  const getStacktrace = error.stack ? getStacktraceWithUncaughtError : caughtError.stack ? getStacktraceWithCaughtError : getStacktraceWithUncaughtError;
  function getFrames(error2) {
    return error2.stack ? error2.stack.split(NEWLINE) : [];
  }
  function addErrorStack(lines, error2) {
    let trace = getFrames(error2);
    for (let i = 0; i < trace.length; i++) {
      const frame = trace[i];
      if (!IGNORE_FRAMES.hasOwnProperty(frame)) {
        lines.push(trace[i]);
      }
    }
  }
  function renderLongStackTrace(frames, stack) {
    const longTrace = [stack ? stack.trim() : ""];
    if (frames) {
      let timestamp = (/* @__PURE__ */ new Date()).getTime();
      for (let i = 0; i < frames.length; i++) {
        const traceFrames = frames[i];
        const lastTime = traceFrames.timestamp;
        let separator = `____________________Elapsed ${timestamp - lastTime.getTime()} ms; At: ${lastTime}`;
        separator = separator.replace(/[^\w\d]/g, "_");
        longTrace.push(sepTemplate.replace(SEP_TAG, separator));
        addErrorStack(longTrace, traceFrames.error);
        timestamp = lastTime.getTime();
      }
    }
    return longTrace.join(NEWLINE);
  }
  function stackTracesEnabled() {
    return Error.stackTraceLimit > 0;
  }
  Zone2["longStackTraceZoneSpec"] = {
    name: "long-stack-trace",
    longStackTraceLimit: 10,
    // Max number of task to keep the stack trace for.
    // add a getLongStackTrace method in spec to
    // handle handled reject promise error.
    getLongStackTrace: function(error2) {
      if (!error2) {
        return void 0;
      }
      const trace = error2[Zone2.__symbol__("currentTaskTrace")];
      if (!trace) {
        return error2.stack;
      }
      return renderLongStackTrace(trace, error2.stack);
    },
    onScheduleTask: function(parentZoneDelegate, currentZone, targetZone, task) {
      if (stackTracesEnabled()) {
        const currentTask = Zone2.currentTask;
        let trace = currentTask && currentTask.data && currentTask.data[creationTrace] || [];
        trace = [new LongStackTrace()].concat(trace);
        if (trace.length > this.longStackTraceLimit) {
          trace.length = this.longStackTraceLimit;
        }
        if (!task.data)
          task.data = {};
        if (task.type === "eventTask") {
          task.data = __spreadValues({}, task.data);
        }
        task.data[creationTrace] = trace;
      }
      return parentZoneDelegate.scheduleTask(targetZone, task);
    },
    onHandleError: function(parentZoneDelegate, currentZone, targetZone, error2) {
      if (stackTracesEnabled()) {
        const parentTask = Zone2.currentTask || error2.task;
        if (error2 instanceof Error && parentTask) {
          const longStack = renderLongStackTrace(parentTask.data && parentTask.data[creationTrace], error2.stack);
          try {
            error2.stack = error2.longStack = longStack;
          } catch (err) {
          }
        }
      }
      return parentZoneDelegate.handleError(targetZone, error2);
    }
  };
  function captureStackTraces(stackTraces, count) {
    if (count > 0) {
      stackTraces.push(getFrames(new LongStackTrace().error));
      captureStackTraces(stackTraces, count - 1);
    }
  }
  function computeIgnoreFrames() {
    if (!stackTracesEnabled()) {
      return;
    }
    const frames = [];
    captureStackTraces(frames, 2);
    const frames1 = frames[0];
    const frames2 = frames[1];
    for (let i = 0; i < frames1.length; i++) {
      const frame1 = frames1[i];
      if (frame1.indexOf(ERROR_TAG) == -1) {
        let match = frame1.match(/^\s*at\s+/);
        if (match) {
          sepTemplate = match[0] + SEP_TAG + " (http://localhost)";
          break;
        }
      }
    }
    for (let i = 0; i < frames1.length; i++) {
      const frame1 = frames1[i];
      const frame2 = frames2[i];
      if (frame1 === frame2) {
        IGNORE_FRAMES[frame1] = true;
      } else {
        break;
      }
    }
  }
  computeIgnoreFrames();
}
var ProxyZoneSpec = class _ProxyZoneSpec {
  defaultSpecDelegate;
  name = "ProxyZone";
  _delegateSpec = null;
  properties = { "ProxyZoneSpec": this };
  propertyKeys = null;
  lastTaskState = null;
  isNeedToTriggerHasTask = false;
  tasks = [];
  static get() {
    return Zone.current.get("ProxyZoneSpec");
  }
  static isLoaded() {
    return _ProxyZoneSpec.get() instanceof _ProxyZoneSpec;
  }
  static assertPresent() {
    const spec = _ProxyZoneSpec.get();
    if (spec === void 0) {
      throw new Error(`Expected to be running in 'ProxyZone', but it was not found.`);
    }
    return spec;
  }
  constructor(defaultSpecDelegate = null) {
    this.defaultSpecDelegate = defaultSpecDelegate;
    this.setDelegate(defaultSpecDelegate);
  }
  setDelegate(delegateSpec) {
    const isNewDelegate = this._delegateSpec !== delegateSpec;
    this._delegateSpec = delegateSpec;
    this.propertyKeys && this.propertyKeys.forEach((key) => delete this.properties[key]);
    this.propertyKeys = null;
    if (delegateSpec && delegateSpec.properties) {
      this.propertyKeys = Object.keys(delegateSpec.properties);
      this.propertyKeys.forEach((k) => this.properties[k] = delegateSpec.properties[k]);
    }
    if (isNewDelegate && this.lastTaskState && (this.lastTaskState.macroTask || this.lastTaskState.microTask)) {
      this.isNeedToTriggerHasTask = true;
    }
  }
  getDelegate() {
    return this._delegateSpec;
  }
  resetDelegate() {
    this.getDelegate();
    this.setDelegate(this.defaultSpecDelegate);
  }
  tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone) {
    if (this.isNeedToTriggerHasTask && this.lastTaskState) {
      this.isNeedToTriggerHasTask = false;
      this.onHasTask(parentZoneDelegate, currentZone, targetZone, this.lastTaskState);
    }
  }
  removeFromTasks(task) {
    if (!this.tasks) {
      return;
    }
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1);
        return;
      }
    }
  }
  getAndClearPendingTasksInfo() {
    if (this.tasks.length === 0) {
      return "";
    }
    const taskInfo = this.tasks.map((task) => {
      const dataInfo = task.data && Object.keys(task.data).map((key) => {
        return key + ":" + task.data[key];
      }).join(",");
      return `type: ${task.type}, source: ${task.source}, args: {${dataInfo}}`;
    });
    const pendingTasksInfo = "--Pending async tasks are: [" + taskInfo + "]";
    this.tasks = [];
    return pendingTasksInfo;
  }
  onFork(parentZoneDelegate, currentZone, targetZone, zoneSpec) {
    if (this._delegateSpec && this._delegateSpec.onFork) {
      return this._delegateSpec.onFork(parentZoneDelegate, currentZone, targetZone, zoneSpec);
    } else {
      return parentZoneDelegate.fork(targetZone, zoneSpec);
    }
  }
  onIntercept(parentZoneDelegate, currentZone, targetZone, delegate, source) {
    if (this._delegateSpec && this._delegateSpec.onIntercept) {
      return this._delegateSpec.onIntercept(parentZoneDelegate, currentZone, targetZone, delegate, source);
    } else {
      return parentZoneDelegate.intercept(targetZone, delegate, source);
    }
  }
  onInvoke(parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) {
    this.tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone);
    if (this._delegateSpec && this._delegateSpec.onInvoke) {
      return this._delegateSpec.onInvoke(parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source);
    } else {
      return parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
    }
  }
  onHandleError(parentZoneDelegate, currentZone, targetZone, error) {
    if (this._delegateSpec && this._delegateSpec.onHandleError) {
      return this._delegateSpec.onHandleError(parentZoneDelegate, currentZone, targetZone, error);
    } else {
      return parentZoneDelegate.handleError(targetZone, error);
    }
  }
  onScheduleTask(parentZoneDelegate, currentZone, targetZone, task) {
    if (task.type !== "eventTask") {
      this.tasks.push(task);
    }
    if (this._delegateSpec && this._delegateSpec.onScheduleTask) {
      return this._delegateSpec.onScheduleTask(parentZoneDelegate, currentZone, targetZone, task);
    } else {
      return parentZoneDelegate.scheduleTask(targetZone, task);
    }
  }
  onInvokeTask(parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs) {
    if (task.type !== "eventTask") {
      this.removeFromTasks(task);
    }
    this.tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone);
    if (this._delegateSpec && this._delegateSpec.onInvokeTask) {
      return this._delegateSpec.onInvokeTask(parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs);
    } else {
      return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
    }
  }
  onCancelTask(parentZoneDelegate, currentZone, targetZone, task) {
    if (task.type !== "eventTask") {
      this.removeFromTasks(task);
    }
    this.tryTriggerHasTask(parentZoneDelegate, currentZone, targetZone);
    if (this._delegateSpec && this._delegateSpec.onCancelTask) {
      return this._delegateSpec.onCancelTask(parentZoneDelegate, currentZone, targetZone, task);
    } else {
      return parentZoneDelegate.cancelTask(targetZone, task);
    }
  }
  onHasTask(delegate, current, target, hasTaskState) {
    this.lastTaskState = hasTaskState;
    if (this._delegateSpec && this._delegateSpec.onHasTask) {
      this._delegateSpec.onHasTask(delegate, current, target, hasTaskState);
    } else {
      delegate.hasTask(target, hasTaskState);
    }
  }
};
function patchProxyZoneSpec(Zone2) {
  Zone2["ProxyZoneSpec"] = ProxyZoneSpec;
}
function patchSyncTest(Zone2) {
  class SyncTestZoneSpec {
    runZone = Zone2.current;
    constructor(namePrefix) {
      this.name = "syncTestZone for " + namePrefix;
    }
    // ZoneSpec implementation below.
    name;
    onScheduleTask(delegate, current, target, task) {
      switch (task.type) {
        case "microTask":
        case "macroTask":
          throw new Error(`Cannot call ${task.source} from within a sync test (${this.name}).`);
        case "eventTask":
          task = delegate.scheduleTask(target, task);
          break;
      }
      return task;
    }
  }
  Zone2["SyncTestZoneSpec"] = SyncTestZoneSpec;
}
function patchPromiseTesting(Zone2) {
  Zone2.__load_patch("promisefortest", (global2, Zone3, api) => {
    const symbolState = api.symbol("state");
    const UNRESOLVED = null;
    const symbolParentUnresolved = api.symbol("parentUnresolved");
    Promise[api.symbol("patchPromiseForTest")] = function patchPromiseForTest() {
      let oriThen = Promise[Zone3.__symbol__("ZonePromiseThen")];
      if (oriThen) {
        return;
      }
      oriThen = Promise[Zone3.__symbol__("ZonePromiseThen")] = Promise.prototype.then;
      Promise.prototype.then = function() {
        const chained = oriThen.apply(this, arguments);
        if (this[symbolState] === UNRESOLVED) {
          const asyncTestZoneSpec = Zone3.current.get("AsyncTestZoneSpec");
          if (asyncTestZoneSpec) {
            asyncTestZoneSpec.unresolvedChainedPromiseCount++;
            chained[symbolParentUnresolved] = true;
          }
        }
        return chained;
      };
    };
    Promise[api.symbol("unPatchPromiseForTest")] = function unpatchPromiseForTest() {
      const oriThen = Promise[Zone3.__symbol__("ZonePromiseThen")];
      if (oriThen) {
        Promise.prototype.then = oriThen;
        Promise[Zone3.__symbol__("ZonePromiseThen")] = void 0;
      }
    };
  });
}
function rollupTesting(Zone2) {
  patchLongStackTrace(Zone2);
  patchProxyZoneSpec(Zone2);
  patchSyncTest(Zone2);
  patchJasmine(Zone2);
  patchJest(Zone2);
  patchMocha(Zone2);
  patchAsyncTest(Zone2);
  patchFakeAsyncTest(Zone2);
  patchPromiseTesting(Zone2);
}
rollupTesting(Zone);
/*! Bundled license information:

zone.js/fesm2015/zone-testing.js:
  (**
   * @license Angular v<unknown>
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=jasmine-cleanup-1.js.map
