const config = {};
const port = 3000;
const protocol = (process.env.ENV === 'production' && process.env.HTTPS) ? 'https' : 'http';

config.cookieAge = 7 * 86400000; // 7 days

config.mongodb = {
  uri: process.env.MONGO_URI || 'localhost/femergy',
  port: process.env.MONGO_PORT || '27017',
  options: {
    user: process.env.MONGO_USER || '',
    pass: process.env.MONGO_PASS || '',
  },
};

config.isProd = process.env.ENV === 'production' || process.env.NODE_ENV === 'production';

config.port = port;
config.host = config.isProd ? (process.env.HOST || '') : `localhost:${port}`;

config.AWS = {
  S3: {
    key: process.env.AWS_KEY || '',
    secret: process.env.AWS_SECRET || '',
    bucket: process.env.AWS_BUCKET || 'femergyfilestorage',
    region: 'eu-west-1',
    url: `https://${process.env.AWS_BUCKET || 'femergyfilestorage'}.s3.amazonaws.com`,
    videoUrl: 'https://d1bl7k5rbttmop.cloudfront.net',
  },
};

config.auth = {
  secret: '60tuToWRHuJxDAMZYy7VDIJfhCkkBRHgch8TbtQRBt5TtsT6DFGyqp6kmSe9i2QOgAB9vqIwWgRze7qJ',
  tokenAge: config.isProd ? '1d' : '6d',
};

config.social = {
  googleClientId: process.env.GOOGLE_CLIENT_ID || '750029795584-mk96jmqheu2rudhdua6sa8nv7trt30r8.apps.googleusercontent.com',
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || 'SHcjkX26ESvuPpNyh6d_yr37',
  googleClientCallback: `${protocol}://${config.host}/api/${'auth/login/google/callback'}`,

  twitterClientId: process.env.TWITTER_CLIENT_ID || '3EsgvOEAuYKffMRbE5ufZstZn',
  twitterClientIdLoc: '',
  twitterClientSecret: process.env.TWITTER_CLIENT_SECRET || 'fVnXv2trSNe01jheJLI0oEYSjMRnrzSmQTwLBsONdSoAPkwpXO',
  twitterClientSecretLoc: '',
  twitterClientCallback: `${protocol}://${config.host}/api/${'auth/login/twitter/callback'}`,

  facebookClientId: process.env.FACEBOOK_CLIENT_ID || '2067502763473069',
  facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET || '6984ebdab5cb18198a6137179adbe89a',
  facebookClientCallback: `${protocol}://${config.host}/api/${'auth/login/facebook/callback'}`,

  linkedinClientId: process.env.LINKEDIN_CLIENT_ID || '781n63rxalknxl',
  linkedinClientSecret: process.env.LINKEDIN_CLIENT_SECRET || 'DHOAXtPsxx9SuNzt',
  linkedinClientCallback: `${protocol}://${config.host}/api/${'auth/login/linkedin/callback'}`,
};

config.administration = {
  email: 'itsiva@mentalstack.com',
};

config.mailer = {
  transport: {
    service: 'SendGrid',
    auth: {
      user: 'evilHoms',
      pass: 'Garik1905',
    },
  },
  defaultFromAddress: 'Femergy <info@femergy.com>',
};

module.exports = config;
