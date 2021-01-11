import * as Mustache from "mustache";

import { ContentPartial } from "./types";

export const renderContentTemplate = ({
  template,
  partials,
}: {
  template: string;
  partials: ContentPartial;
}) => {
  const output = Mustache.render(template, partials);
  return output;
};

export { ContentPartial };
