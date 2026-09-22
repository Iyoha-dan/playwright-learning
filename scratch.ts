// let browserName: string = "chromium";
// let testCount: number = 6;
// let didPass: boolean = true;
// let duration: number = 6;

//console.log(`Running tests on ${duration}...`);

// let tests: string[] = ["testLogin", "testLogout", "testCreateUser", "testDeleteUser", "testUpdateUser", "testGetUser"];

// let testResults: boolean[] = [true, false];


// function formatTestResult(testName: string, passed: boolean): string {
//   return passed ? `${testName} passed` : `${testName} failed`;
// }

// for (let i = 0; i < tests.length; i++) {
//   console.log(formatTestResult(tests[i], testResults[i]));
// }

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runTest(): Promise<void> {
  // your three lines
  console.log("Starting test...");
  await sleep(2000);
  console.log("Test completed");
}

runTest();