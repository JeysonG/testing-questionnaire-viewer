module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
      // ? '/static/apps/q-viewer/'
      ? '/testing-questionnaire-viewer-live/'
      : '/'
}