# jest-bug

Repo to illustrate https://github.com/facebook/jest/issues/6063, uses code from https://github.com/vladgolubev/jest-mongodb.

Running `yarn test` will run Jest tests in parallel, and fail:

```sh
▶ yarn jest
yarn run v1.5.1
$ /Users/ojongerius/repos/jest-bug/node_modules/.bin/jest

 RUNS  ./mongo-insert.test.js
 FAIL  ./mongo-aggregate.test.js
  ● Test suite failed to run

    TypeError: Cannot read property 'getConnectionString' of undefined

       9 |     console.log('Setup MongoDB Test Environment');
      10 |
    > 11 |     this.global.__MONGO_URI__ = await global.__MONGOD__.getConnectionString();
      12 |     this.global.__MONGO_DB_NAME__ = global.__MONGO_DB_NAME__;
      13 |
      14 |     await super.setup();

      at MongoEnvironment.setup (mongo-environment.js:11:57)

 FAIL  ./mongo-insert.test.js
  ● Test suite failed to run

    TypeError: Cannot read property 'getConnectionString' of undefined

       9 |     console.log('Setup MongoDB Test Environment');
      10 |
    > 11 |     this.global.__MONGO_URI__ = await global.__MONGOD__.getConnectionString();
      12 |     this.global.__MONGO_DB_NAME__ = global.__MONGO_DB_NAME__;
      13 |
      14 |     await super.setup();

      at MongoEnvironment.setup (mongo-environment.js:11:57)

Test Suites: 2 failed, 2 total
Tests:       0 total
Snapshots:   0 total
Time:        0.454s
Ran all test suites.
Teardown mongod
error An unexpected error occurred: "Command failed.
Exit code: 1
Command: sh
Arguments: -c /Users/ojongerius/repos/jest-bug/node_modules/.bin/jest
Directory: /Users/ojongerius/repos/jest-bug
Output:
".
info If you think this is a bug, please open a bug report with the information provided in "/Users/ojongerius/repos/jest-bug/yarn-error.log".
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Running in band will succeed:

```sh
▶ yarn test-inband
yarn run v1.5.1
$ jest --runInBand --no-cache
Setup MongoDB Test Environment
 PASS  ./mongo-insert.test.js
Teardown MongoDB Test Environment
Setup MongoDB Test Environment
 PASS  ./mongo-aggregate.test.js

Test Suites: 2 passed, 2 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.168s
Ran all test suites.
Teardown mongod
Teardown MongoDB Test Environment
✨  Done in 3.10s.
```
