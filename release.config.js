// const serviceName = process.env.SERVICE_NAME
const distZipPath = process.env.DIST_TAR_PATH

class SemanticReleaseError extends Error {
  constructor (message, code, details) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = 'SemanticReleaseError'
    this.details = details
    this.code = code
    this.semanticRelease = true
  }
}

module.exports = {
  "plugins": [
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/git"
  ],
  verifyConditions: [
    () => {
      if (!process.env.GH_TOKEN) {
        throw new SemanticReleaseError(
          'No GH_TOKEN specified',
          'ENOGH_TOKEN',
          'Please make sure to include github token in `GH_TOKEN` environment variable on your CI environment. The token must be able to create releases')
      }
    },
    '@semantic-release/github',
  ],
  prepare: [

  ],
  publish: [
    ['@semantic-release/github',
      {
        'assets': [
          { 'path': distZipPath, 'label': 'Distribution' },
        ],
      },
    ],
    {
      path: "@semantic-release/exec",
      cmd: `tar -xzvf ${distZipPath}`
    },
    [
      "@qiwi/semantic-release-gh-pages-plugin",
      {
        "src": "dist",
        "msg": "updated",
        "branch": "master"
      }
    ]
  ],
}
