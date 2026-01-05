# Express Function Server with Testing

A simple Express server with a sum function and automated Jest testing.

## Project Structure

```
automation-test/
├── server.js          # Express server with endpoints
├── sum.js             # Sum function module
├── sum.test.js        # Jest tests for sum function
├── package.json       # Project dependencies and scripts
└── jest.config.js     # Jest configuration
```

## Setup Process

### 1. Installation

Navigate to the `automation-test` folder and install dependencies:

```bash
cd automation-test
npm install
```

This will install:
- `express` - Web server framework
- `jest` - Testing framework

### 2. Understanding the Files

**sum.js** - Contains a simple sum function:
```javascript
const sum = (a, b) => {
    return a + b;
}
module.exports = sum;
```

**sum.test.js** - Contains Jest tests for the sum function:
- Tests that 2 + 2 equals 4
- Tests that -5 + -5 equals -10

**server.js** - Express server with two endpoints:
- `GET /hello` - Returns "hello is working"
- `GET /getsum/:a/:b` - Returns the sum of two numbers

**jest.config.js** - Jest configuration for Node environment

**package.json** - Contains two scripts:
- `npm start` - Runs the server
- `npm test` - Runs Jest tests

## How to Use

### Running Tests

To run the automated tests:

```bash
npm test
```

Expected output:
```
PASS  ./sum.test.js
  sum function
    ✓ add 2 + 2 to equal 4
    ✓ adds -5 + -5 to equal -10

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
```

### Running the Server

To start the Express server:

```bash
npm start
```

Server will run on `http://localhost:3000`

### Testing the Endpoints

**1. Test the hello endpoint:**

```bash
curl http://localhost:3000/hello
```

Response: `hello is working`

**2. Test the sum endpoint:**

```bash
curl http://localhost:3000/getsum/5/10
```

Response:
```json
{
  "ans": 15
}
```

**3. Using a browser:**

Open your browser and visit:
- `http://localhost:3000/hello`
- `http://localhost:3000/getsum/25/75` (returns 100)

## Development Workflow

1. **Write your function** in a separate file (like `sum.js`)
2. **Export the function** using `module.exports`
3. **Write tests** in a `.test.js` file using Jest
4. **Run tests** with `npm test` to verify functionality
5. **Import and use** the function in your server
6. **Start the server** with `npm start`
7. **Test the API** using curl, browser, or Postman

## Adding More Tests

To add more tests, edit `sum.test.js`:

```javascript
test("adds 100 + 200 to equal 300", () => {
    expect(sum(100, 200)).toBe(300);
});
```

Then run `npm test` again to verify.

## Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm test` | Run Jest tests |
| `npm start` | Start the Express server |
| `node server.js` | Alternative way to start server |
