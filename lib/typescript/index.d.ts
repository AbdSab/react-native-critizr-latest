import { EmitterSubscription } from 'react-native';
declare enum FeedbackModes {
    START_WITH_FEEDBACK = "feedback",
    START_WITH_QUIZ = "quiz",
    ONLY_QUIZ = "quizonly"
}
declare enum EventListenerTypes {
    EVENT_RATING_RESULT = "EVENT_RATING_RESULT",
    EVENT_FEEDBACK_SENT = "EVENT_FEEDBACK_SENT"
}
interface InitParams {
    apiKey: String;
    languageCode?: String;
}
interface User {
    firstname: String;
    lastname: String;
    email: String;
    phone: String;
    crmId: String;
}
interface FeedbackParams {
    mode?: FeedbackModes;
    placeId?: String | null;
    closable?: boolean;
    tag?: string;
}
declare const _default: {
    EVENTS: {
        RATING_RESULT: any;
        FEEDBACK_SENT: any;
    };
    FEEDBACK_MODES: {
        START_WITH_FEEDBACK: any;
        START_WITH_QUIZ: any;
        ONLY_QUIZ: any;
    };
    getLanguage: () => Promise<String>;
    setLanguage: (languageCode: String) => void;
    init: (params: InitParams) => void;
    setUser: (user: User) => void;
    openFeedbackDisplay: (params?: FeedbackParams | undefined) => void;
    openStoreDisplay: (placeId: String) => void;
    requestPlaceRating: (placeId: String) => void;
    addEventListener: (type: EventListenerTypes, listener: (...args: any[]) => any) => EmitterSubscription;
};
export default _default;
