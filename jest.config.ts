export default {
	coverageProvider: "v8",
	preset: "ts-jest",
	testMatch: ["**/__tests__/integration/**/*.[jt]s?(x)"],
	transform: {
		".+\\.ts$": "ts-jest",
	},
	moduleNameMapper: {
		"@/(.*)": "<rootDir>/src/$1",
	},
};

