module.exports = {
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./src/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
