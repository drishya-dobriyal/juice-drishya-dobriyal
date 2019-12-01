const assert = require("assert");
const operation = require("../src/operation.js");
const performOperation = operation.performOperation;
const saveData = operation.saveData;
const query = operation.query;
const findOperation = operation.findOperation;

describe("query", function() {
	it("should give the empty record if  empId given is not present", function() {
		allTransaction = [
			{
				empId: "1",
				beverage: "orange",
				quantity: "1",
				date: "2019-11-24T03:27:09.382Z"
			}
		];
		userArgs = ["--query", "empId", "11"];
		actualValue = query(allTransaction, userArgs);
		expectedValue = "Employee ID, Beverage, Quantity, Date \nTotal: 0 Juices";
		assert.deepStrictEqual(actualValue, expectedValue);
	});
	it("should give the empty record if  beverage  given is not present", function() {
		allTransaction = [
			{
				empId: "1",
				beverage: "orange",
				quantity: "1",
				date: "2019-11-24T03:27:09.382Z"
			}
		];
		userArgs = ["--query", "--beverage", "watermelon"];
		actualValue = query(allTransaction, userArgs);
		expectedValue = "Employee ID, Beverage, Quantity, Date \nTotal: 0 Juices";
		assert.deepStrictEqual(actualValue, expectedValue);
	});
	it("should give the empty record if  date given is not present", function() {
		allTransaction = [
			{
				empId: "1",
				beverage: "orange",
				quantity: "1",
				date: "2019-11-24T03:27:09.382Z"
			}
		];
		userArgs = ["--query", "--date", "2018-12-11"];
		actualValue = query(allTransaction, userArgs);
		expectedValue = "Employee ID, Beverage, Quantity, Date \nTotal: 0 Juices";
		assert.deepStrictEqual(actualValue, expectedValue);
	});
	it("should give the record of empId given ", function() {
		allTransaction = [
			{
				empId: "11",
				beverage: "orange",
				quantity: "1",
				date: "2019-11-24T03:27:09.382Z"
			},
			{
				empId: "1",
				beverage: "orange",
				quantity: "1",
				date: "2019-11-24T03:27:09.382Z"
			}
		];
		userArgs = ["--query", "--empId", "11"];
		actualValue = query(allTransaction, userArgs);
		expectedValue =
			"Employee ID, Beverage, Quantity, Date \n11,orange,1,2019-11-24T03:27:09.382Z\nTotal: 1 Juices";
		assert.deepStrictEqual(actualValue, expectedValue);
	});
	it("should give the record of beverage given ", function() {
		allTransaction = [
			{
				empId: "11",
				beverage: "orange",
				quantity: "1",
				date: "2019-11-24T03:27:09.382Z"
			},
			{
				empId: "1",
				beverage: "watermelon",
				quantity: "1",
				date: "2019-11-24T03:27:09.382Z"
			}
		];
		userArgs = ["--query", "--beverage", "orange"];
		actualValue = query(allTransaction, userArgs);
		expectedValue =
			"Employee ID, Beverage, Quantity, Date \n11,orange,1,2019-11-24T03:27:09.382Z\nTotal: 1 Juices";
		assert.deepStrictEqual(actualValue, expectedValue);
	});
	it("should give the record of date given", function() {
		allTransaction = [
			{
				empId: "1",
				beverage: "orange",
				quantity: "1",
				date: "2019-11-24T03:27:09.382Z"
			},
			{
				empId: "11",
				beverage: "watermelon",
				quantity: "1",
				date: "2019-11-23T03:27:09.382Z"
			},
			{
				empId: "11",
				beverage: "watermelon",
				quantity: "1",
				date: "2019-11-20T03:27:09.382Z"
			}
		];
		userArgs = ["--query", "--date", "2019-11-20"];
		actualValue = query(allTransaction, userArgs);
		expectedValue =
			"Employee ID, Beverage, Quantity, Date \n11,watermelon,1,2019-11-20T03:27:09.382Z\nTotal: 1 Juices";
		assert.deepStrictEqual(actualValue, expectedValue);
	});
	it("should give the record of beverage and employeId specified given ", function() {
		allTransaction = [
			{
				empId: "1",
				beverage: "orange",
				quantity: "1",
				date: "2019-11-24T03:27:09.382Z"
			},
			{
				empId: "11",
				beverage: "watermelon",
				quantity: "1",
				date: "2019-11-24T03:27:09.382Z"
			}
		];
		userArgs = ["--query", "--beverage", "orange", "--empId", "1"];
		actualValue = query(allTransaction, userArgs);
		expectedValue =
			"Employee ID, Beverage, Quantity, Date \n1,orange,1,2019-11-24T03:27:09.382Z\nTotal: 1 Juices";
		assert.deepStrictEqual(actualValue, expectedValue);
	});
	it("should give the record of beverage and date specified given ", function() {
		allTransaction = [
			{
				empId: "1",
				beverage: "orange",
				quantity: "1",
				date: "2019-11-23T03:27:09.382Z"
			},
			{
				empId: "11",
				beverage: "watermelon",
				quantity: "1",
				date: "2019-11-24T03:27:09.382Z"
			}
		];
		userArgs = ["--query", "--beverage", "orange", "--date", "2019-11-23"];
		actualValue = query(allTransaction, userArgs);
		expectedValue =
			"Employee ID, Beverage, Quantity, Date \n1,orange,1,2019-11-23T03:27:09.382Z\nTotal: 1 Juices";
		assert.deepStrictEqual(actualValue, expectedValue);
	});
	it("should give the record of empId and date specified given ", function() {
		allTransaction = [
			{
				empId: "1",
				beverage: "orange",
				quantity: "1",
				date: "2019-11-23T03:27:09.382Z"
			},
			{
				empId: "11",
				beverage: "watermelon",
				quantity: "1",
				date: "2019-11-24T03:27:09.382Z"
			}
		];
		userArgs = ["--query", "--empId", "1", "--date", "2019-11-23"];
		actualValue = query(allTransaction, userArgs);
		expectedValue =
			"Employee ID, Beverage, Quantity, Date \n1,orange,1,2019-11-23T03:27:09.382Z\nTotal: 1 Juices";
		assert.deepStrictEqual(actualValue, expectedValue);
	});
	it("should give the record of empId , beverage and date specified given ", function() {
		allTransaction = [
			{
				empId: "1",
				beverage: "orange",
				quantity: "1",
				date: "2019-11-23T03:27:09.382Z"
			},
			{
				empId: "11",
				beverage: "watermelon",
				quantity: "1",
				date: "2019-11-24T03:27:09.382Z"
			}
		];
		userArgs = [
			"--query",
			"--empId",
			"1",
			"--date",
			"2019-11-23",
			"--beverage",
			"orange"
		];
		actualValue = query(allTransaction, userArgs);
		expectedValue =
			"Employee ID, Beverage, Quantity, Date \n1,orange,1,2019-11-23T03:27:09.382Z\nTotal: 1 Juices";
		assert.deepStrictEqual(actualValue, expectedValue);
	});
});

describe("saveTransaction", function() {
	it("should save the new data ", function() {
		const time = new Date();
		const userArg = [
			"--save",
			"empId",
			"1",
			"beverage",
			"orange",
			"quantity",
			"1"
		];
		const writer = function(path, content, encoder) {
			assert.strictEqual(path, "filePath");
			assert.deepStrictEqual(content, "[]");
			assert.strictEqual(encoder, "utf8");
			return;
		};
		const writeTransaction = function(updatedTransaction, dataProvided) {
			assert.deepStrictEqual(dataProvided, {
				time: dataProvided.time,
				encoder: "utf8",
				filePath: "filePath",
				writeTransactionsRef: writeTransaction,
				organizeInputRef: organizeInput
			});
			assert.deepStrictEqual(updatedTransaction, [
				{
					empId: "1",
					beverage: "orange",
					quantity: "1",
					date: time
				}
			]);
			return writer(dataProvided.filePath, "[]", dataProvided.encoder);
		};
		const organizeInput = function(userArg, time) {
			assert.deepStrictEqual(userArg, [
				"--save",
				"empId",
				"1",
				"beverage",
				"orange",
				"quantity",
				"1"
			]);
			return { empId: "1", beverage: "orange", quantity: "1", date: time };
		};

		const dataProvided = {
			time: new Date(),
			encoder: "utf8",
			filePath: "filePath",
			writeTransactionsRef: writeTransaction,
			organizeInputRef: organizeInput
		};

		const actualValue = saveData([], userArg, dataProvided);
		const expectedValue = `Employee ID, Beverage, Quantity, Date \n1,orange,1,${time.toJSON()}`;
		assert.deepStrictEqual(actualValue, expectedValue);
	});
});

describe("performOperation", function() {
	it("should  save the data of given employee", function() {
		const timeForTEst = "22";
		const saveData = function(allTransaction, userArg, dataProvided) {
			assert.deepStrictEqual(allTransaction, []);
			assert.deepStrictEqual(userArg, [
				"--save",
				"empId",
				"11",
				"beverage",
				"orange",
				"quantity",
				"1"
			]);
			assert.deepStrictEqual(dataProvided, {
				time: timeForTEst,
				readTransactionsRef: readTransactions,
				findOperationsRef: findOperation
			});
			return "";
		};
		const findOperation = function(operationName) {
			assert.strictEqual(operationName, "--save");
			return saveData;
		};
		const readTransactions = function(dataProvided) {
			return [];
		};

		const dataProvided = {
			time: timeForTEst,
			readTransactionsRef: readTransactions,
			findOperationsRef: findOperation
		};
		const userArg = [
			"--save",
			"empId",
			"11",
			"beverage",
			"orange",
			"quantity",
			"1"
		];
		const actualValue = performOperation(userArg, dataProvided);
		const expectedValue = "";
		assert.deepStrictEqual(actualValue, expectedValue);
	});
});

describe("FindOperation", function() {
	it("should return the save operation reference address", function() {
		assert.strictEqual(findOperation("--save"), saveData);
	});
	it("should return the query operation reference address", function() {
		assert.strictEqual(findOperation("--query"), query);
	});
});
