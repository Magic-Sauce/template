export type ContentPartial = {
  CONTENT_URL: string;
  CONTENT_TITLE: string;
  CONTENT_BODY?: string | null;
  CONTENT_PAGE_URL: string | null;
  CONTENT_REFERRAL_URL: string | null;
  CONTENT_IMAGE: string | null;
  CONTENT_SUBTITLE: string | null;
  CONTENT_START_DATE?: Date;
  CONTENT_TRIGGER_DATE?: Date;
  CONTENT_END_DATE?: Date;
  CONTENT_PASSWORD?: string;
  USER_FIRST_NAME: string | null;
  USER_LAST_NAME: string | null;
  USER_FULL_NAME: string | null;
  USER_REFERRAL_URL: string | null;
};
