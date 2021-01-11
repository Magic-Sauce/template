import { EventPartial, ContentPartial } from "./types";
export declare const renderEventTemplate: ({ template, partials, }: {
    template: string;
    partials: EventPartial;
}) => string;
export declare const renderContentTemplate: ({ template, partials, }: {
    template: string;
    partials: ContentPartial;
}) => string;
export { EventPartial, ContentPartial };
