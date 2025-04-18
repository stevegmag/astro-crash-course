export default {
  local: {
    base: '/',
    url: 'http://localhost:4321'
  },
  github: {
    base: '/astro-crash-course',
    url: 'https://stevegmag.github.io'
  },
  dreamhost: {
    base: '/',
    url: 'https://astro-test.webonwater.com',
    ssh: {
      host: 'webonwater.com',
      user: process.env.DREAMHOST_SSH_USER,
      path: '/home/stevegmag/astro-test.webonwater.com'
    }
  }
};
