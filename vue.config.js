module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
      ? '/apps/q-viewer/'
      // ? '/testing-questionnaire-viewer-live/'
      : '/'
}