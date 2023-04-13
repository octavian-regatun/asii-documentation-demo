declare global {
  type DocusaurusConfig = {
    customFields: {
      env: {
        FIREBASE_API_KEY: string;
        FIREBASE_AUTH_DOMAIN: string;
        FIREBASE_PROJECT_ID: string;
        FIREBASE_STORAGE_BUCKET: string;
      };
    };
  };
}
