"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

const {
  Critizr
} = _reactNative.NativeModules;
const emitter = new _reactNative.NativeEventEmitter(Critizr);
var FeedbackModes;

(function (FeedbackModes) {
  FeedbackModes["START_WITH_FEEDBACK"] = "feedback";
  FeedbackModes["START_WITH_QUIZ"] = "quiz";
  FeedbackModes["ONLY_QUIZ"] = "quizonly";
})(FeedbackModes || (FeedbackModes = {}));

var EventListenerTypes;

(function (EventListenerTypes) {
  EventListenerTypes["EVENT_RATING_RESULT"] = "EVENT_RATING_RESULT";
  EventListenerTypes["EVENT_FEEDBACK_SENT"] = "EVENT_FEEDBACK_SENT";
})(EventListenerTypes || (EventListenerTypes = {}));

var _default = {
  EVENTS: {
    RATING_RESULT: Critizr.EVENT_RATING_RESULT,
    FEEDBACK_SENT: Critizr.EVENT_FEEDBACK_SENT
  },
  FEEDBACK_MODES: {
    START_WITH_FEEDBACK: Critizr.FEEDBACK_MODE_START_WITH_FEEDBACK,
    START_WITH_QUIZ: Critizr.FEEDBACK_MODE_START_WITH_QUIZ,
    ONLY_QUIZ: Critizr.FEEDBACK_MODE_ONLY_QUIZ
  },
  getLanguage: () => {
    return Critizr.getLanguage();
  },
  setLanguage: languageCode => {
    Critizr.setLanguage(languageCode);
  },
  init: params => {
    const languageCode = params !== null && params !== void 0 && params.languageCode ? params.languageCode : null;
    Critizr.init(params.apiKey, languageCode);
  },
  setUser: user => {
    Critizr.setUser(user.firstname, user.lastname, user.email, user.phone, user.crmId);
  },
  openFeedbackDisplay: params => {
    const mode = params !== null && params !== void 0 && params.mode ? params.mode : FeedbackModes.START_WITH_FEEDBACK;
    const placeId = params !== null && params !== void 0 && params.placeId ? params.placeId : null;
    const closable = params !== null && params !== void 0 && params.hasOwnProperty('closable') ? params.closable : true;
    const tag = params !== null && params !== void 0 && params.hasOwnProperty('tag') ? params.tag : null;
    Critizr.openFeedbackDisplay(mode, closable, placeId, tag);
  },
  openStoreDisplay: placeId => {
    Critizr.openStoreDisplay(placeId);
  },
  requestPlaceRating: placeId => {
    Critizr.requestPlaceRating(placeId);
  },
  addEventListener: (type, listener) => {
    return emitter.addListener(type, listener);
  }
};
exports.default = _default;
//# sourceMappingURL=index.js.map